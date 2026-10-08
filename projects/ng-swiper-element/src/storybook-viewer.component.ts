import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StorybookShared } from './storybook-shared';

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
export class StorybookViewerComponent extends StorybookShared {
}
