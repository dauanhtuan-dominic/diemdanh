import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';
import { requestQuery } from '../../utils';
import { APICONFIG, STATUS, SUCCESS } from '../@http-config';
import { IPageEmployee } from '../employee/employee.DTO';

@Injectable()
export class CustomerService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }

  public getListDatas() {
    return this.http.get<IPageEmployee>(`${APICONFIG.CUSTOMER.GET}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }

  // public getItemDetail(id: string) {
  //   return this.http.get<any>(`${APICONFIG.CUSTOMER.GETDETAIL(id)}`).pipe(
  //     map((result) => {
  //       return result;
  //     }),
  //     catchError((errorRes) => { throw errorRes.error; }));
  // }

  public create(payload: any) {
    return this.http.post<any>(`${APICONFIG.CUSTOMER.CREATE}`, payload).pipe(
      map((result) => {
        this.toastr.success(SUCCESS.CREATE, STATUS.SUCCESS);
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }

  // public edit(id: string, modifer: any) {
   
    
  //   return this.http.put<any>(`${APICONFIG.CUSTOMER.EDIT(id)}`, modifer).pipe(
  //     map((result) => {
  //       this.toastr.success(SUCCESS.EDIT, STATUS.SUCCESS);
  //       return result;
  //     }),
  //     catchError((errorRes) => { throw errorRes.error; }));
  // }


    // XOA MOT NHAN VIEN
    public delete(id: string) {
      return this.http.delete(`${APICONFIG.CUSTOMER.DELETE(id)}`).pipe(
        map((result) => {
          this.toastr.success(SUCCESS.DELETE, STATUS.SUCCESS);
          return result;
        }),
        catchError((errorRes: any) => {
          throw errorRes.error;
        }));
    }
}
