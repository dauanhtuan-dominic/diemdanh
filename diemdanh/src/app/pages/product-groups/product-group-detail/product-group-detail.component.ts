import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductGroupsService, UploadFileService } from 'src/app/@web-core/http';
import { isUndefined } from 'util';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-product-group-detail',
  templateUrl: './product-group-detail.component.html',
  styleUrls: ['./product-group-detail.component.scss']
})
export class ProductGroupDetailComponent implements OnInit {
  public form: FormGroup;
  public id;

  imageThumb = {
    image: '',
    imageChanged: '',
    name: ''
  }
  constructor(
    private bsmodalRef: BsModalRef,
    private fb: FormBuilder,
    private productGrouposService: ProductGroupsService,
    private router: Router,
    private route: ActivatedRoute,
    private uploadService: UploadFileService,
  ) {
    this.AddForm();
   }

   get f(){
    return this.form.controls;
  }


  ngOnInit(): void {
    this.route.params.subscribe((params) =>  {
      if(params.id !== undefined) {
        this.id = params.id;
        this.AddForm();
        this.getItem()
      } else {
        this.AddForm();
      }
    });
  }

  AddForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      position:[''],
      thumb_image: [null],
    });
  }



  getItem() {
    this.productGrouposService.getItemDetail(this.id).subscribe((data: any) => {
      console.log(data);
      
      this.form.patchValue({
        name: data.product_group.name,
        description: data.product_group.description,
        position:data.product_group.position,
        thumb_image: data.product_group.thumb_image,
      });
    });
  }

  editItem() {
    const formData = this.form.value;
    formData['thumb_image_attributes'] = formData.thumb_image;
    this.productGrouposService.edit(this.id, formData).subscribe((data: any) => {
      this.router.navigate(['pages/product-groups']);
    });
  }

  createItem() {
    this.productGrouposService.create(this.form.getRawValue()).subscribe((data: any) => {
      this.router.navigate(['pages/product-groups']);
    });
  }

  cancel() {
    this.router.navigate(['pages/product-groups']);
  }
  fileChangeEvent(event: any): void {
    const temp = event.target.value.split(/\\/g);
    
      this.imageThumb.name = temp[temp.length - 1];
      this.imageThumb.imageChanged = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    
      this.imageThumb.image = event.base64;
    
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
  
  upload(){
    
      const base64 = this.imageThumb.image;
      const fileResult: File = this.uploadService.dataURItoBlob(base64, this.imageThumb.name);
      this.uploadService.uploadFile(fileResult).subscribe((data: any) => {
        const temp = {
          url: data.data[0],
          thumb_image_type: 'ProductGroup'
        }
        this.form.controls['thumb_image'].setValue(temp);
      });
    
  }
}