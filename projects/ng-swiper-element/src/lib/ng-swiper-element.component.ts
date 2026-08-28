import { Component, computed, contentChild, contentChildren, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, input, Signal, TemplateRef, viewChild, ViewEncapsulation } from '@angular/core';
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
          @let slides = slidesToIterate || [];
          @for(slide of slides; track $index) {
            @let component = slidesComponentToIterate.at($index);
            @let autoplayDelay = component?.autoplayDelay() || undefined;
            @if(component?.lazy()) {
              <swiper-slide lazy  [attr.data-swiper-autoplay]="autoplayDelay" [attr.data-history]="component?.dataHistory()" [attr.data-hash]="component?.dataHash()" >   
                <ng-container *ngTemplateOutlet="slide"/>
              </swiper-slide>
            } @else {
              <swiper-slide  [attr.data-swiper-autoplay]="autoplayDelay" [attr.data-history]="component?.dataHistory()" [attr.data-hash]="component?.dataHash()" >
                <ng-container *ngTemplateOutlet="slide"/>
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
  get _swiperOptionsInternal() {
    const _swiperOptionsInternal: any = {};
    const keys = Object.keys(this);
    for (const key of keys) {
      const signal = (this as any)[key];
      if (signal.toString().includes('[Input Signal')) {
        const value = signal();
        if (value !== undefined) {
          _swiperOptionsInternal[key] = value;
        }
      }
    }
    return {
      ...(this.swiperOptions() || {}), ..._swiperOptionsInternal,
      on: {
        init: function () {
          console.log('swiper initialized');
        },
      },
      init: false,
    };
  }

  /**
   * @ignore
   */
  ngAfterViewInit() {
    console.log(this.slideCompContentChildren());
    console.log(this.slidesTemplateContentChildren());
    console.log(this.slideButtonChildren());
    console.log(this.swiperButtonContentChildren());
    this.initialize();
    this.reInitialize();
    this.initializeListeners();
  }

  /**
   * @ignore
   */
  ngOnChanges() {
    console.log('ngOnChanges called');
    this.initialize();
    this.reInitialize();
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
    const swiperParams = this._swiperOptionsInternal;
    const swiperContainer = this.swiperContainer();
    const swiperEl = swiperContainer?.nativeElement;
    if (swiperEl) {
      // now we need to assign all parameters to Swiper element
      Object.assign(swiperEl, swiperParams);
      // and now initialize it
      swiperEl.onAny = this.onAny?.bind(this);
      setTimeout(() => {
        swiperEl.initialize();
      })
    }
  }

  get swiperInstance() {
    return this.swiperContainer()?.nativeElement?.swiper;
  }

  /**
 * @ignore
 */
  initializeListeners() {
    console.log('Initializing listeners');
    const swiperContainer = this.swiperContainer();
    const swiperEl = swiperContainer?.nativeElement;
    swiperEvents.forEach((eventName: string) => {
      const eventNameFinal = `swiper${eventName.toLowerCase()}`
      const output = (this as any)[eventName];
      if (output?.['listeners']?.length) {
        swiperEl.addEventListener(eventNameFinal, (...args: any) => {
          if (output) {
            output.emit({
              event: args?.[0] || undefined,
              swiperArgs: (args?.[0]?.detail || []),
            });
          }
        }, { signal: this.abortController.signal });
      }
    })
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
    this.abortController?.abort();
  }
}
