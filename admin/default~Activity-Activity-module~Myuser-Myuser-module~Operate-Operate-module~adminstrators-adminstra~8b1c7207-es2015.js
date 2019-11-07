(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Activity-Activity-module~Myuser-Myuser-module~Operate-Operate-module~adminstrators-adminstra~8b1c7207"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/BaseModal/BaseModal1.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/BaseModal/BaseModal1.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-form [formGroup] = \"TableModal\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\" nzRequired>运营方</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n      <input\r\n        nz-input\r\n        name=\"formname\"\r\n        formControlName=\"formname\"\r\n        required\r\n      />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\" nzRequired>项目名称</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n      <input\r\n        nz-input\r\n        id=\"formxiangmu\"\r\n        formControlName=\"formxiangmu\"\r\n        required\r\n      />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\" nzRequired>项目代理</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n      <input\r\n        nz-input\r\n        formControlName=\"formdaili\"\r\n        id=\"formdaili\"\r\n        required\r\n      />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\" nzRequired>项目代理区域</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n      <input\r\n        nz-input\r\n        formControlName=\"formquyu\"\r\n        id=\"formquyu\"\r\n        required\r\n      />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\" nzRequired>项目管理人</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n      <input\r\n        nz-input\r\n        formControlName=\"formPeo\"\r\n        id=\"formPeo\"\r\n        required\r\n      />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\" nzRequired>项目管理人电话</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n      <input\r\n        nz-input\r\n        formControlName=\"formtel\"\r\n        id=\"formtel\"\r\n        required\r\n      />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\" nzRequired>楼盘名称</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n      <input\r\n        nz-input\r\n        formControlName=\"formhouse\"\r\n        id=\"formhouse\"\r\n        required\r\n      />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <!-- <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\" nzRequired>当前状态</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\" nzHasFeedback nzErrorTip=\"请输入有效值\">\r\n     <nz-switch>\r\n\r\n     </nz-switch>\r\n    </nz-form-control>\r\n  </nz-form-item> -->\r\n\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <div style=\"width:100%;display: flex;justify-content: space-around;\">\r\n        <button nz-button nzType=\"primary\">\r\n          重置\r\n        </button>\r\n        <button nz-button (click)=\"saveForm(Modalist)\">保存</button>\r\n      </div>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/BaseSearch/BaseSearch.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/BaseSearch/BaseSearch.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-row nz-form [formGroup]=\"seachForm\" (ngSubmit)=\"submitForm()\">\r\n  <div nz-col nzSpan=\"5\">\r\n    <nz-form-item>\r\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"Name\"\r\n        >楼盘名称</nz-form-label\r\n      >\r\n      <nz-form-control [nzSm]=\"16\" [nzXs]=\"24\">\r\n        <input\r\n          nz-input\r\n          formControlName=\"Name\"\r\n          id=\"Name\"\r\n          placeholder=\"请输入楼盘名称\"\r\n        />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </div>\r\n\r\n  <div nz-col nzSpan=\"5\">\r\n    <nz-form-item>\r\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"Region\"\r\n        >所在地区</nz-form-label\r\n      >\r\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n        <nz-cascader\r\n          formControlName=\"Region\"\r\n          id=\"Region\"\r\n          [nzOptions]=\"nzOptions\"\r\n        ></nz-cascader>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </div>\r\n  <div nz-col nzSpan=\"2\">\r\n    <button\r\n      style=\"margin-top:4px;\"\r\n      nz-button\r\n      nzType=\"primary\"\r\n      [nzLoading]=\"isLoadingSearch\"\r\n    >\r\n      查询\r\n    </button>\r\n  </div>\r\n\r\n  <div nz-col nzSpan=\"2\">\r\n    <button\r\n      style=\"margin-top:4px;\"\r\n      nz-button\r\n      nzType=\"danger\"\r\n      (click)=\"Delete()\"\r\n      [nzLoading]=\"isLoadingSearch\"\r\n    >\r\n      删除\r\n    </button>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/BaseTable/BaseTable.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/BaseTable/BaseTable.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- nzData 数据数组 -->\r\n<!-- nzShowPagination 是否显示分页器 -->\r\n<!-- nzTitle 表格标题 -->\r\n<!-- nzFooter 表格尾部 -->\r\n<!-- nzFooter 表格尾部 -->\r\n<nz-table\r\n  #basicTable\r\n  [nzData]=\"tableDatas.dataSet\"\r\n  [nzTitle]=\"tableDatas?.title\"\r\n  [nzFooter]=\"tableDatas?.footer\"\r\n  [nzLoading]=\"tableDatas?.loading\"\r\n  [nzBordered]=\"tableDatas?.bordered\"\r\n  [nzSize]=\"tableDatas?.size\"\r\n  [nzScroll]=\"tableDatas?.nzScroll\"\r\n  [nzPageSize]=\"tableDatas?.pageSize\"\r\n>\r\n  <!-- 头部区域 -->\r\n  <thead>\r\n    <tr>\r\n      <!-- 判断是否存在多选框----小格子 -->\r\n      <th\r\n        *ngIf=\"tableDatas?.checked\"\r\n        nzShowCheckbox\r\n        [(nzChecked)]=\"allChecked\"\r\n        (nzCheckedChange)=\"checkAll($event)\"\r\n      ></th>\r\n      <!-- 对表头进行循环渲染 -->\r\n      <th *ngFor=\"let th of tableDatas.dataTh; let i = index\">\r\n        {{ th.title }}\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <!-- 内容主体区域 -->\r\n  <tbody>\r\n    <!-- 对所有的数据进行循环 -->\r\n    <tr *ngFor=\"let data of basicTable.data; let i = index\">\r\n      <!-- 判断是否存在单选框 小空格 -->\r\n      <td\r\n        *ngIf=\"tableDatas?.checkedSingle\"\r\n        nzShowCheckbox\r\n        [(nzChecked)]=\"dataChecked[i].checked\"\r\n        (nzCheckedChange)=\"refreSingle(i)\"\r\n      ></td>\r\n      <!-- 判断是否存在多选框----小格子 -->\r\n      <td\r\n        *ngIf=\"tableDatas?.checked\"\r\n        nzShowCheckbox\r\n        [(nzChecked)]=\"dataChecked[i].checked\"\r\n        (nzCheckedChange)=\"refrehStatus(i)\"\r\n      ></td>\r\n\r\n      <!-- 内容区域 -->\r\n      <ng-container *ngFor=\"let tdItem of tableDatas?.tdItem; let i = index\">\r\n        <td>{{ data[(tdItem?.name)] }}</td>\r\n      </ng-container>\r\n      <!-- 判断开关是否存在 -->\r\n      <td *ngIf=\"tableDatas.switch\" style=\"text-align: center;\">\r\n        <nz-switch\r\n          [ngModel]=\"data[tableDatas.switchName]\"\r\n          nzUnCheckedChildren=\"关\"\r\n          nzCheckedChildren=\"开\"\r\n          (ngModelChange)=\"changeSwitch(data)\"\r\n        ></nz-switch>\r\n      </td>\r\n\r\n      <!-- 操作界面  增删改查 -->\r\n      <td>\r\n        <button nz-button nzType=\"primary\" (click)=\"edit(data)\" nzGhost>\r\n          编辑\r\n        </button>\r\n        <nz-divider nzType=\"vertical\"></nz-divider>\r\n        <button nz-button nzType=\"danger\" nzGhost (click)=\"deletedata(data)\">\r\n          删除\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>\r\n<!-- <nz-pagination\r\n  [(nzPageIndex)]=\"currentPage\"\r\n  [nzTotal]=\"tableDatas?.dataSet.length\"\r\n  (nzPageIndexChange)=\"refreshStatus()\"\r\n  [nzPageSize]=\"tableDatas?.pageSize\"\r\n>\r\n  <label>共{{ tableDatas?.dataSet.length }}条数据</label>\r\n</nz-pagination> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Basepagination/Basepagination.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Basepagination/Basepagination.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-pagination\r\n  [(nzPageIndex)]=\"currentPage\"\r\n  [nzTotal]=\"tableDatas?.dataSet.length\"\r\n  (nzPageIndexChange)=\"refreshStatus()\"\r\n  [nzPageSize]=\"tableDatas?.pageSize\"\r\n>\r\n  <label>共{{ tableDatas?.dataSet.length }}条数据</label></nz-pagination\r\n>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Breadcrumb/Breadcrumb.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Breadcrumb/Breadcrumb.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tags\">\r\n  <ul>\r\n    <li class=\"tags-li\" *ngFor=\"let item of breadcrumbs; let i = index\">\r\n      <a class=\"register\" :routerLink=\"{{ item.url }}\"\r\n        ><span class=\"tags-li-title \">{{ item.title }}</span>\r\n      </a>\r\n      <span class=\"tags-li-icon\" (click)=\"closeTags(i)\"\r\n        ><i nz-icon type=\"close\"></i\r\n      ></span>\r\n    </li>\r\n  </ul>\r\n  <div class=\"tags-close-box\">\r\n    <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n      标签选项\r\n      <i nz-icon nzType=\"down\"></i>\r\n    </a>\r\n    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n      <ul nz-menu nzSelectable>\r\n        <li nz-menu-item (click)=\"closeOther()\">关闭其他</li>\r\n        <li nz-menu-item (click)=\"closeAll()\">关闭所有</li>\r\n      </ul>\r\n    </nz-dropdown-menu>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/components/BaseModal/BaseModal.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/BaseModal/BaseModal.component.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmFzZU1vZGFsL0Jhc2VNb2RhbC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/components/BaseModal/BaseModal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/BaseModal/BaseModal.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModalComponent", function() { return BaseModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let BaseModalComponent = class BaseModalComponent {
    constructor(fb) {
        this.fb = fb;
        this.closeModel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Modalist = {
            formname: '',
            formxiangmu: '',
            formdaili: '',
            formquyu: '',
            formPeo: '',
            formtel: '',
            formhouse: '',
            zhuangtai: ''
        };
        this.TableModal = this.fb.group({
            formname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            formxiangmu: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            formdaili: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            formquyu: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            formPeo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            formtel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            formhouse: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            zhuangtai: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() { }
    ngOnChanges() {
        if (this.addData) {
            const data = this.addData;
            this.Modalist = JSON.parse(JSON.stringify(data));
        }
    }
    saveForm(e) {
        console.log(this.TableModal);
        // let Modata = {};
        // if (e) {
        //   Modata = {
        //     formname: e.formname || '',
        //     formxiangmu: e.formxiangmu || '',
        //     formdaili: e.formdaili || '',
        //     formquyu: e.formquyu || '',
        //     formPeo: e.formPeo || '',
        //     formtel: e.formtel || '',
        //     formhouse: e.formhouse || '',
        //     zhuangtai: e.zhuangtai || ''
        //   };
        // } else {
        //   Modata = {
        //     formname: '',
        //     formxiangmu: '',
        //     formdaili: '',
        //     formquyu: '',
        //     formPeo: '',
        //     formtel: '',
        //     formhouse: '',
        //     zhuangtai: ''
        //   };
        // }
        // this.addData = Modata;
        // this.TableModal.patchValue(Modata);
        // this.closeModel.emit(e);
        // console.log(this.addData);
    }
    editTb(e) {
        console.log(e);
    }
};
BaseModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BaseModalComponent.prototype, "addData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BaseModalComponent.prototype, "closeModel", void 0);
BaseModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./BaseModal1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/BaseModal/BaseModal1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./BaseModal.component.less */ "./src/app/components/BaseModal/BaseModal.component.less")).default]
    })
], BaseModalComponent);



/***/ }),

/***/ "./src/app/components/BaseSearch/BaseSearch.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/components/BaseSearch/BaseSearch.component.less ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmFzZVNlYXJjaC9CYXNlU2VhcmNoLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/components/BaseSearch/BaseSearch.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/BaseSearch/BaseSearch.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_coolStorage_cool_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/coolStorage/cool-local-storage */ "./src/app/common/coolStorage/cool-local-storage.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_common_httpClient_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/httpClient/http */ "./src/app/common/httpClient/http.ts");







// import _ from 'underscore';
let SearchComponent = class SearchComponent {
    constructor(fb, localStorage, httpClient, http) {
        this.fb = fb;
        this.localStorage = localStorage;
        this.httpClient = httpClient;
        this.http = http;
        this.closeDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ClientBApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ClientBApi;
        this.isLoadingSearch = false;
    }
    ngOnInit() {
        this.cityLocal();
        this.initForm();
    }
    submitForm() {
        let Regin = '';
        if (this.seachForm.value.Region !== '请选择城市') {
            Regin = this.seachForm.value.Region[1];
        }
        let req = {
            Name: this.seachForm.value.Name || '',
            Regin: Regin,
            pageIndex: 1
        };
        // this.queryProject(req);
    }
    // queryProject(reqdata?) {
    //   let req = _.extend(
    //     {
    //       PageIndex: 1,
    //       PageSize: 10
    //     },
    //     reqdata
    //   );
    // this.queryProjects(req, res => {
    // console.log(res);
    // this.dataSet = res.Items;
    // this.totalCount = res.TotalCount;
    // this.loading = false;
    // this.isLoadingSearch = false;
    // });
    // }
    // formGroup初始化
    initForm() {
        this.seachForm = this.fb.group({
            Name: [],
            Region: ['请选择城市']
        });
    }
    // 获取城市信息
    queryProjects(reqdata, callBack, errorBack) {
        this.http.post(reqdata, 'Host/Projects/QueryProjects', callBack, errorBack);
    }
    // 获取城市列表
    cityLocal() {
        let city = this.localStorage.getObject('city');
        this.nzOptions = this.formateCity(city);
    }
    formateCity(cityAll) {
        //省市区
        let province = [], city = [], area = [];
        //格式化后 省市区
        let fmCity = [];
        for (const key in cityAll) {
            const element = cityAll[key];
            //省
            if (key == '86') {
                //省
                province.push(element);
                for (const key in element) {
                    const _element = element[key];
                    let o = {
                        value: key,
                        label: _element,
                        number: key
                    };
                    fmCity.push(o);
                }
            }
            else {
                //市
                fmCity.forEach(item => {
                    if (key == item.number) {
                        let o;
                        item.children = [];
                        for (const _city in element) {
                            const _cityName = element[_city];
                            //市
                            city.push(element);
                            o = {
                                value: _city,
                                label: _cityName,
                                number: _city,
                                isLeaf: true
                            };
                            item.children.push(o);
                        }
                    }
                });
            }
        }
        return fmCity;
    }
    Delete() {
        this.closeDelete.emit();
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_common_coolStorage_cool_local_storage__WEBPACK_IMPORTED_MODULE_3__["CoolLocalStorage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: src_app_common_httpClient_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchComponent.prototype, "closeDelete", void 0);
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./BaseSearch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/BaseSearch/BaseSearch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./BaseSearch.component.less */ "./src/app/components/BaseSearch/BaseSearch.component.less")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/components/BaseTable/BaseTable.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/BaseTable/BaseTable.component.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmFzZVRhYmxlL0Jhc2VUYWJsZS5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/components/BaseTable/BaseTable.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/BaseTable/BaseTable.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTableComponent", function() { return BaseTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let BaseTableComponent = class BaseTableComponent {
    constructor(fb) {
        this.fb = fb;
        this.currentPage = 1;
        this.allChecked = false;
        this.dataChecked = [];
        // Output的数据流方向与input是相反的，所以那就是child控制parent的数据显示，input是parent控制child的数据显示。
        this.checked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkedSingle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.switch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.currentPage = this.tableDatas.pageIndex;
    }
    ngOnChanges() {
        this.dataChange();
    }
    refreshStatus() {
        this.page.emit(this.currentPage);
    }
    dataChange() {
        if (this.tableDatas.dataSet.length !== 0) {
            if (this.tableDatas.checked || this.tableDatas.checkedSingle) {
                this.dataChecked = [];
                const lth = this.tableDatas.dataSet.length;
                for (let i = 0; i < lth; i++) {
                    this.dataChecked.push({ checked: false, id: i });
                }
            }
        }
    }
    // 单选框系列的操作--------------------------
    checkAll(value) {
        this.dataChecked.forEach(e => {
            e.checked = !e.checked;
        });
        this.checkEmit();
    }
    checkEmit() {
        const ids = [];
        if (this.dataChecked.some(e => e.checked) === true) {
            this.dataChecked
                .filter(e => e.checked === true)
                .forEach(ie => {
                ids.push(this.tableDatas.dataSet[ie.id]);
            });
        }
        this.checked.emit(ids);
    }
    refreSingle(i) {
        this.dataChecked
            .filter(e => e.id !== i)
            .forEach(ie => (ie.checked = false));
        this.checkedSingle.emit(i);
    }
    refrehStatus(i) {
        this.allChecked = this.dataChecked.every(e => e.checked === true);
        this.checkEmit();
        this.dataChange();
    }
    // 状态开关
    changeSwitch(e) {
        console.log(e);
    }
    edit(data) {
        this.editData.emit(data);
    }
    deletedata(data) {
        const data1 = this.tableDatas.dataSet.filter(item => {
            return item._id != data._id;
        });
        this.tableDatas.dataSet = data1;
    }
};
BaseTableComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BaseTableComponent.prototype, "tableDatas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BaseTableComponent.prototype, "checked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BaseTableComponent.prototype, "checkedSingle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BaseTableComponent.prototype, "switch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BaseTableComponent.prototype, "delete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BaseTableComponent.prototype, "editData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BaseTableComponent.prototype, "page", void 0);
BaseTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./BaseTable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/BaseTable/BaseTable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./BaseTable.component.less */ "./src/app/components/BaseTable/BaseTable.component.less")).default]
    })
], BaseTableComponent);



/***/ }),

/***/ "./src/app/components/Basepagination/Basepagination.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/Basepagination/Basepagination.component.less ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmFzZXBhZ2luYXRpb24vQmFzZXBhZ2luYXRpb24uY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/components/Basepagination/Basepagination.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/Basepagination/Basepagination.component.ts ***!
  \***********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pageIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentPage = 1;
    }
    ngOnInit() {
        console.log(this.tableDatas);
        this.currentPage = this.tableDatas.pageIndex;
    }
    refreshStatus() {
        this.pageIndex.emit(this.currentPage);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "tableDatas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginationComponent.prototype, "pageIndex", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Basepagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Basepagination/Basepagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Basepagination.component.less */ "./src/app/components/Basepagination/Basepagination.component.less")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/components/Breadcrumb/Breadcrumb.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/components/Breadcrumb/Breadcrumb.component.less ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul,\nli,\nol,\nmenu {\n  list-style: none;\n}\n.tags {\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 5px 10px #ddd;\n}\n.tags ul {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n.tags-li {\n  float: left;\n  margin: 5px 5px;\n  border-radius: 3px;\n  font-size: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  height: 35px;\n  line-height: 35px;\n  border: 1px solid #e9eaec;\n  background: #fff;\n  padding: 0 5px 0 12px;\n  vertical-align: middle;\n  color: #666;\n  transition: all 0.3s ease-in;\n}\n.tags-li:not(.active):hover {\n  background: #8cf3f3;\n}\n.tags-li.active {\n  color: #fff;\n}\n.tags-li-title {\n  float: left;\n  max-width: 80px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-right: 5px;\n  color: #666;\n}\n.tags-li.active .tags-li-title {\n  color: #fff;\n}\n.tags-close-box {\n  position: absolute;\n  right: 35px;\n  top: 7px;\n  width: 110px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  background: #3c8dbc;\n  border-radius: 5px;\n  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  box-sizing: border-box;\n}\n.tags-li-icon {\n  position: relative;\n  top: 0px;\n}\n.tags-close-box a {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9CcmVhZGNydW1iL0Q6L2dpdGh1Yi9GTE1fYWRtaW4vc3JjL2FwcC9jb21wb25lbnRzL0JyZWFkY3J1bWIvQnJlYWRjcnVtYi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9CcmVhZGNydW1iL0JyZWFkY3J1bWIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRSxnQkFBQTtBQ0NGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ0NGO0FERUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7QURFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBR0EsNEJBQUE7QUNBRjtBREdBO0VBQ0UsbUJBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRE9BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDTEY7QURPQTtFQUNFLFdBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQnJlYWRjcnVtYi9CcmVhZGNydW1iLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsidWwsXG5saSxcbm9sLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4udGFncyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAjZGRkO1xufVxuXG4udGFncyB1bCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udGFncy1saSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVhZWM7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDAgNXB4IDAgMTJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICM2NjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufVxuXG4udGFncy1saTpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjOGNmM2YzO1xufVxuXG4udGFncy1saS5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRhZ3MtbGktdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4udGFncy1saS5hY3RpdmUgLnRhZ3MtbGktdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRhZ3MtY2xvc2UtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgdG9wOiA3cHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjM2M4ZGJjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IC0zcHggMCAxNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnRhZ3MtbGktaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG59XG4udGFncy1jbG9zZS1ib3ggYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuIiwidWwsXG5saSxcbm9sLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4udGFncyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAjZGRkO1xufVxuLnRhZ3MgdWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnRhZ3MtbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllYWVjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwIDVweCAwIDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjNjY2O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbn1cbi50YWdzLWxpOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM4Y2YzZjM7XG59XG4udGFncy1saS5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi50YWdzLWxpLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1heC13aWR0aDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi50YWdzLWxpLmFjdGl2ZSAudGFncy1saS10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnRhZ3MtY2xvc2UtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgdG9wOiA3cHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjM2M4ZGJjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IC0zcHggMCAxNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnRhZ3MtbGktaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG59XG4udGFncy1jbG9zZS1ib3ggYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/Breadcrumb/Breadcrumb.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/Breadcrumb/Breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PageHeaderComponent = class PageHeaderComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.breadcrumbs = [];
    }
    ngOnInit() {
        const data = this.activatedRoute.snapshot.data;
        const url = {
            url: this.router.url
        };
        this.setTags(this.routeassign(url, data));
    }
    setTags(route) {
        const breadcrumbListdata = sessionStorage.getItem('breadcrumbList');
        const breadcrumbList = JSON.parse(breadcrumbListdata);
        if (breadcrumbList) {
            if (this.breadcrumbs.length == 0) {
                this.breadcrumbs = breadcrumbList;
            }
            const isExist = this.breadcrumbs.some(item => {
                return item.url === this.router.url;
            });
            // 当页面的url  != 得到的数据url 执行
            if (!isExist) {
                if (this.breadcrumbs.length >= 8) {
                    this.breadcrumbs.shift();
                }
                const data = this.activatedRoute.snapshot.data;
                const url = {
                    url: this.router.url
                };
                const route = this.routeassign(url, data);
                this.breadcrumbs.push({
                    title: route.title,
                    url: route.url
                });
                sessionStorage.setItem('breadcrumbList', JSON.stringify(this.breadcrumbs));
            }
        }
        else {
            // 第一次进来面板屑为空时
            if (this.breadcrumbs.length == 0) {
                const resetItem = [];
                resetItem.push({
                    title: route.title,
                    url: route.url
                });
                this.breadcrumbs = resetItem;
                sessionStorage.setItem('breadcrumbList', JSON.stringify(resetItem));
            }
            else {
                return;
            }
        }
    }
    routeassign(url, data) {
        return Object.assign({}, url, data);
    }
    /**
     *
     * delItem  被删除的数据
     * item   删除数据的前一项
     */
    closeTags(index) {
        const delItem = this.breadcrumbs.splice(index, 1)[0];
        const item = this.breadcrumbs[index]
            ? this.breadcrumbs[index]
            : this.breadcrumbs[index - 1];
        if (item) {
            // 如果被删除数据和当前项url一致, 则进行路由跳转
            if (delItem.url === this.router.url) {
                // 路由跳转到数据前一项
                this.router.navigate([item.url]);
            }
            const listdata = this.breadcrumbs.filter((item, idx) => {
                return idx !== index;
            });
            sessionStorage.clear();
            sessionStorage.setItem('breadcrumbList', JSON.stringify(listdata));
        }
        else {
            this.breadcrumbs = [
                {
                    title: '楼盘管理',
                    url: '/workspace/houseManage/'
                }
            ];
            this.router.navigate(['/workspace/houseManage/index']);
        }
    }
    closeOther() {
        const curitem = this.breadcrumbs.filter(item => {
            return item.url === this.router.url;
        });
        this.breadcrumbs = JSON.parse(JSON.stringify(curitem));
        sessionStorage.clear();
        sessionStorage.setItem('breadcrumbList', JSON.stringify(this.breadcrumbs));
    }
    closeAll() {
        this.breadcrumbs = [
            {
                title: '楼盘管理',
                url: '/workspace/houseManage/'
            }
        ];
        sessionStorage.clear();
        this.router.navigate(['/workspace/houseManage/']);
    }
};
PageHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Breadcrumb/Breadcrumb.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Breadcrumb.component.less */ "./src/app/components/Breadcrumb/Breadcrumb.component.less")).default]
    })
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/components/shared.module.ts":
/*!*********************************************!*\
  !*** ./src/app/components/shared.module.ts ***!
  \*********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _Breadcrumb_Breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Breadcrumb/Breadcrumb.component */ "./src/app/components/Breadcrumb/Breadcrumb.component.ts");
/* harmony import */ var _BaseTable_BaseTable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BaseTable/BaseTable.component */ "./src/app/components/BaseTable/BaseTable.component.ts");
/* harmony import */ var _BaseModal_BaseModal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseModal/BaseModal.component */ "./src/app/components/BaseModal/BaseModal.component.ts");
/* harmony import */ var _Basepagination_Basepagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Basepagination/Basepagination.component */ "./src/app/components/Basepagination/Basepagination.component.ts");
/* harmony import */ var _BaseSearch_BaseSearch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BaseSearch/BaseSearch.component */ "./src/app/components/BaseSearch/BaseSearch.component.ts");
/* harmony import */ var src_app_common_common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/common.component */ "./src/app/common/common.component.ts");






// 所有的子组件





// 配置公共组件

const COMPONENTS = [
    _Breadcrumb_Breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"],
    _BaseTable_BaseTable_component__WEBPACK_IMPORTED_MODULE_7__["BaseTableComponent"],
    _BaseModal_BaseModal_component__WEBPACK_IMPORTED_MODULE_8__["BaseModalComponent"],
    _Basepagination_Basepagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"],
    _BaseSearch_BaseSearch_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
];
const SHAREDS = [
    src_app_common_common_component__WEBPACK_IMPORTED_MODULE_11__["CommonCoModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]
];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [...SHAREDS],
        declarations: [...COMPONENTS],
        exports: [...COMPONENTS, ...SHAREDS]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=default~Activity-Activity-module~Myuser-Myuser-module~Operate-Operate-module~adminstrators-adminstra~8b1c7207-es2015.js.map