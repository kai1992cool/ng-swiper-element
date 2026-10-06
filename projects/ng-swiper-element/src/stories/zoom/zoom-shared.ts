import {
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
import { Zoom } from 'swiper/modules';

const args: any = {};

swiperEvents.forEach((eventName: string) => {
  args[eventName] = fn();
});

export const zoomArgTypes = {
  maxRatio: {
    control: 'number',
    description: 'Maximum image zoom multiplier (default: 3).',
  },
  minRatio: {
    control: 'number',
    description: 'Minimal image zoom multiplier (default: 1).',
  },
  toggle: {
    control: 'boolean',
    description: 'Enable/disable zoom-in by slide\'s double tap.',
  },
  containerClass: {
    control: 'text',
    description: 'CSS class name of zoom container.',
  },
  zoomedSlideClass: {
    control: 'text',
    description: 'CSS class name of zoomed in container.',
  },
  limitToOriginalSize: {
    control: 'boolean',
    description: 'When set to true, the image will not be scaled past 100% of its original size.',
  },
  panOnMouseMove: {
    control: 'boolean',
    description: 'When set to true, a zoomed in image will automatically pan while moving the mouse over the image.',
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
    const containerZoomCustom = !!metadata?.parameters?.containerZoomCustom;
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
          // Add CSS classes for styling
              .swiper-slide-zoomed-custom { 
                border: 2px solid red !important; 
                opacity: 0.5 !important;
              } 
              .swiper-zoom-container-custom { 
                border: 2px solid blue !important; 
              };
        </style>

        @if(propAndMethodsDemo) {
          <div class="btn-group">
          <h5>Zoom Module Properties:</h5>
          <hr/>
          <button class="btn-ng" (click)="getZoomEnabled(swiperElement)">Check Zoom Enabled - swiper.zoom.enabled</button>
            <button class="btn-ng" (click)="getZoomScale(swiperElement)">Check Zoom Scale - swiper.zoom.scale</button>

          <h5>Zoom Module Methods:</h5>
          <hr/>
            <button class="btn-ng" (click)="disableZoom(swiperElement)">Disable Zoom Module</button>
            <button class="btn-ng" (click)="enableZoom(swiperElement)">Enable Zoom Module</button>
            <button class="btn-ng" (click)="zoomIn(swiperElement)">Zoom In - swiper.zoom.in()</button>
            <button class="btn-ng" (click)="zoomOut(swiperElement)">Zoom Out - swiper.zoom.out()</button>
            <button class="btn-ng" (click)="toggleZoom(swiperElement)">Toggle Zoom - swiper.zoom.toggle()</button>
          </div>
          <br/>
        }

        <ng-swiper-element 
            [modules]="modules"
            [zoom]="zoomConfig"
            [injectStylesUrls]="injectStylesUrls"
            [injectStyles]="['
              .swiper-slide-zoomed-custom { 
                border: 2px solid red !important; 
                opacity: 0.5 !important;
              } 
              .swiper-zoom-container-custom { 
                border: 2px solid blue !important; 
              };
            ']"
            #swiperElement="ngSwiperElement"
            ${eventsShowcase ? `(zoomChange)="zoomChange($event)"` : ''
        }>  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div [class]="containerZoomCustom ? 'swiper-zoom-container-custom' : 'swiper-zoom-container'">
                      <img style="width:100%;height:auto;" [src]="'https://swiperjs.com/demos/images/nature-' + (($index % 3) + 1) + '.jpg'" [alt]="'Slide ' + slide" />
                  </div>
              </ng-template>
            }
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </ng-swiper-element>
      `,
      props: {
        modules: [Zoom],
        storyName,
        containerZoomCustom,
        description,
        zoomConfig,
        propAndMethodsDemo,
        eventsShowcase,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),

        // Method handlers
        getZoomEnabled: (swiperElement: any) => {
          const enabled = swiperElement.swiperInstance?.zoom?.enabled;
          alert(`Current Zoom Enabled: ${enabled}`);
          console.log('Current Zoom Enabled:', enabled);
        },

        getZoomScale: (swiperElement: any) => {
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
      } as any,
    };
  },
};