import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  enableSwiper,
  NgSwiperSlideDirective,
  SwiperElementComponent,
} from 'ng-swiper-element';
import { AppComponent } from './app.component';

enableSwiper();

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SwiperElementComponent, NgSwiperSlideDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
