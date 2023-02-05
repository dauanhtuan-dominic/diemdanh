import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CustomerService, PATTERN, PERMISSIONS_CUSTOMER } from 'src/app/@web-core/http';
import { NgSelectConfig } from '@ng-select/ng-select';
import { isUndefined } from 'util';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/@web-core/storage.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  public form: FormGroup;
  public id;
  public permission = PERMISSIONS_CUSTOMER;
  separateDialCode = true;
  Classes = [
    {id: 1, name: "TBN"},
    {id: 2, name: "XT1"},
    {id: 3, name: "XT2"},
    {id: 4, name: "TS1"},
    {id: 5, name: "TS2"},
    {id: 6, name: "TS3"}, 
    {id: 7, name: "KT1"},
    {id: 8, name: "KT2"},
    {id: 9, name: "KT3"},
    {id: 10, name: "VĐ1"},
    {id: 11, name: "VĐ2"},
  ]
  groupgod = [
    {id: 1, name: "Giáo xóm 1"},
    {id: 2, name: "Giáo xóm 2"},
    {id: 3, name: "Giáo xóm 3"},
    {id: 4, name: "Giáo xóm 4"},
    {id: 5, name: "Giáo xóm 5"},
    {id: 6, name: "Giáo xóm 6"},
    {id: 7, name: "Giáo xóm 7"},
  ]
  fileUploadForm: FormGroup;
  fileInputLabel: string;
  fileimage: FormData;
  imgAvatar: any;
  constructor(
    private bsmodalRef: BsModalRef,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private config: NgSelectConfig,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.config.notFoundText = 'Không có dữ liệu';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if(params.id !== undefined) {
        this.id = params.id;
        this.editForm();
        // this.getDetailData()
      } else {
        this.addForm();
      }
    });
    this.fileUploadForm = this.fb.group({
      myfile: ['']
    });
  }

  get f(){
    return this.form.controls;
  }

  addForm() {
    this.form = this.fb.group({
      image: [''],
      namegod: [''],
      fullname: [''],
      Classes: [''],
      groupgod: [''],
      birthday: [''],
      parent: [''],
      address: ['']
    });
  }
  uploadFile(event){
    const file = (event.target as HTMLInputElement).files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) =>{
      this.imgAvatar = reader.result;
    }
    this.form.patchValue({
      image: file,
    });
    this.form.get('image').updateValueAndValidity();
  }
  createItem() {
    var formData: any = new FormData();
    formData.append('image', this.form.get('image').value);  
    formData.append('namegod', this.form.get('namegod').value);  
    formData.append('fullname', this.form.get('fullname').value);  
    formData.append('class', this.form.get('Classes').value);  
    formData.append('groupgod', this.form.get('groupgod').value);  
    formData.append('birthday', this.form.get('birthday').value);  
    formData.append('parent', this.form.get('parent').value);  
    formData.append('address', this.form.get('address').value);  
    this.customerService.create(formData).subscribe(data=>{
      if(data.success == false){
        console.log(' thêm thất bại');
      }else{
        this.router.navigate(['pages/customers']);
        console.log('thêm thành công');
      }
    })
  }
  editForm() {
    this.form = this.fb.group({
      fullname: [''],
      email: ['', [Validators.required, Validators.pattern(PATTERN.EMAIL)]],
      role: ['standard', [Validators.required]],
      phone_number: ['', [Validators.required]],
    });
    // this.form.controls['fullname'].disable();
    // this.form.controls['phone_number'].disable();
  }

  // getDetailData() {
    
  //   this.customerService.getItemDetail(this.id).subscribe((data: any) => {
  //     console.log('data nèeeee',data);
      
  //     this.form.setValue({
  //       email: data.user.email,
  //       fullname: data.user.fullname,
  //       role: data.user.role,
  //       phone_number: data.user.phone_number,
  //     });
  //   });
  // }


  // editItem() {
  //   this.customerService.edit(this.id, this.form.getRawValue()).subscribe((data: any) => {
  //     this.router.navigate(['pages/customers']);
  //   });
  // }

 
  cancel() {
    this.router.navigate(['pages/employees']);
  }
}
