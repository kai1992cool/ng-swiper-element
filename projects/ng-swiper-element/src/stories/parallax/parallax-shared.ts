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

export const parallaxArgTypes = {
  enabled: {
    control: 'boolean',
    description: 'Enable, if you want to use "parallaxed" elements inside of slider.',
  },
} as any;

export const parallaxSharedMeta: Meta = {
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
  argTypes: parallaxArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;

    // Build parallax config object from args
    const parallaxConfig: any = {};
    Object.keys(parallaxArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        parallaxConfig[key] = args[key];
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
            height: 380px;
            position: relative;
            overflow: hidden;
            display: block;
            border-radius: 8px;
          }
          .parallax-bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 130%;
            height: 100%;
            background-size: cover;
            background-position: center;
            z-index: -1;
          }
          ::ng-deep .swiper-slide {
            box-sizing: border-box;
            padding: 40px 60px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 8px;
            color: white;
          }
          .subtitle {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 12px;
            color: white;
          }
          .text {
            font-size: 14px;
            max-width: 400px;
            margin-bottom: 16px;
            line-height: 1.5;
            color: white;
          }
          .opacity-box {
            display: inline-block;
            background: azure;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 13px;
            margin-bottom: 8px;
            width: fit-content;
            color: black;
            margin-right: 10px;
          }
          .scale-box {
            display: inline-block;
            background: rgba(33, 150, 243, 0.4);
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 13px;
            width: fit-content;
          }
        </style>

        @if(propAndMethodsDemo) {
          <h3>Parallax Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="enableParallax(swiperElement)">Enable Parallax</button>
            <button class="btn-ng" (click)="disableParallax(swiperElement)">Disable Parallax</button>
            <button class="btn-ng" (click)="checkParallaxStatus(swiperElement)">Check Status</button>
          </div>
          <br/>
        }

        <ng-swiper-element 
            [parallax]="parallaxConfig"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement"
            ${
              eventsShowcase ? `(slideChange)="slideChange($event)"` : ''
            }>  

            @for(slide of slides;let i = $index; track i) {
              <ng-template ngSwiperSlide>
                  <!-- Parallax background element -->
                  <div
                    class="parallax-bg"
                    style="background-image:url('https://swiperjs.com/demos/images/nature-{{i+1}}.jpg')"
                    data-swiper-parallax="-23%"
                  ></div>
                  <div>
                    <!-- Each slide has parallax title -->
                    <div class="title" data-swiper-parallax="-100" data-swiper-parallax-duration="600">Slide {{slide}}</div>
                    
                    <!-- Parallax subtitle -->
                    <div class="subtitle" data-swiper-parallax="-200" data-swiper-parallax-duration="600">Subtitle {{slide}}</div>
                    
                    <!-- Parallax text with custom transition duration -->
                    <div
                      class="text"
                      data-swiper-parallax="-300"
                      data-swiper-parallax-duration="600"
                    >
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet molestie magna.</p>
                    </div>

                    <!-- Opacity parallax -->
                    <div class="opacity-box" data-swiper-parallax-opacity="0" data-swiper-parallax-duration="4000">
                      I will change opacity
                    </div>

                    <!-- Scale parallax -->
                    <div class="scale-box" data-swiper-parallax-scale="0.15" data-swiper-parallax-duration="600">
                      I will change scale
                    </div>
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
        parallaxConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),

        // Methods
        enableParallax: (swiperElement: any) => {
          if (swiperElement.swiperInstance?.parallax) {
            swiperElement.swiperInstance.parallax.enable();
            alert('Parallax module enabled!');
          }
        },
        disableParallax: (swiperElement: any) => {
          if (swiperElement.swiperInstance?.parallax) {
            swiperElement.swiperInstance.parallax.disable();
            alert('Parallax module disabled!');
          }
        },
        checkParallaxStatus: (swiperElement: any) => {
          const isEnabled = swiperElement.swiperInstance?.parallax?.enabled;
          alert(`swiper.parallax.enabled = ${isEnabled}`);
          console.log('Parallax Enabled Status:', isEnabled);
        },

        // Events
        slideChange: (eventData: unknown) => {
          console.log('Template intercepted event (slideChange during parallax transition):', eventData);
        },
      },
    };
  },
};