import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { fn } from '@storybook/test';
import {
  NgSwiperSlideDirective,
  provideSwiper,
  SwiperElementComponent,
  NgSwiperButtonDirective,
} from 'ng-swiper-element';
import { swiperEvents } from '../../lib/ng-swiper-element-events.class';
import { Component } from '@angular/core';
const args: any = {};

swiperEvents.forEach((eventName: string) => {
  args[eventName] = fn();
});

export const navigationSharedMeta: Meta = {
  title: 'Ng Swiper Element/Features/Navigation',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        SwiperElementComponent,
        NgSwiperSlideDirective,
        NgSwiperButtonDirective,
        FormsModule
      ],
    }),
    applicationConfig({
      providers: [provideSwiper()],
    }),
    componentWrapperDecorator((story) => `
      <div style="padding: 2em;">
        <div style="margin-bottom: 20px; padding: 16px; background: transparent; border-radius: 4px;">
          <h2 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;color: white">{{ storyName }}</h2>
          <p style="margin: 0; font-size: 14px; color: white;">{{ description }}</p>
        </div>
        ${story}
      </div>
    `),
  ],
  argTypes: {
    addIcons: {
      control: 'boolean',
      description: 'Add SVG icons to navigation buttons',
      table: { defaultValue: { summary: 'true' } },
    },
    disabledClass: {
      control: 'text',
      description:
        'CSS class name added to swiper container when navigation is disabled',
      table: { defaultValue: { summary: 'swiper-navigation-disabled' } },
    },
    enabled: {
      control: 'boolean',
      description: 'Enable/disable navigation',
      table: { defaultValue: { summary: 'false' } },
    },
    hiddenClass: {
      control: 'text',
      description: 'CSS class name added to navigation button when hidden',
      table: { defaultValue: { summary: 'swiper-button-hidden' } },
    },
    hideOnClick: {
      control: 'boolean',
      description: 'Toggle navigation buttons visibility after click on slider',
      table: { defaultValue: { summary: 'false' } },
    },
    lockClass: {
      control: 'text',
      description: 'CSS class name added to navigation button when locked',
      table: { defaultValue: { summary: 'swiper-button-lock' } },
    },
    navigationDisabledClass: {
      control: 'text',
      description: 'CSS class name added to navigation button when disabled',
      table: { defaultValue: { summary: 'swiper-button-disabled' } },
    },
    prevEl: {
      control: 'text',
      description:
        'String with CSS selector or HTML element of the element that will work like "prev" button after click on it',
      table: { defaultValue: { summary: 'swiper-button-prev' } },
    },
    nextEl: {
      control: 'text',
      description:
        'String with CSS selector or HTML element of the element that will work like "next" button after click on it',
      table: { defaultValue: { summary: 'swiper-button-next' } },
    },
  } as any,
  render: (args: any, metadata: any) => {
    console.log(args, metadata);
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const showCustomNavButtons = !!metadata?.parameters?.showCustomNavButtons;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;
    const classStory = !!metadata?.parameters?.classStory;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    
    // Build navigation config from args
    const navigationConfig: any = {};
    
    if (args.enabled !== undefined) {
      navigationConfig.enabled = args.enabled;
    }
    if (args.nextEl !== undefined) {
      navigationConfig.nextEl = args.nextEl;
    }
    if (args.prevEl !== undefined) {
      navigationConfig.prevEl = args.prevEl;
    }
    if (args.addIcons !== undefined) {
      navigationConfig.addIcons = args.addIcons;
    }
    if (args.disabledClass !== undefined) {
      navigationConfig.disabledClass = args.disabledClass;
    }
    if (args.hiddenClass !== undefined) {
      navigationConfig.hiddenClass = args.hiddenClass;
    }
    if (args.hideOnClick !== undefined) {
      navigationConfig.hideOnClick = args.hideOnClick;
    }
    if (args.lockClass !== undefined) {
      navigationConfig.lockClass = args.lockClass;
    }
    if (args.navigationDisabledClass !== undefined) {
      navigationConfig.navigationDisabledClass = args.navigationDisabledClass;
    }

    if(showCustomNavButtons) {
      navigationConfig.nextEl = '.swiper-button-next';
      navigationConfig.prevEl = '.swiper-button-prev';
    }
    
    return {
      template: `
      <style>
      </style>
            <ng-swiper-element 
                [navigation]="navigationConfig"
                [injectStylesUrls]="injectStylesUrls"
                #swiperElement="ngSwiperElement"
                ${
                  eventsShowcase ? 
                  `
                    (navigationHide)="navigationHide($event)"
                    (navigationShow)="navigationShow($event)"
                    (navigationNext)="navigationNext($event)"
                    (navigationPrev)="navigationPrev($event)"
                  ` : ''
                }
                [injectStyles]="['
                  /* Navigation Custom Demo Styles */
                  .swiper-navigation-disabled-custom {
                      border: 2px solid red !important;
                  }
                  
                  .swiper-button-lock-custom {
                      border: 2px solid red !important;
                      background-color: purple;
                      border-radius:50%;
                      padding:10px;
                  }

                  .swiper-button-hidden-custom {
                      background-color: azure;
                      border-radius:50%;
                      padding:10px;
                  }
                  .swiper-button-disabled-custom {
                    border: 2px solid red !important;
                    background-color: gray;
                    border-radius:50%;
                    padding:10px;
                  }
                ']">  
                @for(slide of slides; track $index)  {
                  <ng-template ngSwiperSlide>
                      <div class="swiper-slide">Slide {{slide}}</div>
                  </ng-template>
                }
                @if(showElements) {
                    <div class="swiper-button-prev">
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 512 512"  xml:space="preserve">
                    <style type="text/css">
                      .st0{fill:#000000;}
                    </style>
                    <g>
                      <path class="st0" d="M154.52,265.848l90.964,69.014c2.329,1.766,4.674,2.702,6.78,2.702c2.148,0,4.022-0.974,5.276-2.741
                        c1.199-1.688,1.807-3.99,1.807-6.844v-26.424c0-6.952,5.656-12.608,12.607-12.608h75.036c8.705,0,15.788-7.085,15.788-15.788
                        v-34.313c0-8.703-7.083-15.788-15.788-15.788h-75.036c-6.951,0-12.607-5.656-12.607-12.608v-26.425
                        c0-7.065-3.659-9.584-7.082-9.584c-2.106,0-4.451,0.936-6.78,2.702l-90.964,69.014c-3.416,2.59-5.297,6.087-5.297,9.849
                        C149.223,259.762,151.103,263.259,154.52,265.848z"/>
                      <path class="st0" d="M256,0C114.842,0,0.002,114.84,0.002,256S114.842,512,256,512c141.158,0,255.998-114.84,255.998-256
                        S397.158,0,256,0z M256,66.785c104.334,0,189.216,84.879,189.216,189.215S360.334,445.215,256,445.215S66.783,360.336,66.783,256
                        S151.667,66.785,256,66.785z"/>
                    </g>
                    </svg>
                    </div>
                    <div class="swiper-button-next">
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 512 512"  xml:space="preserve">
                    <style type="text/css">
                      .st0{fill:#000000;}
                    </style>
                    <g>
                      <path class="st0" d="M165.013,288.946h75.034c6.953,0,12.609,5.656,12.609,12.608v26.424c0,7.065,3.659,9.585,7.082,9.585
                        c2.106,0,4.451-0.936,6.78-2.702l90.964-69.014c3.416-2.589,5.297-6.087,5.297-9.844c0-3.762-1.881-7.259-5.297-9.849
                        l-90.964-69.014c-2.329-1.766-4.674-2.702-6.78-2.702c-3.424,0-7.082,2.519-7.082,9.584v26.425c0,6.952-5.656,12.608-12.609,12.608
                        h-75.034c-8.707,0-15.79,7.085-15.79,15.788v34.313C149.223,281.862,156.305,288.946,165.013,288.946z"/>
                      <path class="st0" d="M256,0C114.842,0,0.002,114.84,0.002,256S114.842,512,256,512c141.158,0,255.998-114.84,255.998-256
                        S397.158,0,256,0z M256,66.785c104.334,0,189.216,84.879,189.216,189.215S360.334,445.215,256,445.215S66.783,360.336,66.783,256
                        S151.667,66.785,256,66.785z"/>
                    </g>
                    </svg>
                    </div>
                }
            </ng-swiper-element>
            @if(propAndMethodsDemo) {
              <h3>Properties</h3>
              <div style="display: flex;gap:20px;">
                <button class="btn-ng" (click)="nextEl(swiperElement)">Navigation NextEl</button>
                <button class="btn-ng" (click)="prevEl(swiperElement)">Navigation prevEl</button>
              </div>
              <br/>
              <h3>Methods</h3>
              <div style="display: flex;gap:20px;">
                <button class="btn-ng" (click)="destroy(swiperElement)">Destroy Navigation</button>
                <button class="btn-ng" (click)="init(swiperElement)">Initialize Navigation</button>
                <button class="btn-ng" (click)="update(swiperElement)">Update Navigation</button>
              </div>
            }
            <br/>
            <br/>
            @if(classStory) {
              <div><h3>Custom CSS:</h3></div>
              <code style="white-space: pre-wrap;  padding: 16px; display: block;border: 1px solid red;">
                /* Navigation Custom Demo Styles - Shadow DOM Styling (Use injectStyles) */
                .swiper-navigation-disabled-custom &#123;
                    border: 2px solid red !important;
                &#125;<br/>
                .swiper-button-lock-custom &#123;
                  border: 2px solid red !important;
                  background-color: purple;
                  border-radius:50%;
                  padding:10px;
                &#125;<br/>
                .swiper-button-hidden-custom &#123;
                    background-color: azure;
                    border-radius:50%;
                    padding:10px;
                &#125;<br/>
                .swiper-button-disabled-custom &#123;
                  border: 2px solid red !important;
                  background-color: gray;
                  border-radius:50%;
                  padding:10px;
                &#125;<br/>
                /* <br/>
                  Important note: When using swiper buttons we should use shadow DOM styling <br/>
                  (injectStyles or injectStylesUrls) to ensure styles are applied correctly, <br/>
                  as swiper buttons are rendered inside the shadow DOM of the swiper element.<br/>
                  If using custom navigation buttons outside of swiper element, we can <br/>
                  use regular CSS styling without the need for shadow DOM styling. <br/>
                */<br/>
              </code>
            }
            `,
      props: {
        navigationConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        storyName: metadata?.parameters?.storyName || '',
        description: metadata?.parameters?.docs?.description?.story || '',
        showElements: showCustomNavButtons,
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
        classStory,
        propAndMethodsDemo,
        navigationHide: (eventData: unknown) => {
          console.log('Template intercepted event (navigationHide):', eventData);
          alert('Navigation Hidden');
        },
        navigationShow: (eventData: unknown) => {
          console.log('Template intercepted event (navigationShow):', eventData);
          alert('Navigation Shown');
        },
        navigationNext: (eventData: unknown) => {
          console.log('Template intercepted event (navigationNext):', eventData);
          alert('Navigation Next Clicked');
        },
        navigationPrev: (eventData: unknown) => {
          console.log('Template intercepted event (navigationPrev):', eventData);
          alert('Navigation Previous Clicked');
        },
        destroy: (swiperElement: any) => {
          console.log('Template intercepted event (navigation destroy):');
          alert('Navigation Destroyed - navigation will not work now onwards');
          swiperElement.swiperInstance?.navigation?.destroy();
        },
        init: (swiperElement: any) => {
          console.log('Template intercepted event (navigation init):');
          alert('Navigation Initialized - navigation will work now');
          swiperElement.swiperInstance?.navigation?.init();
        },
        update: (swiperElement: any) => {
          console.log('Template intercepted event (navigation update):');
          alert('Navigation Updated');
          swiperElement.swiperInstance?.navigation?.update();
        },
        nextEl: (swiperElement: any) => {
          console.log('Template intercepted property (navigation nextEl):');
          alert('Check console for nextEl property value');
          console.log(swiperElement.swiperInstance?.navigation?.nextEl);
        },
        prevEl: (swiperElement: any) => {
          console.log('Template intercepted property (navigation prevEl):');
          alert('Check console for prevEl property value');
          console.log(swiperElement.swiperInstance?.navigation?.prevEl);
        }
      },
    };
  },
};