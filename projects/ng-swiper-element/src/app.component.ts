import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <div class="dark flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header class="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div class="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a class="flex items-center gap-3 font-semibold tracking-tight text-white no-underline" routerLink="/about">
            <span class="flex size-9 items-center justify-center rounded-lg bg-cyan-400 font-black text-slate-950">S</span>
            <span>ng-swiper-element</span>
          </a>

          <nav class="flex items-center gap-1 sm:gap-2" aria-label="Main navigation">
            <a
              class="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 no-underline transition hover:bg-slate-800 hover:text-white"
              routerLink="/about"
              routerLinkActive="!bg-slate-800 !text-cyan-300"
              ariaCurrentWhenActive="page"
            >About</a>
            <a
              class="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 no-underline transition hover:bg-slate-800 hover:text-white"
              routerLink="/demos"
              routerLinkActive="!bg-slate-800 !text-cyan-300"
              ariaCurrentWhenActive="page"
            >Demos</a>
            <span class="mx-1 hidden h-6 border-l border-slate-800 sm:block"></span>
            <a
              class="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 no-underline transition hover:bg-slate-800 hover:text-white"
              href="https://github.com/kai1992cool/ng-swiper-element"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >GitHub</a>
            <a
              class="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-300 no-underline transition hover:bg-slate-800 hover:text-white sm:inline-flex"
              href="https://www.npmjs.com/package/ng-swiper-element"
              target="_blank"
              rel="noopener noreferrer"
            >npm</a>
          </nav>
        </div>
      </header>

      <main class="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppComponent {}
