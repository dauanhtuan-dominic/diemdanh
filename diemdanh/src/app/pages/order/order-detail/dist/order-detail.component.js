"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderDetailComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("src/app/@web-core/http");
var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(fb, orderService, customerService, route, router, globalService) {
        this.fb = fb;
        this.orderService = orderService;
        this.customerService = customerService;
        this.route = route;
        this.router = router;
        this.globalService = globalService;
        this.arrCustomer = [];
        this.notFoundText = http_1.DROPDOWNNOTFOUND;
        this.pageCustomer = {
            page: 1,
            per_page: 10,
            total_objects: 0,
            search: ''
        };
        this.loadingCustomer = false;
        this.AddForm();
    }
    Object.defineProperty(OrderDetailComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getListCustomer();
        this.route.params.subscribe(function (params) {
            if (params.id !== undefined) {
                _this.id = params.id;
                _this.AddForm();
                _this.getInfoOrder();
            }
            else {
                _this.AddForm();
            }
        });
    };
    OrderDetailComponent.prototype.AddForm = function () {
        this.form = this.fb.group({
            name: ['', [forms_1.Validators.required]]
        });
    };
    OrderDetailComponent.prototype.getInfoOrder = function () {
        var _this = this;
        this.orderService.getItemDetail(this.id).subscribe(function (data) {
            _this.form.patchValue({
                name: data.product.name
            });
            _this.currency();
        });
    };
    OrderDetailComponent.prototype.editItem = function () {
        var _this = this;
        var formData = this.form.value;
        this.orderService.edit(this.id, formData).subscribe(function (data) {
            _this.router.navigate(['pages/products']);
        });
    };
    OrderDetailComponent.prototype.createItem = function () {
        var _this = this;
        var formData = this.form.value;
        this.orderService.create(formData).subscribe(function (data) {
            _this.router.navigate(['pages/products']);
        });
    };
    OrderDetailComponent.prototype.cancel = function () {
        this.router.navigate(['pages/products']);
    };
    OrderDetailComponent.prototype.currency = function () {
        var data = this.form.value.price.toString();
        // const newVal = (parseInt(myVal.replace(/\.,/g, '')) / 100).toLocaleString('en-US', { minimumFractionDigits: 2 });
        var temp = this.globalService.currency('usd', data);
        // data = data.replace(/[^0-9.]/gm, '');
        // data = data.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        this.form.controls['price'].setValue(temp);
    };
    OrderDetailComponent.prototype.searchCustomer = function (event) {
        this.pageCustomer.search = event;
        this.pageCustomer.page = 1;
        this.getListCustomer('search');
    };
    OrderDetailComponent.prototype.scrollEnd = function (type) {
        if (type === 'product_group') {
            if (this.loadingCustomer || this.arrCustomer.length === this.pageCustomer.total_objects) {
                return;
            }
            else {
                this.pageCustomer.page += 1;
                this.getListCustomer();
            }
        }
    };
    OrderDetailComponent.prototype.removeInput = function (type) {
        if (type === 'customer') {
            this.searchCustomer('');
        }
    };
    OrderDetailComponent.prototype.getListCustomer = function (status) {
        var _this = this;
        this.loadingCustomer = true;
        this.customerService.getListDatas(this.pageCustomer).subscribe(function (res) {
            if (status && status === 'search') {
                _this.arrCustomer = [];
            }
            _this.pageCustomer.total_objects = res.meta.pagination.total_objects;
            _this.arrCustomer = _this.arrCustomer.concat(res.product_groups);
            _this.loadingCustomer = false;
        });
    };
    OrderDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-order-detail',
            templateUrl: './order-detail.component.html',
            styleUrls: ['./order-detail.component.scss']
        })
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());
exports.OrderDetailComponent = OrderDetailComponent;
