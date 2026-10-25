import { bootstrapApplication } from '@angular/platform-browser';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideSwiper } from 'ng-swiper-element';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [provideSwiper(), provideExperimentalZonelessChangeDetection()],
}).catch((error: unknown) => console.error(error));
