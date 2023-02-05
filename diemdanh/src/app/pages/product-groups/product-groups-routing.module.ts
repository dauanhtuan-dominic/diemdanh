import { NgModule } from '@angular/core';
import { ProductGroupsComponent } from './product-groups.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductGroupDetailComponent } from './product-group-detail/product-group-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductGroupsComponent,
  },
  {
    path: 'create',
    component: ProductGroupDetailComponent,
  },
  {
    path: 'detail/:id',
    component: ProductGroupDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductGroupsRoutingModule { }
