import { ChangeDetectionStrategy, Component, DOCUMENT, inject, Inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StorybookShared } from './storybook-shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="dark flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header class="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div class="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a class="flex items-center gap-3 font-semibold tracking-tight text-white no-underline" routerLink="/about">
            <span class="flex size-9 items-center justify-center rounded-lg bg-cyan-400 font-black text-slate-950">S</span>
            <span>ng-swiper-element</span>
          </a>

          <nav class="flex items-center gap-1 sm:gap-2" aria-label="Main navigation">
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
      <nav class="dark flex min-h-screen flex-col bg-slate-950 text-slate-100">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center gap-3 font-semibold tracking-tight text-white no-underline" routerLink="/about">
            <span class="flex size-9 items-center justify-center rounded-lg bg-cyan-400 font-black text-slate-950">S</span>
            <span>ng-swiper-element</span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <label class="flex items-center gap-3 text-sm font-medium text-slate-300" for="version-select">
          version: 
          <select
              id="version-select"
              class="min-h-10 rounded-lg border border-slate-700 bg-slate-900 px-3 text-slate-100 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              [ngModel]="selectedVersion()"
              (ngModelChange)="onVersionChange($any($event))"
            >
            @for (version of availableVersions(); track version) {
              <option [value]="version">{{ version }}</option>
            }
          </select>
        </label>
              <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-sticky" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
              </button>
          </div>
          <div class=" justify-between hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
            <a
              class="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 no-underline transition hover:bg-slate-800 hover:text-white"
              routerLink="/about"
              routerLinkActive="!bg-slate-800 !text-cyan-300"
              ariaCurrentWhenActive="page"
            >About</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
            <a
              class="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 no-underline transition hover:bg-slate-800 hover:text-white"
              routerLink="/demos"
              routerLinkActive="!bg-slate-800 !text-cyan-300"
              ariaCurrentWhenActive="page"
            >Demos</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main class="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
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
    this.selectedVersion.set(this.route.snapshot.data['version'] ?? this.selectedVersion());
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
    const url = new URL(`/ng-swiper-element/v${version}/`, this.document.location.href);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }

  private async loadAvailableVersions(): Promise<void> {
    let couldNotCheckVersion = false;
    const checks = await Promise.all(
      this.angularVersions.map(async (version) => {
        try {
          const url = new URL(`../ng-swiper-element/v${version}/index.html`, this.document.location.href);
          const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
          return { version, published: response.ok };
        } catch (error) {
          console.error(`Could not check Angular ${version} Storybook availability.`, error);
          couldNotCheckVersion = true;
          return { version, published: null };
        }
      })
    );

    this.availableVersions.set(checks
      .filter((check) => check.published !== false)
      .map((check) => check.version));

    const newestPublished = checks.find((check) => check.published === true);
    if (newestPublished) {
      this.selectedVersion.set(this.route.snapshot.data['version'] ?? newestPublished.version);
      this.storybookUrl.set(this.createStorybookUrl(this.selectedVersion()));
      return;
    }

    this.statusMessage.set(couldNotCheckVersion
      ? 'Could not check all published Storybook versions. You can still choose a version above.'
      : 'No Angular Storybook versions have been deployed yet.');
  }
}
