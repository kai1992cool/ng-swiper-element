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

export const hashNavigationArgTypes = {
  enabled: {
    control: 'boolean',
    description: 'Enables Hash Navigation functionality.',
  },
  replaceState: {
    control: 'boolean',
    description: 'Designed to replace current state in browser history instead of adding a new state.',
  },
  watchState: {
    control: 'boolean',
    description: 'Set to true to enable watching browser URL hash changes.',
  },
} as any;

export const hashNavigationSharedMeta: Meta = {
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
  argTypes: hashNavigationArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;

    // Custom hash titles for slides
    const slideHashes = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];

    // Build hash navigation config object from args
    const hashNavigationConfig: any = {};
    Object.keys(hashNavigationArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        hashNavigationConfig[key] = args[key];
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

        <p class="url-hint">💡 Observe your browser URL bar updating hash anchors (e.g., <code>#slide1</code>, <code>#slide2</code>) as you switch slides.</p>

        <ng-swiper-element 
            [hashNavigation]="hashNavigationConfig"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement"
            ${
              eventsShowcase
                ? `(hashChange)="hashChange($event)" (hashSet)="hashSet($event)"`
                : ''
            }>  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide [dataHash]="slideHashes[$index]">
                  <div class="swiper-slide">
                    <div>Slide {{slide}}</div>
                    <small style="font-size: 13px; opacity: 0.8; margin-top: 6px;">URL Hash: #{{slideHashes[$index]}}</small>
                  </div>
              </ng-template>
            }
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </ng-swiper-element>
      `,
      props: {
        storyName,
        eventsShowcase,
        description,
        hashNavigationConfig,
        slideHashes,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
        navigateToHash: (swiperElement: any, hash: string) => {
          if (swiperElement.swiperInstance) {
            window.location.hash = hash;
          }
        },

        // Events
        hashChange: (eventData: unknown) => {
          console.log('Template intercepted event (hashChange):', eventData);
          alert('Template intercepted event (hashChange): ' + eventData);
        },
        hashSet: (eventData: unknown) => {
          console.log('Template intercepted event (hashSet):', eventData);
          alert('Template intercepted event (hashSet): ' + eventData);
        },
      },
    };
  },
};
