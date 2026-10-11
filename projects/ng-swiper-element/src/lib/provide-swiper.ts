import { Provider } from '@angular/core';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

export const provideSwiper = (): Provider[] => {
    if (typeof window !== 'undefined') {
        register();
    }
    return [];
}

export const enableSwiper = (): void => {
    if (typeof window !== 'undefined') {
        register();
    }
}