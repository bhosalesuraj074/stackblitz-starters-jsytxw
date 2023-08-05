import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCompoent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
const route: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
];
@NgModule({
  declarations: [AppCompoent],
  imports: [BrowserModule, RouterModule.forRoot(route)],
  bootstrap: [AppCompoent],
})
export class AppModule {}
