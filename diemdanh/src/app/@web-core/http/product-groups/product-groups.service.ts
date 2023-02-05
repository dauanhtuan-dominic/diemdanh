import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APICONFIG, SUCCESS, STATUS } from '../@http-config';
import { catchError, map } from 'rxjs/operators';
import { requestQuery } from 'src/app/@web-core/utils';
import { IPageRequest } from '../global';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProductGroupsService {

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
  ) { }

  public getListDatas(request: IPageRequest) {
    return this.http.get<any>(`${APICONFIG.PRODUCT_GROUP.GET}?${(requestQuery(request))}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }

  public getItemDetail(id: string) {
    return this.http.get<any>(`${APICONFIG.PRODUCT_GROUP.GETDETAIL(id)}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }

  public create(payload) {
    return this.http.post<any>(`${APICONFIG.PRODUCT_GROUP.CREATE}`, payload).pipe(
      map((result) => {
        this.toastr.success(SUCCESS.CREATE, STATUS.SUCCESS);
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }

  public edit(id: string, modifer: any) {
    return this.http.put<any>(`${APICONFIG.PRODUCT_GROUP.EDIT(id)}`, modifer).pipe(
      map((result) => {
        this.toastr.success(SUCCESS.EDIT, STATUS.SUCCESS);
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }

    // XOA
    public delete(id: string) {
      return this.http.delete(`${APICONFIG.PRODUCT_GROUP.DELETE(id)}`).pipe(
        map((result) => {
          this.toastr.success(SUCCESS.DELETE, STATUS.SUCCESS);
          return result;
        }),
        catchError((errorRes: any) => {
          throw errorRes.error;
        }));
    }
}