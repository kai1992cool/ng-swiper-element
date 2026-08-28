import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgSwiperSlideDirective,
  provideSwiper,
  SwiperElementComponent,
  NgSwiperButtonDirective,
} from 'ng-swiper-element';

export const lazyLoadingArgTypes = {
  lazyPreloaderClass: {
    control: 'text',
    description: 'CSS class name of lazy preloader element.',
  },
  lazyPreloadPrevNext: {
    control: 'number',
    description: 'Number of next and previous slides to preload. Only applicable if using lazy loading.',
  },
} as any;

export const lazyLoadingSharedMeta: Meta = {
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
  argTypes: lazyLoadingArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 8;

    // Using images that take longer to load to make lazy loading visible
    const sampleImages = [
      'https://picsum.photos/1200/800?random=1&delay=2',
      'https://picsum.photos/1200/800?random=2&delay=3',
      'https://picsum.photos/1200/800?random=3&delay=1',
      'https://picsum.photos/1200/800?random=4&delay=4',
      'https://picsum.photos/1200/800?random=5&delay=2',
      'https://picsum.photos/1200/800?random=6&delay=3',
      'https://picsum.photos/1200/800?random=7&delay=1',
      'https://picsum.photos/1200/800?random=8&delay=4',
    ];

    return {
      template: `
        <style>
          ::ng-deep ng-swiper-element {
            height: 350px;
            display: block;
            border-radius: 8px;
            overflow: hidden;
          }
          ::ng-deep .swiper-slide {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #111;
          }
          ::ng-deep .swiper-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .hint {
            color: #aaa;
            font-size: 13px;
            margin-bottom: 12px;
          }
        </style>

        <p class="hint">⚡ Images use native <code>loading="lazy"</code> with <code>&lt;div class="swiper-lazy-preloader"&gt;&lt;/div&gt;</code> spinners for on-demand loading.</p>

        <ng-swiper-element 
            [lazyPreloaderClass]="lazyPreloaderClass"
            [lazyPreloadPrevNext]="lazyPreloadPrevNext"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement">  
            @for(imgUrl of images; track $index) {
              <ng-template ngSwiperSlide [lazy]="true">
                 <div class="swiper-slide">
                 <img [src]="imgUrl" loading="lazy" alt="Slide Image {{$index + 1}}" />
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
        lazyPreloaderClass: args.lazyPreloaderClass || 'swiper-lazy-preloader',
        lazyPreloadPrevNext: args.lazyPreloadPrevNext || 0,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        images: sampleImages.slice(0, numberOfSlides),
      },
    };
  },
};