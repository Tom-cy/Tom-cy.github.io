(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Myuser-Myuser-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Myuser/Avatar/Avatar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Myuser/Avatar/Avatar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb></app-breadcrumb>\r\n<div>\r\n  <!-- <div class=\"avaimg\">\r\n    <img [src]=\"avatarUrl\" alt=\"\" sizes=\"\" srcset=\"\" />\r\n  </div> -->\r\n\r\n  <!-- <div>\r\n    选择文件(可多选):\r\n    <input type=\"file\" id=\"f1\" multiple /><br /><br />\r\n    <button type=\"button\" id=\"btn-submit\">上 传</button>\r\n  </div> -->\r\n\r\n  <nz-upload\r\n    class=\"avatar-uploader\"\r\n    nzAction=\"https://jsonplaceholder.typicode.com/posts/\"\r\n    nzName=\"avatar\"\r\n    nzListType=\"picture-card\"\r\n    [nzShowUploadList]=\"false\"\r\n    [nzBeforeUpload]=\"beforeUpload\"\r\n    (nzChange)=\"handleChange($event)\"\r\n  >\r\n    <ng-container *ngIf=\"!avatarUrl\">\r\n      <i\r\n        class=\"upload-icon\"\r\n        nz-icon\r\n        [nzType]=\"loading ? 'loading' : 'plus'\"\r\n      ></i>\r\n      <div class=\"ant-upload-text\">Upload</div>\r\n    </ng-container>\r\n    <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\" />\r\n  </nz-upload>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/Myuser/Avatar/Avatar.component.less":
/*!***********************************************************!*\
  !*** ./src/app/pages/Myuser/Avatar/Avatar.component.less ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avaimg {\n  margin: 50px;\n  width: 150px;\n  height: 150px;\n}\n.avaimg img {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n.avatar {\n  width: 128px;\n  height: 128px;\n}\n.upload-icon {\n  font-size: 32px;\n  color: #999;\n}\n.ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvTXl1c2VyL0F2YXRhci9EOi9naXRodWIvRkxNX2FkbWluL3NyYy9hcHAvcGFnZXMvTXl1c2VyL0F2YXRhci9BdmF0YXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL015dXNlci9BdmF0YXIvQXZhdGFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNGLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBRjtBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNBRjtBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL015dXNlci9BdmF0YXIvQXZhdGFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YWltZyB7XG4gICAgbWFyZ2luOiA1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uYXZhaW1nIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cbi51cGxvYWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICM5OTk7XG59XG4uYW50LXVwbG9hZC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzY2Njtcbn0iLCIuYXZhaW1nIHtcbiAgbWFyZ2luOiA1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uYXZhaW1nIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hdmF0YXIge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG59XG4udXBsb2FkLWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuLmFudC11cGxvYWQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6ICM2NjY7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/Myuser/Avatar/Avatar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/Myuser/Avatar/Avatar.component.ts ***!
  \*********************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AvatarComponent = class AvatarComponent {
    constructor(msg) {
        this.msg = msg;
        this.loading = false;
        this.beforeUpload = (file) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
                const isJPG = file.type !== 'image/bmp	';
                if (!isJPG) {
                    this.msg.error('You can   upload any file  except bmp!');
                    observer.complete();
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.msg.error('Image must smaller than 2MB!');
                    observer.complete();
                    return;
                }
                // check height
                this.checkImageDimension(file).then(dimensionRes => {
                    if (!dimensionRes) {
                        this.msg.error('Image only 600x600 above');
                        observer.complete();
                        return;
                    }
                    observer.next(isJPG && isLt2M && dimensionRes);
                    observer.complete();
                });
            });
        };
    }
    ngOnInit() { }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result.toString()));
        reader.readAsDataURL(img);
    }
    checkImageDimension(file) {
        return new Promise(resolve => {
            const img = new Image(); // create image
            img.src = window.URL.createObjectURL(file);
            img.onload = () => {
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                window.URL.revokeObjectURL(img.src);
                console.log(width);
                console.log(height);
                console.log(width === height && width >= 600);
                resolve(width === height && width >= 600);
            };
        });
    }
    handleChange(info) {
        console.log(info);
        switch (info.file.status) {
            case 'uploading':
                this.loading = true;
                break;
            case 'done':
                // Get this url from response in real world.
                this.getBase64(info.file.originFileObj, (img) => {
                    this.loading = false;
                    this.avatarUrl = img;
                });
                break;
            case 'error':
                this.msg.error('Network error');
                this.loading = false;
                break;
        }
    }
};
AvatarComponent.ctorParameters = () => [
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
];
AvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-avatar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Avatar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Myuser/Avatar/Avatar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Avatar.component.less */ "./src/app/pages/Myuser/Avatar/Avatar.component.less")).default]
    })
], AvatarComponent);



/***/ }),

/***/ "./src/app/pages/Myuser/Myuser-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/Myuser/Myuser-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MyUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyUserRoutingModule", function() { return MyUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Avatar_Avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Avatar/Avatar.component */ "./src/app/pages/Myuser/Avatar/Avatar.component.ts");




const routes = [
    {
        path: '',
        redirectTo: 'avatar',
        pathMatch: 'full'
    },
    {
        path: 'avatar',
        data: {
            title: '设置头像'
        },
        component: _Avatar_Avatar_component__WEBPACK_IMPORTED_MODULE_3__["AvatarComponent"]
    }
];
let MyUserRoutingModule = class MyUserRoutingModule {
};
MyUserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MyUserRoutingModule);



/***/ }),

/***/ "./src/app/pages/Myuser/Myuser.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/Myuser/Myuser.module.ts ***!
  \***********************************************/
/*! exports provided: MyuserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyuserModule", function() { return MyuserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _Myuser_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Myuser-routing.module */ "./src/app/pages/Myuser/Myuser-routing.module.ts");
/* harmony import */ var _Avatar_Avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Avatar/Avatar.component */ "./src/app/pages/Myuser/Avatar/Avatar.component.ts");
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared.module */ "./src/app/components/shared.module.ts");



// 注册当前路由

// 导入子页面组件

// 引入面包屑

let MyuserModule = class MyuserModule {
};
MyuserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_Avatar_Avatar_component__WEBPACK_IMPORTED_MODULE_4__["AvatarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [_Myuser_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyUserRoutingModule"]],
        providers: []
    })
], MyuserModule);



/***/ })

}]);
//# sourceMappingURL=Myuser-Myuser-module-es2015.js.map