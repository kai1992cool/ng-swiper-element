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
    type: {
      control: 'select',
      options: ['bullets', 'fraction', 'progressbar', 'custom'],
      description: 'Type of pagination',
      table: { defaultValue: { summary: 'bullets' } },
    },
    clickable: {
      control: 'boolean',
      description: 'If true, clicking on pagination button will cause transition to appropriate slide',
      table: { defaultValue: { summary: 'false' } },
    },
    enabled: {
      control: 'boolean',
      description: 'Boolean property to use with breakpoints to enable/disable pagination on certain breakpoints',
      table: { defaultValue: { summary: 'true' } },
    },
    hideOnClick: {
      control: 'boolean',
      description: 'Toggle pagination container visibility after click on slider',
      table: { defaultValue: { summary: 'true' } },
    },
    bulletElement: {
      control: 'text',
      description: 'Defines which HTML tag will be used to represent single pagination bullet. Only for \'bullets\' pagination type.',
      table: { defaultValue: { summary: 'span' } },
    },
    dynamicBullets: {
      control: 'boolean',
      description: 'Good to enable if you use bullets pagination with a lot of slides',
      table: { defaultValue: { summary: 'false' } },
    },
    dynamicMainBullets: {
      control: 'number',
      description: 'The number of main bullets visible when dynamicBullets enabled',
      table: { defaultValue: { summary: '1' } },
    },
    bulletClass: {
      control: 'text',
      description: 'CSS class name of single pagination bullet',
      table: { defaultValue: { summary: 'swiper-pagination-bullet' } },
    },
    bulletActiveClass: {
      control: 'text',
      description: 'CSS class name of currently active pagination bullet',
      table: { defaultValue: { summary: 'swiper-pagination-bullet-active' } },
    },
    hiddenClass: {
      control: 'text',
      description: 'CSS class name of pagination when it becomes inactive',
      table: { defaultValue: { summary: 'swiper-pagination-hidden' } },
    },
    lockClass: {
      control: 'text',
      description: 'CSS class name set to pagination when it is disabled',
      table: { defaultValue: { summary: 'swiper-pagination-lock' } },
    },
    paginationDisabledClass: {
      control: 'text',
      description: 'CSS class name added when pagination is disabled by breakpoint',
      table: { defaultValue: { summary: 'swiper-pagination-disabled' } },
    },
  } as any,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const numberOfSlides = metadata?.parameters?.numberOfSlides || 5;
    const showCustomNavButtons = !!metadata?.parameters?.showCustomNavButtons;
    const eventsShowcase = !!metadata?.parameters?.eventsShowcase;
    const classStory = !!metadata?.parameters?.classStory;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    
    // Build pagination config from args
    const paginationConfig: any = {
      el: '.swiper-pagination',
    };
    
    if (args.type !== undefined) {
      paginationConfig.type = args.type;
    }
    if (args.clickable !== undefined) {
      paginationConfig.clickable = args.clickable;
    }
    if (args.enabled !== undefined) {
      paginationConfig.enabled = args.enabled;
    }
    if (args.hideOnClick !== undefined) {
      paginationConfig.hideOnClick = args.hideOnClick;
    }
    if (args.bulletElement !== undefined) {
      paginationConfig.bulletElement = args.bulletElement;
    }
    if (args.dynamicBullets !== undefined) {
      paginationConfig.dynamicBullets = args.dynamicBullets;
    }
    if (args.dynamicMainBullets !== undefined) {
      paginationConfig.dynamicMainBullets = args.dynamicMainBullets;
    }
    if (args.bulletClass !== undefined) {
      paginationConfig.bulletClass = args.bulletClass;
    }
    if (args.bulletActiveClass !== undefined) {
      paginationConfig.bulletActiveClass = args.bulletActiveClass;
    }
    if (args.hiddenClass !== undefined) {
      paginationConfig.hiddenClass = args.hiddenClass;
    }
    if (args.lockClass !== undefined) {
      paginationConfig.lockClass = args.lockClass;
    }
    if (args.paginationDisabledClass !== undefined) {
      paginationConfig.paginationDisabledClass = args.paginationDisabledClass;
    }
    if (args.clickable === undefined) {
      paginationConfig.clickable = args.type === 'bullets'; // Default clickable to true for bullets, false for other types
    }
    
    return {
      template: `
      <style>
      </style>
            <ng-swiper-element 
                [pagination]="paginationConfig"
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
                      border: 1px solid yellow !important;
                  }
                  .swiper-pagination-bullet-active-custom {
                      border: 2px solid red !important;
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
            <br/>
            <br/>
            @if(classStory) {
              <div><h3>Custom CSS:</h3></div>
              <code style="white-space: pre-wrap;  padding: 16px; display: block;border: 1px solid red;">
                /* Pagination Custom Demo Styles - Shadow DOM Styling (Use injectStyles) */<br/>
                .swiper-pagination-bullet-custom &#123;
                    margin: 10px;
                    height: 10px;
                    width: 10px;
                    display: inline-block;
                    border-radius: 10px;
                    border: 1px solid yellow !important;
                &#125;<br/>
                .swiper-pagination-bullet-active-custom &#123;
                    border: 2px solid red !important;
                &#125;<br/>
                /* <br/>
                  Important note: When using swiper buttons we should use shadow DOM styling <br/>
                  (injectStyles or injectStylesUrls) to ensure styles are applied correctly, <br/>
                  as swiper buttons are rendered inside the shadow DOM of the swiper element.<br/>
                  If using custom pagination buttons outside of swiper element, we can <br/>
                  use regular CSS styling without the need for shadow DOM styling. <br/>
                */<br/>
              </code>
            }
            `,
      props: {
        storyName,
        description,
        paginationConfig,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        showElements: showCustomNavButtons,
        slides: Array.from({ length: numberOfSlides }, (_, i) => i + 1),
        classStory,
        propAndMethodsDemo,
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