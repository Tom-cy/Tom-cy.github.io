(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projectManage-projectManage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projectManage/project/project.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projectManage/project/project.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb> </app-breadcrumb>\r\n<div>project</div>");

/***/ }),

/***/ "./src/app/pages/projectManage/project/project.component.less":
/*!********************************************************************!*\
  !*** ./src/app/pages/projectManage/project/project.component.less ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RNYW5hZ2UvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/pages/projectManage/project/project.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/projectManage/project/project.component.ts ***!
  \******************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectComponent = class ProjectComponent {
    constructor() { }
    ngOnInit() { }
};
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projectManage/project/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.less */ "./src/app/pages/projectManage/project/project.component.less")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/pages/projectManage/projectManage-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/projectManage/projectManage-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectManageRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManageRoutingModules", function() { return ProjectManageRoutingModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "./src/app/pages/projectManage/project/project.component.ts");




const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"] }
];
let ProjectManageRoutingModules = class ProjectManageRoutingModules {
};
ProjectManageRoutingModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProjectManageRoutingModules);



/***/ }),

/***/ "./src/app/pages/projectManage/projectManage.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/projectManage/projectManage.module.ts ***!
  \*************************************************************/
/*! exports provided: ProjectManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManageModule", function() { return ProjectManageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _projectManage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectManage-routing.module */ "./src/app/pages/projectManage/projectManage-routing.module.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "./src/app/pages/projectManage/project/project.component.ts");
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared.module */ "./src/app/components/shared.module.ts");



// 注册当前路由

// 导入子页面组件

// 引入面包屑

let ProjectManageModule = class ProjectManageModule {
};
ProjectManageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [_projectManage_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectManageRoutingModules"]],
        providers: []
    })
], ProjectManageModule);



/***/ })

}]);
//# sourceMappingURL=projectManage-projectManage-module-es2015.js.map