import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProductComponent } from './product.component';
import { TvComponent } from './tv/tv.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';

const childRoutes: Route[] = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: 'tv', component: TvComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(childRoutes)],
  declarations: [
    ProductComponent,
    LaptopComponent,
    TvComponent,
    MobileComponent,
  ],
})
export class ProductModule {
  constructor() {
    console.log('product compoent loaded');
  }
}
