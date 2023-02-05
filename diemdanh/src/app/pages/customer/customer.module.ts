import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { PipeModule } from 'src/app/@web-core/pipe/pipe.module';



@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    PipeModule,
  ]
})
export class CustomerModule { }
