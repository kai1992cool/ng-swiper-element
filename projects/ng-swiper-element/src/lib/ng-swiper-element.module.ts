import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgSwiperButtonDirective } from './directive/ng-swiper-button.directive';
import { NgSwiperSlideDirective } from './directive/ng-swiper-slide.directive';
import { SwiperElementComponent } from './ng-swiper-element.component';

@NgModule({
  declarations: [
    SwiperElementComponent,
    NgSwiperSlideDirective,
    NgSwiperButtonDirective,
  ],
  imports: [CommonModule],
  exports: [
    SwiperElementComponent,
    NgSwiperSlideDirective,
    NgSwiperButtonDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgSwiperElementModule {}
