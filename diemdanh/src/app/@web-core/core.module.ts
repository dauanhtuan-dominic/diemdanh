import { NgModule, ModuleWithProviders, InjectionToken, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, ProductGroupsService, ProductsService, OrderService,
  GlobalService, AccessoryService, UploadFileService, ReadFileService } from './http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { IntercepterService } from './http-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_URL } from './http/@http-config';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment.prod';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { EmployeeService } from './http/employee';
import { CustomerService } from './http/customer';
import{ContactService} from './http/contact'
import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    ModalModule.forRoot(),
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<unknown> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: API_URL, useValue: environment.baseUrl },
        { provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true },
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        AuthService,
        StorageService,
        EmployeeService,
        ProductGroupsService,
        ProductsService,
        OrderService,
        ContactService,
        CustomerService,
        GlobalService,
        BsModalRef,
        AccessoryService,
        ReadFileService,
        UploadFileService,
        BsModalService,
        
      ]
    };
  }
}
