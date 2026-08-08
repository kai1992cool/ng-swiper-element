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

export const zoomArgTypes = {
  maxRatio: {
    control: 'number',
    description: 'Maximum image zoom ratio (default: 3).',
  },
  minRatio: {
    control: 'number',
    description: 'Minimum image zoom ratio (default: 1).',
  },
  toggle: {
    control: 'boolean',
    description: 'Enable/disable zoom-in by image double click/tap.',
  },
  containerClass: {
    control: 'text',
    description: 'CSS class name of zoom container.',
  },
  zoomedSlideClass: {
    control: 'text',
    description: 'CSS class name of zoomed slide.',
  },
} as any;

export const zoomSharedMeta: Meta = {
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
  argTypes: zoomArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 3;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;

    // Build zoom config object from args
    const zoomConfig: any = {};
    Object.keys(zoomArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        zoomConfig[key] = args[key];
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
            height: 350px;
          }
          ::ng-deep .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #2c3e50;
            border-radius: 8px;
            overflow: hidden;
          }
          ::ng-deep .swiper-zoom-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
          }
        </style>

        @if(propAndMethodsDemo) {
          <h3>Zoom Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="checkZoomScale(swiperElement)">Check Scale - swiper.zoom.scale</button>
            <button class="btn-ng" (click)="zoomIn(swiperElement)">Zoom In - swiper.zoom.in()</button>
            <button class="btn-ng" (click)="zoomOut(swiperElement)">Zoom Out - swiper.zoom.out()</button>
            <button class="btn-ng" (click)="toggleZoom(swiperElement)">Toggle Zoom - swiper.zoom.toggle()</button>
            <button class="btn-ng" (click)="enableZoom(swiperElement)">Enable Zoom Module</button>
            <button class="btn-ng" (click)="disableZoom(swiperElement)">Disable Zoom Module</button>
          </div>
          <br/>
        }

        <ng-swiper-element 
            [zoom]="zoomConfig"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement"
            ${
              eventsShowcase ? `(zoomChange)="zoomChange($event)"` : ''
            }>  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div class="swiper-zoom-container">
                      <img [src]="'https://swiperjs.com/demos/images/nature-' + (($index % 3) + 1) + '.jpg'" [alt]="'Slide ' + slide" />
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
        zoomConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),

        // Method handlers
        checkZoomScale: (swiperElement: any) => {
          const scale = swiperElement.swiperInstance?.zoom?.scale;
          alert(`Current Zoom Scale: ${scale}`);
          console.log('Current Zoom Scale:', scale);
        },
        zoomIn: (swiperElement: any) => {
          swiperElement.swiperInstance?.zoom?.in();
        },
        zoomOut: (swiperElement: any) => {
          swiperElement.swiperInstance?.zoom?.out();
        },
        toggleZoom: (swiperElement: any) => {
          swiperElement.swiperInstance?.zoom?.toggle();
        },
        enableZoom: (swiperElement: any) => {
          swiperElement.swiperInstance?.zoom?.enable();
          alert('Zoom module enabled');
        },
        disableZoom: (swiperElement: any) => {
          swiperElement.swiperInstance?.zoom?.disable();
          alert('Zoom module disabled');
        },

        // Event handler
        zoomChange: (eventData: unknown) => {
          console.log('Template intercepted event (zoomChange):', eventData);
          alert('Event Triggered: zoomChange');
        },
      },
    };
  },
};