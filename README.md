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
| Angular 14<br/><i>npm i ng-swiper-element@14 swiper@7.6.24</i>     | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/14/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/14/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=14) |
| Angular 15<br/><i>npm i ng-swiper-element@15 swiper@9.4.1</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/15/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/15/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=15) |
| Angular 16<br/><i>npm i ng-swiper-element@16 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/16/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/16/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=16) |
| Angular 17<br/><i>npm i ng-swiper-element@17 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/17/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/17/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=17) |
| Angular 18<br/><i>npm i ng-swiper-element@18 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/18/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/18/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=18) |
| Angular 19<br/><i>npm i ng-swiper-element@19 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/19/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/19/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=19) |
| Angular 20<br/><i>npm i ng-swiper-element@20 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/20/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/20/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=20) |
| Angular 21<br/><i>npm i ng-swiper-element@21 swiper</i>      | [Modular Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/21/modular)        | [Standalone Demo](https://stackblitz.com/github/kai1992cool/ng-swiper-element/tree/main/demos/21/standalone)      | [Storybook](https://kai1992cool.github.io/ng-swiper-element/demos?version=21) |
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

---

# Repository Development

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Publishing

To build and publish the library for a supported Angular version, run:

```bash
node scripts/publish-angular.mjs 22 no
```

Pass `yes` as the second argument to run `npm run patch` before publishing. The
selected `angular-version-package/package-<version>.json` then retains the new
library version for the next publish:

```bash
node scripts/publish-angular.mjs 22 yes
```

The script selects the Angular dependencies, installs them, builds the library,
and publishes it from `dist/ng-swiper-element` under the npm dist-tag
`angular-<version>` (for example, `angular-22`). npm publish credentials must
be configured before running it.

## Storybook on GitHub Pages

The `Deploy Storybook to GitHub Pages` workflow builds Storybook for Angular 18 through 22 using a matrix. Each build selects its dependencies from `angular-version-package/package-<version>.json` and deploys to the matching directory on `gh-pages`:

- Angular 18–22 → `/v18/` through `/v22/`

After the versioned Storybooks are deployed, the workflow builds the Angular demo app from `app.component.ts` and publishes it to the root of `gh-pages`. The app provides the About and Demos pages; the Demos page embeds the newest deployed Storybook and lets you select a version. Storybooks are also available directly at `/v<version>/` (for example, `/v19/`). Configure GitHub Pages to deploy from the `gh-pages` branch, then visit `https://<username>.github.io/ng-swiper-element/`.

To run the same build and deployment locally from `main`, select the Angular version:

```bash
bash scripts/deploy-storybook.sh 18
```

The script requires Node.js 22.22.3 or newer in the 22.x line, plus Git credentials with permission to push to `origin/gh-pages`.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
