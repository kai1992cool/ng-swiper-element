import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { NgSwiperSlideDirective, provideSwiper, SwiperElementComponent, NgSwiperButtonDirective } from 'ng-swiper-element';
import { swiperEvents } from '../lib/ng-swiper-element-events.class';
const args: any = {};

swiperEvents.forEach((eventName: string) => {
    args[eventName] = fn();
});

const meta: Meta<SwiperElementComponent> = {
    title: 'Ng Swiper Element/Features',
    tags: ['autodocs'],
    component: SwiperElementComponent,
    decorators: [
        moduleMetadata({
            imports: [SwiperElementComponent, NgSwiperSlideDirective, NgSwiperButtonDirective],
        }),
        applicationConfig({
            providers: [provideSwiper()],
        }),
    ],
    argTypes: {
        addIcons: {
            control: 'boolean',
            description: 'Add SVG icons to navigation buttons',
            table: { defaultValue: { summary: 'true' } },
        },
        disabledClass: {
            control: 'text',
            description: 'CSS class name added to swiper container when navigation is disabled',
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
    } as any,
    render: (args: any) => ({
        template: `<div style="position: relative;">
            <ng-swiper-element 
                [navigation]="{
                    addIcons: addIcons,
                    disabledClass: disabledClass,
                    enabled: enabled,
                    hiddenClass: hiddenClass,
                    hideOnClick: hideOnClick,
                    lockClass: lockClass,
                    navigationDisabledClass: navigationDisabledClass,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }"
                [injectStylesUrls]="['/swiper/css/swiper-bundle.css']"
                >  
                <ng-template ngSwiperSlide>
                    <div class="swiper-slide">Slide 1</div>
                </ng-template>
                <ng-template ngSwiperSlide>
                    <div class="swiper-slide">Slide 2</div>
                </ng-template>
                <ng-template ngSwiperSlide>
                    <div class="swiper-slide">Slide 3</div>
                </ng-template>
                <ng-template ngSwiperSlide>
                    <div class="swiper-slide">Slide 4</div>
                </ng-template>
                <ng-template ngSwiperSlide>
                    <div class="swiper-slide">Slide 5</div>
                </ng-template>
                <ng-template ngSwiperSlide>
                    <div class="swiper-slide">Slide 6</div>
                </ng-template>
                <ng-template ngSwiperSlide>
                    <div class="swiper-slide">Slide 7</div>
                </ng-template>
                <ng-template ngSwiperSlide>
                    <div class="swiper-slide">Slide 8</div>
                </ng-template>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </ng-swiper-element>
        </div>`,
        props: args,
    }),
};

export default meta;
type Story = StoryObj<SwiperElementComponent>;

export const Navigation: Story = {
    args: {
        addIcons: false,
        disabledClass: 'swiper-button-disabled',
        enabled: true,
        hiddenClass: 'swiper-button-hidden',
        hideOnClick: false,
        lockClass: 'swiper-button-lock',
        navigationDisabledClass: 'swiper-navigation-disabled',
    } as any,
};

// export const NavigationWithHideOnClick: Story = {
//     args: {
//         addIcons: true,
//         disabledClass: 'swiper-navigation-disabled',
//         enabled: true,
//         hiddenClass: 'swiper-button-hidden',
//         hideOnClick: false,
//         lockClass: 'swiper-button-lock',
//         navigationDisabledClass: 'swiper-button-disabled',
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     } as any,
// };

// export const NavigationWithoutIcons: Story = {
//     args: {
//         addIcons: true,
//         disabledClass: 'swiper-navigation-disabled',
//         enabled: true,
//         hiddenClass: 'swiper-button-hidden',
//         hideOnClick: false,
//         lockClass: 'swiper-button-lock',
//         navigationDisabledClass: 'swiper-button-disabled',
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     } as any,
// };

// export const NavigationWithCustomClasses: Story = {
//     args: {
//         addIcons: true,
//         disabledClass: 'swiper-navigation-disabled',
//         enabled: true,
//         hiddenClass: 'swiper-button-hidden',
//         hideOnClick: false,
//         lockClass: 'swiper-button-lock',
//         navigationDisabledClass: 'swiper-button-disabled',
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     } as any,
// };

// export const NavigationDisabled: Story = {
//     args: {
//         addIcons: true,
//         disabledClass: 'swiper-navigation-disabled',
//         enabled: true,
//         hiddenClass: 'swiper-button-hidden',
//         hideOnClick: false,
//         lockClass: 'swiper-button-lock',
//         navigationDisabledClass: 'swiper-button-disabled',
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     } as any,
// };
