import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGroupsComponent } from './product-groups.component';
import { ProductGroupDetailComponent } from './product-group-detail/product-group-detail.component';
import { ProductGroupsRoutingModule } from './product-groups-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [ProductGroupsComponent, ProductGroupDetailComponent],
  imports: [
    CommonModule,
    ProductGroupsRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    ImageCropperModule,
    NgxLoadingModule,
    ModalModule.forRoot(),
  ]
})
export class ProductGroupsModule { }
