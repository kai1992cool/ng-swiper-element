import { Component, contentChildren, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, input, TemplateRef, viewChild, ViewEncapsulation } from '@angular/core';
import { SwiperContainerEvents, swiperEvents } from './ng-swiper-element-events.class';
import { Swiper, SwiperEvents, SwiperOptions } from 'swiper/types';
import { NgTemplateOutlet } from '@angular/common';
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
  imports: [NgTemplateOutlet],
  template: `
   <div  style="position: relative !important;">
    <swiper-container
      #swiperContainer 
      [class]="swiperClasses()"
      init="false"
    >
      @if(slideCompContentChildren(); as slidesComponentToIterate) {
        @if(slidesTemplateContentChildren(); as slidesToIterate) {
          @for(slide of (slidesToIterate || []); track $index) {
            @if(slidesComponentToIterate.at($index)?.lazy()) {
              <swiper-slide lazy  
              [attr.data-swiper-autoplay]="slidesComponentToIterate.at($index)?.autoplayDelay() || undefined" 
              [attr.data-history]="slidesComponentToIterate.at($index)?.dataHistory()" 
              [attr.data-hash]="slidesComponentToIterate.at($index)?.dataHash()" 
              >   
                <ng-container *ngTemplateOutlet="$any(slide)"/>
              </swiper-slide>
            } @else {
              <swiper-slide  
              [attr.data-swiper-autoplay]="slidesComponentToIterate.at($index)?.autoplayDelay() || undefined" 
              [attr.data-history]="slidesComponentToIterate.at($index)?.dataHistory()" 
              [attr.data-hash]="slidesComponentToIterate.at($index)?.dataHash()" 
              >
                <ng-container *ngTemplateOutlet="$any(slide)"/>
              </swiper-slide>
            }
          }
        }
      }
    </swiper-container>
    <ng-content/>
    </div>
  `,
  exportAs: 'ngSwiperElement',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class SwiperElementComponent extends SwiperContainerEvents {
  swiperClasses = input<string | undefined>(undefined);

  /**
   * @ignore
   */
  slidesTemplateContentChildren = contentChildren(NgSwiperSlideDirective, {
    read: TemplateRef
  });
  /**
   * @ignore
   */
  swiperButtonContentChildren = contentChildren(NgSwiperButtonDirective, {
    read: TemplateRef
  });
  /**
   * @ignore
   */
  slideCompContentChildren = contentChildren(NgSwiperSlideDirective);
  /**
   * @ignore
   */
  slideButtonChildren = contentChildren(NgSwiperButtonDirective);
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
  swiperContainer = viewChild.required('swiperContainer', {
    read: ElementRef,
  });

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
    if (this.swiperContainer()) {
      this.initialize();
    }
  }

  /**
   * @ignore
   */
  reInitialize() {
    const swiperInstance = this.swiperContainer()?.nativeElement?.swiper;
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
    const swiperParams = this._swiperOptionsInternalComputed();
    const swiperContainer = this.swiperContainer();
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
    return this.swiperContainer()?.nativeElement?.swiper;
  }

  /**
 * @ignore
 */
  initializeListeners(): void {
    const swiperEl = this.swiperContainer()?.nativeElement;
    if (!swiperEl) return;

    for (const eventName of swiperEvents) {
      const output = (this as any)[eventName];
      if (!output?.listeners?.length) continue;

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
