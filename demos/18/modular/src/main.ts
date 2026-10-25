import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [provideExperimentalZonelessChangeDetection()],
  })
  .catch((error: unknown) => console.error(error));
