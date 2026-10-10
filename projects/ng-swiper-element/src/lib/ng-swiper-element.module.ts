import { NgModule } from '@angular/core';
import { SwiperElementComponent } from './ng-swiper-element.component';
import { NgSwiperButtonDirective } from './directive/ng-swiper-button.directive';
import { NgSwiperSlideDirective } from './directive/ng-swiper-slide.directive';

@NgModule({
  imports: [SwiperElementComponent, NgSwiperButtonDirective, NgSwiperSlideDirective],
  exports: [SwiperElementComponent, NgSwiperButtonDirective, NgSwiperSlideDirective]
})
export class NgSwiperElementModule {}
