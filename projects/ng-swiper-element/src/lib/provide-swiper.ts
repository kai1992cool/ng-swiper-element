// import function to register Swiper Core custom elements
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { register as registerBundle } from 'swiper/element/bundle';
import { register as registerCore } from 'swiper/element';
// register Swiper custom elements

export type SwiperMode = 'bundled' | 'modular';

export const provideSwiper = (mode: SwiperMode = 'bundled'): EnvironmentProviders => {
    if (typeof window !== 'undefined') {
        if (mode === 'bundled') {
            registerBundle();
        } else {
            registerCore();
        }
    }
    return makeEnvironmentProviders([]);
}

export const enableSwiper = (mode: SwiperMode = 'bundled'): void => {
    if (typeof window !== 'undefined') {
        if (mode === 'bundled') {
            registerBundle();
        } else {
            registerCore();
        }
    }
}