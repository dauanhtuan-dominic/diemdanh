(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{MuZe:function(t,e){function o(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function i(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,n){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");"function"==typeof e&&(n=e,e={}),n=n||function(){},r.type=(e=e||{}).type||"text/javascript",r.charset=e.charset||"utf8",r.async=!("async"in e)||!!e.async,r.src=t,e.attrs&&function(t,e){for(var o in e)t.setAttribute(o,e[o])}(r,e.attrs),e.text&&(r.text=""+e.text),("onload"in r?o:i)(r,n),r.onload||o(r,n),a.appendChild(r)}},a1ig:function(t,e,o){"use strict";o.r(e),o.d(e,"ProductsModule",(function(){return U}));var i=o("ofXK"),n=o("+ts/"),a=o("XNiG"),r=o("Kj3r"),c=o("fXoL"),s=o("3Pt+"),d=o("tyNb"),u=o("K3ix"),l=o("lDzL");function p(t,e){if(1&t&&(c.Pb(0,"strong",22),c.zc(1),c.Ob()),2&t){const t=e.rowIndex,o=c.Yb();c.xb(1),c.Ac(t+1+(10*o.pageResult.page-10))}}function b(t,e){1&t&&(c.zc(0),c.Zb(1,"currency")),2&t&&c.Bc(" ",c.bc(1,1,e.row.price,"USD")," ")}function h(t,e){if(1&t){const t=c.Qb();c.Pb(0,"i",23),c.Wb("click",(function(){c.pc(t);const o=e.row;return c.Yb().editItem(o.id)})),c.Ob(),c.Pb(1,"i",24),c.Wb("click",(function(){c.pc(t);const o=e.row,i=c.Yb(),n=c.mc(30);return i.GetIdDelete(n,o.id)})),c.Ob()}}function g(t,e){if(1&t&&(c.Pb(0,"option",30),c.zc(1),c.Ob()),2&t){const t=e.$implicit;c.fc("value",t.number),c.xb(1),c.Ac(t.name)}}function m(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",25),c.zc(1," DIsplay "),c.Ob(),c.Pb(2,"select",26),c.Wb("ngModelChange",(function(e){return c.pc(t),c.Yb().pageResult.per_page=e}))("click",(function(){return c.pc(t),c.Yb().selectItemPerPage()})),c.xc(3,g,2,2,"option",27),c.Ob(),c.Pb(4,"span",28),c.zc(5),c.Ob(),c.Pb(6,"datatable-pager",29),c.Wb("change",(function(e){return c.pc(t),c.Yb(),c.mc(19).onFooterPage(e)}))("change",(function(e){return c.pc(t),c.Yb().changePage(e)})),c.Ob()}if(2&t){const t=c.Yb();c.xb(2),c.ec("ngModel",t.pageResult.per_page),c.xb(1),c.ec("ngForOf",t.element),c.xb(2),c.Bc(" in total ",t.pageResult.total_objects," result"),c.xb(1),c.ec("pagerLeftArrowIcon","datatable-icon-left")("pagerRightArrowIcon","datatable-icon-right")("pagerPreviousIcon","datatable-icon-prev")("pagerNextIcon","datatable-icon-skip")("page",t.pageResult.page)("size",t.pageResult.per_page)("count",t.pageResult.total_objects)}}function f(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",31),c.Pb(1,"h4",32),c.zc(2,"Are you sure delete this item?"),c.Ob(),c.Pb(3,"button",33),c.Wb("click",(function(){return c.pc(t),c.Yb().modalRef.hide()})),c.Pb(4,"span",34),c.zc(5,"\xd7"),c.Ob(),c.Ob(),c.Ob(),c.Pb(6,"div",35),c.Pb(7,"button",36),c.Wb("click",(function(){return c.pc(t),c.Yb().DeleteItem()})),c.zc(8,"Yes"),c.Ob(),c.Pb(9,"button",37),c.Wb("click",(function(){return c.pc(t),c.Yb().modalRef.hide()})),c.zc(10,"No"),c.Ob(),c.Ob()}}let P=(()=>{class t{constructor(t,e,o,i){this.productsService=t,this.fb=e,this.router=o,this.modalService=i,this.element=n.c,this.pageResult={page:1,per_page:10,total_objects:0,search:"",name:""},this.isAdmin=!0,this.messages={emptyMessage:"No data to display"},this.modelProduct=new a.a,this.formAdd()}ngOnInit(){this.getProducts(),this.delaySearch()}delaySearch(){this.modelProduct.pipe(Object(r.a)(n.p)).subscribe(t=>{this.pageResult.name=this.formSearch.value.search,this.pageResult.page=1,this.getProducts()})}getProducts(){this.productsService.getListDatas(this.pageResult).subscribe(t=>{this.tableData=t.products,this.pageResult.total_objects=t.meta.pagination.total_objects||1})}addNewItem(){this.router.navigate(["pages/products/create"])}editItem(t){this.router.navigate(["pages/products/detail/"+t])}formAdd(){this.formSearch=this.fb.group({role:[[]],search:[""]})}DeleteItem(){this.productsService.delete(this.id).subscribe(t=>{this.getProducts(),this.modalRef.hide()})}changePage(t){this.pageResult.page=t.page,this.getProducts()}selectItemPerPage(){this.pageResult.page=1,this.getProducts()}GetIdDelete(t,e){this.modalRef=this.modalService.show(t),this.id=e}search(){this.modelProduct.next()}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(n.m),c.Jb(s.b),c.Jb(d.b),c.Jb(u.b))},t.\u0275cmp=c.Db({type:t,selectors:[["app-products"]],decls:31,vars:12,consts:[[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"col-lg-3"],[1,"searchContainer"],[1,"icon"],[1,"fa","fa-search"],["type","text","formControlName","search","placeholder","T\xecm...",1,"form-control",3,"keyup"],["type","button",1,"btn","btn-success",3,"click"],[1,"table"],[1,"material","expandable","striped",3,"columnMode","headerHeight","footerHeight","rowHeight","rows","messages"],["table",""],["name","STT",2,"width","60px !important",3,"sortable","resizeable","canAutoResize","maxWidth"],["style","width: 60px !important;","ngx-datatable-cell-template",""],["name","Name","cellClass","textalignleft","prop","name"],["name","Price","cellClass","textalignleft"],["ngx-datatable-cell-template",""],["name","Action",3,"sortable"],["ngx-datatable-footer-template",""],["deleteRow",""],[2,"width","60px !important"],["aria-hidden","true",1,"fa","fa-pencil-square-o","icon-action",3,"click"],["aria-hidden","true","data-toggle","modal","data-target","#deleteRow",1,"fa","fa-trash","icon-action",3,"click"],[1,"col-6","col-md-6"],[3,"ngModel","ngModelChange","click"],[3,"value",4,"ngFor","ngForOf"],[1,"soluong"],[1,"col-6","col-md-6",3,"pagerLeftArrowIcon","pagerRightArrowIcon","pagerPreviousIcon","pagerNextIcon","page","size","count","change"],[3,"value"],[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],["aria-hidden","true"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-dark",3,"click"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"form",4),c.Pb(5,"div",0),c.Pb(6,"div",5),c.Pb(7,"div",6),c.Pb(8,"span",7),c.Kb(9,"i",8),c.Ob(),c.Pb(10,"input",9),c.Wb("keyup",(function(){return e.search()})),c.Ob(),c.Ob(),c.Ob(),c.Kb(11,"div",5),c.Pb(12,"div",5),c.Pb(13,"div",2),c.Pb(14,"button",10),c.Wb("click",(function(){return e.addNewItem()})),c.zc(15,"Create"),c.Ob(),c.Ob(),c.Ob(),c.Kb(16,"div",5),c.Ob(),c.Ob(),c.Pb(17,"div",11),c.Pb(18,"ngx-datatable",12,13),c.Pb(20,"ngx-datatable-column",14),c.xc(21,p,2,1,"ng-template",15),c.Ob(),c.Kb(22,"ngx-datatable-column",16),c.Pb(23,"ngx-datatable-column",17),c.xc(24,b,2,4,"ng-template",18),c.Ob(),c.Pb(25,"ngx-datatable-column",19),c.xc(26,h,2,0,"ng-template",18),c.Ob(),c.Pb(27,"ngx-datatable-footer"),c.xc(28,m,7,10,"ng-template",20),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.xc(29,f,11,0,"ng-template",null,21,c.yc)),2&t&&(c.xb(4),c.ec("formGroup",e.formSearch),c.xb(14),c.ec("columnMode","force")("headerHeight",50)("footerHeight",80)("rowHeight",60)("rows",e.tableData)("messages",e.messages),c.xb(2),c.ec("sortable",!1)("resizeable",!1)("canAutoResize",!1)("maxWidth",50),c.xb(5),c.ec("sortable",!1))},directives:[s.o,s.h,s.d,s.a,s.g,s.c,l.e,l.b,l.a,l.f,l.c,s.l,s.i,i.k,l.d,s.j,s.n],pipes:[i.d],styles:[".searchContainer[_ngcontent-%COMP%]{position:relative;margin-bottom:20px}.searchContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-left:30px}.searchContainer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:auto;padding-left:10px;display:flex;align-items:center;cursor:pointer}"]}),t})();var O=o("ZOsW"),y=o("MuZe"),v=o.n(y);function x(t,e){}let _,C=(()=>{class t{constructor(t,e){this.elementRef=t,this.ngZone=e,this.tagName="textarea",this.type="classic",this.ready=new c.n,this.dataReady=new c.n,this.change=new c.n,this.dataChange=new c.n,this.dragStart=new c.n,this.dragEnd=new c.n,this.drop=new c.n,this.fileUploadResponse=new c.n,this.fileUploadRequest=new c.n,this.focus=new c.n,this.paste=new c.n,this.afterPaste=new c.n,this.blur=new c.n,this._readOnly=null,this._data=null,this._destroyed=!1,this.editorUrl="https://cdn.ckeditor.com/4.15.1/standard-all/ckeditor.js"}set data(t){if(t!==this._data)return this.instance?(this.instance.setData(t),void(this._data=this.instance.getData())):void(this._data=t)}get data(){return this._data}set readOnly(t){this.instance?this.instance.setReadOnly(t):this._readOnly=t}get readOnly(){return this.instance?this.instance.readOnly:this._readOnly}ngAfterViewInit(){var t;(t=this.editorUrl,t.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):"CKEDITOR"in window?Promise.resolve(CKEDITOR):(_||(_=new Promise((e,o)=>{v()(t,t=>{t?o(t):e(CKEDITOR),_=void 0})})),_)).then(()=>{this._destroyed||this.ngZone.runOutsideAngular(this.createEditor.bind(this))}).catch(window.console.error)}ngOnDestroy(){this._destroyed=!0,this.ngZone.runOutsideAngular(()=>{this.instance&&(this.instance.destroy(),this.instance=null)})}writeValue(t){this.data=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}createEditor(){const t=document.createElement(this.tagName);this.elementRef.nativeElement.appendChild(t);const e="inline"===this.type?CKEDITOR.inline(t,this.config):CKEDITOR.replace(t,this.config);e.once("instanceReady",t=>{this.instance=e,this.readOnly=null!==this._readOnly?this._readOnly:this.instance.readOnly,this.subscribe(this.instance);const o=e.undoManager;null!==this.data?(o&&o.lock(),e.setData(this.data,{callback:()=>{this.data!==e.getData()&&e.fire(o?"change":"dataReady"),o&&o.unlock(),this.ngZone.run(()=>{this.ready.emit(t)})}})):this.ngZone.run(()=>{this.ready.emit(t)})})}subscribe(t){t.on("focus",t=>{this.ngZone.run(()=>{this.focus.emit(t)})}),t.on("paste",t=>{this.ngZone.run(()=>{this.paste.emit(t)})}),t.on("afterPaste",t=>{this.ngZone.run(()=>{this.afterPaste.emit(t)})}),t.on("dragend",t=>{this.ngZone.run(()=>{this.dragEnd.emit(t)})}),t.on("dragstart",t=>{this.ngZone.run(()=>{this.dragStart.emit(t)})}),t.on("drop",t=>{this.ngZone.run(()=>{this.drop.emit(t)})}),t.on("fileUploadRequest",t=>{this.ngZone.run(()=>{this.fileUploadRequest.emit(t)})}),t.on("fileUploadResponse",t=>{this.ngZone.run(()=>{this.fileUploadResponse.emit(t)})}),t.on("blur",t=>{this.ngZone.run(()=>{this.onTouched&&this.onTouched(),this.blur.emit(t)})}),t.on("dataReady",this.propagateChange,this),t.on(this.instance.undoManager?"change":"selectionCheck",this.propagateChange,this)}propagateChange(t){this.ngZone.run(()=>{const e=this.instance.getData();"change"===t.name?this.change.emit(t):"dataReady"===t.name&&this.dataReady.emit(t),e!==this.data&&(this._data=e,this.dataChange.emit(e),this.onChange&&this.onChange(e))})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(c.l),c.Jb(c.z))},t.\u0275cmp=c.Db({type:t,selectors:[["ckeditor"]],inputs:{tagName:"tagName",type:"type",editorUrl:"editorUrl",data:"data",readOnly:"readOnly",config:"config"},outputs:{ready:"ready",dataReady:"dataReady",change:"change",dataChange:"dataChange",dragStart:"dragStart",dragEnd:"dragEnd",drop:"drop",fileUploadResponse:"fileUploadResponse",fileUploadRequest:"fileUploadRequest",focus:"focus",paste:"paste",afterPaste:"afterPaste",blur:"blur"},features:[c.wb([{provide:s.f,useExisting:Object(c.S)(()=>t),multi:!0}])],decls:1,vars:0,template:function(t,e){1&t&&c.xc(0,x,0,0,"ng-template")},encapsulation:2}),t})(),w=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.e,i.c]]}),t})();var R=o("rIor");function I(t,e){1&t&&(c.Pb(0,"h4",24),c.zc(1,"Add product"),c.Ob())}function k(t,e){1&t&&(c.Pb(0,"h4",24),c.zc(1,"Product detail"),c.Ob())}function S(t,e){1&t&&(c.Pb(0,"span"),c.zc(1," Name not empty "),c.Ob())}function G(t,e){1&t&&(c.Pb(0,"span"),c.zc(1," Price not empty "),c.Ob())}function z(t,e){if(1&t&&c.Kb(0,"img",25),2&t){const t=c.Yb();c.ec("src",t.imageThumb.image,c.rc)}}function M(t,e){if(1&t&&c.Kb(0,"img",26),2&t){const t=c.Yb();c.ec("src",t.form.value.thumb_image.url,c.rc)}}function T(t,e){if(1&t&&c.Kb(0,"img",25),2&t){const t=c.Yb();c.ec("src",t.imagePhoto.image,c.rc)}}function E(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",27),c.Pb(1,"i",28),c.Wb("click",(function(){c.pc(t);const o=e.$implicit;return c.Yb().removePhoto(o)})),c.Ob(),c.Kb(2,"img",26),c.Ob()}if(2&t){const t=e.$implicit;c.xb(2),c.ec("src",t.url,c.rc)}}function D(t,e){if(1&t){const t=c.Qb();c.Pb(0,"button",29),c.Wb("click",(function(){return c.pc(t),c.Yb().createItem()})),c.zc(1,"Create"),c.Ob()}}function A(t,e){if(1&t){const t=c.Qb();c.Pb(0,"button",30),c.Wb("click",(function(){return c.pc(t),c.Yb().editItem()})),c.zc(1,"Save"),c.Ob()}if(2&t){const t=c.Yb();c.ec("disabled",!t.form.valid)}}let F=(()=>{class t{constructor(t,e,o,i,a,r,c){this.fb=t,this.productGroupsService=e,this.productsService=o,this.uploadService=i,this.route=a,this.router=r,this.globalService=c,this.arrProductGroups=[],this.notFoundText=n.e,this.pageProductGroups={page:1,per_page:10,total_objects:0,product_type:"food",search:""},this.imageThumb={image:"",imageChanged:"",name:""},this.imagePhoto={image:"",imageChanged:"",name:""},this.loadingProductGroup=!1,this.AddForm()}get f(){return this.form.controls}ngOnInit(){this.getProductGroups(),this.route.params.subscribe(t=>{void 0!==t.id?(this.id=t.id,this.AddForm(),this.getInfoProduct()):this.AddForm()})}AddForm(){this.form=this.fb.group({name:["",[s.m.required]],description:[""],short_description:[""],product_group_id:[null],price:[""],thumb_image:[null],photos:[[]]})}getInfoProduct(){this.productsService.getItemDetail(this.id).subscribe(t=>{this.form.patchValue({name:t.product.name,short_description:t.product.short_description,description:t.product.description,product_group_id:t.product.product_group_id,product_type:t.product.product_type,price:new Intl.NumberFormat("en-IN",{maximumSignificantDigits:4}).format(t.product.price)||0,thumb_image:t.product.thumb_image,photos:t.product.photos}),this.currency()})}editItem(){const t=this.form.value;t.thumb_image_attributes=t.thumb_image,t.photos_attributes=t.photos,this.productsService.edit(this.id,t).subscribe(t=>{this.router.navigate(["pages/products"])})}createItem(){const t=this.form.value;t.thumb_image_attributes=t.thumb_image,t.photos_attributes=t.photos,this.productsService.create(t).subscribe(t=>{this.router.navigate(["pages/products"])})}cancel(){this.router.navigate(["pages/products"])}getProductGroups(t){this.loadingProductGroup=!0,this.productGroupsService.getListDatas(this.pageProductGroups).subscribe(e=>{t&&"search"===t&&(this.arrProductGroups=[]),this.pageProductGroups.total_objects=e.meta.pagination.total_objects,this.arrProductGroups=this.arrProductGroups.concat(e.product_groups),this.loadingProductGroup=!1})}currency(){let t=this.form.value.price.toString();const e=this.globalService.currency("usd",t);this.form.controls.price.setValue(e)}fileChangeEvent(t,e){const o=t.target.value.split(/\\/g);"thumb_image"===e?(this.imageThumb.name=o[o.length-1],this.imageThumb.imageChanged=t):"photos"===e&&(this.imagePhoto.name=o[o.length-1],this.imagePhoto.imageChanged=t)}imageCropped(t,e){"thumb_image"===e?this.imageThumb.image=t.base64:"photos"===e&&(this.imagePhoto.image=t.base64)}imageLoaded(){}cropperReady(){}loadImageFailed(){}upload(t){if("thumb_image"===t){const t=this.uploadService.dataURItoBlob(this.imageThumb.image,this.imageThumb.name);this.uploadService.uploadFile(t).subscribe(t=>{this.form.controls.thumb_image.setValue({url:t.data[0],thumb_image_type:"Product"})})}else if("photos"===t){const t=this.uploadService.dataURItoBlob(this.imagePhoto.image,this.imagePhoto.name);this.uploadService.uploadFile(t).subscribe(t=>{const e=null===this.form.value.photos?[]:this.form.value.photos;e.push({url:t.data[0],photoable_type:"Product"}),this.form.controls.photos.setValue(e)})}}removePhoto(t){const e=this.form.value.photos.filter(e=>e.id!==t.id);this.form.controls.photos.setValue(e)}searchProductGroup(t){this.pageProductGroups.search=t,this.pageProductGroups.page=1,this.getProductGroups("search")}scrollEnd(t){if("product_group"===t){if(this.loadingProductGroup||this.arrProductGroups.length===this.pageProductGroups.total_objects)return;this.pageProductGroups.page+=1,this.getProductGroups()}}removeInput(t){"product_group"===t&&this.searchProductGroup("")}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(s.b),c.Jb(n.l),c.Jb(n.m),c.Jb(n.q),c.Jb(d.a),c.Jb(d.b),c.Jb(n.g))},t.\u0275cmp=c.Db({type:t,selectors:[["app-product-detail"]],decls:54,vars:21,consts:[[1,"modal-header"],["class","modal-title",4,"ngIf"],[1,"modal-body"],[3,"formGroup"],[1,"form-group"],["for","usr"],["type","text","formControlName","name",1,"form-control"],[1,"text-arlet"],[4,"ngIf"],["bindLabel","name","bindValue","id","formControlName","product_group_id",3,"items","notFoundText","loading","virtualScroll","keyup","scrollToEnd","clear"],["type","text","formControlName","price",1,"form-control",3,"keyup"],["formControlName","short_description"],["formControlName","description"],["type","file",1,"form-control",3,"change"],["format","png",3,"imageChangedEvent","maintainAspectRatio","aspectRatio","imageCropped","imageLoaded","cropperReady","loadImageFailed"],["style","width: 200px;",3,"src",4,"ngIf"],["type","button",1,"btn","btn-default","btn-control",3,"click"],[1,"img-thumb"],["style","width: 100px;",3,"src",4,"ngIf"],[1,"list-image"],["class","image-item",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button","class","btn btn-primary btn-control",3,"click",4,"ngIf"],["type","button","class","btn btn-primary btn-control",3,"disabled","click",4,"ngIf"],[1,"modal-title"],[2,"width","200px",3,"src"],[2,"width","100px",3,"src"],[1,"image-item"],["aria-hidden","true",1,"fa","fa-times-circle-o",2,"cursor","pointer",3,"click"],["type","button",1,"btn","btn-primary","btn-control",3,"click"],["type","button",1,"btn","btn-primary","btn-control",3,"disabled","click"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.xc(1,I,2,0,"h4",1),c.xc(2,k,2,0,"h4",1),c.Ob(),c.Pb(3,"div",2),c.Pb(4,"form",3),c.Pb(5,"div",4),c.Pb(6,"label",5),c.zc(7,"Name:"),c.Ob(),c.Kb(8,"input",6),c.Ob(),c.Pb(9,"div",7),c.xc(10,S,2,0,"span",8),c.Ob(),c.Pb(11,"div",4),c.Pb(12,"label",5),c.zc(13,"Product group:"),c.Ob(),c.Pb(14,"ng-select",9),c.Wb("keyup",(function(t){return e.searchProductGroup(t.target.value)}))("scrollToEnd",(function(){return e.scrollEnd("product_group")}))("clear",(function(){return e.removeInput("product_group")})),c.Ob(),c.Ob(),c.Pb(15,"div",4),c.Pb(16,"label",5),c.zc(17,"Price:"),c.Ob(),c.Pb(18,"input",10),c.Wb("keyup",(function(){return e.currency()})),c.Ob(),c.Ob(),c.Pb(19,"div",7),c.xc(20,G,2,0,"span",8),c.Ob(),c.Pb(21,"div",4),c.Pb(22,"label",5),c.zc(23,"Short description:"),c.Ob(),c.Kb(24,"ckeditor",11),c.Ob(),c.Pb(25,"div",4),c.Pb(26,"label",5),c.zc(27,"Description:"),c.Ob(),c.Kb(28,"ckeditor",12),c.Ob(),c.Pb(29,"div",4),c.Pb(30,"label",5),c.zc(31,"Thumb image:"),c.Ob(),c.Pb(32,"input",13),c.Wb("change",(function(t){return e.fileChangeEvent(t,"thumb_image")})),c.Ob(),c.Pb(33,"image-cropper",14),c.Wb("imageCropped",(function(t){return e.imageCropped(t,"thumb_image")}))("imageLoaded",(function(){return e.imageLoaded()}))("cropperReady",(function(){return e.cropperReady()}))("loadImageFailed",(function(){return e.loadImageFailed()})),c.Ob(),c.xc(34,z,1,1,"img",15),c.Pb(35,"button",16),c.Wb("click",(function(){return e.upload("thumb_image")})),c.zc(36,"Upload"),c.Ob(),c.Pb(37,"div",17),c.xc(38,M,1,1,"img",18),c.Ob(),c.Ob(),c.Pb(39,"div",4),c.Pb(40,"label",5),c.zc(41,"Photos:"),c.Ob(),c.Pb(42,"input",13),c.Wb("change",(function(t){return e.fileChangeEvent(t,"photos")})),c.Ob(),c.Pb(43,"image-cropper",14),c.Wb("imageCropped",(function(t){return e.imageCropped(t,"photos")}))("imageLoaded",(function(){return e.imageLoaded()}))("cropperReady",(function(){return e.cropperReady()}))("loadImageFailed",(function(){return e.loadImageFailed()})),c.Ob(),c.xc(44,T,1,1,"img",15),c.Pb(45,"button",16),c.Wb("click",(function(){return e.upload("photos")})),c.zc(46,"Upload"),c.Ob(),c.Pb(47,"div",19),c.xc(48,E,3,1,"div",20),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(49,"div",21),c.Pb(50,"button",16),c.Wb("click",(function(){return e.cancel()})),c.zc(51,"Close"),c.Ob(),c.xc(52,D,2,0,"button",22),c.xc(53,A,2,1,"button",23),c.Ob()),2&t&&(c.xb(1),c.ec("ngIf",!e.id),c.xb(1),c.ec("ngIf",e.id),c.xb(2),c.ec("formGroup",e.form),c.xb(6),c.ec("ngIf",(null==e.f.name.errors?null:e.f.name.errors.required)&&e.f.name.touched),c.xb(4),c.fc("notFoundText",e.notFoundText),c.ec("items",e.arrProductGroups)("loading",e.loadingProductGroup)("virtualScroll",!0),c.xb(6),c.ec("ngIf",(null==e.f.price.errors?null:e.f.price.errors.required)&&e.f.price.touched),c.xb(13),c.ec("imageChangedEvent",e.imageThumb.imageChanged)("maintainAspectRatio",!0)("aspectRatio",1),c.xb(1),c.ec("ngIf",e.imageThumb.image),c.xb(4),c.ec("ngIf",e.form.value.thumb_image),c.xb(5),c.ec("imageChangedEvent",e.imagePhoto.imageChanged)("maintainAspectRatio",!0)("aspectRatio",1),c.xb(1),c.ec("ngIf",e.imagePhoto.image),c.xb(4),c.ec("ngForOf",e.form.value.photos),c.xb(4),c.ec("ngIf",!e.id),c.xb(1),c.ec("ngIf",e.id))},directives:[i.l,s.o,s.h,s.d,s.a,s.g,s.c,O.a,C,R.a,i.k],styles:[".text-arlet[_ngcontent-%COMP%]{margin:-10px 0 10px 10px;color:red;font-family:Nunito Sans,sans-serif;font-size:14px;font-weight:400;line-height:1.5}.btn-control[_ngcontent-%COMP%]{margin-left:20px}.list-image[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:10px;width:100%}.list-image[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]{position:relative;border:1px solid #000;padding:15px;margin:10px;border-radius:15px}.list-image[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;-o-object-fit:cover;object-fit:cover}.list-image[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px}.img-thumb[_ngcontent-%COMP%]{display:table;border:1px solid #000;position:relative;margin-top:20px;padding:12px;border-radius:15px}.img-thumb[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:3px;right:3px}.form-control[_ngcontent-%COMP%]{padding-left:20px}"]}),t})();const N=[{path:"",component:P},{path:"create",component:F},{path:"detail/:id",component:F}];let W=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[d.c.forChild(N)],d.c]}),t})();var j=o("tgok"),K=o("TT0I");let U=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.c,W,l.g,s.k,s.e,j.a,O.c,R.b,u.c.forRoot(),w,K.a]]}),t})()}}]);