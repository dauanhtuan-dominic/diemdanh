import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { COUNTPERPAGE, TIMEOUTSEARCH, ProductGroupsService } from 'src/app/@web-core/http';
import { IPageRequest } from 'src/app/@web-core/http/global';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductGroupDetailComponent } from './product-group-detail/product-group-detail.component';
import { IPageProductGroup } from 'src/app/@web-core/http/product-groups/product-groups.DTO';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-groups',
  templateUrl: './product-groups.component.html',
  styleUrls: ['./product-groups.component.scss']
})
export class ProductGroupsComponent implements OnInit {

  public loading = false;
  tableData: any[];
  public element = COUNTPERPAGE;
  public pageResult: IPageProductGroup = {
    page: 1,
    per_page: 10,
    total_objects: 0,
    search: '',
    name:''
  };
  id: string;

  public formSearch: FormGroup;
  isAdmin = true;
  messages = {
    emptyMessage: 'No data to display'
  };
  private modelProductGroup: Subject<string> = new Subject<string>();
  modalRef: BsModalRef;

  constructor(
    private productGroupsService: ProductGroupsService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService
  ) { 
    this.formAdd();
  }

  ngOnInit(): void {
    this.loading=false;
    this.getProductGroups();
    this.delaySearch();
  }


  private formAdd() {
    this.formSearch = this.fb.group({
      product_type:[''],
      search: [''],

    });
  }

  private delaySearch() {
    this.modelProductGroup.pipe(
      debounceTime(TIMEOUTSEARCH))
      .subscribe(event => {
        this.pageResult.name=this.formSearch.value.search;
        this.pageResult.page = 1;
        this.getProductGroups();
      });
  }

  getProductGroups() {
    this.loading = true;

    this.productGroupsService.getListDatas(this.pageResult).subscribe((data: any) => {
      this.tableData = data.product_groups;
      this.loading = false;
     
      
      this.pageResult.total_objects = data.meta.pagination.total_objects || 1;
    });
  }

  public DeleteItem() {
    this.productGroupsService.delete(this.id).subscribe((data) => {
      this.getProductGroups();
      this.modalRef.hide();
    });
  }

  public changePage(event) {
    this.pageResult.page = event.page;
    this.getProductGroups();
  }

  selectItemPerPage() {
    this.pageResult.page = 1;
    this.getProductGroups();
  }

  public GetIdDelete(template: TemplateRef<any>, id: string) {
    this.modalRef = this.modalService.show(template);
    this.id = id;
  }

  public search() {
    
    this.modelProductGroup.next();
  }

  public addNewItem(){
    this.router.navigate(['pages/product-groups/create']);
  }


  public editItem(id: string){
    this.router.navigate(['pages/product-groups/detail/' + id]);
  }

}
