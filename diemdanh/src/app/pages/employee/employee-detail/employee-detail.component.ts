import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService, PATTERN, PERMISSIONS_USER_SYSTEM } from 'src/app/@web-core/http';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  public form: FormGroup;
  public id;
  public permission = PERMISSIONS_USER_SYSTEM;
  separateDialCode = true;
  constructor(
    private bsmodalRef: BsModalRef,
    private fb: FormBuilder,
    private employeeService: EmployeeService,
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
        this.getDetailData()
      } else {
        this.addForm();
      }
    });
  }

  get f(){
    return this.form.controls;
  }

  addForm() {
    this.form = this.fb.group({
      fullname: [''],
      email: ['', [Validators.required, Validators.pattern(PATTERN.EMAIL)]],
      role: ['employee', [Validators.required]],
      phone_number: [''],
      password:['',[Validators.required]],
      password_confirmation:['',[Validators.required]]
      
    });
  }

  editForm() {
    this.form = this.fb.group({
      fullname: [''],
      email: ['', [Validators.required, Validators.pattern(PATTERN.EMAIL)]],
      role: [null, [Validators.required]],
      phone_number: ['', [Validators.required]],
     
    });
    
  }

  getDetailData() {
    this.employeeService.getItemDetail(this.id).subscribe((data: any) => {
      this.form.setValue({
        email: data.user_system.email,
        fullname: data.user_system.fullname,
        role: data.user_system.role,
        phone_number: data.user_system.phone_number,
      });
    });
  }


  editItem() {
    this.employeeService.edit(this.id, this.form.getRawValue()).subscribe((data: any) => {
      this.router.navigate(['pages/employees']);
    });
  }

  createItem() {
    this.employeeService.create(this.form.getRawValue()).subscribe((data: any) => {
      this.router.navigate(['pages/employees']);
    });
  }

  cancel() {
    this.router.navigate(['pages/employees']);
  }

}
