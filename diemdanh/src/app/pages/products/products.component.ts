import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { APICONFIG, COUNTPERPAGE, PRICE_ARR, ProductsService, STATUS, SUCCESS, TIMEOUTSEARCH } from 'src/app/@web-core/http';
import { IPageRequest } from 'src/app/@web-core/http/global';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { IPageProduct } from 'src/app/@web-core/http/products/products.DTO';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  tableData: any[];
  public element = COUNTPERPAGE;
  arrPrice=PRICE_ARR;
  showDropdown=false;
  public pageResult: IPageProduct = {
    page: 1,
    per_page: 10,
    total_objects: 0,
    search: '',
    name:''
  };
  id: string;
  @ViewChild('import')
  public importExcelElementRef: ElementRef;
  // public importExcelElementRef: any;

  public formSearch: FormGroup;
  isAdmin = true;
  messages = {
    emptyMessage: 'No data to display'
  };
  selected = [];
  listId=[];
  modalRef: BsModalRef;
  private modelProduct: Subject<string> = new Subject<string>();
  public downloadExcel = window.location.origin + APICONFIG.PRODUCTS.TEMPLATE;
  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService,
    private _toast: ToastrService
  ) { 
    this.formAdd();
  }

  ngOnInit(): void {
    console.log(window.location.origin, 'window.location.origin');
    
    this.getProducts();
    this.delaySearch();
  }

  private delaySearch() {
    this.modelProduct.pipe(
      debounceTime(TIMEOUTSEARCH))
      .subscribe(event => {
        console.log(this.formSearch.value.search);
        
        this.pageResult.name = this.formSearch.value.search;
        this.pageResult.page = 1;
        this.getProducts();
      });
  }

  getProducts() {
    this.productsService.getListDatas(this.pageResult).subscribe((data: any) => {
      this.tableData = data.products;
      
      
      this.pageResult.total_objects = data.meta.pagination.total_objects || 1;
    });
  }

  public addNewItem(){
    this.router.navigate(['pages/products/create']);
  }


  public editItem(id: string){
    this.router.navigate(['pages/products/detail/' + id]);
  }
  private formAdd() {
    this.formSearch = this.fb.group({
      role: [[]],
      search: [''],
      
    });
  }
  public DeleteItem() {
    this.productsService.delete(this.id).subscribe((data) => {
      this.getProducts();
      this.modalRef.hide();
    });
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
    this.modelProduct.next();
  }
  

  importExcel(event) {
    this.productsService.ImportExcel(event.target.files[0]).subscribe((res: any) => {
      if (res.error) {
        this._toast.warning(res.error, STATUS.WARNING);
      } else {
        this._toast.success(SUCCESS.PRODUCT.IMPORT_EXCEL, STATUS.SUCCESS);
      }
      this.getProducts();
      this.importExcelElementRef.nativeElement.value = '';
    }, err => {
      this._toast.error(err.error.message, STATUS.FAIL);
      this.importExcelElementRef.nativeElement.value = '';
    });
  }
  importPdf(event){
    this.productsService.importZip(event.target.files[0]).subscribe((res: any) => {
      if (res.error) {
        this._toast.warning(res.error, STATUS.WARNING);
      } else {
        this._toast.success(SUCCESS.PRODUCT.IMPORT_PDF, STATUS.SUCCESS);
      }
      this.getProducts();
      this.importExcelElementRef.nativeElement.value = '';
    }, err => {
      this._toast.error(err.error.message, STATUS.FAIL);
      this.importExcelElementRef.nativeElement.value = '';
    });
  }
  importImg(event){
    this.productsService.importImage(event.target.files[0]).subscribe((res: any) => {
      if (res.error) {
        this._toast.warning(res.error, STATUS.WARNING);
      } else {
        this._toast.success(SUCCESS.PRODUCT.IMPORT_IMAGE, STATUS.SUCCESS);
      }
      this.getProducts();
      this.importExcelElementRef.nativeElement.value = '';
    }, err => {
      this._toast.error(err.error.message, STATUS.FAIL);
      this.importExcelElementRef.nativeElement.value = '';
    });
  }
  clickimport(){
    this.showDropdown=!this.showDropdown;
    // document.querySelector<HTMLElement>('.dropdown-content').style.opacity='1';
  }
  onSelect(row) {
   
    //  console.log(row.selected);
    
     this.listId=row.selected.map(item=>item.id)
    
    
    
  }
  getdeleteAll(template: TemplateRef<any>){
    
    this.modalRef = this.modalService.show(template);

}

 deleteAllId(){

  let data={
    "ids":this.listId
  }
  
  // console.log(JSON.stringify(data));
  
  this.productsService.deleteAll(data).subscribe(() => {
    this.getProducts();
    this.modalRef.hide();
  });
 
}
}
