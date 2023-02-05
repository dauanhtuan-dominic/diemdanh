import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/@web-core/pipe/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgxCurrencyModule } from "ngx-currency";


@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
    NgSelectModule,
    ImageCropperModule,
    ModalModule.forRoot(),
    CKEditorModule,
    NgxCurrencyModule,
 
  ]
})
export class ProductsModule { }
