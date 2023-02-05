import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'create',
    component: ProductDetailComponent,
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
