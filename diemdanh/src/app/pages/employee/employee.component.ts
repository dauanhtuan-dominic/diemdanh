import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { COUNTPERPAGE, EmployeeService, IPageRequest, PERMISSIONS_USER_SYSTEM, TIMEOUTSEARCH } from 'src/app/@web-core/http';
import { IPageEmployee } from 'src/app/@web-core/http/employee/employee.DTO';
import { isNull } from 'util';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  tableData: any[];
  public element = COUNTPERPAGE;
  arrRole = PERMISSIONS_USER_SYSTEM;
  public pageResult: IPageEmployee = {
    page: 1,
    per_page: 10,
    total_objects: 0,
    fullname: '',
  };
  idActive = {
    id: '',
    active: true
  }

  public formSearch: FormGroup;
  isAdmin = true;
  messages = {
    emptyMessage: 'No data to display'
  };
  modalRef: BsModalRef;

  private modelAccount: Subject<string> = new Subject<string>();
  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.formAdd();
  }

  ngOnInit() {
    this.getDataLists();
    this.delaySearch();
  }

  private delaySearch() {
    this.modelAccount.pipe(
      debounceTime(TIMEOUTSEARCH))
      .subscribe(event => {
        this.pageResult.fullname = this.formSearch.value.search;
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
    this.employeeService.getListDatas(this.pageResult).subscribe((data: any) => {
     
      this.tableData = data.user_systems;
      this.pageResult.total_objects = data.meta.pagination.total_objects;
    });
  }

  public addNewItem(){
    this.router.navigate(['pages/employees/create']);
  }


  public editItem(id: string){
    this.router.navigate(['pages/employees/detail/' + id]);
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

  public getIdActive(template: TemplateRef<any>, row) {
    this.modalRef = this.modalService.show(template);
    this.idActive = {
      id: row.id,
      active: row.active
    };
  }

  changeActive() {
    const modifer = {
      active: !this.idActive.active
    }
    this.employeeService.edit(this.idActive.id, modifer).subscribe((data) => {
      this.getDataLists();
      this.modalRef.hide();
    })
  }

}
