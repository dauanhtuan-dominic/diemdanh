import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme1Component } from './theme1.component';
import { SidebarLeftComponent } from './layouts/sidebar-left/sidebar-left.component';
import { NavTopComponent } from './layouts/nav-top/nav-top.component';
import { Theme1Service } from './theme1.service';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';


@NgModule({
  declarations: [Theme1Component, SidebarLeftComponent, NavTopComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [Theme1Component],
  providers: [Theme1Service]
})
export class Theme1Module { }
