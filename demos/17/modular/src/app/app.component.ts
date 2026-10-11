import { Component } from '@angular/core';
import type { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <main class="demo">
      <h1>ng-swiper-element - NgModule</h1>
      <p>Angular 17 demo: navigation, pagination, and autoplay</p>

      <ng-swiper-element [swiperOptions]="swiperOptions">
        <ng-template ngSwiperSlide>
          <article class="slide slide-one">Slide 1</article>
        </ng-template>
        <ng-template ngSwiperSlide>
          <article class="slide slide-two">Slide 2</article>
        </ng-template>
        <ng-template ngSwiperSlide>
          <article class="slide slide-three">Slide 3</article>
        </ng-template>
      </ng-swiper-element>
    </main>
  `,
  styles: [`
    .demo {
      max-width: 720px;
      margin: 3rem auto;
      padding: 0 1rem;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .slide {
      display: grid;
      min-height: 280px;
      place-items: center;
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
    }
    .slide-one { background: #355c7d; }
    .slide-two { background: #6c5b7b; }
    .slide-three { background: #c06c84; }
  `]
})
export class AppComponent {
  readonly swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
  };
}
