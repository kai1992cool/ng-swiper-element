import { bootstrapApplication } from '@angular/platform-browser';
import { provideSwiper } from 'ng-swiper-element';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [provideSwiper()],
}).catch((error: unknown) => console.error(error));
