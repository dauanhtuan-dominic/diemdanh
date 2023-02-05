import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from './order.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';

import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
  {
    path: 'create',
    component: OrderDetailComponent,
  },
  {
    path: 'detail/:id',
    component: OrderDetailComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
