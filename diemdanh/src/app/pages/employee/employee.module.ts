import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PipeModule } from 'src/app/@web-core/pipe/pipe.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    PipeModule,
    BsDropdownModule,
  ]
})
export class EmployeeModule { }
