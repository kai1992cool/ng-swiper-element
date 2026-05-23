// import function to register Swiper Core custom elements
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

export const provideSwiper = (): EnvironmentProviders => {
    if (typeof window !== 'undefined') {
        register();
    }
    return makeEnvironmentProviders([]);
}