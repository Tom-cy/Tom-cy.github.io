(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brokerManage-brokerManage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brokerManage/broker/broker.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brokerManage/broker/broker.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb> </app-breadcrumb>\r\n<div>broker</div>");

/***/ }),

/***/ "./src/app/pages/brokerManage/broker/broker.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/pages/brokerManage/broker/broker.component.less ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jyb2tlck1hbmFnZS9icm9rZXIvYnJva2VyLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/pages/brokerManage/broker/broker.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/brokerManage/broker/broker.component.ts ***!
  \***************************************************************/
/*! exports provided: BrokerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerComponent", function() { return BrokerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BrokerComponent = class BrokerComponent {
    constructor() { }
    ngOnInit() { }
};
BrokerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./broker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brokerManage/broker/broker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./broker.component.less */ "./src/app/pages/brokerManage/broker/broker.component.less")).default]
    })
], BrokerComponent);



/***/ }),

/***/ "./src/app/pages/brokerManage/brokerManage-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/brokerManage/brokerManage-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BrokerManageRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerManageRoutingModules", function() { return BrokerManageRoutingModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _broker_broker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./broker/broker.component */ "./src/app/pages/brokerManage/broker/broker.component.ts");




const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _broker_broker_component__WEBPACK_IMPORTED_MODULE_3__["BrokerComponent"] }
];
let BrokerManageRoutingModules = class BrokerManageRoutingModules {
};
BrokerManageRoutingModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BrokerManageRoutingModules);



/***/ }),

/***/ "./src/app/pages/brokerManage/brokerManage.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/brokerManage/brokerManage.module.ts ***!
  \***********************************************************/
/*! exports provided: BrokerManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerManageModule", function() { return BrokerManageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _brokerManage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brokerManage-routing.module */ "./src/app/pages/brokerManage/brokerManage-routing.module.ts");
/* harmony import */ var _broker_broker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./broker/broker.component */ "./src/app/pages/brokerManage/broker/broker.component.ts");
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared.module */ "./src/app/components/shared.module.ts");



// 注册当前路由

// 导入子页面组件

// 引入面包屑

let BrokerManageModule = class BrokerManageModule {
};
BrokerManageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_broker_broker_component__WEBPACK_IMPORTED_MODULE_4__["BrokerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [_brokerManage_routing_module__WEBPACK_IMPORTED_MODULE_3__["BrokerManageRoutingModules"]],
        providers: []
    })
], BrokerManageModule);



/***/ })

}]);
//# sourceMappingURL=brokerManage-brokerManage-module-es2015.js.map