import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCompoent } from './app.component';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CatchDataComponent } from './catch-data/catch-data.component';
const route: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((module) => module.ProductModule),
  },
  { path: 'catchdata/:id', component: CatchDataComponent },
];
@NgModule({
  declarations: [AppCompoent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route, { preloadingStrategy: PreloadAllModules }),
  ],
  bootstrap: [AppCompoent],   
  exports: [RouterModule],
})
export class AppModule {}
