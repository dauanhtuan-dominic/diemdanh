import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ContactComponent} from './contact.component'
import { ContactRoutingModule } from './contact-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/@web-core/pipe/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [ContactComponent, ContactDetailComponent],
  imports: [
    CommonModule, 
    ContactRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
    NgSelectModule,
    ImageCropperModule,
    ModalModule.forRoot(),
  ]
})
export class ContactModule { }
