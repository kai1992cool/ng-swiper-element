import { Component, ContentChildren, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { SwiperContainerEvents, swiperEvents } from './ng-swiper-element-events.class';
import { Swiper, SwiperEvents, SwiperOptions } from 'swiper/types';
import { CommonModule } from '@angular/common';
import { NgSwiperSlideDirective } from './directive/ng-swiper-slide.directive';
import { NgSwiperButtonDirective } from './directive/ng-swiper-button.directive';

export type OnInterface = {
  [event in keyof SwiperEvents]?: SwiperEvents[event];
}
export type EffectType = 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards' | string | undefined;
export type OnAnyType = (handler: (eventName: string, ...args: any[]) => void) => void;
export type BreakPointsType = {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
};
@Component({
  selector: 'ng-swiper-element',
  imports: [CommonModule],
  template: `
   <div  style="position: relative !important;">
    <swiper-container
      #swiperContainer 
      [class]="swiperClasses"
      init="false"
    >
      <ng-container *ngIf="slideCompContentChildren as slidesComponentToIterate">
        <ng-container *ngIf="slidesTemplateContentChildren as slidesToIterate">
          <ng-container *ngFor="let slide of slidesToIterate; let i = index">
            <swiper-slide
              *ngIf="slidesComponentToIterate.get(i)?.lazy; else regularSlide"
              lazy
              [attr.data-swiper-autoplay]="slidesComponentToIterate.get(i)?.autoplayDelay || undefined"
              [attr.data-history]="slidesComponentToIterate.get(i)?.dataHistory"
              [attr.data-hash]="slidesComponentToIterate.get(i)?.dataHash"
            >
              <ng-container *ngTemplateOutlet="slide" />
            </swiper-slide>
            <ng-template #regularSlide>
              <swiper-slide
                [attr.data-swiper-autoplay]="slidesComponentToIterate.get(i)?.autoplayDelay || undefined"
                [attr.data-history]="slidesComponentToIterate.get(i)?.dataHistory"
                [attr.data-hash]="slidesComponentToIterate.get(i)?.dataHash"
              >
                <ng-container *ngTemplateOutlet="slide" />
              </swiper-slide>
            </ng-template>
          </ng-container>
        </ng-container>
      </ng-container>
    </swiper-container>
    <ng-content/>
    </div>
  `,
  exportAs: 'ngSwiperElement',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class SwiperElementComponent extends SwiperContainerEvents {
  @Input() swiperClasses: string | undefined;

  /**
   * @ignore
   */
  @ContentChildren(NgSwiperSlideDirective, {
    read: TemplateRef
  })
  slidesTemplateContentChildren!: QueryList<TemplateRef<unknown>>;
  /**
   * @ignore
   */
  @ContentChildren(NgSwiperButtonDirective, {
    read: TemplateRef
  })
  swiperButtonContentChildren!: QueryList<TemplateRef<unknown>>;
  /**
   * @ignore
   */
  @ContentChildren(NgSwiperSlideDirective)
  slideCompContentChildren!: QueryList<NgSwiperSlideDirective>;
  /**
   * @ignore
   */
  @ContentChildren(NgSwiperButtonDirective)
  slideButtonChildren!: QueryList<NgSwiperButtonDirective>;
  /**
   * @ignore
   */
  abortController = new AbortController();
  /**
   * @ignore
   */
  eventListenerInitialized = false;
  /**
   * @ignore
   */
  @ViewChild('swiperContainer', { read: ElementRef })
  swiperContainer!: ElementRef;

  /**
   * @ignore
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.reInitialize();
  }

  /**
   * @ignore
   */
  ngAfterViewInit() {
    this.initialize();
    this.initializeListeners();
  }

  /**
   * @ignore
   */
  ngOnChanges() {
    if (this.swiperContainer) {
      this.initialize();
    }
  }

  /**
   * @ignore
   */
  reInitialize() {
    const swiperInstance = this.swiperContainer?.nativeElement?.swiper;
    if (swiperInstance) {
      swiperInstance.update();
      swiperInstance.updateAutoHeight();
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
      console.log(swiperInstance);
    }
  }

  /**
 * @ignore
 */
  initialize() {
    const swiperParams = this._swiperOptionsInternal();
    const swiperContainer = this.swiperContainer;
    const swiperEl = swiperContainer?.nativeElement;
    if (swiperEl) {
      Object.assign(swiperEl, swiperParams);
      swiperEl.onAny = this.onAny?.bind(this);

      if (swiperEl.swiper) {
        swiperEl.swiper.update();
        return;
      }

      setTimeout(() => {
        swiperEl.initialize();
      });
    }
  }

  get swiperInstance() {
    return this.swiperContainer?.nativeElement?.swiper;
  }

  /**
 * @ignore
 */
  initializeListeners(): void {
    const swiperEl = this.swiperContainer?.nativeElement;
    if (!swiperEl) return;

    for (const eventName of swiperEvents) {
      const outputName = eventName === 'init' ? 'initEmitter' : eventName === 'autoplay' ? 'autoplayEvent' : eventName;
      const output = (this as any)[outputName];
      if (!output?.observers?.length) continue;

      const domEventName = `swiper${eventName.toLowerCase()}`;

      swiperEl.addEventListener(
        domEventName,
        (event: Event) => {
          const swiperEvent = event as CustomEvent<unknown[]>;

          output.emit({
            event: swiperEvent,
            swiperArgs: swiperEvent.detail ?? [],
          });
        },
        { signal: this.abortController.signal },
      );
    }
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
    this.abortController?.abort();
  }
}
