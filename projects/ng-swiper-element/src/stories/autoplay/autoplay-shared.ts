import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
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

export const autoplayArgTypes = {
    enabled: {
      control: 'boolean',
      description: 'Boolean property to use with breakpoints to enable/disable autoplay on certain breakpoints',
    },
    delay: {
      control: 'number',
      description: 'Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled If you need to specify different delay for specific slides you can do it by usingdata-swiper-autoplay (in ms) attribute on slide.',
    },
    disableOnInteraction: {
      control: 'boolean',
      description: 'Set to false and autoplay will not be disabled after user interactions (swipes), it will be disabled after interactions with navigation elements like buttons or scrollbar. If you use it with disableOnInteraction: false, then autoplay will be only disabled on navigation elements interactions, but will not be disabled on swipes.',
    },
    pauseOnMouseEnter: {
      control: 'boolean',
      description: 'When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.',
    },
    reverseDirection: {
      control: 'boolean',
      description: 'Enables autoplay in reverse direction',
    },
    stopOnLastSlide: {
      control: 'boolean',
      description: 'Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)',
    },
    waitForTransition: {
      control: 'boolean',
      description: 'When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition',
    },
  } as any;

export const autoplaySharedMeta: Meta = {
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
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
  argTypes: autoplayArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const slidesDelay = metadata?.parameters?.slidesDelay || [];
    const isVertical = metadata?.parameters?.isVertical || false;
    const direction = isVertical ? 'vertical' : 'horizontal';
    const showCustomNavButtons = !!metadata?.parameters?.showCustomNavButtons;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;
    const classStory = !!metadata?.parameters?.classStory;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    
    // Build autoplay config from args
    const autoplayConfig: any = {};
    Object.entries(autoplayArgTypes).forEach(([key, value]: any) => {
      if (args[key] !== undefined) {
        autoplayConfig[key] = args[key];
      }
    });
    
    return {
      template: `
      <style>
      </style>
            <ng-swiper-element 
                [autoplay]="autoplayConfig"
                [direction]="direction"
                [injectStylesUrls]="injectStylesUrls"
                #swiperElement="ngSwiperElement"
                ${
                  eventsShowcase ? 
                  `
                    (autoplayEvent)="autoplayEvent($event)"
                    (autoplayPause)="autoplayPause($event)"
                    (autoplayResume)="autoplayResume($event)"
                    (autoplayStart)="autoplayStart($event)"
                    (autoplayStop)="autoplayStop($event)"
                    (autoplayTimeLeft)="autoplayTimeLeft($event)"
                  ` : ''
                }
                [injectStyles]="['
                  .swiper-autoplay-drag {
                      background: linear-gradient(90deg, #4caf50, #8bc34a) !important; /* Green gradient fill */
                  }
                  .swiper-autoplay-drag-custom {
                    border: 2px dashed white; /* Custom drag handle color */
                    border-radius: 4px;
                    cursor: grab;
                  }

                  .swiper-autoplay-drag-custom:active {
                    cursor: grabbing;
                  }

                  .swiper-autoplay-horizontal-custom {
                    border: 1px solid red;
                  }

                  .swiper-autoplay-vertical-custom {
                    position: absolute;
                    right: 3px;
                    top: 1%;
                    z-index: 50;
                    width: 5px;
                    height: 98%;
                    background: rgba(0, 0, 0, 0.1);
                  }

                  .swiper-autoplay-lock-custom {
                    border: 2px solid red !important;
                  }

                  .swiper-autoplay-disabled-custom {
                    opacity: 0;
                    pointer-events: none;
                  }
                ']">  
                @for(slide of slides; track $index)  {
                  <ng-template ngSwiperSlide [autoplayDelay]="slidesDelay?.[$index] || undefined">
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
              <div class="custom-autoplay"></div>
            </ng-swiper-element>
            @if(propAndMethodsDemo) {
              <h3>Properties</h3>
              <div style="display: flex;gap:20px;">
                <button class="btn-ng" (click)="paused(swiperElement)">autoplay Paused</button>
                <button class="btn-ng" (click)="running(swiperElement)">autoplay Running</button>
                <button class="btn-ng" (click)="timeLeft(swiperElement)">autoplay Time Left</button>
              </div>
              <br/>
              <h3>Methods</h3>
              <div style="display: flex;gap:20px;">
                <button class="btn-ng" (click)="pause(swiperElement)">Pause autoplay</button>
                <button class="btn-ng" (click)="resume(swiperElement)">Resume autoplay</button>
                <button class="btn-ng" (click)="start(swiperElement)">Autoplay Start</button>
                <button class="btn-ng" (click)="stop(swiperElement)">Autoplay Stop</button>
              </div>
            }
            <br/>
            <br/>
            @if(classStory) {
              <div><h3>Custom CSS:</h3></div>
              <code style="white-space: pre-wrap;  padding: 16px; display: block;border: 1px solid red;">
                /* autoplay Custom Demo Styles - Shadow DOM Styling (Use injectStyles) */<br/>
                .swiper-autoplay-bullet-custom &#123;
                    margin: 10px;
                    height: 10px;
                    width: 10px;
                    display: inline-block;
                    border-radius: 10px;
                    border: 1px solid yellow !important;
                &#125;<br/>
                .swiper-autoplay-bullet-active-custom &#123;
                    border: 2px solid red !important;
                &#125;<br/>
                .swiper-autoplay-clickable-custom &#123;
                    cursor: pointer;
                    border: 2px solid red !important;
                &#125;<br/>
                .swiper-autoplay-current-custom &#123;
                    border: 2px solid red !important;
                    background-color: darkgreen;
                    padding: 10px !important;
                    border-radius: 50%;
                &#125;<br/>
                /* <br/>
                  Important note: When using swiper buttons we should use shadow DOM styling <br/>
                  (injectStyles or injectStylesUrls) to ensure styles are applied correctly, <br/>
                  as swiper buttons are rendered inside the shadow DOM of the swiper element.<br/>
                  If using custom autoplay buttons outside of swiper element, we can <br/>
                  use regular CSS styling without the need for shadow DOM styling. <br/>
                */<br/>
              </code>
            }
            `,
      props: {
        storyName,
        description,
        autoplayConfig,
        slidesDelay,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        showElements: showCustomNavButtons,
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
        direction,
        classStory,
        propAndMethodsDemo,
        eventsShowcase,
        autoplayEvent: (eventData: unknown) => {
          console.log('Template intercepted event (autoplayEvent):', eventData);
          // alert('autoplayEvent Triggered');
        },
        autoplayPause: (eventData: unknown) => {
          console.log('Template intercepted event (autoplayPause):', eventData);
          // alert('autoplay Paused');
        },
        autoplayResume: (eventData: unknown) => {
          console.log('Template intercepted event (autoplayResume):', eventData);
          // alert('autoplay Resumed');
        },
        autoplayStart: (eventData: unknown) => {
          console.log('Template intercepted event (autoplayStart):', eventData);
          alert('autoplay Started');
        },
        autoplayStop: (eventData: unknown) => {
          console.log('Template intercepted event (autoplayStop):', eventData);
          alert('autoplay Stopped');
        },
        autoplayTimeLeft: (eventData: unknown) => {
          console.log('Template intercepted event (autoplayTimeLeft):', eventData);
          // alert('autoplay Time Left');
        },
        pause: (swiperElement: any) => {
          console.log('Template intercepted method (autoplay pause):'); 
          alert('autoplay Paused - autoplay will not work now onwards');
          swiperElement.swiperInstance?.autoplay?.pause();
        },
        resume: (swiperElement: any) => {
          console.log('Template intercepted method (autoplay resume):');
          alert('autoplay Resumed - autoplay will work now');
          swiperElement.swiperInstance?.autoplay?.resume();
        },
        start: (swiperElement: any) => {
          console.log('Template intercepted method (autoplay start):');
          alert('autoplay Started');
          swiperElement.swiperInstance?.autoplay?.start();
        },
        stop: (swiperElement: any) => {
          console.log('Template intercepted method (autoplay stop):');
          alert('autoplay Stopped');
          swiperElement.swiperInstance?.autoplay?.stop();
        },
        paused: (swiperElement: any) => {
          console.log('Template intercepted property (autoplay paused):');
          alert('Check console for autoplay paused property value');
          console.log(swiperElement.swiperInstance?.autoplay?.paused);
        },
        running: (swiperElement: any) => {
          console.log('Template intercepted property (autoplay running):');
          alert('Check console for autoplay running property value');
          console.log(swiperElement.swiperInstance?.autoplay?.running);
        },
        timeLeft: (swiperElement: any) => {
          console.log('Template intercepted property (autoplay time left):');
          alert('Check console for autoplay time left property value');
          console.log(swiperElement.swiperInstance?.autoplay?.timeLeft);
        }
      },
    };
  },
};