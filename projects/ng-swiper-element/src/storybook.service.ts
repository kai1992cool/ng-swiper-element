import { Injectable, signal } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";


@Injectable({
    providedIn: 'root'
})
export class StorybookService {
  readonly selectedVersion = signal('19');
  readonly angularVersions = Array.from({ length: 13 }, (_, i) => (i + 10).toString());
  readonly availableVersions = signal([...this.angularVersions]);
  readonly storybookUrl = signal<SafeResourceUrl | null>(null);
  readonly statusMessage = signal('');
  readonly isAboutLoading = signal(true);
  readonly aboutLoadError = signal('');
  readonly aboutReadmeHtml = signal('');
}