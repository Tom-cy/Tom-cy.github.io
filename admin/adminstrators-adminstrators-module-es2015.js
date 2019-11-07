(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminstrators-adminstrators-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adminstrators/admin/admin.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adminstrators/admin/admin.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb> </app-breadcrumb>\r\n<div>admin</div>\r\n");

/***/ }),

/***/ "./src/app/pages/adminstrators/admin/admin.component.less":
/*!****************************************************************!*\
  !*** ./src/app/pages/adminstrators/admin/admin.component.less ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluc3RyYXRvcnMvYWRtaW4vYWRtaW4uY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/adminstrators/admin/admin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/adminstrators/admin/admin.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() { }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adminstrators/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.less */ "./src/app/pages/adminstrators/admin/admin.component.less")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/pages/adminstrators/adminstrators-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/adminstrators/adminstrators-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdminstratorsRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminstratorsRoutingModules", function() { return AdminstratorsRoutingModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/pages/adminstrators/admin/admin.component.ts");




const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] }
];
let AdminstratorsRoutingModules = class AdminstratorsRoutingModules {
};
AdminstratorsRoutingModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminstratorsRoutingModules);



/***/ }),

/***/ "./src/app/pages/adminstrators/adminstrators.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/adminstrators/adminstrators.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminstratorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminstratorsModule", function() { return AdminstratorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _adminstrators_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminstrators-routing.module */ "./src/app/pages/adminstrators/adminstrators-routing.module.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/pages/adminstrators/admin/admin.component.ts");
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared.module */ "./src/app/components/shared.module.ts");



// 注册当前路由

// 导入子页面组件

// 引入面包屑

let AdminstratorsModule = class AdminstratorsModule {
};
AdminstratorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [_adminstrators_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminstratorsRoutingModules"]],
        providers: []
    })
], AdminstratorsModule);



/***/ })

}]);
//# sourceMappingURL=adminstrators-adminstrators-module-es2015.js.map