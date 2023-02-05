import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService, ProductGroupsService, UploadFileService, DROPDOWNNOTFOUND, GlobalService, PRICE_ARR } from 'src/app/@web-core/http';
import { IPageProductGroup } from 'src/app/@web-core/http/product-groups/product-groups.DTO';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ActivatedRoute, Router } from '@angular/router';
import { isBuffer } from 'util';
// import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public form: FormGroup;
  public id;
  arrPrice=PRICE_ARR;
  promotion_price=0;
  base_price=0
  arrProductGroups: any[] = [];
  public notFoundText = DROPDOWNNOTFOUND;

  pageProductGroups: IPageProductGroup = {
    page: 1,
    per_page: 10,
    total_objects: 0,
    product_type: 'food',
    search: ''
  };

  imageThumb = {
    image: '',
    imageChanged: '',
    name: ''
  }
  imagePhoto = {
    image: '',
    imageChanged: '',
    name: ''
  }

  public loadingProductGroup = false;

  constructor(
    private fb: FormBuilder,
    private productGroupsService: ProductGroupsService,
    private productsService: ProductsService,
    private uploadService: UploadFileService,
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService
  ) {
    this.AddForm();
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.getProductGroups();
    this.route.params.subscribe((params) => {
      if (params.id !== undefined) {
        this.id = params.id;
        this.AddForm();
        this.getInfoProduct();
       
      } else {
        this.AddForm();
      }
    });
  }

  AddForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['',[Validators.required]],
      short_description: ['',[Validators.required]],
      product_group_id: [null],
      price: [''],
      thumb_image:[],
      thumb_image_url: '',
      thumb_image_name:'',
       photos: [[]],
      base_price:[''],
      standard_price:[''],
      premium_price:[''],
      catalogue_name:[''],
      catalogue_url:[''],
      code:[''],
    });
  }

  getInfoProduct() {
    this.productsService.getItemDetail(this.id).subscribe((data: any) => {
      
      this.form.patchValue({
        name: data.product.name,
        short_description: data.product.short_description,
        description: data.product.description,
        product_group_id: data.product.product_group_id,
        product_type: data.product.product_type,
        thumb_image: data.product.thumb_image,
        photos: data.product.photos,
        base_price:data.product.price.price || 0,
        standard_price:data.product.price.standard_price || 0,
        premium_price:data.product.price.premium_price || 0,
        catalogue_name:data.product.catalogue?.name||'',
        catalogue_url:data.product.catalogue?.url||'',
        code:data.product.code,
        thumb_image_name:data.product.thumb_image.name,
        thumb_image_url:data.product.thumb_image.url
        
      });
      this.currency();
    });
   
    
  }

  editItem() {
    const formData = this.form.value;
  const temp={
    name:this.form.value.thumb_image_name,
    url:this.imageThumb.image
  }
    this.form.controls['thumb_image'].setValue(temp);
    formData['thumb_image_attributes'] = temp;
    formData['photos_attributes'] = formData.photos;
    
    const test={
      
      "price": parseFloat( this.form.controls['base_price'].value),
      "standard_price": parseFloat( this.form.controls['standard_price'].value),
      "premium_price": parseFloat( this.form.controls['premium_price'].value),
      
      
    }
    formData['pricing_service_attributes'] = test;
    const test1={
      'name':this.form.controls['catalogue_name'].value,
      'url':this.form.controls['catalogue_url'].value,
    }
  
  formData['catalogue_attributes'] = test1;
    
    this.productsService.edit(this.id, formData).subscribe((data: any) => {
      this.router.navigate(['pages/products']);
    });
  }

  createItem() {
    const formData = this.form.value;
    const temp = {
      name: this.form.value.thumb_image_name,
      url: this.imageThumb.image
    }
    this.form.controls['thumb_image'].setValue(temp);
    formData['thumb_image_attributes'] = temp;
    formData['photos_attributes'] = formData.photos;
    const test={
      
      "price": this.form.controls['base_price'].value,
      "standard_price": this.form.controls['standard_price'].value,
      "premium_price": this.form.controls['premium_price'].value,
      "thumb_image_url":this.imageThumb.image
      
    }
      const test1={
        'name':this.form.controls['catalogue_name'].value,
        'url':this.form.controls['catalogue_url'].value,
      }
    formData['pricing_service_attributes'] = test;
    formData['catalogue_attributes'] = test1;
    this.productsService.create(formData).subscribe((data: any) => {
      this.router.navigate(['pages/products']);
    });
  }

  cancel() {
    this.router.navigate(['pages/products']);
  }

  getProductGroups(status?) {
    this.loadingProductGroup = true;
    this.productGroupsService.getListDatas(this.pageProductGroups).subscribe((res: any) => {
      if (status && status === 'search') {
        this.arrProductGroups = [];
      }
      this.pageProductGroups.total_objects = res.meta.pagination.total_objects;
      this.arrProductGroups = this.arrProductGroups.concat(res.product_groups);
      this.loadingProductGroup = false;
    });
  }

  currency() {

    let data = this.form.value.price.toString();

    // const newVal = (parseInt(myVal.replace(/\.,/g, '')) / 100).toLocaleString('en-US', { minimumFractionDigits: 2 });
    const temp = this.globalService.currency('usd', data);

    // data = data.replace(/[^0-9.]/gm, '');
    // data = data.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    this.form.controls['price'].setValue(temp);
  }

  fileChangeEvent(event: any, status: string): void {
    const temp = event.target.value.split(/\\/g);
    if (status === 'thumb_image') {
      this.imageThumb.name = temp[temp.length - 1];
      this.imageThumb.imageChanged = event;
    } else if (status === 'photos') {
      this.imagePhoto.name = temp[temp.length - 1];
      this.imagePhoto.imageChanged = event;
    }
  }
  imageCropped(event: ImageCroppedEvent, status) {
    if (status === 'thumb_image') {
      this.imageThumb.image = event.base64;
    } else if (status === 'photos') {
      this.imagePhoto.image = event.base64;
    }
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  upload(status) {
    if (status === 'thumb_image') {
      const base64 = this.imageThumb.image;
      const fileResult: File = this.uploadService.dataURItoBlob(base64, this.imageThumb.name);
      this.uploadService.uploadFile(fileResult).subscribe((data: any) => {
        // const temp = {
        //   url: data.data[0],
        //   // thumb_image_type: 'Product',
        //   name:this.form.value.thumb_image_name
        // }
        
        this.form.controls['thumb_image_url'].setValue(data.data[0]);
        this.imageThumb.image=data.data[0];
        // th.is.form.controls['thumb_image'].setValue(temp);
      });
    } else if (status === 'photos') {
      const base64 = this.imagePhoto.image;
      const fileResult: File = this.uploadService.dataURItoBlob(base64, this.imagePhoto.name);
      this.uploadService.uploadFile(fileResult).subscribe((data: any) => {
        const arrPhotos = (this.form.value.photos === null) ? [] : this.form.value.photos;
        const temp = {
          url: data.data[0],
          // photoable_type: 'Product'
        }
        arrPhotos.push(temp);
      
        this.form.controls['photos'].setValue(arrPhotos);
      });
    }
  }

  removePhoto(item) {
    const temp = this.form.value.photos.filter(x => x.id !== item.id);
    this.form.controls['photos'].setValue(temp);
  }

  public searchProductGroup(event) {
    this.pageProductGroups.search = event;
    this.pageProductGroups.page = 1;
    this.getProductGroups('search');
  }

  scrollEnd(type) {
    if (type === 'product_group') {
      if (this.loadingProductGroup || this.arrProductGroups.length === this.pageProductGroups.total_objects) {
        return;
      } else {
        this.pageProductGroups.page += 1;
        this.getProductGroups();
      }
    }
  }

  public removeInput(type) {
    if (type === 'product_group') {
      this.searchProductGroup('');
    }
  }
  

}




