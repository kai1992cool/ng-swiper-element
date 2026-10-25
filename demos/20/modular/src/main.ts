import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideZonelessChangeDetection } from '@angular/core';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [provideZonelessChangeDetection()],
  })
  .catch((error: unknown) => console.error(error));
