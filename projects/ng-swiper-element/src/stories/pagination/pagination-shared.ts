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

export const navigationArgTypes = {
    type: {
      control: 'select',
      options: ['bullets', 'fraction', 'progressbar', 'custom'],
      description: 'Type of pagination',
    },
    clickable: {
      control: 'boolean',
      description: 'If true, clicking on pagination button will cause transition to appropriate slide',
    },
    enabled: {
      control: 'boolean',
      description: 'Boolean property to use with breakpoints to enable/disable pagination on certain breakpoints',
    },
    hideOnClick: {
      control: 'boolean',
      description: 'Toggle pagination container visibility after click on slider',
    },
    progressbarOpposite: {
      control: 'boolean',
      description: 'Makes pagination progressbar opposite to Swiper\'s direction parameter, means vertical progressbar for horizontal swiper direction and horizontal progressbar for vertical swiper direction',
    },
    bulletElement: {
      control: 'text',
      description: 'Defines which HTML tag will be used to represent single pagination bullet. Only for \'bullets\' pagination type.',
    },
    dynamicBullets: {
      control: 'boolean',
      description: 'Good to enable if you use bullets pagination with a lot of slides',
    },
    dynamicMainBullets: {
      control: 'number',
      description: 'The number of main bullets visible when dynamicBullets enabled',
    },
    bulletClass: {
      control: 'text',
      description: 'CSS class name of single pagination bullet',
    },
    clickableClass: {
      control: 'text',
      description: 'CSS class name set to pagination when it is clickable',
    },
    currentClass: {
      control: 'text',
      description: 'CSS class name of the element with currently active index in "fraction" pagination',
    },
    hiddenClass: {
      control: 'text',
      description: 'CSS class name of pagination when it becomes inactive',
    },
    horizontalClass: {
      control: 'text',
      description: 'CSS class name set to pagination in horizontal Swiper',
    },
    modifierClass: {
      control: 'text',
      description: 'The beginning of the modifier CSS class name that will be added to pagination depending on parameters',
    },
    paginationDisabledClass: {
      control: 'text',
      description: 'CSS class name added on swiper container and pagination element when pagination is disabled by breakpoint',
    },
    progressbarFillClass: {
      control: 'text',
      description: 'CSS class name of pagination progressbar fill element',
    },
    progressbarOppositeClass: {
      control: 'text',
      description: 'CSS class name of pagination progressbar opposite',
    },
    totalClass: {
      control: 'text',
      description: 'CSS class name of pagination when it becomes inactive',
    },
    verticalClass: {
      control: 'text',
      description: 'CSS class name set to pagination in vertical Swiper',
    },
    lockClass: {
      control: 'text',
      description: 'CSS class name set to pagination when it is disabled',
    },
    bulletActiveClass: {
      control: 'text',
      description: 'CSS class name of currently active pagination bullet',
    },
    el: {
      control: 'text',
      description: 'String with CSS selector or HTML element of the container with pagination',
    },
    renderBullet: {
      control: 'function',
      description: 'This parameter allows totally customize pagination bullets, you need to pass here a function that accepts index number of pagination bullet and required element class name (className). Only for \'bullets\' pagination type',
    },
    renderCustom: {
      control: 'function',
      description: '	This parameter is required for \'custom\' pagination type where you have to specify how it should be rendered.',
    },
    renderFraction: {
      control: 'function',
      description: 'This parameter allows to customize "fraction" pagination html. Only for \'fraction\' pagination type',
    },
    renderProgressbar: {
      control: 'function',
      description: 'This parameter allows to customize "progress" pagination. Only for \'progress\' pagination type',
    },
    formatFractionCurrent: {
      control: 'function',
      description: 'format fraction pagination current number. Function receives current number, and you need to return formatted value',
    },
    formatFractionTotal: {
      control: 'function',
      description: 'format fraction pagination total number. Function receives total number, and you need to return formatted value',
    },
  } as any;

export const paginationSharedMeta: Meta = {
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
          <h2 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;color: white">{{ storyName }}</h2>
          <p style="margin: 0; font-size: 14px; color: white;">{{ description }}</p>
        </div>
        ${story}
      </div>
    `),
  ],
  argTypes: navigationArgTypes,
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
    
    // Build pagination config from args
    const paginationConfig: any = {};
    Object.entries(navigationArgTypes).forEach(([key, value]: any) => {
      if (args[key] !== undefined) {
        paginationConfig[key] = args[key];
      }
    });
    if (args.clickable === undefined) {
      paginationConfig.clickable = args.type === 'bullets'; // Default clickable to true for bullets, false for other types
    }
    
    return {
      template: `
      <style>
      </style>
            <ng-swiper-element 
                [pagination]="paginationConfig"
                [direction]="direction"
                [injectStylesUrls]="injectStylesUrls"
                #swiperElement="ngSwiperElement"
                ${
                  eventsShowcase ? 
                  `
                    (paginationHide)="paginationHide($event)"
                    (paginationShow)="paginationShow($event)"
                    (paginationRender)="paginationRender($event)"
                    (paginationUpdate)="paginationUpdate($event)"
                  ` : ''
                }
                [injectStyles]="['
                  /* Pagination Custom Demo Styles */
                  .swiper-pagination-bullet-custom {
                      margin: 10px;
                      height: 10px;
                      width: 10px;
                      display: inline-block;
                      border-radius: 10px;
                      border: 1px solid yellow;
                  }
                  .swiper-pagination-bullet-active-custom {
                      border: 2px solid red !important;
                  }
                  .custom-progressbar {
                    background: linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)   !important;
                  }
                  .testy {
                    padding: 10px;
                    padding-bottom:12px;
                  }
                  /* ==========================================================================
                    Swiper Pagination Custom Classes
                    ========================================================================== */

                  /* 1. Fraction Pagination Customizations */
                  .swiper-pagination-current-custom {
                    color: #ff5722; /* Vibrant orange for the active page number */
                    font-weight: bold;
                    font-size: 1.2em;
                  }
                  .swiper-pagination-clickable-custom {
                    cursor: pointer;
                    border: 2px solid red !important;
                  }
                  .swiper-pagination-total-custom {
                    color: #757575; /* Muted gray for the total page count */
                    font-size: 0.9em;
                  }

                  /* 2. Bullet Pagination Customizations */
                  .swiper-pagination-bullet-custom {
                    width: 12px;
                    height: 12px;
                    background-color: #e0e0e0;
                    opacity: 1;
                    border-radius: 50%;
                    transition: transform 0.3s ease, background-color 0.3s ease;
                  }

                  .swiper-pagination-bullet-active-custom {
                    background-color: red; /* Swiper signature blue or your brand color */
                    transform: scale(1.3);      /* Makes the active bullet stand out */
                  }

                  /* 3. Modifier Class Customization 
                    Note: Swiper appends layout types to this prefix (e.g., .swiper-pagination-custom-bullets)
                  */
                  .swiper-pagination-custom- {
                    /* add if needed */
                  }

                  /* 4. Progressbar Pagination Customizations */
                  .swiper-pagination-progressbar-fill-custom {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    transform: scale(0);
                    transform-origin: left top;
                    background: linear-gradient(90deg, #4caf50, #8bc34a) !important; /* Green gradient fill */
                  }

                  .swiper-pagination-progressbar-opposite-custom {
                    width: var(--swiper-pagination-progressbar-size, 4px) !important;
                    height: 100% !important;
                    left: 0 !important;
                    top: 0 !important;
                    border: 1px solid red !important;
                  }

                  /* 5. Hidden State Customization */
                  .swiper-pagination-hidden-custom {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    transition: opacity 0.4s ease, visibility 0.4s ease;
                  }

                  /* 1. Lock Class 
                  */
                  .swiper-pagination-lock-custom {
                    display: block !important;
                    background-color: blue !important; /* Distinct color to indicate locked state */
                  }

                  /* 2. Hidden Class 
                    Triggered when pagination is programmatically toggled or fades out
                  */
                  .swiper-pagination-hidden-custom {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    transition: opacity 0.3s ease, visibility 0.3s ease;
                  }

                  /* 3. Horizontal Orientation Layout */
                  .swiper-pagination-horizontal-custom {
                    border: 1px solid red;
                  }

                  /* 4. Vertical Orientation Layout */
                  .swiper-pagination-vertical-custom {
                    border: 1px solid yellow;
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
            <div class="swiper-pagination"></div>
            @if(propAndMethodsDemo) {
              <h3>Properties</h3>
              <div style="display: flex;gap:20px;">
                <button class="btn-ng" (click)="paginationEl(swiperElement)">Pagination El</button>
                <button class="btn-ng" (click)="paginationBullets(swiperElement)">Pagination Bullets</button>
              </div>
              <br/>
              <h3>Methods</h3>
              <div style="display: flex;gap:20px;">
                <button class="btn-ng" (click)="destroy(swiperElement)">Destroy Pagination</button>
                <button class="btn-ng" (click)="init(swiperElement)">Initialize Pagination</button>
                <button class="btn-ng" (click)="render(swiperElement)">Render Pagination</button>
                <button class="btn-ng" (click)="update(swiperElement)">Update Pagination</button>
              </div>
            }
            `,
      props: {
        storyName,
        description,
        paginationConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        showElements: showCustomNavButtons,
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
        direction,
        classStory,
        propAndMethodsDemo,
        eventsShowcase,
        paginationHide: (eventData: unknown) => {
          console.log('Template intercepted event (paginationHide):', eventData);
          alert('Pagination Hidden');
        },
        paginationShow: (eventData: unknown) => {
          console.log('Template intercepted event (paginationShow):', eventData);
          alert('Pagination Shown');
        },
        paginationRender: (eventData: unknown) => {
          console.log('Template intercepted event (paginationRender):', eventData);
          alert('Pagination Rendered');
        },
        paginationUpdate: (eventData: unknown) => {
          console.log('Template intercepted event (paginationUpdate):', eventData);
          alert('Pagination Updated');
        },
        destroy: (swiperElement: any) => {
          console.log('Template intercepted method (pagination destroy):');
          alert('Pagination Destroyed - pagination will not work now onwards');
          swiperElement.swiperInstance?.pagination?.destroy();
        },
        init: (swiperElement: any) => {
          console.log('Template intercepted method (pagination init):');
          alert('Pagination Initialized - pagination will work now');
          swiperElement.swiperInstance?.pagination?.init();
        },
        render: (swiperElement: any) => {
          console.log('Template intercepted method (pagination render):');
          alert('Pagination Rendered');
          swiperElement.swiperInstance?.pagination?.render();
        },
        update: (swiperElement: any) => {
          console.log('Template intercepted method (pagination update):');
          alert('Pagination Updated');
          swiperElement.swiperInstance?.pagination?.update();
        },
        paginationEl: (swiperElement: any) => {
          console.log('Template intercepted property (pagination el):');
          alert('Check console for pagination el property value');
          console.log(swiperElement.swiperInstance?.pagination?.el);
        },
        paginationBullets: (swiperElement: any) => {
          console.log('Template intercepted property (pagination bullets):');
          alert('Check console for pagination bullets property value');
          console.log(swiperElement.swiperInstance?.pagination?.bullets);
        }
      },
    };
  },
};