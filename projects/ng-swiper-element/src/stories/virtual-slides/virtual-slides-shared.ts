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

export const virtualSlidesArgTypes = {
  enabled: {
    control: 'boolean',
    description: 'Whether the virtual slides are enabled.',
  },
  addSlidesAfter: {
    control: 'number',
    description: 'Increases amount of pre-rendered slides after active slide.',
  },
  addSlidesBefore: {
    control: 'number',
    description: 'Increases amount of pre-rendered slides before active slide.',
  },
  cache: {
    control: 'boolean',
    description: 'Enables DOM cache of rendering slides html elements. Once they are rendered they will be saved to cache and reused from it.',
  },
  renderExternal: {
    control: 'function',
    description: 'Function for external rendering (e.g. using some other library to handle DOM manipulations and state like React.js or Vue.js).',
  },
  renderExternalUpdate: {
    control: 'boolean',
    description: 'When enabled (by default) it will update Swiper layout right after renderExternal called. Useful to disable and update swiper manually when used with render libraries that renders asynchronously',
  },
  renderSlide: {
    control: 'function',
    description: 'Function to render slide. As an argument it accepts current slide item for slides array and index number of the current slide. Function must return an outer HTML of the swiper slide or slide HTML element.',
  },
  slides: {
    control: 'object',
    description: 'Array with slides',
  },
  slidesPerViewAutoSlideSize: {
    control: 'number',
    description: 'Slide size for slidesPerView: auto (in px)',
  },
} as any;

export const virtualSlidesSharedMeta: Meta = {
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
  argTypes: virtualSlidesArgTypes,
  render: (args: any, metadata: any) => {
    const storyName = metadata?.parameters?.storyName || '';
    const description = metadata?.parameters?.docs?.description?.story || '';
    const totalSlides = metadata?.parameters?.totalSlides || 500;
    const propAndMethodsDemo = !!metadata?.parameters?.propAndMethodsDemo;
    let slidesPerView = undefined;
    if(metadata?.parameters?.args?.slidesPerView) {
      slidesPerView = metadata?.parameters?.args?.slidesPerView;
    }
    const scopedThis = {
      virtualData: [],
      offset: 0,
      fromIndex: 0,
    }
    // Build virtual slides config object from args
    const virtualConfig: any = {};
    Object.keys(virtualSlidesArgTypes).forEach((key) => {
      if (args[key] !== undefined) {
        virtualConfig[key] = args[key];
      }
    });
    if (virtualConfig.renderExternal) {
      virtualConfig.renderExternal = virtualConfig.renderExternal.bind(scopedThis);
    }

    return {
      template: `
        <style>
          .btn-group {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }
          ::ng-deep ng-swiper-element {
            height: 250px;
          }
        </style>

        @if(propAndMethodsDemo) {
          <h3>Virtual Slides Properties & Methods Demo</h3>
          <div class="btn-group">
            <button class="btn-ng" (click)="removeSlideOn(swiperElement, 2)">Remove Slide from Virtual on #2th index</button>
            <button class="btn-ng" (click)="appendVirtualSlide(swiperElement)">Append Virtual Slide</button>
            <button class="btn-ng" (click)="prependVirtualSlide(swiperElement)">Prepend Virtual Slide</button>
            <button class="btn-ng" (click)="removeAllVirtualSlides(swiperElement)">Remove All Slides</button>
            <button class="btn-ng" (click)="updateVirtual(swiperElement)">Update Virtual</button>
            <button class="btn-ng" (click)="logVirtualProperties(swiperElement)">Log Virtual Properties</button>
          </div>
          <br/>
        }

        <p class="info-text">Rendering <strong>{{ slides.length }}</strong> slides virtually using DOM virtualization.</p>
        @if(scopedThis?.virtualData?.length > 0) {
          <p class="info-text">
            Virtual Data Length: 
            <strong>
              {{ scopedThis.virtualData.length }}
            </strong>
          </p>
          <p class="info-text">
            Virtual Config: 
            <strong>
              {{ scopedThis | json }}
            </strong>
          </p> 
        } 
        <ng-swiper-element 
            [virtual]="virtualConfig"
            [slidesPerView]="slidesPerView"
            [spaceBetween]="20"
            [injectStylesUrls]="injectStylesUrls"
            #swiperElement="ngSwiperElement"> 
            @if(scopedThis?.virtualData?.length > 0) {
                @for(slide of scopedThis.virtualData; let i = $index; track i) {
                  <div 
                    class="swiper-slide"
                    [style.left]="scopedThis?.offset + 'px'"
                    [attr.data-swiper-slide-index]="scopedThis?.fromIndex + i"
                  >
                    Slide {{ i + 1 }}
                  </div>
                }
            } @else {
              @if(!virtualConfig?.renderSlide && virtualConfig?.slides?.length <= 0) {
                @for(slide of slides; track $index) {
                  <ng-template ngSwiperSlide>
                      <div class="swiper-slide">Slide {{slide}}</div>
                  </ng-template>
                }
              } 
            }
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </ng-swiper-element>
      `,
      props: {
        slidesPerView,
        scopedThis,
        storyName,
        description,
        virtualConfig,
        propAndMethodsDemo,
        injectStylesUrls: ['/swiper/css/swiper-bundle.css'],
        slides: Array.from({ length: totalSlides }, (_, i) => i + 1),

        // Methods
        removeSlideOn: (swiperElement: any, index: number) => {
          swiperElement.swiperInstance?.virtual?.removeSlide(index);
        },
        appendVirtualSlide: (swiperElement: any) => {
          const swiper = swiperElement.swiperInstance;
          if (swiper?.virtual) {
            const nextSlideNumber = swiper.slides.length + 1;
            swiper.virtual.appendSlide(`<div class="swiper-slide">Slide ${nextSlideNumber}</div>`);
            alert(`Appended Slide ${nextSlideNumber}`);
          }
        },
        prependVirtualSlide: (swiperElement: any) => {
          const swiper = swiperElement.swiperInstance;
          if (swiper?.virtual) {
            swiper.virtual.prependSlide('<div class="swiper-slide">Prepended Slide</div>');
            alert('Prepended new slide');
          }
        },
        removeAllVirtualSlides: (swiperElement: any) => {
          swiperElement.swiperInstance?.virtual?.removeAllSlides();
          alert('All virtual slides removed!');
        },
        updateVirtual: (swiperElement: any) => {
          swiperElement.swiperInstance?.virtual?.update(true);
          alert('Virtual slides state updated');
        },
        logVirtualProperties: (swiperElement: any) => {
          const swiper = swiperElement.swiperInstance;
          if (swiper?.virtual) {
            console.log('Virtual Properties:', {
              slides: swiper.virtual.slides,
              cache: swiper.virtual.cache,
              from: swiper.virtual.from,
              to: swiper.virtual.to,
            });
          } else {
            console.log('Virtual not available on swiper instance');
          }
        },

        // Events
        virtualUpdate: (eventData: unknown) => {
          console.log('Template intercepted event (virtualUpdate):', eventData);
        },
      },
    };
  },
};