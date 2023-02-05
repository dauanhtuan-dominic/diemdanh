import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccessoryComponent } from './accessory.component';
import { AccessroyDetailComponent } from './accessroy-detail/accessroy-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AccessoryComponent,
  },
  {
    path: 'create',
    component: AccessroyDetailComponent,
  },
  {
    path: 'detail/:id',
    component: AccessroyDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoryRoutingModule { }
