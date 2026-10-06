import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fn } from 'storybook/test';
import {
  NgSwiperSlideDirective,
    SwiperElementComponent,
  NgSwiperButtonDirective,
} from 'ng-swiper-element';
import { swiperEvents } from '../../lib/ng-swiper-element-events.class';

const args: any = {};

swiperEvents.forEach((eventName: string) => {
  args[eventName] = fn();
});

export const thumbsArgTypes = {
  swiper: {
    control: 'object',
    description: 'Swiper instance or string with CSS selector of Swiper element to be used as thumbs target.',
  },
  autoScrollOffset: {
    control: 'number',
    description: 'Allows to set on which thumbs active slide from edge it should automatically move scroll thumbs.',
  },
  multipleActiveThumbs: {
    control: 'boolean',
    description: 'When enabled multiple thumbs slides can be highlighted as active.',
  },
  slideThumbActiveClass: {
    control: 'text',
    description: 'Additional class that will be added to activated thumb slide.',
  },
  thumbsContainerClass: {
    control: 'text',
    description: 'Additional class that will be added to thumbs container element.',
  },
} as any;

export const thumbsSharedMeta: Meta = {
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
  argTypes: thumbsArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 6;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    const slidesPerView = metadata?.parameters?.slidesPerView || 1;

    // Build thumbs config object from args
    const thumbsConfig: any = {};
    Object.keys(thumbsArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        thumbsConfig[key] = args[key];
      }
    });
    thumbsConfig.swiper = thumbsConfig.swiper || '.thumbs-swiper-inner';

    return {
      template: `
        <style>
          .main-swiper {
            height: 250px;
            margin-bottom: 12px;
          }
          .thumbs-swiper {
            height: 80px;
            box-sizing: border-box;
            padding: 5px 0;
          }
          .main-swiper .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #2c3e50;
            color: white;
            font-size: 24px;
            font-weight: bold;
            border-radius: 6px;
          }
          .thumbs-swiper .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 14px;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            opacity: 0.5;
            transition: opacity 0.2s;
          }
          .thumbs-swiper .swiper-slide-thumb-active {
            opacity: 1;
            border: 2px solid #2196F3;
          }
          :host ::ng-deep {
            .custom-thumb-active {
              border: 1px solid #ff5722 !important;
            }
            .swiper-thumbs-custom {
              border: 1px solid yellow !important;
            }
          }
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
        </style>

        @if(propAndMethodsDemo) {
          <h3>Thumbs Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="checkThumbsSwiper(mainSwiper)">Check thumbs.swiper Instance</button>
            <button class="btn-ng" (click)="initThumbs(mainSwiper)">Initialize Thumbs - thumbs.init()</button>
            <button class="btn-ng" (click)="updateThumbs(mainSwiper)">Update Thumbs - thumbs.update()</button>
          </div>
          <br/>
        }

        <!-- Main Swiper -->
        <ng-swiper-element 
            class="main-swiper"
            [thumbs]="thumbsConfig"
            [slidesPerView]="slidesPerView"
            [spaceBetween]="10"
            [injectStylesUrls]="injectStylesUrls"
            [injectStyles]="['
              .custom-thumb-active {
                border: 1px solid #ff5722 !important;
              }
              .swiper-thumbs-custom {
                border: 1px solid yellow !important;
              }
            ']"
            #mainSwiper="ngSwiperElement">  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div class="swiper-slide">Main Slide {{slide}}</div>
              </ng-template>
            }
        </ng-swiper-element>

        <!-- Thumbs Swiper -->
        <ng-swiper-element 
         class="thumbs-swiper"
            [swiperClasses]="'thumbs-swiper-inner'"
            [slidesPerView]="4"
            [spaceBetween]="10"
            [freeMode]="true"
            [injectStyles]="['
              .custom-thumb-active {
                border: 1px solid #ff5722 !important;
              }
              .swiper-thumbs-custom {
                border: 1px solid yellow !important;
              }
            ']"
            [watchSlidesProgress]="true"
            [injectStylesUrls]="injectStylesUrls"
            #thumbsSwiper="ngSwiperElement">  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div class="swiper-slide">Thumb {{slide}}</div>
              </ng-template>
            }
        </ng-swiper-element>
      `,
      props: {
        storyName,
        description,
        thumbsConfig,
        slidesPerView,
        propAndMethodsDemo,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),

        checkThumbsSwiper: (swiperElement: any) => {
          const thumbsInstance = swiperElement.swiperInstance?.thumbs?.swiper;
          console.log('Thumbs Swiper Instance:', thumbsInstance);
          alert(`Thumbs Swiper Attached: ${!!thumbsInstance}`);
        },
        updateThumbs: (swiperElement: any) => {
          if (swiperElement.swiperInstance?.thumbs) {
            swiperElement.swiperInstance.thumbs.update(true);
            alert('Thumbs updated successfully!');
          }
        },
        initThumbs: (swiperElement: any) => {
          if (swiperElement.swiperInstance?.thumbs) {
            swiperElement.swiperInstance.thumbs.init();
            alert('Thumbs initialized successfully!');
          }
        },
      },
    };
  },
};