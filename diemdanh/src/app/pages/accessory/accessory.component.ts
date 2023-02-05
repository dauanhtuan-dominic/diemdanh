import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AccessoryService, COUNTPERPAGE, IPageRequest, TIMEOUTSEARCH } from 'src/app/@web-core/http';
import { IPageAccessory } from 'src/app/@web-core/http/accessory/accessory.DTO';

@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrls: ['./accessory.component.scss']
})
export class AccessoryComponent implements OnInit {
  tableData: any[];
  public element = COUNTPERPAGE;
  public pageResult: IPageAccessory = {
    page: 1,
    per_page: 10,
    total_objects: 0,
    name: ''
  };
  id: string;

  public formSearch: FormGroup;
  isAdmin = true;
  messages = {
    emptyMessage: 'No data to display'
  };
  private modelAccessory: Subject<string> = new Subject<string>();
  modalRef: BsModalRef;
  constructor(
    private accessorySerivce: AccessoryService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService
  ) { 
    this.formAdd();
  }

  ngOnInit(): void {
    this.getDatasList();
    this.delaySearch();
  }


  private formAdd() {
    this.formSearch = this.fb.group({
      arrTrademark: [[]],
      arrPosition: [[]],
      arrDepartment: [[]],
      search:['']
    });
  }

  private delaySearch() {
    this.modelAccessory.pipe(
      debounceTime(TIMEOUTSEARCH))
      .subscribe(event => {
        this.pageResult.name = this.formSearch.value.search;
        this.pageResult.page = 1;
        this.getDatasList();
      });
  }

  getDatasList() {
    this.accessorySerivce.getDatasList(this.pageResult).subscribe((data: any) => {
      this.tableData = data.accessories;
      this.pageResult.total_objects = data.meta.pagination.total_objects || 1;
    });
  }

  public DeleteItem() {
    this.accessorySerivce.delete(this.id).subscribe((data) => {
      this.getDatasList();
      this.modalRef.hide();
    });
  }

  public changePage(event) {
    this.pageResult.page = event.page;
    this.getDatasList();
  }

  selectItemPerPage() {
    this.pageResult.page = 1;
    this.getDatasList();
  }

  public GetIdDelete(template: TemplateRef<any>, id: string) {
    this.modalRef = this.modalService.show(template);
    this.id = id;
   
  }

  public search() {
    
    
    this.modelAccessory.next();
    
  }

  public addNewItem(){
    this.router.navigate(['pages/accessories/create']);
  }


  public editItem(id: string){
    this.router.navigate(['pages/accessories/detail/' + id]);
  }

}
