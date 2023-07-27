import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCompoent } from './app.component';

@NgModule({
  declarations: [AppCompoent],
  imports: [BrowserModule],
  bootstrap: [AppCompoent],
})
export class AppModule {}
