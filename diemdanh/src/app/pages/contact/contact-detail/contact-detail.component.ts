import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/@web-core/http';
import { ContactService } from 'src/app/@web-core/http/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  public form: FormGroup;
  public id;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private router: Router) {
      this.EditForm();
     }
    get f() {
      return this.form.controls;
    }
  ngOnInit(): void {
    this.route.params.subscribe((params) =>  {
   
      
        this.id = params.id;
        this.EditForm();
        this.getItem()
      
    });
  }
  cancel() {
    this.router.navigate(['pages/orders']);
  }
  EditForm() {
    this.form = this.fb.group({

      email: [{value: '', disabled: true},],
      content:  [{value: '', disabled: true},],
     
     
      
    });
  }
  getItem() {
    this.contactService.getItemDetail(this.id).subscribe((data: any) => {
    
      this.form.patchValue({
        email:data.customer_responce.email,
        content:data.customer_responce.content
        
      });
      // this.currency();
    });
  }
}
