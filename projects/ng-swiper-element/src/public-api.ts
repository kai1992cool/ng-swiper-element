/*
 * Public API Surface of ng-swiper-element
 */
import { register } from 'swiper/element';
if (typeof window !== 'undefined') {
    try {
        register();
    } catch (e: any) {
        console.error('Error: Make sure you installed swiper in your application', e.toString());
    }
}
export * from './lib/ng-swiper-element.component';
export * from './lib/directive/ng-swiper-slide.directive';
export * from './lib/provide-swiper';
