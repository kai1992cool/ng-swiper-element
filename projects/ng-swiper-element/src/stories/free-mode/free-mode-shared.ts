import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { NgSwiperElementModule } from 'ng-swiper-element';
import { swiperEvents } from '../../lib/ng-swiper-element-events.class';

const args: any = {};

swiperEvents.forEach((eventName: string) => {
  args[eventName] = action(eventName);
});

export const freeModeArgTypes = {
  enabled: {
    control: 'boolean',
    description: 'Whether the free mode is enabled',
  },
  minimumVelocity: {
    control: 'number',
    description: 'Minimum touchmove-velocity required to trigger free mode momentum',
  },
  momentum: {
    control: 'boolean',
    description: 'If enabled, then slide will keep moving for a while after you release it',
  },
  momentumBounce: {
    control: 'boolean',
    description: 'Set to false if you want to disable momentum bounce in free mode',
  },
  momentumBounceRatio: {
    control: 'number',
    description: 'Higher value means higher bounce distance',
  },
  momentumRatio: {
    control: 'number',
    description: 'Higher value means higher slide momentum distance after you release it',
  },
  momentumVelocityRatio: {
    control: 'number',
    description: 'Higher value means higher slide momentum velocity after you release it',
  },
  sticky: {
    control: 'boolean',
    description: 'Set to true to enable snap to closest slide in free mode',
  },
} as any;

export const freeModeSharedMeta: Meta = {
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgSwiperElementModule,
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
  argTypes: freeModeArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 8;

    // Build freeMode config object from args
    const freeModeConfig: any = {};
    Object.entries(freeModeArgTypes).forEach(([key]: any) => {
      if (args[key] !== undefined) {
        freeModeConfig[key] = args[key];
      }
    });

    return {
      template: `
        <ng-swiper-element 
            [freeMode]="freeModeConfig"
            [slidesPerView]="3"
            [spaceBetween]="30"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement">  
            <ng-container *ngFor="let slide of slides; let i = index">
              <ng-template ngSwiperSlide>
                  <div class="swiper-slide">Slide {{slide}}</div>
              </ng-template>
            </ng-container>
            <ng-container *ngIf="showElements">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </ng-container>
        </ng-swiper-element>
      `,
      props: {
        storyName,
        description,
        freeModeConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
      },
    };
  },
};