import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fn } from '@storybook/test';
import {
  NgSwiperSlideDirective,
  provideSwiper,
  SwiperElementComponent,
  NgSwiperButtonDirective,
} from 'ng-swiper-element';
import { swiperEvents } from '../../lib/ng-swiper-element-events.class';

const args: any = {};

swiperEvents.forEach((eventName: string) => {
  args[eventName] = fn();
});

export const historyNavigationArgTypes = {
  key: {
    control: 'text',
    description: 'Url key for slides (e.g. "slides"). Will produce "slides/slide1" in browser history.',
  },
  replaceState: {
    control: 'boolean',
    description: 'Designed to replace current state in browser history instead of adding a new state.',
  },
  root: {
    control: 'text',
    description: 'Url root path for history navigation.',
  },
} as any;

export const historyNavigationSharedMeta: Meta = {
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SwiperElementComponent,
        NgSwiperSlideDirective,
        NgSwiperButtonDirective,
        FormsModule,
      ],
    }),
    applicationConfig({
      providers: [provideSwiper()],
    }),
    componentWrapperDecorator((story) => `
      <div style="padding: 2em;">
        <div style="margin-bottom: 20px; padding: 16px; background: transparent; border-radius: 4px;">
          <h2 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: white">{{ storyName }}</h2>
          <p style="margin: 0; font-size: 14px; color: white;">{{ description }}</p>
        </div>
        ${story}
      </div>
    `),
  ],
  argTypes: historyNavigationArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;

    const slidePaths = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];

    // Build history navigation config object from args
    const historyConfig: any = {};
    Object.keys(historyNavigationArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        historyConfig[key] = args[key];
      }
    });

    return {
      template: `
        <style>
          .btn-group {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }
          .btn-ng {
            padding: 8px 16px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
          }
          ::ng-deep ng-swiper-element {
            height: 250px;
          }
          ::ng-deep .swiper-slide {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #2c3e50;
            border-radius: 8px;
            color: white;
            font-size: 20px;
            font-weight: bold;
          }
          .url-hint {
            color: #aaa;
            font-size: 13px;
            margin-bottom: 12px;
          }
        </style>

        @if(propAndMethodsDemo) {
          <h3>History Navigation Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="checkHistoryStatus(swiperElement)">Check History Status</button>
            <button class="btn-ng" (click)="navigateViaHistory(swiperElement, 2)">Go to Slide #3</button>
            <button class="btn-ng" (click)="navigateViaHistory(swiperElement, 4)">Go to Slide #5</button>
          </div>
          <br/>
        }

        <p class="url-hint">💡 Notice browser address bar changing path using HTML5 History API pushState (e.g., <code>{{ historyConfig.key || 'slides' }}/slide1</code>).</p>

        <ng-swiper-element 
            [history]="historyConfig"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement"
            ${
              eventsShowcase
                ? `(historyChange)="historyChange($event)" (historySet)="historySet($event)"`
                : ''
            }>  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide [attr.data-history]="slidePaths[$index]">
                  <div class="swiper-slide">
                    <div>Slide {{slide}}</div>
                    <small style="font-size: 13px; opacity: 0.8; margin-top: 6px;">Path: {{historyConfig.key || 'slides'}}//{{slidePaths[$index]}}</small>
                  </div>
              </ng-template>
            }
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </ng-swiper-element>
      `,
      props: {
        storyName,
        description,
        historyConfig,
        slidePaths,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),

        // Methods
        checkHistoryStatus: (swiperElement: any) => {
          const isInitialized = swiperElement.swiperInstance?.history?.initialized;
          alert(`swiper.history.initialized = ${isInitialized}`);
          console.log('History Navigation Initialized:', isInitialized);
        },
        navigateViaHistory: (swiperElement: any, index: number) => {
          swiperElement.swiperInstance?.slideTo(index);
        },

        // Events
        historyChange: (eventData: unknown) => {
          console.log('Template intercepted event (historyChange):', eventData);
        },
        historySet: (eventData: unknown) => {
          console.log('Template intercepted event (historySet):', eventData);
        },
      },
    };
  },
};