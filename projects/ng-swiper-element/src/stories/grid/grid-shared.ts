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

export const gridArgTypes = {
  rows: {
    control: 'number',
    description: 'Number of slides rows, for multirow layout.',
  },
  fill: {
    control: { type: 'select' },
    options: ['column', 'row'],
    description: "Can be 'column' or 'row'. Defines how slides should fill rows, by column or by row.",
  },
} as any;

export const gridSharedMeta: Meta = {
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
  argTypes: gridArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 12;
    const isVertical = metadata?.parameters?.isVertical || false;
    const direction = isVertical ? 'vertical' : 'horizontal';
    const showCustomNavButtons = !!metadata?.parameters?.showCustomNavButtons;

    // Build grid config object from args
    const gridConfig: any = {};
    Object.entries(gridArgTypes).forEach(([key]: any) => {
      if (args[key] !== undefined) {
        gridConfig[key] = args[key];
      }
    });

    return {
      template: `
        <style>
          ::ng-deep ng-swiper-element {
            height: 400px;
          }
          ::ng-deep .swiper-slide {
            height: calc((100% - 30px) / 2) !important;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            color: white;
            font-size: 16px;
          }
        </style>
        <ng-swiper-element 
            [grid]="gridConfig"
            [direction]="direction"
            [slidesPerView]="3"
            [spaceBetween]="30"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement">  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div class="swiper-slide">Slide {{slide}}</div>
              </ng-template>
            }
            @if(showElements) {
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            }
        </ng-swiper-element>
      `,
      props: {
        storyName,
        description,
        gridConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        showElements: showCustomNavButtons,
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
        direction,
      },
    };
  },
};