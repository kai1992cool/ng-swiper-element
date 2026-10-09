import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section>
        @if (isLoading()) {
          <p class="px-5 py-8 text-slate-400 sm:px-8" role="status">
            Loading README.md…
          </p>
        } @else if (loadError(); as error) {
          <p class="px-5 py-8 text-rose-300 sm:px-8" role="alert">
            {{ error }}
          </p>
        } @else if (readmeHtml(); as html) {
          <article
            class="readme-content px-5 py-6 sm:px-8"
            [innerHTML]="html"
          ></article>
        }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  readonly isLoading = signal(true);
  readonly loadError = signal('');
  readonly readmeHtml = signal('');

  async ngOnInit(): Promise<void> {
    try {
      // route the README one folder before the current location, since the README is in the root of the project
      const readmeUrl = new URL(
        './README.md',
        (this.document as any).location.href,
      );
      const response = await fetch(readmeUrl);
      if (!response.ok) {
        throw new Error(
          `README.md request failed with status ${response.status}.`,
        );
      }

      this.readmeHtml.set(await marked.parse(await response.text()));
    } catch (error) {
      console.error('Failed to load README.md.', error);
      this.loadError.set(
        'README.md could not be loaded. Please use the GitHub link to view the project documentation.',
      );
    } finally {
      this.isLoading.set(false);
    }
  }
}
