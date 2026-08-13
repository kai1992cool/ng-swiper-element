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

export const virtualSlidesArgTypes = {
  enabled: {
    control: 'boolean',
    description: 'Enables virtual slides functionality.',
  },
  addSlidesAfter: {
    control: 'number',
    description: 'Number of slides to render after visible slides.',
  },
  addSlidesBefore: {
    control: 'number',
    description: 'Number of slides to render before visible slides.',
  },
  cache: {
    control: 'boolean',
    description: 'Enables caching of rendered slide DOM elements.',
  },
  slides: {
    control: 'object',
    description: 'Array of slides data to be used for virtual rendering.',
  },
  renderSlide: {
    control: 'function',
    description: 'Custom function to render individual slides.',
  },
  renderExternal: {
    control: 'function',
    description: 'Custom function to render external content.',
  },
  transform: {
    control: 'function',
    description: 'Function to transform slide elements.',
  },
  isEnd: {
    control: 'boolean',
    description: 'Indicates if the swiper is at the end of slides.',
  },
  isBeginning: {
    control: 'boolean',
    description: 'Indicates if the swiper is at the beginning of slides.',
  },
} as any;

export const virtualSlidesSharedMeta: Meta = {
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
  argTypes: virtualSlidesArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const totalSlides = metadata?.parameters?.totalSlides || 500;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;

    // Build virtual slides config object from args
    const virtualConfig: any = {};
    Object.keys(virtualSlidesArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        virtualConfig[key] = args[key];
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
            align-items: center;
            justify-content: center;
            background: #2c3e50;
            border-radius: 8px;
            color: white;
            font-size: 20px;
            font-weight: bold;
          }
          .info-text {
            color: #aaa;
            font-size: 13px;
            margin-bottom: 12px;
          }
        </style>

        @if(propAndMethodsDemo) {
          <h3>Virtual Slides Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="removeSlideOn(swiperElement, 2)">Remove Slide from Virtual on #2th index</button>
            <button class="btn-ng" (click)="appendVirtualSlide(swiperElement)">Append Virtual Slide</button>
            <button class="btn-ng" (click)="prependVirtualSlide(swiperElement)">Prepend Virtual Slide</button>
            <button class="btn-ng" (click)="removeAllVirtualSlides(swiperElement)">Remove All Slides</button>
            <button class="btn-ng" (click)="updateVirtual(swiperElement)">Update Virtual</button>
            <button class="btn-ng" (click)="logVirtualProperties(swiperElement)">Log Virtual Properties</button>
          </div>
          <br/>
        }

        <p class="info-text">Rendering <strong>{{ slides.length }}</strong> slides virtually using DOM virtualization.</p>

        <ng-swiper-element 
            [virtual]="virtualConfig"
            [slidesPerView]="3"
            [spaceBetween]="20"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement"> 
            @if(!virtualConfig?.renderSlide) {
              @for(slide of slides; track $index) {
                <ng-template ngSwiperSlide>
                    <div class="swiper-slide">Slide {{slide}}</div>
                </ng-template>
              }
            } 
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </ng-swiper-element>
      `,
      props: {
        storyName,
        description,
        virtualConfig,
        propAndMethodsDemo,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: totalSlides }, (_, i) => i + 1),

        // Methods
        removeSlideOn: (swiperElement: any, index: number) => {
          swiperElement.swiperInstance?.virtual?.removeSlide(index);
        },
        appendVirtualSlide: (swiperElement: any) => {
          const swiper = swiperElement.swiperInstance;
          if (swiper?.virtual) {
            const nextSlideNumber = swiper.slides.length + 1;
            swiper.virtual.appendSlide(`<div class="swiper-slide">Slide ${nextSlideNumber}</div>`);
            alert(`Appended Slide ${nextSlideNumber}`);
          }
        },
        prependVirtualSlide: (swiperElement: any) => {
          const swiper = swiperElement.swiperInstance;
          if (swiper?.virtual) {
            swiper.virtual.prependSlide('<div class="swiper-slide">Prepended Slide</div>');
            alert('Prepended new slide');
          }
        },
        removeAllVirtualSlides: (swiperElement: any) => {
          swiperElement.swiperInstance?.virtual?.removeAllSlides();
          alert('All virtual slides removed!');
        },
        updateVirtual: (swiperElement: any) => {
          swiperElement.swiperInstance?.virtual?.update(true);
          alert('Virtual slides state updated');
        },
        logVirtualProperties: (swiperElement: any) => {
          const swiper = swiperElement.swiperInstance;
          if (swiper?.virtual) {
            console.log('Virtual Properties:', {
              slides: swiper.virtual.slides,
              cache: swiper.virtual.cache,
              from: swiper.virtual.from,
              to: swiper.virtual.to,
            });
          } else {
            console.log('Virtual not available on swiper instance');
          }
        },

        // Events
        virtualUpdate: (eventData: unknown) => {
          console.log('Template intercepted event (virtualUpdate):', eventData);
        },
      },
    };
  },
};