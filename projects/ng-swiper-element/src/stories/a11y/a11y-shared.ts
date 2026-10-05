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
  SwiperElementComponent,
  NgSwiperButtonDirective,
} from 'ng-swiper-element';
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
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 8;

    const sampleImages = [
      'https://swiperjs.com/demos/images/nature-1.jpg',
      'https://swiperjs.com/demos/images/nature-2.jpg',
      'https://swiperjs.com/demos/images/nature-3.jpg',
      'https://swiperjs.com/demos/images/nature-4.jpg',
      'https://swiperjs.com/demos/images/nature-5.jpg',
      'https://swiperjs.com/demos/images/nature-6.jpg',
      'https://swiperjs.com/demos/images/nature-7.jpg',
      'https://swiperjs.com/demos/images/nature-8.jpg',
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

        <p class="hint">Accessibility features are enabled with <code>a11y</code> configuration.</p>
        <ng-swiper-element 
            [a11y]="{
              enabled: enabled,
              containerMessage: containerMessage,
              containerRoleDescriptionMessage: containerRoleDescriptionMessage,
              containerRole: containerRole,
              itemRoleDescriptionMessage: itemRoleDescriptionMessage,
              prevSlideMessage: prevSlideMessage,
              nextSlideMessage: nextSlideMessage,
              firstSlideMessage: firstSlideMessage,
              lastSlideMessage: lastSlideMessage,
              paginationBulletMessage: paginationBulletMessage,
              slideLabelMessage: slideLabelMessage,
              notificationClass: notificationClass,
              slideRole: slideRole,
              id: id,
              scrollOnFocus: scrollOnFocus,
              wrapperLiveRegion: wrapperLiveRegion,
            }"
            [autoplay]="autoplay"
            #swiperElement="ngSwiperElement">
            @for(imgUrl of images; track $index) {
              <ng-template ngSwiperSlide>
                  <img [src]="imgUrl" loading="lazy" alt="Slide Image {{$index + 1}}" />
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
        enabled: args.enabled ?? true,
        containerMessage: args.containerMessage || 'Default Featured product carousel',
        containerRole: args.containerRole || 'default region',
        containerRoleDescriptionMessage: args.containerRoleDescriptionMessage || 'default Container Role Description Message',
        itemRoleDescriptionMessage: args.itemRoleDescriptionMessage || 'default Item Role Description Message',
        prevSlideMessage: args.prevSlideMessage || 'Previous slide',
        nextSlideMessage: args.nextSlideMessage || 'Next slide',
        firstSlideMessage: args.firstSlideMessage || 'This is the first slide',
        lastSlideMessage: args.lastSlideMessage || 'This is the last slide',
        paginationBulletMessage: args.paginationBulletMessage || 'Go to slide {{index}}',
        slideLabelMessage: args.slideLabelMessage || 'Slide {{index}} of {{slidesLength}}',
        notificationClass: args.notificationClass || 'swiper-notification',
        id: args.id || 'swiper-custom-default-id',
        slideRole: args.slideRole || 'custom-default-group',
        scrollOnFocus: args.scrollOnFocus ?? false,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        images: sampleImages.slice(0, numberOfSlides),
        wrapperLiveRegion: args.wrapperLiveRegion ?? false,
        autoplay: args.autoplay ?? false,
      },
    };
  },
};