(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["houseManage-houseManage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/houseManage/House/house.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/houseManage/House/house.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb></app-breadcrumb>\r\n\r\n<div class=\"container\">\r\n  <app-search\r\n    class=\"container_search\"\r\n    (closeDelete)=\"DeleteData()\"\r\n  ></app-search>\r\n  <app-base-table\r\n    [tableDatas]=\"tableDatas\"\r\n    (checked)=\"checked($event)\"\r\n    (checkedSingle)=\"checkedSingle($event)\"\r\n    (page)=\"pageindex($event)\"\r\n    checkedSingle\r\n    #tableChild\r\n    (editData)=\"editTb($event)\"\r\n  ></app-base-table>\r\n</div>\r\n<nz-modal\r\n  [(nzVisible)]=\"BaseTablevisible\"\r\n  (nzOnCancel)=\"handleCancel()\"\r\n  (nzOnOk)=\"handleOk()\"\r\n  [nzFooter]=\"null\"\r\n  nzTitle=\"编辑\"\r\n>\r\n  <form nz-form [formGroup]=\"TableModal\">\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"6\" nzRequired>运营方</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n        <input nz-input name=\"formname\" formControlName=\"formname\" required />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"6\" nzRequired>项目名称</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n        <input\r\n          nz-input\r\n          id=\"formxiangmu\"\r\n          formControlName=\"formxiangmu\"\r\n          required\r\n        />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"6\" nzRequired>项目代理</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n        <input nz-input formControlName=\"formdaili\" id=\"formdaili\" required />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"6\" nzRequired>项目代理区域</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n        <input nz-input formControlName=\"formquyu\" id=\"formquyu\" required />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"6\" nzRequired>项目管理人</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n        <input nz-input formControlName=\"formPeo\" id=\"formPeo\" required />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"6\" nzRequired>项目管理人电话</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n        <input nz-input formControlName=\"formtel\" id=\"formtel\" required />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"6\" nzRequired>楼盘名称</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n        <input nz-input formControlName=\"formhouse\" id=\"formhouse\" required />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"6\" nzRequired>当前状态</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"14\" nzErrorTip=\"请输入有效值\">\r\n        <nz-switch formControlName=\"zhuangtai\"> </nz-switch>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-control>\r\n        <div style=\"width:100%;display: flex;justify-content: space-around;\">\r\n          <button nz-button nzType=\"primary\">\r\n            重置\r\n          </button>\r\n          <button nz-button (click)=\"saveForm(Modalist)\">保存</button>\r\n        </div>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </form>\r\n</nz-modal>\r\n");

/***/ }),

/***/ "./src/app/pages/houseManage/House/house.component.less":
/*!**************************************************************!*\
  !*** ./src/app/pages/houseManage/House/house.component.less ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n}\n.container_search {\n  height: 50px;\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG91c2VNYW5hZ2UvSG91c2UvRDovZ2l0aHViL0ZMTV9hZG1pbi9zcmMvYXBwL3BhZ2VzL2hvdXNlTWFuYWdlL0hvdXNlL2hvdXNlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9ob3VzZU1hbmFnZS9Ib3VzZS9ob3VzZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvdXNlTWFuYWdlL0hvdXNlL2hvdXNlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyX3NlYXJjaCB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXJfc2VhcmNoIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/houseManage/House/house.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/houseManage/House/house.component.ts ***!
  \************************************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let HouseComponent = class HouseComponent {
    constructor(http, fb) {
        this.http = http;
        this.fb = fb;
        // DIALOG 模块
        this.BaseTablevisible = false;
        this.listOfData = [];
        this.isOperating = false;
        this.SelectData = [];
        this.editID = '';
        this.editItem = '';
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.listOfDisplayData = [];
        this.mapOfCheckedId = {};
        this.tableDatas = {
            // 所有的详情数据
            dataSet: [],
            total: 0,
            itemLength: 0,
            title: '✈东南亚航空管理后台✈✈✈',
            footer: '✈✈✈✈✈✈✈✈✈✈',
            loading: false,
            bordered: true,
            checked: true,
            checkedSingle: false,
            switch: true,
            switchName: 'zhuangtai',
            size: 'default',
            pagination: true,
            pageSize: 5,
            pageIndex: 2,
            operation: false,
            dataTh: [
                {
                    title: '运营方'
                },
                {
                    title: '项目名称'
                },
                {
                    title: '项目代理'
                },
                {
                    title: '项目代理区域'
                },
                {
                    title: '项目代理人'
                },
                {
                    title: '项目管理人电话'
                },
                {
                    title: '楼盘名称'
                },
                {
                    title: '项目当前状态'
                },
                {
                    title: '操作'
                }
            ],
            tdItem: [
                {
                    name: 'formname'
                },
                {
                    name: 'formxiangmu'
                },
                {
                    name: 'formdaili'
                },
                {
                    name: 'formquyu'
                },
                {
                    name: 'formPeo'
                },
                {
                    name: 'formtel'
                },
                {
                    name: 'formhouse'
                }
            ]
        };
        console.log('执行Constructor');
        this.TableModal = this.fb.group({
            formname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            formxiangmu: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            formdaili: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            formquyu: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            formPeo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            formtel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            formhouse: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            zhuangtai: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    ngOnInit() {
        console.log('执行2222222222222222222222222222222');
        this.getData();
    }
    getData() {
        this.isOperating = true;
        const url = 'http://localhost:9562/admin/getFLM';
        // subscribe: 利用rxjs封装的http获取异步请求的数据，类似于promise
        this.http.get(url).subscribe((respone) => {
            //  data:返回的数据
            const data = respone.data;
            // const data1 = JSON.parse(JSON.stringify( this.tableDatas));
            const data1 = Object.assign({}, this.tableDatas);
            data1.dataSet = data;
            this.tableDatas = data1;
            this.isOperating = false;
        });
    }
    checkAll(value) {
        this.refreshStatus();
    }
    refreshStatus() { }
    handleCancel() {
        console.log('取消');
        this.BaseTablevisible = false;
    }
    handleOk() {
        console.log('确定');
        this.BaseTablevisible = false;
    }
    editTb(e) {
        this.BaseTablevisible = true;
        this.editID = e._id;
        this.editItem = e;
        this.TableModal.patchValue(e);
    }
    closeModel(e) {
        this.BaseTablevisible = false;
    }
    saveForm(e) {
        for (const i in this.TableModal.controls) {
            if (i) {
                this.TableModal.controls[i].markAsDirty();
                this.TableModal.controls[i].updateValueAndValidity();
            }
        }
        // 判读是否有效
        if (this.TableModal.status === 'VALID') {
            // 判断是编辑还是....
            // if (this.isEdit) {
            this.updatePartner();
            // } else {
            //   this.createPartner();
            // }
        }
    }
    // 修改数据信息。 数据的双向绑定
    updatePartner() {
        const reqData = {
            formname: this.getOperationDateFormValue('formname'),
            formxiangmu: this.getOperationDateFormValue('formxiangmu'),
            formdaili: this.getOperationDateFormValue('formdaili'),
            formquyu: this.getOperationDateFormValue('formquyu'),
            formPeo: this.getOperationDateFormValue('formPeo'),
            formtel: this.getOperationDateFormValue('formtel'),
            formhouse: this.getOperationDateFormValue('formhouse'),
            zhuangtai: this.getOperationDateFormValue('zhuangtai')
        };
        for (const key in reqData) {
            if (reqData.hasOwnProperty(key)) {
                const element = reqData[key];
                this.editItem[key] = element;
            }
        }
        this.BaseTablevisible = false;
    }
    getOperationDateFormValue(str) {
        return this.TableModal.get(str).value;
    }
    checked($event) {
        this.SelectData = $event;
    }
    checkedSingle($event) {
        console.log('执行1');
        console.log($event);
    }
    pageindex($event) {
        this.tableDatas.pageIndex = $event;
    }
    DeleteData() {
        let newData = this.tableDatas.dataSet.filter(item => {
            let isDel = false;
            for (let i = 0; i < this.SelectData.length; i++) {
                if (this.SelectData[i]._id === item._id) {
                    isDel = true;
                    break;
                }
            }
            if (!isDel) {
                return item;
            }
        });
        let newData1 = JSON.parse(JSON.stringify(newData));
        this.tableDatas.dataSet = newData1;
    }
};
HouseComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
HouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-house',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./house.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/houseManage/House/house.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./house.component.less */ "./src/app/pages/houseManage/House/house.component.less")).default]
    })
], HouseComponent);



/***/ }),

/***/ "./src/app/pages/houseManage/houseManage-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/houseManage/houseManage-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: HouseRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseRoutingModules", function() { return HouseRoutingModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _House_house_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./House/house.component */ "./src/app/pages/houseManage/House/house.component.ts");




const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: 'index',
        component: _House_house_component__WEBPACK_IMPORTED_MODULE_3__["HouseComponent"],
        data: {
            reuse: true
        }
    }
];
let HouseRoutingModules = class HouseRoutingModules {
};
HouseRoutingModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HouseRoutingModules);



/***/ }),

/***/ "./src/app/pages/houseManage/houseManage.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/houseManage/houseManage.module.ts ***!
  \*********************************************************/
/*! exports provided: HouseManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseManageModule", function() { return HouseManageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _houseManage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./houseManage-routing.module */ "./src/app/pages/houseManage/houseManage-routing.module.ts");
/* harmony import */ var _House_house_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./House/house.component */ "./src/app/pages/houseManage/House/house.component.ts");
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var src_app_common_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/common.component */ "./src/app/common/common.component.ts");



// 注册当前路由

// 导入子页面组件

// 引入面包屑

// 配置公共组件

let HouseManageModule = class HouseManageModule {
};
HouseManageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_House_house_component__WEBPACK_IMPORTED_MODULE_4__["HouseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_common_common_component__WEBPACK_IMPORTED_MODULE_6__["CommonCoModule"]],
        exports: [_houseManage_routing_module__WEBPACK_IMPORTED_MODULE_3__["HouseRoutingModules"]],
        providers: []
    })
], HouseManageModule);



/***/ })

}]);
//# sourceMappingURL=houseManage-houseManage-module-es2015.js.map