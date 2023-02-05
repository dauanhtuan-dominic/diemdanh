import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { COUNTPERPAGE, CustomerService, IPageRequest, PERMISSIONS_CUSTOMER, TIMEOUTSEARCH } from 'src/app/@web-core/http';
import { IPageCustomer } from 'src/app/@web-core/http/customer/customer.DTO';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  tableData: any[];
  public element = COUNTPERPAGE;
  arrRole = PERMISSIONS_CUSTOMER;
  public pageResult: IPageCustomer = {
    page: 1,
    per_page: 20,
    total_objects: 0,
    search: '',
    fullname:''
  };
  idActive = {
    id: '',
    active: true
  }

  public formSearch: FormGroup;
  isAdmin = true;
  messages = {
    emptyMessage: 'Không có dữ liệu'
  };
  modalRef: BsModalRef;
  idUser:string;
  private modelAccount: Subject<string> = new Subject<string>();
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.formAdd();
  }

  ngOnInit() {
    this.getDataLists();
    this.delaySearch();
    this.formSearch = this.fb.group({
      id:['']
    })
  }

  private delaySearch() {
    this.modelAccount.pipe(
      debounceTime(TIMEOUTSEARCH))
      .subscribe(event => {
        // this.pageResult.search = this.formSearch.value.search;
        this.pageResult.fullname=this.formSearch.value.search;
        this.pageResult.page = 1;
        this.getDataLists();
      });
  }

  private formAdd() {
    this.formSearch = this.fb.group({
      role: [[]],
      search: [''],
      
    });
  }

  getDataLists() { 
    
    this.customerService.getListDatas().subscribe((data: any) => {
      this.tableData = data.result;
      console.log('table data', this.tableData);
      // this.pageResult.total_objects = data.meta.pagination.total_objects;
    });
  }

  
  public addNewItem(){
    this.router.navigate(['pages/customers/create']);
  }


  public editItem(id: string){
    this.router.navigate(['pages/customers/detail/' + id]);
  }


  public changePage(event) {
    this.pageResult.page = event.page;
    this.getDataLists();
  }

  selectItemPerPage() {
    this.pageResult.page = 1;
    this.getDataLists();
  }


  public search() {
    this.modelAccount.next();
    
  }

  // public getIdActive(iduser:any) {
  //   this.modalRef = this.modalService.show(iduser);
  //   this.idActive = {
  //     id: row.id,
  //     active: row.active
  //   };
   
  // GetIdDelete(id:string){
  //   this.idUser = id;
  //   this.DeleteItem
    
  // }

  DeleteItem(id:string){
    var formData: any = new FormData();
    formData.append('id', this.formSearch.patchValue({'id':id}))
    console.log('formdata',formData);
    
    this.customerService.delete(formData).subscribe(data=>{
      console.log('thành công', data);
      this.getDataLists();
    })
  }
  // public changeActive() {
  //   const modifer = {
  //     active: !this.idActive.active
  //   }
  //   this.customerService.edit(this.idActive.id, modifer).subscribe((data) => {
  //     this.getDataLists();
  //   });
  //   this.modalRef.hide();
  // }

}
