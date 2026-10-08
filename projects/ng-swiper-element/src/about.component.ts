import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="mx-auto max-w-4xl">
      <div class="mb-8">
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About the project</p>
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">ng-swiper-element</h1>
        <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
          Angular components and directives for building rich, touch-enabled carousels with Swiper.
        </p>
      </div>

      <section class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-black/20">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-5 py-4 sm:px-8">
          <h2 class="m-0 text-lg font-semibold text-white">Project README</h2>
          <a
            class="text-sm font-medium text-cyan-300 no-underline hover:text-cyan-200"
            href="https://github.com/kai1992cool/ng-swiper-element/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >View on GitHub <span aria-hidden="true">↗</span></a>
        </div>

        @if (isLoading()) {
          <p class="px-5 py-8 text-slate-400 sm:px-8" role="status">Loading README.md…</p>
        } @else if (loadError(); as error) {
          <p class="px-5 py-8 text-rose-300 sm:px-8" role="alert">{{ error }}</p>
        } @else if (readmeHtml(); as html) {
          <article class="readme-content px-5 py-6 sm:px-8" [innerHTML]="html"></article>
        }
      </section>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  readonly isLoading = signal(true);
  readonly loadError = signal('');
  readonly readmeHtml = signal('');

  async ngOnInit(): Promise<void> {
    try {
      const readmeUrl = new URL('../README.md', this.document.location.href);
      const response = await fetch(readmeUrl);
      if (!response.ok) {
        throw new Error(`README.md request failed with status ${response.status}.`);
      }

      this.readmeHtml.set(await marked.parse(await response.text()));
    } catch (error) {
      console.error('Failed to load README.md.', error);
      this.loadError.set('README.md could not be loaded. Please use the GitHub link to view the project documentation.');
    } finally {
      this.isLoading.set(false);
    }
  }
}
