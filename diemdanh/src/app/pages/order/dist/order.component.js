"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("src/app/@web-core/http");
var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, fb, router, modalService) {
        this.orderService = orderService;
        this.fb = fb;
        this.router = router;
        this.modalService = modalService;
        this.element = http_1.COUNTPERPAGE;
        this.pageResult = {
            page: 1,
            per_page: 10,
            total_objects: 0,
            search: ''
        };
        this.isAdmin = true;
        this.messages = {
            emptyMessage: 'No data to display'
        };
        this.modelProduct = new rxjs_1.Subject();
        // this.formAdd();
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.delaySearch();
    };
    OrderComponent.prototype.delaySearch = function () {
        var _this = this;
        this.modelProduct.pipe(operators_1.debounceTime(http_1.TIMEOUTSEARCH))
            .subscribe(function (event) {
            _this.pageResult.search = event;
            _this.pageResult.page = 1;
            _this.getProducts();
        });
    };
    OrderComponent.prototype.getProducts = function () {
        var _this = this;
        this.orderService.getListDatas(this.pageResult).subscribe(function (data) {
            _this.tableData = data.products;
            _this.pageResult.total_objects = data.meta.pagination.total_objects || 1;
        });
    };
    OrderComponent.prototype.addNewItem = function () {
        this.router.navigate(['pages/products/create']);
    };
    OrderComponent.prototype.editItem = function (id) {
        this.router.navigate(['pages/products/detail/' + id]);
    };
    OrderComponent.prototype.DeleteItem = function () {
        var _this = this;
        this.orderService["delete"](this.id).subscribe(function (data) {
            _this.getProducts();
            _this.modalRef.hide();
        });
    };
    OrderComponent.prototype.changePage = function (event) {
        this.pageResult.page = event.page;
        this.getProducts();
    };
    OrderComponent.prototype.selectItemPerPage = function () {
        this.pageResult.page = 1;
        this.getProducts();
    };
    OrderComponent.prototype.GetIdDelete = function (template, id) {
        this.modalRef = this.modalService.show(template);
        this.id = id;
    };
    OrderComponent.prototype.searchFillter = function (event) {
        this.modelProduct.next(event);
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.scss']
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
