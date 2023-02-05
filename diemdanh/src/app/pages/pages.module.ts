import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { Theme2Module } from '../@modular/template/theme2/theme2.module';
import { Theme1Module } from '../@modular/template/theme1/theme1.module';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    Theme2Module,
    Theme1Module,
  ]
})
export class PagesModule { }
