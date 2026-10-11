import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="container mx-0 px-0">
        @if (isAboutLoading()) {
          <p class="px-5 py-8 text-slate-400 sm:px-8" role="status">
            Loading README.md…
          </p>
        } @else if (aboutLoadError(); as error) {
          <p class="px-5 py-8 text-rose-300 sm:px-8" role="alert">
            {{ error }}
          </p>
        } @else if (aboutReadmeHtml(); as html) {
          <article
            class="readme-content px-5 py-6 sm:px-8"
            [innerHTML]="html"
          ></article>
        }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
}
