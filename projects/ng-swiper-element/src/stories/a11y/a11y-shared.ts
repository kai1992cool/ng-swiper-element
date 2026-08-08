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

export const a11yArgTypes = {
  enabled: {
    control: 'boolean',
    description: 'Enables accessibility (a11y) module.',
  },
  prevSlideMessage: {
    control: 'text',
    description: 'Message for screen readers for previous button.',
  },
  nextSlideMessage: {
    control: 'text',
    description: 'Message for screen readers for next button.',
  },
  firstSlideMessage: {
    control: 'text',
    description: 'Message for screen readers when swiper is on first slide.',
  },
  lastSlideMessage: {
    control: 'text',
    description: 'Message for screen readers when swiper is on last slide.',
  },
  paginationBulletMessage: {
    control: 'text',
    description: 'Message for screen readers for pagination bullet element. e.g. "Go to slide {{index}}".',
  },
  containerMessage: {
    control: 'text',
    description: 'Message for screen readers for outer swiper container.',
  },
  containerRoleDescriptionMessage: {
    control: 'text',
    description: 'Message for screen readers describing the role of outer swiper container.',
  },
  itemRoleDescriptionMessage: {
    control: 'text',
    description: 'Message for screen readers describing the role of slide element.',
  },
  slideLabelMessage: {
    control: 'text',
    description: 'Message for screen readers for slide element. e.g. "{{index}} / {{slidesLength}}".',
  },
} as any;

export const a11ySharedMeta: Meta = {
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
  argTypes: a11yArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;

    // Build a11y config object from args
    const a11yConfig: any = {};
    Object.keys(a11yArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        a11yConfig[key] = args[key];
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
          .a11y-hint {
            color: #aaa;
            font-size: 13px;
            margin-top: 8px;
          }
        </style>

        @if(propAndMethodsDemo) {
          <h3>Accessibility Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="enableA11y(swiperElement)">Enable A11y - swiper.a11y.enable()</button>
            <button class="btn-ng" (click)="disableA11y(swiperElement)">Disable A11y - swiper.a11y.disable()</button>
            <button class="btn-ng" (click)="checkA11yStatus(swiperElement)">Check A11y Status</button>
          </div>
          <br/>
        }

        <p class="a11y-hint">♿ Screen reader ARIA labels and keyboard focus ring handling are active for navigation and pagination components.</p>

        <ng-swiper-element 
            [a11y]="a11yConfig"
            [pagination]="{ clickable: true }"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement"
            ${
              eventsShowcase ? `(slideChange)="slideChange($event)"` : ''
            }>  
            @for(slide of slides; track $index) {
              <ng-template ngSwiperSlide>
                  <div class="swiper-slide">Slide {{slide}}</div>
              </ng-template>
            }
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
        </ng-swiper-element>
      `,
      props: {
        storyName,
        description,
        a11yConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),

        // Methods
        enableA11y: (swiperElement: any) => {
          swiperElement.swiperInstance?.a11y?.enable();
          alert('Accessibility module enabled!');
        },
        disableA11y: (swiperElement: any) => {
          swiperElement.swiperInstance?.a11y?.disable();
          alert('Accessibility module disabled!');
        },
        checkA11yStatus: (swiperElement: any) => {
          const isEnabled = swiperElement.swiperInstance?.a11y?.enabled;
          alert(`swiper.a11y.enabled = ${isEnabled}`);
          console.log('A11y Enabled Property:', isEnabled);
        },

        // Events
        slideChange: (eventData: unknown) => {
          console.log('Template intercepted event (slideChange with a11y announcements):', eventData);
        },
      },
    };
  },
};