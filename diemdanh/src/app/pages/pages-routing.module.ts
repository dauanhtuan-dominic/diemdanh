import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'customers',
        loadChildren: () => import('./customer/customer.module')
          .then(m => m.CustomerModule),
      },
      {
        path: 'employees',
        loadChildren: () => import('./employee/employee.module')
          .then(m => m.EmployeeModule),
      },
      {
        path: 'product-groups',
        loadChildren: () => import('./product-groups/product-groups.module')
          .then(m => m.ProductGroupsModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module')
          .then(m => m.ProductsModule),
      },
      {
        path: 'accessories',
        loadChildren: () => import('./accessory/accessory.module')
          .then(m => m.AccessoryModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./order/order.module')
          .then(m => m.OrderModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module')
          .then(m => m.ContactModule),
      },
    ]
  },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
