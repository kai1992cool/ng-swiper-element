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
  SwiperElementComponent,
  NgSwiperButtonDirective,
} from 'ng-swiper-element';
import { swiperEvents } from '../../lib/ng-swiper-element-events.class';
import { EffectCards, EffectCoverflow, EffectCreative, EffectCube, EffectFade, EffectFlip } from 'swiper/modules';

const args: any = {};

swiperEvents.forEach((eventName: string) => {
  args[eventName] = fn();
});

export const fadeEffectArgTypes = {
  crossFade: {
    control: 'boolean',
    description: 'Enables cross-fade effect. Set to true to transition opacity of both previous and current slide simultaneously.',
  },
  mode: {
    control: 'radio',
    options: ['default', 'cross-fade', 'out-in'],
    description: 'Fade transition mode: `default` - only the currently active slide fades out, while the new slide is fully visible beneath it, `cross-fade` - both slides fade simultaneously, `out-in` - the current slide fades out completely before the new slide starts fading in',
  }
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
  progressMultiplier: {
    control: 'number',
    description: 'Allows to multiply slides transformations and opacity.',
  },
  perspective: {
    control: 'boolean',
    description: 'Enable this parameter if your custom transforms require 3D transformations (translateZ, rotateX, rotateY).',
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
    const slidesPerView = metadata?.parameters?.slidesPerView;
    const effectStylesByName: Record<string, string[]> = {
      slide: ['/swiper/css/swiper-bundle.min.css'],
      fade: ['/swiper/css/swiper-bundle.min.css', '/swiper/css/modules/effect-fade-element.min.css'],
      cube: ['/swiper/css/swiper-bundle.min.css', '/swiper/css/modules/effect-cube-element.min.css'],
      coverflow: ['/swiper/css/swiper-bundle.min.css', '/swiper/css/modules/effect-coverflow-element.min.css'],
      flip: ['/swiper/css/swiper-bundle.min.css', '/swiper/css/modules/effect-flip-element.min.css'],
      creative: ['/swiper/css/swiper-bundle.min.css', '/swiper/css/modules/effect-creative-element.min.css'],
      cards: ['/swiper/css/swiper-bundle.min.css', '/swiper/css/modules/effect-cards-element.min.css'],
    };

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
            width: ${effect === 'cards' || effect === 'flip' || effect === 'cube' ? '300px' : '100%'}; 
            height: 300px;
            margin: 0 auto;
            display: block;
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
            height: 300px;
            width: 300px;
          }

          ::ng-deep swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        </style>
        <ng-swiper-element 
            [effect]="effect"
            [grabCursor]="true"
            [navigation]="true"
            [pagination]="true"
            [slidesPerView]="${slidesPerView || (effect === 'coverflow' ? 3 : 1)}"
            [centeredSlides]="${effect === 'coverflow'}"
            [${effectConfigKey}]="effectConfig"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement">  
            @for(slide of slides;let i = $index; track i) {
              <ng-template ngSwiperSlide>
              <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/abstract-{{i + 1}}.jpg" />
              </div>
              </ng-template>
            }
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </ng-swiper-element>
      `,
      props: {
        modules: [EffectFade, EffectCards, EffectFlip, EffectCube, EffectCreative, EffectCoverflow],
        effect,
        slidesPerView,
        storyName,
        description,
        effectConfigKey,
        effectConfig,
        injectStylesUrls: effectStylesByName[effect] || (effectStylesByName as any).slide,
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
      },
    };
  },
};