import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideSwiper } from 'ng-swiper-element';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [provideSwiper(), provideZonelessChangeDetection()],
}).catch((error: unknown) => console.error(error));
