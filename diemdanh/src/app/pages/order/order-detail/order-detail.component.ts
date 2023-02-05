import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService,STATUS_ORDER , DROPDOWNNOTFOUND, IPageRequest, OrderService, ProductsService, GlobalService } from 'src/app/@web-core/http';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public form: FormGroup;
  public id;
  arrProduct: any[] = [];
  arrCustomer: any[] = [];
  arrStatusOrder=STATUS_ORDER;
  public notFoundText = DROPDOWNNOTFOUND;
  order_details: any;
  activeAmount=false
  arrayOrder:any=[];
  pageProduct: IPageRequest = {
    page: 1,
    per_page: 8,
    total_objects: 0,
    search: ''
  };
  pageCusomer: IPageRequest = {
    page: 1,
    per_page: 8,
    total_objects: 0,
    search: ''
  };

  public loadingCustomer = false;
  public loadingProduct = false;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private productService: ProductsService,
    private customerService:CustomerService,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private router: Router,
   
  ) {
    this.AddForm();
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    
    this.route.params.subscribe((params) =>  {
   
      if(params.id !== undefined) {
        this.id = params.id;
        this.EditForm();
        this.getItem()
      } else {
        this.AddForm();
      }
    });
  }

  AddForm() {
    this.form = this.fb.group({
      user_id: ['', [Validators.required]],
      code: ['', [Validators.required]],
      id_tracking: ['', [Validators.required]],
      id_order: ['', [Validators.required]],
      order_details: [[]],
      amount: [0],
      id_product: [[]]
      
    });
  }
  EditForm() {
    this.form = this.fb.group({
      status: [''],
      fullname: [{value: '', disabled: true},],
      phone_number:  [{value: '', disabled: true},],
      order_details: [''],
      code:  [{value: '', disabled: true},],
      email:  [{value: '', disabled: true},],
      product_id:['']
      
    });
  }

  getItem() {
    this.orderService.getItemDetail(this.id).subscribe((data: any) => {
    
      this.form.patchValue({
        status: data.order.status,
        fullname:data.order.user.fullname,
        phone_number:data.order.user.phone_number,
        order_details:data.order.order_details,
        code:data.order.code,
        email:data.order.user.email,
        
      });
      // this.currency();
      this.order_details = data.order.order_details;
    });
  }

  editItem() {
    const formData = this.form.value;
    this.orderService.edit(this.id, formData).subscribe((data: any) => {
      this.router.navigate(['pages/orders']);
    });
  }
  createItem(){
    const formData ={
      order:{
        user_id:this.form.value.user_id.id,
        code:this.form.value.code,
        tracking_id:this.form.value.tracking_id,
        order_details_attributes:this.form.value.order_details
      }
    }
   
    this.orderService.create(formData).subscribe((data:any)=>{
      this.router.navigate(['pages/orders']);
    })
    
  }
 
  public searchProductGroup(event) {
    
    this.pageProduct.search = event;
    this.pageProduct.page = 1;
    this.getListProduct('search');
  }
  
  cancel() {
    this.router.navigate(['pages/orders']);
  }

  // currency() {

  //   let data = this.form.value.price.toString();

  //   // const newVal = (parseInt(myVal.replace(/\.,/g, '')) / 100).toLocaleString('en-US', { minimumFractionDigits: 2 });
  //   const temp = this.globalService.currency('usd', data);

  //   // data = data.replace(/[^0-9.]/gm, '');
  //   // data = data.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  //   this.form.controls['price'].setValue(temp);
  // }

  public searchCustomer(event) {
    this.pageCusomer.search = event;
    this.pageCusomer.page = 1;
    // this.getListCustomer('search');
  }

  // scrollEnd(type) {
  //   if (type === 'product_group') {
  //     if (this.loadingCustomer || this.arrProduct.length === this.pageProduct.total_objects) {
  //       return;
  //     } else {
  //       this.pageProduct.page += 1;
  //       this.getListProduct();
  //     }
  //   }
  //   if (type === 'customer') {
  //     if (this.loadingCustomer || this.arrCustomer.length === this.pageCusomer.total_objects) {
  //       return;
  //     } else {
  //       this.pageCusomer.page += 1;
  //       this.getListCustomer();
  //     }
  //   }
  // }

  public removeInput(type) {
    if (type === 'product_group') {
      this.searchCustomer('');
    }
    if (type === 'customer') {
      this.searchCustomer('');
    }
  }

  getListProduct(status?) {
    this.loadingProduct = true;
    this.productService.getListDatas(this.pageProduct).subscribe((res: any) => {
      if (status && status === 'search') {
        this.arrProduct = [];
      }
      this.pageProduct.total_objects = res.meta.pagination.total_objects;
      
      this.arrProduct = this.arrProduct.concat(res.products);
      this.loadingProduct = false;
    });
  }
  // getListCustomer(status?) {
  //   this.loadingCustomer = true;
  //   this.customerService.getListDatas(this.pageCusomer).subscribe((res: any) => {
  //     if (status && status === 'search') {
  //       this.arrCustomer = [];
  //     }
  //     this.pageCusomer.total_objects = res.meta.pagination.total_objects;
     
  //     this.arrCustomer = this.arrCustomer.concat(res.users);
  //     this.loadingCustomer = false;
      
  //   });
  // }
  currency() {

    let data = this.form.value.amount.toString();
    data = data.replace(/[^0-9]/gm,'');
    data = data.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    

    // data = data.replace(/[^0-9.]/gm, '');
    // data = data.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    this.form.controls['amount'].setValue(data);
  }
  upload() {
    const temp = this.form.value.order_details;
    
    
   let check=temp.find(item => item.name.id === this.form.value.id_product.id);
   if(check)
   {
    let a=parseInt(check.amount);
    let b =parseInt(this.form.value.amount);
    a+=b;
    check.amount=a;
   }
   else{

    temp.push({
      name:this.form.value.id_product,
      amount:this.form.value.amount,
      yieldable_type:"Product",
      yieldable_id:this.form.value.id_product.id

    });
   }
  
    
    console.log(temp);
 
    
    // this.form.controls["order_details"].setValue(temp);
    
   
    
  }
  show(){
    
    this.activeAmount=true;
  }
  
}
