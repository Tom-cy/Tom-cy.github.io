(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regionManage-regionManage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/regionManage/region/region.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/regionManage/region/region.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb> </app-breadcrumb>\r\n<div>fuck guide</div>");

/***/ }),

/***/ "./src/app/pages/regionManage/region/region.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/pages/regionManage/region/region.component.less ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lvbk1hbmFnZS9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/pages/regionManage/region/region.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/regionManage/region/region.component.ts ***!
  \***************************************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegionComponent = class RegionComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
RegionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-region',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./region.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/regionManage/region/region.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./region.component.less */ "./src/app/pages/regionManage/region/region.component.less")).default]
    })
], RegionComponent);



/***/ }),

/***/ "./src/app/pages/regionManage/regionManage-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/regionManage/regionManage-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegionManageRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionManageRoutingModules", function() { return RegionManageRoutingModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region/region.component */ "./src/app/pages/regionManage/region/region.component.ts");




const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _region_region_component__WEBPACK_IMPORTED_MODULE_3__["RegionComponent"] }
];
let RegionManageRoutingModules = class RegionManageRoutingModules {
};
RegionManageRoutingModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RegionManageRoutingModules);



/***/ }),

/***/ "./src/app/pages/regionManage/regionManage.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/regionManage/regionManage.module.ts ***!
  \***********************************************************/
/*! exports provided: RegionManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionManageModule", function() { return RegionManageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _regionManage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regionManage-routing.module */ "./src/app/pages/regionManage/regionManage-routing.module.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./region/region.component */ "./src/app/pages/regionManage/region/region.component.ts");
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared.module */ "./src/app/components/shared.module.ts");



// 注册当前路由

// 导入子页面组件

// 引入面包屑

let RegionManageModule = class RegionManageModule {
};
RegionManageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_region_region_component__WEBPACK_IMPORTED_MODULE_4__["RegionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [_regionManage_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegionManageRoutingModules"]],
        providers: []
    })
], RegionManageModule);



/***/ })

}]);
//# sourceMappingURL=regionManage-regionManage-module-es2015.js.map