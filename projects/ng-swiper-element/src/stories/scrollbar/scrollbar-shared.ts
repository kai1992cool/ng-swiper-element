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
    SwiperElementComponent,
  NgSwiperButtonDirective,
} from 'ng-swiper-element';
import { swiperEvents } from '../../lib/ng-swiper-element-events.class';
const args: any = {};

swiperEvents.forEach((eventName: string) => {
  args[eventName] = fn();
});

export const scrollbarArgTypes = {
    enabled: {
      control: 'boolean',
      description: 'Boolean property to use with breakpoints to enable/disable scrollbar on certain breakpoints',
    },
    hide: {
      control: 'boolean',
      description: 'If true, scrollbar will be hidden',
    },
    draggable: {
      control: 'boolean',
      description: 'Set to true to enable make scrollbar draggable that allows you to control slider position',
    },
    dragClass: {
      control: 'text',
      description: 'Scrollbar draggable element CSS class',
    },
    dragSize: {
      control: 'number',
      description: 'Size of scrollbar draggable element in px',
    },
    el: {
      control: 'text',
      description: 'String with CSS selector or HTML element of the container with scrollbar.',
    },
    horizontalClass: {
      control: 'text',
      description: 'CSS class name set to scrollbar in horizontal Swiper',
    },
    lockClass: {
      control: 'text',
      description: 'Scrollbar element additional CSS class when it is disabled',

    },
    scrollbarDisabledClass: {
      control: 'text',
      description: 'CSS class name added on swiper container and scrollbar element when scrollbar is disabled by breakpoint',
    },
    snapOnRelease: {
      control: 'boolean',
      description: 'Set to true to snap slider position to slides when you release scrollbar',
    },
    verticalClass: {
      control: 'text',
      description: 'CSS class name set to scrollbar in vertical Swiper',
    },
  } as any;

export const scrollbarSharedMeta: Meta = {
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
  argTypes: scrollbarArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const isVertical = metadata?.parameters?.isVertical || false;
    const direction = isVertical ? 'vertical' : 'horizontal';
    const showCustomNavButtons = !!metadata?.parameters?.showCustomNavButtons;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;
    const classStory = !!metadata?.parameters?.classStory;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    
    // Build scrollbar config from args
    const scrollbarConfig: any = {};
    Object.entries(scrollbarArgTypes).forEach(([key, value]: any) => {
      if (args[key] !== undefined) {
        scrollbarConfig[key] = args[key];
      }
    });
    
    return {
      template: `
      <style>
      :host ::ng-deep {
        .custom-scrollbar {
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          height: 6px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
          z-index: 3;
        }

        /* Style the draggable handle */
        .custom-scrollbar .swiper-scrollbar-drag {
          background: #007aff;
          border-radius: 3px;
          height: 100%;
        }
      }
      </style>
            <ng-swiper-element 
                [scrollbar]="scrollbarConfig"
                [direction]="direction"
                [injectStylesUrls]="injectStylesUrls"
                #swiperElement="ngSwiperElement"
                ${
                  eventsShowcase ? 
                  `
                    (scrollbarDragEnd)="scrollbarDragEnd($event)"
                    (scrollbarDragMove)="scrollbarDragMove($event)"
                    (scrollbarDragStart)="scrollbarDragStart($event)"
                  ` : ''
                }
                [injectStyles]="['
                  .swiper-scrollbar-drag {
                      background: linear-gradient(90deg, #4caf50, #8bc34a) !important; /* Green gradient fill */
                  }
                  .swiper-scrollbar-drag-custom {
                    border: 2px dashed white; /* Custom drag handle color */
                    border-radius: 4px;
                    cursor: grab;
                  }

                  .swiper-scrollbar-drag-custom:active {
                    cursor: grabbing;
                  }

                  .swiper-scrollbar-horizontal-custom {
                    border: 1px solid red;
                  }

                  .swiper-scrollbar-vertical-custom {
                    position: absolute;
                    right: 3px;
                    top: 1%;
                    z-index: 50;
                    width: 5px;
                    height: 98%;
                    background: rgba(0, 0, 0, 0.1);
                  }

                  .swiper-scrollbar-lock-custom {
                    border: 2px solid red !important;
                  }

                  .swiper-scrollbar-disabled-custom {
                    opacity: 0.5;
                    pointer-events: none;
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
              <div class="custom-scrollbar"></div>
            </ng-swiper-element>
            @if(propAndMethodsDemo) {
              <h3>Properties</h3>
              <div style="display: flex;gap:20px;">
                <button class="btn-ng" (click)="scrollbarEl(swiperElement)">scrollbar El</button>
                <button class="btn-ng" (click)="scrollbarDragEl(swiperElement)">scrollbar Drag El</button>
              </div>
              <br/>
              <h3>Methods</h3>
              <div style="display: flex;gap:20px;">
                <button class="btn-ng" (click)="destroy(swiperElement)">Destroy scrollbar</button>
                <button class="btn-ng" (click)="init(swiperElement)">Initialize scrollbar</button>
                <button class="btn-ng" (click)="setTranslate(swiperElement)">Scrollbar Set Translate</button>
                <button class="btn-ng" (click)="updateSize(swiperElement)">Scrollbar Update Size</button>
              </div>
            }
            `,
      props: {
        storyName,
        description,
        scrollbarConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        showElements: showCustomNavButtons,
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
        direction,
        classStory,
        propAndMethodsDemo,
        eventsShowcase,
        scrollbarDragEnd: (eventData: unknown) => {
          console.log('Template intercepted event (scrollbarDragEnd):', eventData);
          alert('scrollbar Drag Ended');
        },
        scrollbarDragMove: (eventData: unknown) => {
          console.log('Template intercepted event (scrollbarDragMove):', eventData);
          alert('scrollbar Drag Moved');
        },
        scrollbarDragStart: (eventData: unknown) => {
          console.log('Template intercepted event (scrollbarDragStart):', eventData);
          alert('scrollbar Drag Started');
        },
        destroy: (swiperElement: any) => {
          console.log('Template intercepted method (scrollbar destroy):');
          alert('scrollbar Destroyed - scrollbar will not work now onwards');
          swiperElement.swiperInstance?.scrollbar?.destroy();
        },
        init: (swiperElement: any) => {
          console.log('Template intercepted method (scrollbar init):');
          alert('scrollbar Initialized - scrollbar will work now');
          swiperElement.swiperInstance?.scrollbar?.init();
        },
        setTranslate: (swiperElement: any) => {
          console.log('Template intercepted method (scrollbar setTranslate):');
          alert('scrollbar Translate Set');
          swiperElement.swiperInstance?.scrollbar?.setTranslate();
        },
        updateSize: (swiperElement: any) => {
          console.log('Template intercepted method (scrollbar updateSize):');
          alert('scrollbar Size Updated');
          swiperElement.swiperInstance?.scrollbar?.updateSize();
        },
        scrollbarEl: (swiperElement: any) => {
          console.log('Template intercepted property (scrollbar el):');
          alert('Check console for scrollbar el property value');
          console.log(swiperElement.swiperInstance?.scrollbar?.el);
        },
        scrollbarDragEl: (swiperElement: any) => {
          console.log('Template intercepted property (scrollbar drag el):');
          alert('Check console for scrollbar drag el property value');
          console.log(swiperElement.swiperInstance?.scrollbar?.dragEl);
        }
      },
    };
  },
};