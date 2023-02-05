import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { COUNTPERPAGE, IPageRequest, OrderService, STATUS_ORDER ,TIMEOUTSEARCH } from 'src/app/@web-core/http';
import { IPageOrder } from 'src/app/@web-core/http/order/order.DTO';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  modalRef: BsModalRef;
  tableData: any[];
  public element = COUNTPERPAGE;
  arrRole = STATUS_ORDER;
  public pageResult: IPageOrder = {
    page: 1,
    per_page: 10,
    total_objects: 0,
    // search: '',
    // code:'',
    // email:''
  };
  id: string;

  public formSearch: FormGroup;
  isAdmin = true;
  messages = {
    emptyMessage: 'No data to display'
  };
  private modelOrder: Subject<string> = new Subject<string>();

  constructor(
    private orderService: OrderService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService
  ) { 
    this.formAdd();
  }

  ngOnInit(): void {
    this.getProducts();
    this.delaySearch();
  }

  private delaySearch() {
    this.modelOrder.pipe(
      debounceTime(TIMEOUTSEARCH))
      .subscribe(event => {
        this.pageResult.code=this.formSearch.value.search;
        this.pageResult.email=this.formSearch.value.search;
        this.pageResult.page = 1;
        this.getProducts();
      });
  }

  getProducts() {
    this.orderService.getListDatas(this.pageResult).subscribe((data: any) => {
    
      
      this.tableData = data.orders;
     
      this.pageResult.total_objects = data.meta.pagination.total_objects || 1;
    });
  }

  public addNewItem(){
    this.router.navigate(['pages/orders/create']);
  }

  private formAdd() {
    this.formSearch = this.fb.group({
      search: [''],
      
    });
  }
  public editItem(id: string){
    this.router.navigate(['pages/orders/detail/' + id]);
  }

 

  public changePage(event) {
    this.pageResult.page = event.page;
    this.getProducts();
  }

  selectItemPerPage() {
    this.pageResult.page = 1;
    this.getProducts();
  }

  public GetIdDelete(template: TemplateRef<any>, id: string) {
    this.modalRef = this.modalService.show(template);
    this.id = id;
  }

  
  public search() {
    this.modelOrder.next();
  }
}
