import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { COUNTPERPAGE } from 'src/app/@web-core/http';
import { ContactService } from 'src/app/@web-core/http/contact';
import { IPageContact } from 'src/app/@web-core/http/contact/contact.DTO';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  getRowClass = (row) => {
    
    // return {
    //   'row-color': true
    // };
    if (row.open_at) {
      return {
        'row-color': true
      };
    } else {
      return {
        'row-color': false
      };
    }
  }

  modalRef: BsModalRef;
  public element = COUNTPERPAGE;
  public pageResult: IPageContact = {
    page: 1,
    per_page: 10,
    total_objects: 0,
    search: '',
    name:''
  };
  id:string;
  tableData: any[];
  public formSearch: FormGroup;
  isAdmin = true;
  messages = {
    emptyMessage: 'No data to display'
  };
  private modelContact: Subject<string> = new Subject<string>();
  constructor( private contactService: ContactService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService) { 
      this.formAdd();
    }

  ngOnInit(): void {
    this.getDataLists();
   
  }
  public changePage(event) {
    this.pageResult.page = event.page;
    this.getDataLists();
  }
  public searchFillter(event) {
    this.modelContact.next(event);
  }
  private formAdd() {
    this.formSearch = this.fb.group({
      role: [[]],
      search: [''],
      
    });
  }
  getDataLists() {
    this.contactService.getListDatas(this.pageResult).subscribe((data: any) => {
     
      this.tableData = data.customer_responces;
      this.pageResult.total_objects = data.meta.pagination.total_objects;
    });
  }
  selectItemPerPage() {
    this.pageResult.page = 1;
    this.getDataLists();
  }
  public GetIdDelete(template: TemplateRef<any>, id: string) {
    this.modalRef = this.modalService.show(template);
    this.id = id;
  }
  public DeleteItem() {
    this.contactService.delete(this.id).subscribe((data) => {
      this.getDataLists();
      this.modalRef.hide();
    });
  }
  public editItem(id: string){
    this.router.navigate(['pages/contact/detail/' + id]);
  }
}
