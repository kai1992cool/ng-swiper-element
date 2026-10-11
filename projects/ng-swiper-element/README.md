# ng-swiper-element

An Angular wrapper for [Swiper Element](https://swiperjs.com/element), Swiper's Web Component implementation. Build responsive, touch-enabled carousels in Angular templates using native custom elements.

The library supports Angular 22 and later, using decorator-based inputs and outputs, `@ViewChild`/`@ContentChildren`, and `*ngIf`/`*ngFor` for compatibility with Angular 17 and below.


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

### 1. Install the package and its Swiper peer dependency

```bash
npm install ng-swiper-element swiper
```

### 2. Make Swiper's CSS files available to the application

Swiper Element renders its content in a shadow root, so make the CSS files available as assets and pass their URLs with `injectStylesUrls`. In your application's `angular.json`, add the Swiper CSS files to the `assets` array under the app's build options:

```json
{
  "glob": "**/*.min.css", // with minification (ideal - less bundle size)
  // "glob": "**/*.css", // without minification (not ideal - larger bundle size)
  "input": "node_modules/swiper",
  "output": "/swiper/css"
}
```

Then configure the carousel to load the bundle stylesheet:

```ts
swiperOptions = {
  injectStylesUrls: ['/swiper/css/swiper-bundle.min.css'],
};
```

### CSS Implementation Notes:

#### swiper-bundle.min.css
* **Use this when you just want to include almost all the CSS required for using all the features of swiper**. 
* This is the recommended option for most applications, where minute increase in bundle size is not important. But please note, that this file does not contain the CSS for card effects. If you need effects please use the below effect CSS files:

  * /swiper/css/modules/effect-fade-element.min.css
  * /swiper/css/modules/effect-cube-element.min.css
  * /swiper/css/modules/effect-coverflow-element.min.css
  * /swiper/css/modules/effect-flip-element.min.css
  * /swiper/css/modules/effect-creative-element.min.css
  * /swiper/css/modules/effect-cards-element.min.css

* As an alternative, we can use individual css styles, to import only what is necessary. Which would reduce the bundle size by a small amount.

Note: The CSS files are loaded in the order they are specified in the `injectStylesUrls` array. If you have multiple CSS files, make sure to specify them in the correct order.


## Key Implementation Notes:

* **The `orientationchange` is set to `orientationChange` as the event.**
* **The `init` is exposed as `initEmitter`, not init.**
* **The `autoplay` event is exposed as `autoplayEvent`, not autoplay.**

## Angular version examples & Documentation

StackBlitz examples will be added as each Angular version's rollout is published.

| Angular version | Standalone example | NgModule example | Documentation |
| --------------- | ------------------ | ---------------- | ------------- |
| Angular 14      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=14) |
| Angular 15      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=15) |
| Angular 16      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=16) |
| Angular 17      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=17) |
| Angular 18      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=18) |
| Angular 19      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=19) |
| Angular 20      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=20) |
| Angular 21      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=21) |
| Angular 22      | Coming soon        | Coming soon      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=22) |

## Setup

Choose the setup that matches your Angular application. Both approaches register Swiper's custom elements once and import the library's standalone pieces wherever they are used.

### Standalone application

Register Swiper with `provideSwiper()` in the providers passed to `bootstrapApplication()`:

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideSwiper } from 'ng-swiper-element';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideSwiper()],
});
```

Import `SwiperElementComponent` and `NgSwiperSlideDirective` in the `imports` array of each standalone component that uses them:

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

### NgModule application

Call `enableSwiper()` once at the top of `app.module.ts`, before the module declaration. The application component should be non-standalone and listed in `declarations`.

```ts
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
```

Add the `ng-swiper-element` markup to the template of a component declared in the module. The slide directive marks each slide:

```html
<ng-swiper-element
  [swiperOptions]="{ slidesPerView: 1, pagination: { clickable: true } }"
>
  <ng-template ngSwiperSlide>
    <article>First slide</article>
  </ng-template>
  <ng-template ngSwiperSlide>
    <article>Second slide</article>
  </ng-template>
</ng-swiper-element>
```

### Configure options with Angular property bindings

#### **1. Angular property bindings**

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

#### **2. Using Swiper modules**

Pass module configuration through `swiperOptions`, just as you would when configuring Swiper Element. Refer to the [Swiper Element documentation](https://swiperjs.com/element) for module setup and styling details.

```ts
swiperOptions = {
  navigation: true,
  pagination: { clickable: true },
};
```

### Configure events with Angular event listeners

Swiper events are exposed as Angular outputs on `ng-swiper-element`. Listen with the Swiper event name directly, and read the emitted value in your component handler:

```html
<ng-swiper-element
  (initEmitter)="onInit($event)"
  (slideChange)="onSlideChange($event)"
  (touchStart)="onTouchStart($event)"
>
  <ng-template ngSwiperSlide>
    <article>First slide</article>
  </ng-template>
</ng-swiper-element>
```

```ts
onInit(payload: { event: Event; swiperArgs: unknown[] }) {
  console.log('Swiper initialized', payload);
}

onSlideChange(payload: { event: Event; swiperArgs: unknown[] }) {
  const swiper = payload.swiperArgs[0] as any;
  console.log('Active slide:', swiper?.activeIndex);
}

onTouchStart(payload: { event: Event; swiperArgs: unknown[] }) {
  console.log('Touch started', payload.event);
}
```

Each event emits an object with:
- `event`: the original Swiper custom event
- `swiperArgs`: the event detail payload passed by Swiper

Use `initEmitter` instead of `init` because `init` is a reserved Angular output name. This keeps the same Swiper event flow while fitting naturally into Angular templates.

* **The `orientationchange` is set to `orientationChange` as the event.**
* **The `init` is exposed as `initEmitter`, not init.**
* **The `autoplay` event is exposed as `autoplayEvent`, not autoplay.**

## Documentation and demos

- [Swiper Element documentation](https://swiperjs.com/element)
- [Swiper API and options](https://swiperjs.com/swiper-api)
- [ng-swiper-element repository](https://github.com/kai1992cool/ng-swiper-element)


## License

MIT
