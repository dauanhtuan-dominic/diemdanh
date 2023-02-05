import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AccessoryService, GlobalService, ProductGroupsService, UploadFileService } from 'src/app/@web-core/http';
import { IPageProductGroup } from 'src/app/@web-core/http/product-groups/product-groups.DTO';
@Component({
  selector: 'app-accessroy-detail',
  templateUrl: './accessroy-detail.component.html',
  styleUrls: ['./accessroy-detail.component.scss']
})
export class AccessroyDetailComponent implements OnInit {
  public form: FormGroup;
  public id;
  arrProductGroups: any[] = [];
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
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageName: string = '';
  imageUpload: any;
  public loadingProductGroup = false;
  constructor(
    private bsmodalRef: BsModalRef,
    private productGroupsService: ProductGroupsService,
    private fb: FormBuilder,
    private uploadService: UploadFileService,
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private accessoryService: AccessoryService,
    private router: Router
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
        this.AddForm();
        this.getDataDetail();
      

      } else {
        this.AddForm();
      }
    });
  }

  AddForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['',],
      product_group_id: [null],
      price: [''],
      product_image: [File],
      photos:[''],
      thumb_image:['']
    });
  }

  getDataDetail() {
    this.accessoryService.getDataDetail(this.id).subscribe((data: any) => {
     
      this.form.patchValue({
        
        name: data.accessory.name,
        description: data.accessory.description,
        product_group_id: data.accessory.product_group_id,
        // product_type: data.product.product_type,
        thumb_image: data.accessory.thumb_image,
        price: new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(data.accessory.price) || 0,
       
        photos: data.accessory.photos
      });
      // this.imageUpload = data.accessory.product_image;
      
      // this.currency()
      // this.getProductGroups('getInfo');
    });
  }

  editItem() {
    const formData = this.form.value;
    formData['thumb_image_attributes'] = formData.thumb_image;
    formData['photos_attributes'] = formData.photos;
    this.accessoryService.edit(this.id, formData).subscribe((data: any) => {
      this.router.navigate(['pages/accessories']);
    });
  }

  createItem() {
    const formData = this.objectJsonToFormData();
    this.accessoryService.create(formData).subscribe((data: any) => {
      this.router.navigate(['pages/accessories']);
    });
  }

  cancel() {
    this.router.navigate(['pages/accessories']);
  }

  currency() {
    let data = this.form.value.price.toString();
    data = data.replace(/[^0-9]/gm,'');
    data = data.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    this.form.controls['price'].setValue(data);
  }
  
  objectJsonToFormData() {
    if(this.croppedImage !== '') {
      const base64 = this.croppedImage;
      const fileResult: File = this.globalService.dataURItoBlob(base64, this.imageName);
      this.form.controls['product_image'].setValue(fileResult);
    }
    const formData = new FormData();
    const temp = this.form.value;
    temp['price'] = (temp['price']) ? temp['price'].replace(/[^0-9]/gm,'') : 0;
    for ( var item in temp ) {
      if(item === 'product_image') {
        if(this.croppedImage !== '') {
          formData.append(`product[${item}]`, temp[item], temp[item].name);
        }
      } else {
        formData.append(`product[${item}]`, (temp[item] === null) ? temp[item].toString() : null);
      }
    }
    return formData;
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
        const temp = {
          url: data.data[0],
          thumb_image_type: 'Product'
        }
        this.form.controls['thumb_image'].setValue(temp);
      });
    } else if (status === 'photos') {
      const base64 = this.imagePhoto.image;
      const fileResult: File = this.uploadService.dataURItoBlob(base64, this.imagePhoto.name);
      this.uploadService.uploadFile(fileResult).subscribe((data: any) => {
        const arrPhotos = (this.form.value.photos === null) ? [] : this.form.value.photos;
        const temp = {
          url: data.data[0],
          photoable_type: 'Product'
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
