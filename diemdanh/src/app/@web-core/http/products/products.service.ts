import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPageRequest } from '../global';
import { map, catchError } from 'rxjs/operators';
import { requestQuery } from 'src/app/@web-core/utils';
import { APICONFIG, SUCCESS, STATUS } from '../@http-config';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
@Injectable()
export class ProductsService {

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    
  ) { }

  public getListDatas(request: IPageRequest) {
    return this.http.get<any>(`${APICONFIG.PRODUCTS.GET}?${(requestQuery(request))}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }

  public getItemDetail(id: string) {
    return this.http.get<any>(`${APICONFIG.PRODUCTS.GETDETAIL(id)}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }

  public create(payload: any) {
    delete payload.thumb_image;
    delete payload.photos;
    return this.http.post<any>(`${APICONFIG.PRODUCTS.CREATE}`, payload).pipe(
      map((result) => {
        this.toastr.success(SUCCESS.CREATE, STATUS.SUCCESS);
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }

  public edit(id: string, modifer: any) {
    delete modifer.thumb_image;
    delete modifer.photos;
    return this.http.put<any>(`${APICONFIG.PRODUCTS.EDIT(id)}`, modifer).pipe(
      map((result) => {
        this.toastr.success(SUCCESS.EDIT, STATUS.SUCCESS);
        return result;
      }),
      catchError((errorRes) => {
        throw errorRes.error;
      }));
  }

  public delete(id: string) {
    return this.http.delete(`${APICONFIG.PRODUCTS.DELETE(id)}`).pipe(
      map((result) => {
        this.toastr.success(SUCCESS.DELETE, STATUS.SUCCESS);
        return result;
      }),
      catchError((errorRes: any) => {
        throw errorRes.error;
      }));
  }
  public deleteAll(modifer: any) {
    console.log(modifer);
    const option={
      body:modifer
    }
    
    return this.http.request<any>('delete',`${APICONFIG.PRODUCTS.DELETEALL}`, option).pipe(
      map((result) => {
        this.toastr.success(SUCCESS.DELETE, STATUS.SUCCESS);
        
        return result;
      }),
      catchError((errorRes: any) => {
        throw errorRes.error;
      }));
  }
   // IMPORT BANG EXCEL
  //  public ImportExcel(payload: any) {
  //   delete payload.file;
  //   return this.http.post(`${APICONFIG.PRODUCTS.IMPORTEXCEL}`, payload).pipe(
  //     map((result) => {
        
  //       this.toastr.success(SUCCESS.GET, STATUS.SUCCESS);
  //       return result;
  //     }),
  //     catchError((errorRes: any) => {
        
  //       this.toastr.error(errorRes.error.message, STATUS.FAIL);
  //       throw errorRes.error;
  //     }));
  // }

  public ImportExcel(file: File) {
    // this.spinnerService.show();
    const formRequest = new FormData();
    formRequest.append('file', file, file.name);
    return this.http.post(`${APICONFIG.PRODUCTS.IMPORTEXCEL}`, formRequest).pipe(
      map((result) => {
        // this.spinnerService.hide();
        this.toastr.success(SUCCESS.PRODUCT.IMPORT_EXCEL, STATUS.SUCCESS);
        return result;
      }),
      catchError((errorRes: any) => {
        // this.spinnerService.hide();
        this.toastr.error(errorRes.error.message, STATUS.FAIL);
        throw errorRes.error;
      }));
  }
  public importZip(file:File){
    const formRequest = new FormData();
    formRequest.append('file', file, file.name);
    return this.http.post(`${APICONFIG.PRODUCTS.IMPORTZIP}`, formRequest).pipe(
      map((result) => {
        // this.spinnerService.hide();
        this.toastr.success(SUCCESS.PRODUCT.IMPORT_PDF, STATUS.SUCCESS);
        return result;
      }),
      catchError((errorRes: any) => {
        // this.spinnerService.hide();
        this.toastr.error(errorRes.error.message, STATUS.FAIL);
        throw errorRes.error;
      }));
  }
  public importImage(file:File){
    const formRequest = new FormData();
    formRequest.append('file', file, file.name);
    return this.http.post(`${APICONFIG.PRODUCTS.IMPORTIMAGE}`, formRequest).pipe(
      map((result) => {
        // this.spinnerService.hide();
        this.toastr.success(SUCCESS.PRODUCT.IMPORT_IMAGE, STATUS.SUCCESS);
        return result;
      }),
      catchError((errorRes: any) => {
        // this.spinnerService.hide();
        this.toastr.error(errorRes.error.message, STATUS.FAIL);
        throw errorRes.error;
      }));

  }

  // EXPORT EXCEL
  public exportExcel(id, page: any, startDay, endDay) {
    const req = {
      idEmployee: id,
      page: page.page,
      amount: page.amount,
      typesort: page.typesort,
      startDay: startDay,
      endDay: endDay
    };

    return this.http.post<any>(`${APICONFIG.PRODUCTS.EXPORTEMPLOYEE}`, req).pipe(
      map((result) => {
        const newWindow = window.open(environment.baseUrl + '/' + result, '_blank');
        newWindow.focus();
        newWindow.onblur = () => newWindow.close();
        return result;
      }),
      catchError((errorRes: any) => { throw errorRes.error; }));
  }
}
