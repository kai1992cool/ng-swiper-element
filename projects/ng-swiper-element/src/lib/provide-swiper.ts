// import function to register Swiper Core custom elements
import { Provider } from '@angular/core';
import { register as registerBundle } from 'swiper/element/bundle';
import { register as registerCore } from 'swiper/element';
// register Swiper custom elements

export type SwiperMode = 'bundle' | 'core';

export const provideSwiper = (mode: SwiperMode = 'bundle'): Provider[] => {
    if (typeof window !== 'undefined') {
        if (mode === 'bundle') {
            registerBundle();
        } else {
            registerCore();
        }
    }
    return [];
}

export const enableSwiper = (mode: SwiperMode = 'bundle'): void => {
    if (typeof window !== 'undefined') {
        if (mode === 'bundle') {
            registerBundle();
        } else {
            registerCore();
        }
    }
}