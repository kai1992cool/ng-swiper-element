// import function to register Swiper Core custom elements
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { register as registerBundle } from 'swiper/element/bundle';
import { register as registerCore } from 'swiper/element';
// register Swiper custom elements

export type SwiperMode = 'bundle' | 'core';

export const provideSwiper = (mode: SwiperMode = 'bundle'): EnvironmentProviders => {
    if (typeof window !== 'undefined') {
        if (mode === 'bundle') {
            registerBundle();
        } else {
            registerCore();
        }
    }
    return makeEnvironmentProviders([]);
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