import { Directive, inject } from "@angular/core";
import { StorybookService } from "./storybook.service";

@Directive()
export class StorybookShared {
    private readonly storybookService = inject(StorybookService);
    get selectedVersion() {
        return this.storybookService.selectedVersion;
    }
    get angularVersions() {
        return this.storybookService.angularVersions;
    }
    get availableVersions() {
        return this.storybookService.availableVersions;
    }
    get storybookUrl() {
        return this.storybookService.storybookUrl;
    }
    get statusMessage() {
        return this.storybookService.statusMessage;
    }
}