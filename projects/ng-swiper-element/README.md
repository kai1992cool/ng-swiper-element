# ng-swiper-element

An Angular wrapper for [Swiper Element](https://swiperjs.com/element), Swiper's Web Component implementation. Build responsive, touch-enabled carousels in Angular templates using native custom elements.


[![npm version](https://img.shields.io/npm/v/ng-swiper-element.svg)](https://www.npmjs.com/package/ng-swiper-element)
[![npm downloads](https://img.shields.io/npm/dy/ng-swiper-element.svg)](https://www.npmjs.com/package/ng-swiper-element)
[![GitHub stars](https://img.shields.io/github/stars/kai1992cool/ng-swiper-element.svg)](https://github.com/kai1992cool/ng-swiper-element)
[![license](https://img.shields.io/npm/l/ng-swiper-element.svg)](https://github.com/kai1992cool/ng-swiper-element/blob/master/LICENSE)

## Features

- Uses Swiper's Web Component architecture (`<swiper-container>` and `<swiper-slide>`) under the Angular wrapper.
- Configure Swiper with its standard options and modules.
- Define slides with Angular templates using `ngSwiperSlide`.
- Bind Swiper events as Angular outputs.
- Use Swiper's navigation, pagination, autoplay, effects, and other modules.

## Installation

Install the package and its Swiper peer dependency:

```bash
npm install ng-swiper-element swiper
```

## Key Implementation Notes:

* **The `orientationchange` is set to `orientationChange` as the event.**
* **The `init` is exposed as `initEmitter`, not init.**
* **The `autoplay` event is exposed as `autoplayEvent`, not autoplay.**

## Angular version examples & Documentation

StackBlitz examples will be added as each Angular version's rollout is published.

| Angular version | Standalone example | NgModule example | Documentation |
| --------------- | ------------------ | ---------------- | ------------- |
| Angular 19      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/v19/) |
| Angular 20      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/v20/) |
| Angular 21      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/v21/) |
| Angular 22      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/v22/) |

## Setup

Register Swiper's custom elements once before bootstrapping your Angular application.

### Standalone application

Call `enableSwiper()` before `bootstrapApplication()`:

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { enableSwiper } from 'ng-swiper-element';
import { AppComponent } from './app/app.component';

enableSwiper();
bootstrapApplication(AppComponent);
```

Import `SwiperElementComponent` and `NgSwiperSlideDirective` in the standalone component that uses the carousel:

```ts
import { Component } from '@angular/core';
import {
  NgSwiperSlideDirective,
  SwiperElementComponent,
} from 'ng-swiper-element';

@Component({
  selector: 'app-carousel',
  imports: [SwiperElementComponent, NgSwiperSlideDirective],
  standalone: true,
  template: `
    <ng-swiper-element
      [swiperOptions]="swiperOptions"
      (slideChange)="onSlideChange($event)"
    >
      <ng-template ngSwiperSlide>
        <article>First slide</article>
      </ng-template>
      <ng-template ngSwiperSlide>
        <article>Second slide</article>
      </ng-template>
    </ng-swiper-element>
  `,
})
export class CarouselComponent {
  swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: { clickable: true },
  };

  onSlideChange(event: unknown) {
    console.log('Swiper slide changed', event);
  }
}
```

`swiperOptions` accepts Swiper configuration. You can also bind supported Swiper options directly as Angular inputs. See the [Swiper API](https://swiperjs.com/swiper-api) for available options.

### Configure options with Angular property bindings

Each supported Swiper option can be passed to the wrapper as an Angular property binding. Object-valued options such as navigation, pagination, and autoplay accept the same configuration objects as Swiper:

```html
<ng-swiper-element
  [navigation]="{ enabled: true }"
  [pagination]="{ clickable: true }"
  [autoplay]="{ delay: 3000 }"
  [slidesPerView]="1"
  [spaceBetween]="16"
>
  <ng-template ngSwiperSlide>
    <article>First slide</article>
  </ng-template>
  <ng-template ngSwiperSlide>
    <article>Second slide</article>
  </ng-template>
</ng-swiper-element>
```

Use property bindings for individual options, or pass a complete Swiper configuration object with `[swiperOptions]="swiperOptions"`. Both approaches can be combined; directly bound inputs override matching values from `swiperOptions`.

## Using Swiper modules

Pass module configuration through `swiperOptions`, just as you would when configuring Swiper Element. Refer to the [Swiper Element documentation](https://swiperjs.com/element) for module setup and styling details.

```ts
swiperOptions = {
  navigation: true,
  pagination: { clickable: true },
};
```

## Documentation and demos

- [Swiper Element documentation](https://swiperjs.com/element)
- [Swiper API and options](https://swiperjs.com/swiper-api)
- [ng-swiper-element repository](https://github.com/kai1992cool/ng-swiper-element)

## License

MIT
