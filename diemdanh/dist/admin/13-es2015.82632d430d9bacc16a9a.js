(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{JA1H:function(e,t,n){"use strict";n.r(t),n.d(t,"CustomerModule",(function(){return N}));var i=n("ofXK"),o=n("lDzL"),a=n("3Pt+"),c=n("ZOsW"),r=n("tyNb"),l=n("+ts/"),s=n("fXoL"),b=n("K3ix");function u(e,t){1&e&&(s.Pb(0,"h4",17),s.zc(1,"Create account customer"),s.Ob())}function d(e,t){1&e&&(s.Pb(0,"h4",17),s.zc(1,"Detail account customer"),s.Ob())}function m(e,t){1&e&&(s.Pb(0,"span"),s.zc(1," Fullname not valid "),s.Ob())}function f(e,t){1&e&&(s.Pb(0,"span"),s.zc(1," Full name not empty "),s.Ob())}function p(e,t){1&e&&(s.Pb(0,"span"),s.zc(1," Email not valid "),s.Ob())}function g(e,t){1&e&&(s.Pb(0,"span"),s.zc(1," Email not empty "),s.Ob())}function h(e,t){if(1&e&&(s.Pb(0,"option",18),s.zc(1),s.Ob()),2&e){const e=t.$implicit;s.fc("value",e.value),s.xb(1),s.Ac(e.valueView)}}function v(e,t){1&e&&(s.Pb(0,"span"),s.zc(1," Phone not valid "),s.Ob())}function P(e,t){1&e&&(s.Pb(0,"span"),s.zc(1," Phone not empty "),s.Ob())}function x(e,t){1&e&&(s.Pb(0,"div",4),s.Pb(1,"label",5),s.zc(2,"M\u1eadt kh\u1ea9u:"),s.Ob(),s.Kb(3,"input",19),s.Ob())}function O(e,t){if(1&e){const e=s.Qb();s.Pb(0,"button",20),s.Wb("click",(function(){return s.pc(e),s.Yb().createItem()})),s.zc(1,"Create"),s.Ob()}if(2&e){const e=s.Yb();s.ec("disabled",!e.form.valid)}}function I(e,t){if(1&e){const e=s.Qb();s.Pb(0,"button",20),s.Wb("click",(function(){return s.pc(e),s.Yb().editItem()})),s.zc(1,"Save"),s.Ob()}if(2&e){const e=s.Yb();s.ec("disabled",!e.form.valid)}}let w=(()=>{class e{constructor(e,t,n,i,o,a){this.bsmodalRef=e,this.fb=t,this.customerService=n,this.config=i,this.router=o,this.route=a,this.permission=l.j,this.separateDialCode=!0,this.config.notFoundText="Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"}ngOnInit(){this.route.params.subscribe(e=>{void 0!==e.id?(this.id=e.id,this.editForm(),this.getDetailData()):this.addForm()})}get f(){return this.form.controls}addForm(){this.form=this.fb.group({fullname:[""],email:["",[a.m.required,a.m.pattern(l.i.EMAIL)]],role:["standard",[a.m.required]],phone_number:[""],password:[""],password_confirmation:[""]})}editForm(){this.form=this.fb.group({fullname:[""],email:["",[a.m.required,a.m.pattern(l.i.EMAIL)]],role:["standard",[a.m.required]],phone_number:["",[a.m.required]]})}getDetailData(){this.customerService.getItemDetail(this.id).subscribe(e=>{this.form.setValue({email:e.user.email,fullname:e.user.fullname,role:e.user.role,phone_number:e.user.phone_number})})}editItem(){this.customerService.edit(this.id,this.form.getRawValue()).subscribe(e=>{this.router.navigate(["pages/customers"])})}createItem(){this.form.controls.password_confirmation.setValue(this.form.value.password),this.customerService.create(this.form.getRawValue()).subscribe(e=>{this.router.navigate(["pages/customers"])})}cancel(){this.router.navigate(["pages/employees"])}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(b.a),s.Jb(a.b),s.Jb(l.d),s.Jb(c.b),s.Jb(r.b),s.Jb(r.a))},e.\u0275cmp=s.Db({type:e,selectors:[["app-customer-detail"]],decls:37,vars:13,consts:[[1,"modal-header"],["class","modal-title",4,"ngIf"],[1,"modal-body"],[3,"formGroup"],[1,"form-group"],["for","usr"],["type","text","formControlName","fullname",1,"form-control"],[1,"text-arlet"],[4,"ngIf"],["type","text","formControlName","email",1,"form-control"],["formControlName","role",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["type","tel","formControlName","phone_number",1,"form-control"],["class","form-group",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-default","btn-control",3,"click"],["type","button","class","btn btn-primary btn-control",3,"disabled","click",4,"ngIf"],[1,"modal-title"],[3,"value"],["type","text","formControlName","password",1,"form-control"],["type","button",1,"btn","btn-primary","btn-control",3,"disabled","click"]],template:function(e,t){1&e&&(s.Pb(0,"div",0),s.xc(1,u,2,0,"h4",1),s.xc(2,d,2,0,"h4",1),s.Ob(),s.Pb(3,"div",2),s.Pb(4,"form",3),s.Pb(5,"div",4),s.Pb(6,"label",5),s.zc(7,"Fullname:"),s.Ob(),s.Kb(8,"input",6),s.Ob(),s.Pb(9,"div",7),s.xc(10,m,2,0,"span",8),s.xc(11,f,2,0,"span",8),s.Ob(),s.Pb(12,"div",4),s.Pb(13,"label",5),s.zc(14,"Email:"),s.Ob(),s.Kb(15,"input",9),s.Ob(),s.Pb(16,"div",7),s.xc(17,p,2,0,"span",8),s.xc(18,g,2,0,"span",8),s.Ob(),s.Pb(19,"div",4),s.Pb(20,"label",5),s.zc(21,"Level customer:"),s.Ob(),s.Pb(22,"select",10),s.xc(23,h,2,2,"option",11),s.Ob(),s.Ob(),s.Pb(24,"div",4),s.Pb(25,"label",5),s.zc(26,"Phone:"),s.Ob(),s.Kb(27,"input",12),s.Ob(),s.Pb(28,"div",7),s.xc(29,v,2,0,"span",8),s.xc(30,P,2,0,"span",8),s.Ob(),s.xc(31,x,4,0,"div",13),s.Ob(),s.Ob(),s.Pb(32,"div",14),s.Pb(33,"button",15),s.Wb("click",(function(){return t.cancel()})),s.zc(34,"Close"),s.Ob(),s.xc(35,O,2,1,"button",16),s.xc(36,I,2,1,"button",16),s.Ob()),2&e&&(s.xb(1),s.ec("ngIf",!t.id),s.xb(1),s.ec("ngIf",t.id),s.xb(2),s.ec("formGroup",t.form),s.xb(6),s.ec("ngIf",t.f.fullname.invalid&&t.f.fullname.dirty&&!t.f.fullname.errors.required),s.xb(1),s.ec("ngIf",(null==t.f.fullname.errors?null:t.f.fullname.errors.required)&&t.f.fullname.touched),s.xb(6),s.ec("ngIf",t.f.email.invalid&&t.f.email.dirty&&!t.f.email.errors.required),s.xb(1),s.ec("ngIf",(null==t.f.email.errors?null:t.f.email.errors.required)&&t.f.email.touched),s.xb(5),s.ec("ngForOf",t.permission),s.xb(6),s.ec("ngIf",t.f.phone_number.invalid&&t.f.phone_number.dirty&&!t.f.phone_number.errors.required),s.xb(1),s.ec("ngIf",(null==t.f.phone_number.errors?null:t.f.phone_number.errors.required)&&t.f.phone_number.touched),s.xb(1),s.ec("ngIf",!t.id),s.xb(4),s.ec("ngIf",!t.id),s.xb(1),s.ec("ngIf",t.id))},directives:[i.l,a.o,a.h,a.d,a.a,a.g,a.c,a.l,i.k,a.j,a.n],styles:[".text-arlet[_ngcontent-%COMP%]{margin:-10px 0 10px 10px;color:red;font-family:Nunito Sans,sans-serif;font-size:1.5rem;font-weight:400;line-height:1.5}"]}),e})();var y=n("XNiG"),k=n("Kj3r"),z=n("hfSs");function C(e,t){if(1&e&&(s.Pb(0,"strong",24),s.zc(1),s.Ob()),2&e){const e=t.rowIndex;s.xb(1),s.Ac(e+1)}}function _(e,t){if(1&e&&(s.zc(0),s.Zb(1,"convertDataViewPipe")),2&e){const e=t.row,n=s.Yb();s.Bc(" ",s.bc(1,1,e.role,n.arrRole)," ")}}function A(e,t){if(1&e){const e=s.Qb();s.Pb(0,"i",28),s.Wb("click",(function(){s.pc(e);const t=s.Yb().row,n=s.Yb(),i=s.mc(32);return n.getIdActive(i,t)})),s.Ob()}}function R(e,t){if(1&e){const e=s.Qb();s.Pb(0,"i",29),s.Wb("click",(function(){s.pc(e);const t=s.Yb().row,n=s.Yb(),i=s.mc(32);return n.getIdActive(i,t)})),s.Ob()}}function D(e,t){if(1&e){const e=s.Qb();s.Pb(0,"i",25),s.Wb("click",(function(){s.pc(e);const n=t.row;return s.Yb().editItem(n.id)})),s.Ob(),s.xc(1,A,1,0,"i",26),s.xc(2,R,1,0,"i",27)}if(2&e){const e=t.row;s.xb(1),s.ec("ngIf",!1!==e.active),s.xb(1),s.ec("ngIf",0==e.active)}}function Y(e,t){if(1&e&&(s.Pb(0,"option",35),s.zc(1),s.Ob()),2&e){const e=t.$implicit;s.fc("value",e.number),s.xb(1),s.Ac(e.name)}}function M(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div",30),s.zc(1," DIsplay "),s.Pb(2,"select",31),s.Wb("ngModelChange",(function(t){return s.pc(e),s.Yb().pageResult.per_page=t}))("click",(function(){return s.pc(e),s.Yb().selectItemPerPage()})),s.xc(3,Y,2,2,"option",32),s.Ob(),s.Pb(4,"span",33),s.zc(5),s.Ob(),s.Ob(),s.Pb(6,"datatable-pager",34),s.Wb("change",(function(t){return s.pc(e),s.Yb(),s.mc(19).onFooterPage(t)}))("change",(function(t){return s.pc(e),s.Yb().changePage(t)})),s.Ob()}if(2&e){const e=s.Yb();s.xb(2),s.ec("ngModel",e.pageResult.per_page),s.xb(1),s.ec("ngForOf",e.element),s.xb(2),s.Bc(" in total ",e.pageResult.total_objects," result"),s.xb(1),s.ec("pagerLeftArrowIcon","datatable-icon-left")("pagerRightArrowIcon","datatable-icon-right")("pagerPreviousIcon","datatable-icon-prev")("pagerNextIcon","datatable-icon-skip")("page",e.pageResult.page)("size",e.pageResult.per_page)("count",e.pageResult.total_objects)}}function S(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div",36),s.Pb(1,"h4",37),s.zc(2),s.Ob(),s.Pb(3,"button",38),s.Wb("click",(function(){return s.pc(e),s.Yb().modalRef.hide()})),s.Pb(4,"span",39),s.zc(5,"\xd7"),s.Ob(),s.Ob(),s.Ob(),s.Pb(6,"div",40),s.Pb(7,"button",10),s.Wb("click",(function(){return s.pc(e),s.Yb().changeActive()})),s.zc(8,"Yes"),s.Ob(),s.Pb(9,"button",41),s.Wb("click",(function(){return s.pc(e),s.Yb().modalRef.hide()})),s.zc(10,"No"),s.Ob(),s.Ob()}if(2&e){const e=s.Yb();s.xb(2),s.Bc("Are you sure ",1==e.idActive.active?"lock":"unlock"," this account?")}}const F=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.customerService=e,this.fb=t,this.router=n,this.modalService=i,this.element=l.c,this.arrRole=l.j,this.pageResult={page:1,per_page:10,total_objects:0,search:"",fullname:""},this.idActive={id:"",active:!0},this.isAdmin=!0,this.messages={emptyMessage:"No data to display"},this.modelAccount=new y.a,this.formAdd()}ngOnInit(){this.getDataLists(),this.delaySearch()}delaySearch(){this.modelAccount.pipe(Object(k.a)(l.p)).subscribe(e=>{this.pageResult.fullname=this.formSearch.value.search,this.pageResult.page=1,this.getDataLists()})}formAdd(){this.formSearch=this.fb.group({role:[[]],search:[""]})}getDataLists(){this.customerService.getListDatas(this.pageResult).subscribe(e=>{this.tableData=e.users,this.pageResult.total_objects=e.meta.pagination.total_objects})}addNewItem(){this.router.navigate(["pages/customers/create"])}editItem(e){this.router.navigate(["pages/customers/detail/"+e])}changePage(e){this.pageResult.page=e.page,this.getDataLists()}selectItemPerPage(){this.pageResult.page=1,this.getDataLists()}search(){this.modelAccount.next()}getIdActive(e,t){this.modalRef=this.modalService.show(e),this.idActive={id:t.id,active:t.active}}changeActive(){this.customerService.edit(this.idActive.id,{active:!this.idActive.active}).subscribe(e=>{this.getDataLists()}),this.modalRef.hide()}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(l.d),s.Jb(a.b),s.Jb(r.b),s.Jb(b.b))},e.\u0275cmp=s.Db({type:e,selectors:[["app-customer"]],decls:33,vars:12,consts:[[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"col-lg-3"],[1,"searchContainer"],[1,"icon"],[1,"fa","fa-search"],["type","text","formControlName","search","placeholder","T\xecm...",1,"form-control",3,"keyup"],["type","button",1,"btn","btn-success",3,"click"],[1,"table"],[1,"material","expandable","striped",3,"columnMode","headerHeight","footerHeight","rowHeight","rows","messages"],["table",""],["name","STT",2,"width","60px !important",3,"sortable","resizeable","canAutoResize","maxWidth"],["style","width: 60px !important;","ngx-datatable-cell-template",""],["name","Fullname","cellClass","textalignleft","prop","fullname"],["name","Email","cellClass","textalignleft","prop","email"],["name","Phone","cellClass","textalignleft","prop","phone_number"],["name","Kind user","cellClass","textalignleft"],["ngx-datatable-cell-template",""],["name","Action",3,"sortable"],["ngx-datatable-footer-template",""],["changeStatus",""],[2,"width","60px !important"],["aria-hidden","true",1,"fa","fa-pencil-square-o","icon-action",3,"click"],["class","fa fa-check-square icon-action active-button","aria-hidden","true",3,"click",4,"ngIf"],["class","fa fa-times-circle icon-action no-active","aria-hidden","true",3,"click",4,"ngIf"],["aria-hidden","true",1,"fa","fa-check-square","icon-action","active-button",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle","icon-action","no-active",3,"click"],[1,"col-6","col-md-6"],[3,"ngModel","ngModelChange","click"],[3,"value",4,"ngFor","ngForOf"],[1,"soluong"],[1,"col-6","col-md-6",3,"pagerLeftArrowIcon","pagerRightArrowIcon","pagerPreviousIcon","pagerNextIcon","page","size","count","change"],[3,"value"],[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],["aria-hidden","true"],[1,"modal-footer"],["type","button",1,"btn","btn-dark",3,"click"]],template:function(e,t){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Pb(4,"form",4),s.Pb(5,"div",0),s.Pb(6,"div",5),s.Pb(7,"div",6),s.Pb(8,"span",7),s.Kb(9,"i",8),s.Ob(),s.Pb(10,"input",9),s.Wb("keyup",(function(){return t.search()})),s.Ob(),s.Ob(),s.Ob(),s.Kb(11,"div",5),s.Pb(12,"div",5),s.Pb(13,"div",2),s.Pb(14,"button",10),s.Wb("click",(function(){return t.addNewItem()})),s.zc(15,"Create"),s.Ob(),s.Ob(),s.Ob(),s.Kb(16,"div",5),s.Ob(),s.Ob(),s.Pb(17,"div",11),s.Pb(18,"ngx-datatable",12,13),s.Pb(20,"ngx-datatable-column",14),s.xc(21,C,2,1,"ng-template",15),s.Ob(),s.Kb(22,"ngx-datatable-column",16),s.Kb(23,"ngx-datatable-column",17),s.Kb(24,"ngx-datatable-column",18),s.Pb(25,"ngx-datatable-column",19),s.xc(26,_,2,4,"ng-template",20),s.Ob(),s.Pb(27,"ngx-datatable-column",21),s.xc(28,D,3,2,"ng-template",20),s.Ob(),s.Pb(29,"ngx-datatable-footer"),s.xc(30,M,7,10,"ng-template",22),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.xc(31,S,11,1,"ng-template",null,23,s.yc)),2&e&&(s.xb(4),s.ec("formGroup",t.formSearch),s.xb(14),s.ec("columnMode","force")("headerHeight",50)("footerHeight",80)("rowHeight",50)("rows",t.tableData)("messages",t.messages),s.xb(2),s.ec("sortable",!1)("resizeable",!1)("canAutoResize",!1)("maxWidth",50),s.xb(7),s.ec("sortable",!1))},directives:[a.o,a.h,a.d,a.a,a.g,a.c,o.e,o.b,o.a,o.f,o.c,i.l,a.l,a.i,i.k,o.d,a.j,a.n],pipes:[z.a],styles:[".searchContainer[_ngcontent-%COMP%]{position:relative;margin-bottom:20px}.searchContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-left:30px}.searchContainer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:auto;padding-left:10px;display:flex;align-items:center;cursor:pointer}.active-button[_ngcontent-%COMP%]{color:#35cd37}.no-active[_ngcontent-%COMP%]{color:red!important}"]}),e})()},{path:"create",component:w},{path:"detail/:id",component:w}];let W=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[r.c.forChild(F)],r.c]}),e})();var K=n("tgok");let N=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[i.c,W,o.g,a.k,a.e,c.c,K.a]]}),e})()}}]);