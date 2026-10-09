import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { StorybookShared } from './storybook-shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <span class="navbar-brand">ng-swiper-element</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/about"
                routerLinkActive="active"
                ariaCurrentWhenActive="page"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/demos"
                routerLinkActive="active"
                ariaCurrentWhenActive="page"
                >Demos</a
              >
            </li>
          </ul>

          <span class="d-flex gap-3 align-items-center">
            <a
              class="nav-link d-flex gap-2 align-items-center"
              href="https://github.com/kai1992cool/ng-swiper-element"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ng-swiper-element on GitHub"
            >
              <i class="fa-brands fa-github"></i>
              <span class="hidden sm:inline">GitHub</span>
            </a>
            <a
              class="nav-link d-flex gap-2 align-items-center"
              href="https://www.npmjs.com/package/ng-swiper-element"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ng-swiper-element on npm"
            >
              <i class="fa-brands fa-npm"></i>
              <span class="sr-only sm:not-sr-only">npm</span>
            </a>
            <span style="margin-right: 0.5rem;" class="text-muted"
              >Version:</span
            >
            <select
              id="version-select"
              class="form-select"
              [ngModel]="selectedVersion()"
              (ngModelChange)="onVersionChange($any($event))"
            >
              @for (version of availableVersions(); track $index) {
                <option class="bg-slate-900" [value]="version">
                  {{ version }}
                </option>
              }
            </select>
          </span>
        </div>
      </div>
    </nav>
    <main>
      <div class="container my-5 pt-3">
        <router-outlet></router-outlet>
      </div>
    </main>
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
    const url = new URL(`/ng-swiper-element/v${version}/`, this.document.location.href);
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
