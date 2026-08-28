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
  enabled: {
    control: 'boolean',
    description: 'Set to true to enable history navigation.',
  },
  key: {
    control: 'text',
    description: 'Url key for slides (e.g. "slides"). Will produce "slides/slide1" in browser history.',
  },
  keepQuery: {
    control: 'boolean',
    description: 'When enabled, query parameters will be preserved when changing browser url.',
  },
  replaceState: {
    control: 'boolean',
    description: 'Works in addition to hashnav or history to replace current url state with the new one instead of adding it to history.',
  },
  root: {
    control: 'text',
    description: 'Swiper page root, useful to specify when you use Swiper history mode not on root website page. For example can be https://my-website.com/ or https://my-website.com/subpage/ or /subpage/.',
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

        <p class="url-hint">💡 Notice browser address bar changing path using HTML5 History API pushState (e.g., <code>{{ historyConfig.key || 'slides' }}/slide1</code>).</p>

        <ng-swiper-element 
            [history]="historyConfig"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement">  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide [dataHistory]="slidePaths[$index]">
                  <div class="swiper-slide">
                    <div>Slide {{slide}}</div>
                    <small style="font-size: 13px; opacity: 0.8; margin-top: 6px;">Path: {{ historyConfig.root || '' }}/{{historyConfig.key || 'slides'}}/{{slidePaths[$index]}}</small>
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
      },
    };
  },
};