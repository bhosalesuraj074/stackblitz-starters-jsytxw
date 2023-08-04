import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCompoent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { LaptopComponent } from './product/laptop/laptop.component';
const route: Route[] = [{ path: '', component: LaptopComponent }];
@NgModule({
  declarations: [AppCompoent],
  imports: [BrowserModule, RouterModule.forRoot(route)],
  bootstrap: [AppCompoent],
})
export class AppModule {}
