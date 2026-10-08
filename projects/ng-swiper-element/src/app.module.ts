import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StorybookViewerComponent } from './storybook-viewer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorybookViewerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}