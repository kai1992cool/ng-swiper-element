import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { NgSwiperSlideDirective, provideSwiper, SwiperElementComponent } from 'ng-swiper-element';
import { swiperEvents } from '../lib/ng-swiper-element-events.class';

const args: any = {};

swiperEvents.forEach((eventName: string) => {
    args[eventName] = fn();
});

const meta: Meta<SwiperElementComponent> = {
    title: 'Ng Swiper Element',
    tags: ['autodocs'],
    component: SwiperElementComponent,
    decorators: [
        moduleMetadata({
            imports: [SwiperElementComponent, NgSwiperSlideDirective],
        }),
        applicationConfig({
            providers: [provideSwiper()],
        }),
    ],
    args,
    render: (args: any) => ({
        template: `<ng-swiper-element [pageable]="true" [navigable]="true">  
            <ng-template ngSwiperSlide lazy
                ><img src="https://placehold.co/600x400"
            /></ng-template>
            <ng-template ngSwiperSlide
                ><img src="https://placehold.co/600x400"
            /></ng-template>
            <ng-template ngSwiperSlide lazy
                ><img src="https://placehold.co/600x400"
            /></ng-template>
            <ng-template ngSwiperSlide
                ><img src="https://placehold.co/600x400"
            /></ng-template>
            <ng-template ngSwiperSlide lazy
                ><img src="https://placehold.co/600x400"
            /></ng-template>
            <ng-template ngSwiperSlide
                ><img src="https://placehold.co/600x400"
            /></ng-template>
        </ng-swiper-element>`
    }),
};

export default meta;
type Story = StoryObj<SwiperElementComponent>;

export const LoggedIn: Story = {
    args: {},
};

export const LoggedOut: Story = {};
