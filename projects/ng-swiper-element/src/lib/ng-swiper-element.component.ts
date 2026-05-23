import { Component, computed, contentChild, contentChildren, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, Signal, TemplateRef, viewChild } from '@angular/core';
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
    <swiper-container 
      #swiperContainer 
      init="false"
    >
    @if(slideCompContentChildren(); as slidesComponentToIterate) {
      @if(slidesTemplateContentChildren(); as slidesToIterate) {
        @let slides = slidesToIterate || [];
        @for(slide of slides; track $index) {
          @let component = slidesComponentToIterate.at($index);
          @if(component?.lazy()) {
            <swiper-slide lazy>
              <ng-container *ngTemplateOutlet="slide"/>
            </swiper-slide>
          } @else {
            <swiper-slide>
              <ng-container *ngTemplateOutlet="slide"/>
            </swiper-slide>
          }
        }
      }
    }
    <!-- @if(slideButtonChildren(); as buttonComponentToIterate) {
      @if(swiperButtonContentChildren(); as buttonsToIterate) {
        @let buttons = buttonsToIterate || [];
        @for(button of buttons; track $index) {
          @let component = buttonComponentToIterate.at($index);
          @if(component?.next()) {
            <ng-container *ngTemplateOutlet="button"/>
          } @else if(component?.prev()) {
            <ng-container *ngTemplateOutlet="button"/>
          }
        }
      }
    } -->
    <ng-content/>
    </swiper-container>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperElementComponent extends SwiperContainerEvents {
  /**
   * @ignore
   */
  swiperInstance: Signal<Swiper> = computed(() => this.swiperContainer()?.nativeElement?.swiper);

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
      }
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
  }

  /**
   * @ignore
   */
  ngOnChanges() {
    this.initialize();
    this.reInitialize();
  }

  /**
   * @ignore
   */
  reInitialize() {
    const swiperInstance = this.swiperInstance();
    if (swiperInstance) {
      swiperInstance.update();
      swiperInstance.updateAutoHeight();
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
      swiperEl.initialize();
      this.initializeListeners(swiperEl);
    }
  }

  /**
 * @ignore
 */
  initializeListeners(swiperEl: any) {
    swiperEvents.forEach((eventName: string) => {
      const output = (this as any)[eventName];
      if (output?.['listeners']?.length) {
        swiperEl.addEventListener(eventName, (...args: any) => {
          if (output) {
            output.emit(args);
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
