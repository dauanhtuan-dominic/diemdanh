import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoryComponent } from './accessory.component';
import { AccessroyDetailComponent } from './accessroy-detail/accessroy-detail.component';
import { AccessoryRoutingModule } from './accessory-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/@web-core/pipe/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [AccessoryComponent, AccessroyDetailComponent],
  imports: [
    CommonModule,
    AccessoryRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
    NgSelectModule,
    ImageCropperModule,
    ModalModule.forRoot(),
  ]
})
export class AccessoryModule { }
