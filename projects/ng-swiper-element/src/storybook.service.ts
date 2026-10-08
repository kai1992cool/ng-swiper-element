import { Injectable, signal } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";


@Injectable({
    providedIn: 'root'
})
export class StorybookService {
  readonly selectedVersion = signal('19');
  readonly angularVersions = ['22', '21', '20', '19', '18', '17'];
  readonly availableVersions = signal([...this.angularVersions]);
  readonly storybookUrl = signal<SafeResourceUrl | null>(null);
  readonly statusMessage = signal('');
}