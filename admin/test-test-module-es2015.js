(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"operate\">\r\n  <!-- <button\r\n    nz-button\r\n    [disabled]=\"numberOfChecked === 0\"\r\n    [nzType]=\"'primary'\"\r\n    [nzLoading]=\"isOperating\"\r\n    (click)=\"operateData()\"\r\n  >\r\n    Reload\r\n  </button> -->\r\n  <!-- <span *ngIf=\"numberOfChecked\">Selected {{ numberOfChecked }} items</span> -->\r\n</div>\r\n<nz-table\r\n  #rowSelectionTable\r\n  nzShowPagination\r\n  nzShowSizeChanger\r\n  [nzData]=\"listOfAllData\"\r\n  (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\r\n>\r\n  <thead>\r\n    <tr>\r\n      <th\r\n        nzShowCheckbox\r\n        [(nzChecked)]=\"isAllDisplayDataChecked\"\r\n        [nzIndeterminate]=\"isIndeterminate\"\r\n        (nzCheckedChange)=\"checkAll($event)\"\r\n      ></th>\r\n      <th>Name</th>\r\n      <th>Age</th>\r\n      <th>Address</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of rowSelectionTable.data\">\r\n      <td\r\n        nzShowCheckbox\r\n        [(nzChecked)]=\"mapOfCheckedId[data.id]\"\r\n        [nzDisabled]=\"data.disabled\"\r\n        (nzCheckedChange)=\"refreshStatus()\"\r\n      ></td>\r\n      <td>{{ data.name }}</td>\r\n      <td>{{ data.age }}</td>\r\n      <td>{{ data.address }}</td>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>");

/***/ }),

/***/ "./src/app/pages/test/home/home.component.less":
/*!*****************************************************!*\
  !*** ./src/app/pages/test/home/home.component.less ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".operate {\n  margin-bottom: 16px;\n}\n.operate span {\n  margin-left: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC9ob21lL0Q6L2dpdGh1Yi9GTE1fYWRtaW4vc3JjL2FwcC9wYWdlcy90ZXN0L2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvdGVzdC9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVzdC9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BlcmF0ZSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5vcGVyYXRlIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuIiwiLm9wZXJhdGUge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm9wZXJhdGUgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/test/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/test/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: TestHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestHomeComponent", function() { return TestHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestHomeComponent = class TestHomeComponent {
    constructor() {
        this.isAllDisplayDataChecked = false;
        this.isOperating = false;
        this.isIndeterminate = false;
        // 定义一个checkall 数据为空
        this.listOfDisplayData = [];
        this.listOfAllData = [];
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
    }
    currentPageDataChange($event) {
        console.log($event);
        console.log('执行1');
        this.listOfDisplayData = $event;
        this.refreshStatus();
    }
    refreshStatus() {
        console.log('执行2');
        console.log(this.listOfDisplayData);
        console.log(this.isAllDisplayDataChecked);
        this.isAllDisplayDataChecked = this.listOfDisplayData
            .filter(item => !item.disabled)
            .every(item => this.mapOfCheckedId[item.id]);
        this.isIndeterminate =
            this.listOfDisplayData
                .filter(item => !item.disabled)
                .some(item => this.mapOfCheckedId[item.id]) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length;
    }
    checkAll(value) {
        console.log('执行3');
        this.listOfDisplayData
            .filter(item => !item.disabled)
            .forEach(item => (this.mapOfCheckedId[item.id] = value));
        this.refreshStatus();
    }
    operateData() {
        console.log('执行4');
        this.isOperating = true;
        setTimeout(() => {
            this.listOfAllData.forEach(item => (this.mapOfCheckedId[item.id] = false));
            this.refreshStatus();
            this.isOperating = false;
        }, 1000);
    }
    ngOnInit() {
        console.log('执行5');
        for (let i = 0; i < 100; i++) {
            this.listOfAllData.push({
                id: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
                disabled: i % 2 === 0
            });
        }
        console.log(this.listOfAllData);
    }
};
TestHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.less */ "./src/app/pages/test/home/home.component.less")).default]
    })
], TestHomeComponent);



/***/ }),

/***/ "./src/app/pages/test/test.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _test_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.route */ "./src/app/pages/test/test.route.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/test/home/home.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");


// Module 用于NgModule
// import { TestComponent } from './test.component';
// 导入路由

// ----------第三方插件---------

// 注册反应式表单模块

// 导入子组件/

// 当要构建模板驱动表单时

// 接收可以使用Nfif, Ngfor

let TestModule = class TestModule {
};
TestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["TestHomeComponent"]],
        exports: [_test_route__WEBPACK_IMPORTED_MODULE_2__["TestRoute"]]
    })
], TestModule);



/***/ }),

/***/ "./src/app/pages/test/test.route.ts":
/*!******************************************!*\
  !*** ./src/app/pages/test/test.route.ts ***!
  \******************************************/
/*! exports provided: TestRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoute", function() { return TestRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/test/home/home.component.ts");




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["TestHomeComponent"] }
];
let TestRoute = class TestRoute {
};
TestRoute = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TestRoute);



/***/ })

}]);
//# sourceMappingURL=test-test-module-es2015.js.map