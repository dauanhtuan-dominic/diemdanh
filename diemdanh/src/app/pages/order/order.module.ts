import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/@web-core/pipe/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxCurrencyModule } from "ngx-currency";
import { OrderComponent } from './order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderRoutingModule } from './order-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [OrderComponent,OrderDetailComponent ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    NgSelectModule,
    ImageCropperModule,
    ModalModule.forRoot(),
    NgxCurrencyModule
  ]
})
export class OrderModule { }
