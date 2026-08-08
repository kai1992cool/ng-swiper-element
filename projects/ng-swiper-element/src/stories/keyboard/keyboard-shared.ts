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

export const keyboardArgTypes = {
  enabled: {
    control: 'boolean',
    description: 'Set to true to enable keyboard control.',
  },
  onlyInViewport: {
    control: 'boolean',
    description: 'When enabled, keyboard control will only affect sliders currently visible in the viewport.',
  },
  pageUpDown: {
    control: 'boolean',
    description: 'When enabled, page up and page down keys can be used to navigate slides.',
  },
} as any;

export const keyboardSharedMeta: Meta = {
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
  argTypes: keyboardArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;

    // Build keyboard config object from args
    const keyboardConfig: any = {};
    Object.keys(keyboardArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        keyboardConfig[key] = args[key];
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
            font-size: 22px;
            font-weight: bold;
          }
          .focus-hint {
            color: #aaa;
            font-size: 13px;
            margin-top: 8px;
          }
        </style>

        @if(propAndMethodsDemo) {
          <h3>Keyboard Control Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="enableKeyboard(swiperElement)">Enable Keyboard - swiper.keyboard.enable()</button>
            <button class="btn-ng" (click)="disableKeyboard(swiperElement)">Disable Keyboard - swiper.keyboard.disable()</button>
            <button class="btn-ng" (click)="checkKeyboardStatus(swiperElement)">Check Keyboard Enabled Property</button>
          </div>
          <br/>
        }

        <p class="focus-hint">💡 Tip: Click inside the slider area and use Arrow Left/Right (or Page Up/Down) keys to test navigation.</p>

        <ng-swiper-element 
            [keyboard]="keyboardConfig"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement"
            ${
              eventsShowcase ? `(keyPress)="keyPress($event)"` : ''
            }>  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div class="swiper-slide">Slide {{slide}}</div>
              </ng-template>
            }
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </ng-swiper-element>
      `,
      props: {
        storyName,
        description,
        keyboardConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),

        // Methods
        enableKeyboard: (swiperElement: any) => {
          swiperElement.swiperInstance?.keyboard?.enable();
          alert('Keyboard control enabled!');
        },
        disableKeyboard: (swiperElement: any) => {
          swiperElement.swiperInstance?.keyboard?.disable();
          alert('Keyboard control disabled!');
        },
        checkKeyboardStatus: (swiperElement: any) => {
          const isEnabled = swiperElement.swiperInstance?.keyboard?.enabled;
          alert(`swiper.keyboard.enabled = ${isEnabled}`);
          console.log('Keyboard Enabled Property:', isEnabled);
        },

        // Events
        keyPress: (eventData: unknown) => {
          console.log('Template intercepted event (keyPress):', eventData);
          alert('Event Triggered: keyPress');
        },
      },
    };
  },
};