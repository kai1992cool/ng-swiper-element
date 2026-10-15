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
## Key Implementation Notes:

* **The `orientationchange` is set to `orientationChange` as the event.**
* **The `init` is exposed as `initEmitter`, not init.**
* **The `autoplay` event is exposed as `autoplayEvent`, not autoplay.**

## Angular version examples & Documentation

StackBlitz examples will be added as each Angular version's rollout is published.

| Angular version | Standalone example | NgModule example | Documentation |
| --------------- | ------------------ | ---------------- | ------------- |
| Angular 14<br/><i>npm i ng-swiper-element@14 swiper@7.6.24</i>     | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=14) |
| Angular 15<br/><i>npm i ng-swiper-element@15 swiper@9.4.1</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=15) |
| Angular 16<br/><i>npm i ng-swiper-element@16 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=16) |
| Angular 17<br/><i>npm i ng-swiper-element@17 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=17) |
| Angular 18<br/><i>npm i ng-swiper-element@18 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=18) |
| Angular 19<br/><i>npm i ng-swiper-element@19 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=19) |
| Angular 20<br/><i>npm i ng-swiper-element@20 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=20) |
| Angular 21<br/><i>npm i ng-swiper-element@21 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=21) |
| Angular 22<br/><i>npm i ng-swiper-element@22 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/22/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=22) |

## Configuring Styling

### 1. Simplest way

The default bundle registration injects Swiper's core and bundled module styles into the element's shadow root, so no separate CSS setup is usually needed.

Use 'bundler' for `provideSwiper` or `enableSwiper` which will register the core and bundled module styles into the element's shadow root.

### 2. Configure Swiper CSS (when needed)
If you need additional styles in the shadow root, such as styles for an effects, serve Swiper's CSS files as assets. Add this entry to the `assets` array in your application's `angular.json` for all styles:

```json
{
  "glob": "**/*.min.css",
  "input": "node_modules/swiper",
  "output": "/swiper/css"
}
```

or import individual ones:

```json
...
styles: ['node_modules/swiper/modules/effect-cards-element.min.css']
```

Then pass the asset URL in `injectStylesUrls`:

```ts
swiperOptions = {
  injectStylesUrls: ['/swiper/css/modules/effect-cards-element.min.css'],
};
```

Use the matching `*-element.min.css` file for the feature you need. For styles outside the shadow root, import Swiper CSS in the application's global stylesheet instead (for example, `import 'swiper/css';` and `import 'swiper/css/navigation';`). Global styles do not style elements inside the Swiper shadow root.


## Setup

Choose the setup that matches your Angular application. Both APIs register Swiper's custom elements once. They default to bundle registration; pass `'core'` to register Swiper Element core instead.

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

To register Swiper Element core instead of the bundle, use `provideSwiper('core')`.

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

Call `enableSwiper()` once at the top of `app.module.ts`, before the module declaration. It uses bundle registration by default; pass `'core'` to register Swiper Element core. The application component should be non-standalone and listed in `declarations`.

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

