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

export const controllerArgTypes = {
  by: {
    control: 'radio',
    options: ['slide', 'container'],
    description: "Defines a way to control another slider: 'slide' (slide by slide) or 'container' (depending on total slider percentage).",
  },
  inverse: {
    control: 'boolean',
    description: 'Set to true and controlling will be in inverse direction.',
  },
} as any;

export const controllerSharedMeta: Meta = {
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
  argTypes: controllerArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;

    // Build controller config object from args
    const controllerConfig: any = {
      control: '#controlledSwiper',
    };

    Object.keys(controllerArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        controllerConfig[key] = args[key];
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
          .slider-label {
            color: #ddd;
            font-weight: 600;
            margin-bottom: 8px;
            font-size: 14px;
          }
          ::ng-deep ng-swiper-element {
            height: 180px;
            display: block;
            margin-bottom: 24px;
          }
          ::ng-deep .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #2c3e50;
            border-radius: 8px;
            color: white;
            font-size: 18px;
            font-weight: bold;
          }
          ::ng-deep .controlled-slide {
            background: #27ae60 !important;
          }
        </style>

        @if(propAndMethodsDemo) {
          <h3>Controller Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="checkControllerControl(mainSwiper)">Check swiper.controller.control</button>
            <button class="btn-ng" (click)="updateControlTarget(mainSwiper, secondarySwiper)">Set Controlled Target</button>
            <button class="btn-ng" (click)="clearControlTarget(mainSwiper)">Clear Controller Target</button>
          </div>
          <br/>
        }

        <div class="slider-label">🎮 Controlling Swiper (Primary)</div>
        <ng-swiper-element 
            [controller]="controllerConfig"
            [injectStylesUrls]="injectStylesUrls"
            #mainSwiper="ngSwiperElement"
            ${
              eventsShowcase
                ? `(slideChange)="slideChange($event)"`
                : ''
            }>  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div class="swiper-slide">Primary Slide {{slide}}</div>
              </ng-template>
            }
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </ng-swiper-element>

        <div class="slider-label" style="margin-top: 60px;">🎯 Controlled Swiper (Target)</div>
        <ng-swiper-element 
            id="controlledSwiper"
            [injectStylesUrls]="injectStylesUrls"
            #secondarySwiper="ngSwiperElement">  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div class="swiper-slide controlled-slide">Target Slide {{slide}}</div>
              </ng-template>
            }
        </ng-swiper-element>
      `,
      props: {
        storyName,
        description,
        controllerConfig,
        propAndMethodsDemo,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),

        // Methods
        checkControllerControl: (mainSwiper: any) => {
          const controlObj = mainSwiper.swiperInstance?.controller?.control;
          alert(`swiper.controller.control is set.`);
          console.log('swiper.controller.control:', controlObj);
        },
        updateControlTarget: (mainSwiper: any, secondarySwiper: any) => {
          if (mainSwiper.swiperInstance && secondarySwiper.swiperInstance) {
            mainSwiper.swiperInstance.controller.control = secondarySwiper.swiperInstance;
            alert('Updated controller target instance directly!');
          }
        },
        clearControlTarget: (mainSwiper: any) => {
          if (mainSwiper.swiperInstance) {
            mainSwiper.swiperInstance.controller.control = null;
            alert('Cleared controller target!');
          }
        },

        // Events
        slideChange: (eventData: unknown) => {
          console.log('Template intercepted event (slideChange during controller sync):', eventData);
        },
      },
    };
  },
};