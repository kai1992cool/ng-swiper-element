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

export const mousewheelArgTypes = {
  enabled: {
    control: 'boolean',
    description: 'Set to true to enable mousewheel control.',
  },
  eventsTarget: {
    control: 'text',
    description: "String with CSS selector or HTML element of the container accepting mousewheel events. By default, it is 'container'.",
  },
  forceToAxis: {
    control: 'boolean',
    description: 'Set to true to force mousewheel swipes to axis. In horizontal mode, mousewheel will work only with horizontal mousewheel movement.',
  },
  invert: {
    control: 'boolean',
    description: 'Set to true to invert sliding direction on mousewheel scroll.',
  },
  noMousewheelClass: {
    control: 'text',
    description: 'Class name of the element inside slide that prevents mousewheel scrolling on hover.',
  },
  releaseOnEdges: {
    control: 'boolean',
    description: 'Set to true and Swiper will release mousewheel events and allow page scrolling when reaching outer edges (first or last slide).',
  },
  sensitivity: {
    control: 'number',
    description: 'Multiplier of mousewheel scroll sensitivity.',
  },
  thresholdDelta: {
    control: 'number',
    description: 'Minimum mousewheel scroll delta required to trigger slide change.',
  },
  thresholdTime: {
    control: 'number',
    description: 'Minimum time interval (in ms) between mousewheel scroll events.',
  },
} as any;

export const mousewheelSharedMeta: Meta = {
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
  argTypes: mousewheelArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 6;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;

    // Build mousewheel config object from args
    const mousewheelConfig: any = {};
    Object.keys(mousewheelArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        mousewheelConfig[key] = args[key];
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
          .scroll-hint {
            color: #aaa;
            font-size: 13px;
            margin-top: 8px;
          }
        </style>

        @if(propAndMethodsDemo) {
          <h3>Mousewheel Control Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="enableMousewheel(swiperElement)">Enable Mousewheel - swiper.mousewheel.enable()</button>
            <button class="btn-ng" (click)="disableMousewheel(swiperElement)">Disable Mousewheel - swiper.mousewheel.disable()</button>
            <button class="btn-ng" (click)="checkMousewheelStatus(swiperElement)">Check Enabled Property - swiper.mousewheel.enabled</button>
          </div>
          <br/>
        }

        <p class="scroll-hint">💡 Tip: Hover over the slider area and scroll your mouse wheel / touchpad to test slide transitions.</p>

        <ng-swiper-element 
            [mousewheel]="mousewheelConfig"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement"
            ${
              eventsShowcase ? `(scroll)="scroll($event)"` : ''
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
        mousewheelConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),

        // Methods
        enableMousewheel: (swiperElement: any) => {
          swiperElement.swiperInstance?.mousewheel?.enable();
          alert('Mousewheel control enabled!');
        },
        disableMousewheel: (swiperElement: any) => {
          swiperElement.swiperInstance?.mousewheel?.disable();
          alert('Mousewheel control disabled!');
        },
        checkMousewheelStatus: (swiperElement: any) => {
          const isEnabled = swiperElement.swiperInstance?.mousewheel?.enabled;
          alert(`swiper.mousewheel.enabled = ${isEnabled}`);
          console.log('Mousewheel Enabled Property:', isEnabled);
        },

        // Events
        scroll: (eventData: unknown) => {
          console.log('Template intercepted event (scroll):', eventData);
          alert('Event Triggered: scroll (Mousewheel)');
        },
      },
    };
  },
};