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

export const fadeEffectArgTypes = {
  crossFade: {
    control: 'boolean',
    description: 'Enables cross-fade effect. Set to true to transition opacity of both previous and current slide simultaneously.',
  },
} as any;

export const coverflowEffectArgTypes = {
  depth: {
    control: 'number',
    description: 'Offset depth in px (slides translate in Z axis).',
  },
  modifier: {
    control: 'number',
    description: 'Effect multiplier.',
  },
  rotate: {
    control: 'number',
    description: 'Slide rotate in degrees.',
  },
  scale: {
    control: 'number',
    description: 'Slide scale ratio.',
  },
  slideShadows: {
    control: 'boolean',
    description: 'Enables slide shadows.',
  },
  stretch: {
    control: 'number',
    description: 'Stretch space between slides (in px).',
  },
} as any;

export const flipEffectArgTypes = {
  limitRotation: {
    control: 'boolean',
    description: 'Limit max rotation to 180 deg to prevent showing back face.',
  },
  slideShadows: {
    control: 'boolean',
    description: 'Enables slide shadows.',
  },
} as any;

export const cubeEffectArgTypes = {
  shadow: {
    control: 'boolean',
    description: 'Enables main cube shadow.',
  },
  shadowOffset: {
    control: 'number',
    description: 'Main shadow offset in px.',
  },
  shadowScale: {
    control: 'number',
    description: 'Main shadow scale ratio.',
  },
  slideShadows: {
    control: 'boolean',
    description: 'Enables slide shadows.',
  },
} as any;

export const cardsEffectArgTypes = {
  perSlideOffset: {
    control: 'number',
    description: 'Offset distance of next/previous cards in px.',
  },
  perSlideRotate: {
    control: 'number',
    description: 'Rotate angle of next/previous cards in degrees.',
  },
  rotate: {
    control: 'boolean',
    description: 'Enables/disables card rotation.',
  },
  slideShadows: {
    control: 'boolean',
    description: 'Enables slide shadows.',
  },
} as any;

export const creativeEffectArgTypes = {
  limitProgress: {
    control: 'number',
    description: 'Limit progress to transform slides.',
  },
  next: {
    control: 'object',
    description: 'Transforms applied to the next slides.',
  },
  prev: {
    control: 'object',
    description: 'Transforms applied to the previous slides.',
  },
  shadowPerProgress: {
    control: 'boolean',
    description: 'Enables shadow progress calculation.',
  },
} as any;

export const effectsSharedMeta: Meta = {
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
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const effect = metadata?.parameters?.effect || 'slide';
    const effectConfigKey = metadata?.parameters?.effectConfigKey;
    
    // Extract parameters for current effect
    const effectConfig: any = {};
    if (effectConfigKey && metadata?.parameters?.argTypes) {
      Object.keys(metadata.parameters.argTypes).forEach((key) => {
        if (args[key] !== undefined) {
          effectConfig[key] = args[key];
        }
      });
    }

    const swiperParams: any = {
      effect: effect,
      grabCursor: true,
      centeredSlides: effect === 'coverflow',
      slidesPerView: effect === 'coverflow' ? 3 : 1,
    };

    if (effectConfigKey) {
      swiperParams[effectConfigKey] = effectConfig;
    }

    return {
      template: `
        <style>
          ::ng-deep ng-swiper-element {
            width: ${effect === 'cube' || effect === 'cards' || effect === 'flip' ? '300px' : '100%'};
            height: 300px;
            margin: 0 auto;
          }
          ::ng-deep .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #2c3e50;
            background-image: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
            border-radius: 8px;
            color: white;
            font-size: 22px;
            font-weight: bold;
          }
        </style>
        <ng-swiper-element 
            [effect]="'${effect}'"
            [grabCursor]="true"
            [slidesPerView]="${effect === 'coverflow' ? 3 : 1}"
            [centeredSlides]="${effect === 'coverflow'}"
            [${effectConfigKey}]="effectConfig"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement">  
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
        effectConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
      },
    };
  },
};