import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-storybook-viewer',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="flex min-h-[calc(100dvh-11rem)] flex-col gap-5">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Interactive examples</p>
          <h1 class="m-0 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Storybook <span class="text-slate-400">for Angular {{ selectedVersion() }}</span>
          </h1>
        </div>

        <label class="flex items-center gap-3 text-sm font-medium text-slate-300" for="version-select">
          Angular version
          <select
            id="version-select"
            class="min-h-10 rounded-lg border border-slate-700 bg-slate-900 px-3 text-slate-100 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            [ngModel]="selectedVersion()"
            (ngModelChange)="onVersionChange($event)"
          >
          @for (version of availableVersions(); track version) {
            <option [value]="version">{{ version }}</option>
          }
          </select>
        </label>
      </div>

      @if (statusMessage(); as statusMsg) {
        <p class="m-0 rounded-lg border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-200" role="status">
          {{ statusMsg }}
        </p>
      }

      <div class="min-h-[32rem] flex-1 overflow-hidden rounded-xl border border-slate-800 bg-white shadow-2xl shadow-black/30">
        <iframe
          class="block h-full min-h-[32rem] w-full border-0 bg-white"
          [src]="storybookUrl()"
          [title]="'ng-swiper-element Storybook for Angular ' + selectedVersion()"
        ></iframe>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorybookViewerComponent implements OnInit {
  readonly angularVersions = ['22', '21', '20', '19', '18', '17'];
  readonly availableVersions = signal([...this.angularVersions]);
  readonly selectedVersion = signal('19');
  readonly storybookUrl = signal<SafeResourceUrl | null>(null);
  readonly statusMessage = signal('');

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly sanitizer: DomSanitizer,
    private readonly route: ActivatedRoute
  ) {
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
    const url = new URL(`../v${version}/`, this.document.location.href);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }

  private async loadAvailableVersions(): Promise<void> {
    let couldNotCheckVersion = false;
    const checks = await Promise.all(
      this.angularVersions.map(async (version) => {
        try {
          const url = new URL(`../v${version}/index.html`, this.document.location.href);
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
