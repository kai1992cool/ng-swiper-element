import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { StorybookShared } from './storybook-shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  template: `
    <div class="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(8,145,178,0.16),transparent_68%)]"
        aria-hidden="true"
      ></div>
      <header class="relative z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div
          class="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
        >
          <a
            class="flex min-w-0 items-center gap-3 self-start font-semibold tracking-tight text-white no-underline"
            routerLink="/about"
          >
            <span
              class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-sky-500 text-lg font-black text-slate-950 shadow-lg shadow-cyan-950/40"
              aria-hidden="true"
              >S</span
            >
            <span class="truncate text-base sm:text-lg">ng-swiper-element</span>
          </a>
          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:justify-end">
            <nav aria-label="Main navigation" class="flex items-center gap-1">
              <a
                class="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 no-underline transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                routerLink="/about"
                routerLinkActive="!bg-white/10 !text-cyan-200"
                ariaCurrentWhenActive="page"
                >About</a
              >
              <a
                class="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 no-underline transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                routerLink="/demos"
                routerLinkActive="!bg-white/10 !text-cyan-200"
                ariaCurrentWhenActive="page"
                >Demos</a
              >
            </nav>

            <div class="flex flex-wrap items-center gap-2">
              <a
                class="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-medium text-slate-200 no-underline transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                href="https://github.com/kai1992cool/ng-swiper-element"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View ng-swiper-element on GitHub"
              >
                <svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.12 2.94.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                <span class="hidden sm:inline">GitHub</span>
              </a>
              <a
                class="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-medium text-slate-200 no-underline transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                href="https://www.npmjs.com/package/ng-swiper-element"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View ng-swiper-element on npm"
              >
                <svg class="h-4 w-8" viewBox="0 0 60 30" fill="currentColor" aria-hidden="true">
                  <path d="M0 0h60v30H30V6H15v18h15v6H0V0Zm15 6v12h6V6h-6Zm21 0v18h6V12h3v12h6V12h3v12h6V6H36Z" />
                </svg>
                <span class="sr-only sm:not-sr-only">npm</span>
              </a>
              <label
                class="flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-xs font-medium text-slate-400 focus-within:border-cyan-400/60"
                for="version-select"
              >
                <span>Angular</span>
                <select
                  id="version-select"
                  class="min-w-14 cursor-pointer bg-transparent text-sm font-semibold text-slate-100 outline-none"
                  [ngModel]="selectedVersion()"
                  (ngModelChange)="onVersionChange($any($event))"
                >
                  @for (version of availableVersions(); track version) {
                    <option class="bg-slate-900" [value]="version">{{ version }}</option>
                  }
                </select>
              </label>
            </div>
          </div>
        </div>
      </header>

      <main class="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends StorybookShared {
  private readonly document: Document = inject(DOCUMENT);
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    super();
    this.selectedVersion.set(
      this.route.snapshot.data['version'] ?? this.selectedVersion(),
    );
    this.storybookUrl.set(this.createStorybookUrl(this.selectedVersion()));
  }

  ngOnInit(): void {
    void this.loadAvailableVersions();
  }

  onVersionChange(version: string): void {
    this.selectedVersion.set(version);
    this.storybookUrl.set(this.createStorybookUrl(version));
  }

  private createStorybookUrl(version: string): SafeResourceUrl {
    const url = new URL(
      `/ng-swiper-element/v${version}/`,
      this.document.location.href,
    );
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }

  private async loadAvailableVersions(): Promise<void> {
    let couldNotCheckVersion = false;
    const checks = await Promise.all(
      this.angularVersions.map(async (version) => {
        try {
          const url = new URL(
            `../ng-swiper-element/v${version}/index.html`,
            this.document.location.href,
          );
          const response = await fetch(url, {
            method: 'HEAD',
            cache: 'no-store',
          });
          return { version, published: response.ok };
        } catch (error) {
          console.error(
            `Could not check Angular ${version} Storybook availability.`,
            error,
          );
          couldNotCheckVersion = true;
          return { version, published: null };
        }
      }),
    );

    this.availableVersions.set(
      checks
        .filter((check) => check.published !== false)
        .map((check) => check.version),
    );

    const newestPublished = checks.find((check) => check.published === true);
    if (newestPublished) {
      this.selectedVersion.set(
        this.route.snapshot.data['version'] ?? newestPublished.version,
      );
      this.storybookUrl.set(this.createStorybookUrl(this.selectedVersion()));
      return;
    }

    this.statusMessage.set(
      couldNotCheckVersion
        ? 'Could not check all published Storybook versions. You can still choose a version above.'
        : 'No Angular Storybook versions have been deployed yet.',
    );
  }
}
