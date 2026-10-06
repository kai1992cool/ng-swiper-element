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

export const manipulationArgTypes = {
  // Manipulation parameters can be placed here if any are configurable
} as any;

export const manipulationSharedMeta: Meta = {
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
  argTypes: manipulationArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 3;
    const activeMethod = metadata?.parameters?.activeMethod || '';

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
            transition: background-color 0.2s, transform 0.1s;
          }
          .btn-ng:hover {
            background-color: #1e88e5;
          }
          .btn-ng:active {
            transform: scale(0.98);
          }
          .btn-highlight {
            background-color: #ff9800 !important;
            box-shadow: 0 0 10px rgba(255, 152, 0, 0.6);
            font-weight: bold;
          }
          .btn-danger {
            background-color: #f44336 !important;
          }
          .btn-danger:hover {
            background-color: #d32f2f !important;
          }
          ::ng-deep ng-swiper-element {
            height: 200px;
          }
          ::ng-deep .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            color: white;
            font-size: 18px;
            font-weight: bold;
          }
        </style>

        <!-- Interactive Action Buttons for Manipulation Methods -->
        <h3>Manipulation Methods</h3>
        <div class="btn-group">
          <button 
            class="btn-ng" 
            [class.btn-highlight]="activeMethod === 'appendSlide'" 
            (click)="appendSlide(swiperElement)">
            + Append Slide
          </button>
          
          <button 
            class="btn-ng" 
            [class.btn-highlight]="activeMethod === 'prependSlide'" 
            (click)="prependSlide(swiperElement)">
            + Prepend Slide
          </button>

          <button 
            class="btn-ng" 
            [class.btn-highlight]="activeMethod === 'addSlide'" 
            (click)="addSlideAt(swiperElement, 0)">
            + Add Slide at Index 0
          </button>

          <button 
            class="btn-ng" 
            [class.btn-highlight]="activeMethod === 'addSlide'" 
            (click)="addSlideAt(swiperElement, 1)">
            + Add Slide at Index 1
          </button>

          <button 
            class="btn-ng" 
            [class.btn-highlight]="activeMethod === 'removeSlide'" 
            (click)="removeSlideAt(swiperElement, 0)">
            - Remove First Slide
          </button>

          <button 
            class="btn-ng" 
            [class.btn-highlight]="activeMethod === 'removeAllSlides'" 
            (click)="removeAllSlides(swiperElement)">
            - Remove All Slides
          </button>
        </div>

        <br/>

        <ng-swiper-element 
            [slidesPerView]="3"
            [spaceBetween]="20"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement">  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div class="swiper-slide">{{slide}}</div>
              </ng-template>
            }
        </ng-swiper-element>
      `,
      props: {
        storyName,
        description,
        activeMethod,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => `Slide ${i + 1}`),
        slideCounter: numberOfSlides + 1,
        
        appendSlide: function(swiperElement: any) {
          const swiper = swiperElement.swiperInstance;
          if (swiper) {
            const newSlide = `<div class="swiper-slide">Slide ${(this as any).slideCounter++}</div>`;
            swiper.appendSlide(newSlide);
          }
        },
        prependSlide: function(swiperElement: any) {
          const swiper = swiperElement.swiperInstance;
          if (swiper) {
            const newSlide = `<div class="swiper-slide">Slide ${(this as any).slideCounter++}</div>`;
            swiper.prependSlide(newSlide);
          }
        },
        addSlideAt: function(swiperElement: any, index: number) {
          const swiper = swiperElement.swiperInstance;
          if (swiper) {
            const div = document.createElement('div');
            div.classList.add('swiper-slide');
            div.textContent = `Slide ${(this as any).slideCounter++}`;
            swiper.addSlide(index, [div]);
          }
        },
        removeSlideAt: function(swiperElement: any, index: number) {
          const swiper = swiperElement.swiperInstance;
          if (swiper) {
            swiper.removeSlide(index);
          }
        },
        removeAllSlides: function(swiperElement: any) {
          const swiper = swiperElement.swiperInstance;
          if (swiper) {
            swiper.removeAllSlides();
          }
        }
      },
    };
  },
};