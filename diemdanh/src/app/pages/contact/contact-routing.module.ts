import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent} from './contact-detail/contact-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
  {
    path: 'create',
    component: ContactDetailComponent,
  },
  {
    path: 'detail/:id',
    component: ContactDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
