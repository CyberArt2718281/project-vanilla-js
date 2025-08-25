/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width: 1024px) {
  .main-header {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .main-header {
    display: none;
  }
}
@media screen and (max-width: 993px) {
  .main-header {
    display: block;
  }
  .wrapper .content-wrapper {
    padding-top: 44px !important;
  }
}
@media screen and (max-width: 560px) {
  .wrapper .content-wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 20px !important;
  }
}
body {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.title {
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #052C65;
}

.wrapper .main-sidebar {
  border-right: 1px solid #D9D9D9;
  width: 219px;
  background: #FFFFFF;
}
.wrapper .main-sidebar .sidebar {
  position: relative;
  padding: 0;
}
.wrapper .main-sidebar .logo img {
  padding: 40px 71px 20px 50px;
  border-bottom: 1px solid #D9D9D9;
  margin-bottom: 60px;
}
.wrapper .main-sidebar .nav {
  padding-left: 20px;
  font-weight: 400;
  font-size: 14px;
  width: 178px;
}
.wrapper .main-sidebar .nav .nav-item {
  width: 178px;
}
.wrapper .main-sidebar .nav .nav-item .nav-link {
  margin: 0;
  gap: 10px;
  width: 178px;
  border-radius: 5px;
  padding: 12px 16px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  color: #052c65;
  transition: all 0.2s;
}
.wrapper .main-sidebar .nav .nav-item .nav-link p {
  white-space: nowrap;
}
.wrapper .main-sidebar .nav .nav-item .nav-link:hover {
  gap: 10px;
  box-shadow: none;
  color: #fff !important;
  background: #0d6efd;
}
.wrapper .main-sidebar .nav .nav-item .nav-link:hover svg path {
  fill: #fff;
}
.wrapper .main-sidebar .nav .nav-item .nav-link:hover p {
  color: #fff !important;
}
.wrapper .main-sidebar .nav .nav-item .active {
  gap: 10px;
  box-shadow: none;
  color: #fff !important;
  background: #0d6efd;
}
.wrapper .main-sidebar .nav .nav-item .active svg path {
  fill: #fff;
}
.wrapper .main-sidebar .nav .nav-item .active p {
  color: #fff !important;
}
.wrapper .main-sidebar .nav .nav-item .nav-link-disabled {
  white-space: nowrap;
  gap: 10px;
  transition: all 0.2s;
  width: 100%;
  padding: 12px 16px;
  border-radius: 5px;
}
.wrapper .main-sidebar .nav .nav-item .nav-link-disabled p {
  color: #052c65;
  margin: 0;
}
.wrapper .main-sidebar .nav .nav-item .nav-link-select {
  white-space: nowrap;
  gap: 10px;
  transition: all 0.2s;
  width: 100%;
  padding: 12px 16px;
  border-radius: 5px 5px 0 0;
}
.wrapper .main-sidebar .nav .nav-item .nav-link-select p {
  color: #052c65;
  margin: 0;
}
.wrapper .main-sidebar .nav .nav-item .menu-select {
  border-radius: 5px 5px 0 0;
  border-bottom: 0;
  transition: all 0.2s;
}
.wrapper .main-sidebar .nav .nav-item .menu-select.active svg {
  transform: rotate(90deg);
}
.wrapper .main-sidebar .nav .nav-item .menu-collapse {
  border-radius: 0 0 5px 5px;
  border: 1px solid #0d6efd;
}
.wrapper .main-sidebar .nav .nav-item .menu-collapse .active-select {
  background: #0d6efd;
  border-radius: 0 0 0 0;
  color: #fff !important;
}
.wrapper .main-sidebar .nav .nav-item .menu-collapse .menu-collapse-link {
  display: block;
  transition: all 0.2s;
  color: #0d6efd;
  padding: 12px 16px;
}
.wrapper .main-sidebar .nav .nav-item .menu-collapse .menu-collapse-link:not(:last-child) {
  border-bottom: 1px solid #0d6efd;
}
.wrapper .main-sidebar .nav .nav-item .menu-collapse .menu-collapse-link:hover {
  background: #0d6efd;
  border-radius: 0 0 0 0;
  color: #fff !important;
}
.wrapper .main-sidebar .user-panel {
  padding-right: 20px;
  padding-left: 20px;
}
.wrapper .main-sidebar .user-panel .row {
  position: absolute;
  width: 226px;
  top: 41px;
  height: 1px;
  background: #D9D9D9;
  left: 0;
}
.wrapper .main-sidebar .user-panel .balance {
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 20px;
  gap: 10px;
  color: #052c65;
}
.wrapper .main-sidebar .user-panel .balance strong {
  color: #0d6efd;
}
.wrapper .main-sidebar .user-panel .info {
  font-weight: 400;
  font-size: 14px;
  padding-bottom: 40px;
  padding-left: 0;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  align-items: center;
}
.wrapper .main-sidebar .user-panel .info .info-circle {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
.wrapper .main-sidebar .user-panel .info .info-circle .profile-user {
  color: #6C757D;
  width: 16px;
  height: 16px;
}
.wrapper .content-wrapper {
  padding: 100px 94px 0 29px;
}`, "",{"version":3,"sources":["webpack://./src/styles/adaptive.scss","webpack://./src/styles/common.scss","webpack://./src/styles/variables/variables.scss","webpack://./src/styles/mix/mix.scss"],"names":[],"mappings":"AAAA;EAEE;IACE,aAAA;ECCF;AACF;ADEA;EAEE;IACE,aAAA;ECDF;AACF;ADKA;EAEE;IACE,cAAA;ECJF;EDQE;IACE,4BAAA;ECNJ;AACF;ADYA;EAEI;IACE,aAAA;IACA,uBAAA;IACA,qBAAA;IACA,mBAAA;IACA,wBAAA;ECXJ;AACF;AAvBA;EACE,iCCJY;EDKZ,sBAAA;EACA,UAAA;EACA,SAAA;AAyBF;;AAtBA;EELE,gBAAA;EFQA,eAAA;EACA,iBAAA;EACA,cCTiB;ADiCnB;;AAnBE;EACE,+BAAA;EAKA,YAAA;EACA,mBAAA;AAkBJ;AAvBI;EACE,kBAAA;EACA,UAAA;AAyBN;AAnBM;EACE,4BAAA;EACA,gCAAA;EACA,mBAAA;AAqBR;AAhBI;EACE,kBAAA;EE/BJ,gBAAA;EFiCI,eAAA;EACA,YAAA;AAkBN;AAhBM;EACE,YAAA;AAkBR;AAhBQ;EACE,SAAA;EACA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EElDR,2CAAA;EFoDQ,cC/CG;EDgDH,oBAAA;AAkBV;AAhBU;EACE,mBAAA;AAkBZ;AAdQ;EASE,SAAA;EAEA,gBAAA;EACA,sBAAA;EACA,mBCvEQ;AD8ElB;AAnBU;EACE,UCxDJ;AD6ER;AAlBU;EACE,sBAAA;AAoBZ;AAVQ;EASE,SAAA;EAEA,gBAAA;EACA,sBAAA;EACA,mBCvFQ;AD0FlB;AAfU;EACE,UCxEJ;ADyFR;AAdU;EACE,sBAAA;AAgBZ;AANQ;EACE,mBAAA;EACA,SAAA;EACA,oBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;AAQV;AAPU;EACE,cC/FC;EDgGD,SAAA;AASZ;AANQ;EACE,mBAAA;EACA,SAAA;EACA,oBAAA;EACA,WAAA;EACA,kBAAA;EACA,0BAAA;AAQV;AANU;EACE,cC5GC;ED6GD,SAAA;AAQZ;AAJQ;EACE,0BAAA;EACA,gBAAA;EACA,oBAAA;AAMV;AAFU;EACE,wBAAA;AAIZ;AAAQ;EACE,0BAAA;EACA,yBAAA;AAEV;AAAU;EAEE,mBCtIM;EDuIN,sBAAA;EAEA,sBAAA;AAAZ;AAKU;EACE,cAAA;EACA,oBAAA;EACA,cCjJM;EDmJN,kBAAA;AAJZ;AAMY;EAEE,gCAAA;AALd;AASU;EACE,mBC5JM;ED6JN,sBAAA;EAEA,sBAAA;AARZ;AAiBI;EACE,mBAAA;EACA,kBAAA;AAfN;AAiBM;EAEE,kBAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,mBAAA;EACA,OAAA;AAhBR;AAmBM;EErLJ,gBAAA;EFuLM,eAAA;EACA,oBAAA;EACA,SAAA;EACA,cC5LK;AD2Kb;AAmBQ;EACE,cC9LQ;AD6KlB;AAqBM;EE9LJ,gBAAA;EFgMM,eAAA;EACA,oBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AAnBR;AAqBQ;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mBCnNG;EDoNH,aAAA;EACA,uBAAA;EACA,mBAAA;EErNR,2CAAA;AFmMF;AAqBU;EACE,cCzNJ;ED0NI,WAAA;EACA,YAAA;AAnBZ;AA8BE;EACE,0BAAA;AA5BJ","sourcesContent":["@media screen and (min-width: 1024px) {\r\n\r\n  .main-header {\r\n    display: none\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n\r\n  .main-header {\r\n    display: none\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 993px) {\r\n\r\n  .main-header {\r\n    display: block\r\n  }\r\n\r\n  .wrapper {\r\n    .content-wrapper {\r\n      padding-top: 44px !important;\r\n    }\r\n  }\r\n\r\n\r\n}\r\n\r\n@media screen and (max-width: 560px) {\r\n  .wrapper {\r\n    .content-wrapper {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      align-items: center;\r\n      padding: 20px !important;\r\n    }\r\n  }\r\n}","@use \"adaptive.scss\";\r\n@use \"variables/variables.scss\" as vars;\r\n@use \"mix/mix.scss\" as mix;\r\n\r\nbody {\r\n  font-family: vars.$font-roboto;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.title {\r\n  @include mix.font-bold;\r\n\r\n  font-size: 40px;\r\n  line-height: 47px;\r\n  color: vars.$background-title;\r\n}\r\n\r\n.wrapper {\r\n\r\n  .main-sidebar {\r\n    border-right: 1px solid vars.$background;\r\n    .sidebar {\r\n      position: relative;\r\n      padding: 0;\r\n    }\r\n    width: 219px;\r\n    background: #FFFFFF;\r\n\r\n    .logo {\r\n      img{\r\n        padding: 40px 71px 20px 50px;\r\n        border-bottom: 1px solid vars.$background;\r\n        margin-bottom: 60px;\r\n      }\r\n\r\n    }\r\n\r\n    .nav {\r\n      padding-left: 20px;\r\n      @include mix.font-regular;\r\n      font-size: 14px;\r\n      width: 178px;\r\n\r\n      .nav-item {\r\n        width: 178px;\r\n\r\n        .nav-link {\r\n          margin:0;\r\n          gap: 10px;\r\n          width: 178px;\r\n          border-radius: 5px;\r\n          padding: 12px 16px;\r\n          @include mix.box-shadow;\r\n          color: vars.$color-link;\r\n          transition: all .2s;\r\n\r\n          p {\r\n            white-space: nowrap;\r\n          }\r\n        }\r\n\r\n        .nav-link:hover {\r\n          svg path {\r\n            fill: vars.$white\r\n          }\r\n\r\n          p {\r\n            color: vars.$white !important;\r\n          }\r\n\r\n          gap: 10px;\r\n\r\n          box-shadow: none;\r\n          color: vars.$white !important;\r\n          background: vars.$background-link;\r\n        }\r\n\r\n        .active {\r\n          svg path {\r\n            fill: vars.$white\r\n          }\r\n\r\n          p {\r\n            color: vars.$white !important;\r\n          }\r\n\r\n          gap: 10px;\r\n\r\n          box-shadow: none;\r\n          color: vars.$white !important;\r\n          background: vars.$background-link;\r\n        }\r\n\r\n        .nav-link-disabled{\r\n          white-space: nowrap;\r\n          gap: 10px;\r\n          transition: all .2s;\r\n          width: 100%;\r\n          padding: 12px 16px;\r\n          border-radius: 5px;\r\n          p {\r\n            color: vars.$color-link;\r\n            margin: 0;\r\n          }\r\n        }\r\n        .nav-link-select {\r\n          white-space: nowrap;\r\n          gap: 10px;\r\n          transition: all .2s;\r\n          width: 100%;\r\n          padding: 12px 16px;\r\n          border-radius: 5px 5px 0 0;\r\n\r\n          p {\r\n            color: vars.$color-link;\r\n            margin: 0;\r\n          }\r\n        }\r\n\r\n        .menu-select {\r\n          border-radius: 5px 5px 0 0;\r\n          border-bottom: 0;\r\n          transition: all .2s;\r\n        }\r\n\r\n        .menu-select.active{\r\n          svg{\r\n            transform: rotate(90deg);\r\n          }\r\n        }\r\n\r\n        .menu-collapse {\r\n          border-radius: 0 0 5px 5px;\r\n          border: 1px solid vars.$background-link;\r\n\r\n          .active-select {\r\n\r\n            background: vars.$background-link;\r\n            border-radius: 0 0 0 0;\r\n\r\n            color: vars.$white !important;\r\n\r\n\r\n          }\r\n\r\n          .menu-collapse-link {\r\n            display: block;\r\n            transition: all .2s;\r\n            color: vars.$background-link;\r\n\r\n            padding: 12px 16px;\r\n\r\n            &:not(:last-child) {\r\n\r\n              border-bottom: 1px solid vars.$background-link;\r\n            }\r\n          }\r\n\r\n          .menu-collapse-link:hover {\r\n            background: vars.$background-link;\r\n            border-radius: 0 0 0 0;\r\n\r\n            color: vars.$white !important;\r\n          }\r\n\r\n        }\r\n      }\r\n\r\n\r\n    }\r\n\r\n    .user-panel {\r\n      padding-right: 20px;\r\n      padding-left: 20px;\r\n\r\n      .row {\r\n\r\n        position: absolute;\r\n        width: 226px;\r\n        top: 41px;\r\n        height: 1px;\r\n        background: #D9D9D9;\r\n        left: 0;\r\n      }\r\n\r\n      .balance, {\r\n        @include mix.font-bold;\r\n        font-size: 14px;\r\n        padding-bottom: 20px;\r\n        gap: 10px;\r\n        color: vars.$color-bold;\r\n\r\n        strong {\r\n          color: vars.$background-link\r\n        }\r\n      }\r\n\r\n      .info {\r\n        @include mix.font-regular;\r\n        font-size: 14px;\r\n        padding-bottom: 40px;\r\n        padding-left: 0;\r\n        margin-top: 20px;\r\n        display: flex;\r\n        gap: 16px;\r\n        align-items: center;\r\n\r\n        .info-circle {\r\n          border-radius: 50%;\r\n          width: 36px;\r\n          height: 36px;\r\n          background: vars.$background;\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          @include mix.box-shadow;\r\n\r\n          .profile-user {\r\n            color: vars.$color;\r\n            width: 16px;\r\n            height: 16px;\r\n          }\r\n\r\n        }\r\n      }\r\n\r\n    }\r\n\r\n\r\n  }\r\n\r\n  .content-wrapper {\r\n    padding: 100px 94px 0 29px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n","@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');\r\n$font-roboto: 'Roboto', sans-serif;\r\n$background: #D9D9D9;\r\n$color: #6C757D;\r\n$color-bold: #052c65;\r\n$background-link: #0d6efd;\r\n\r\n$background-title: #052C65;\r\n$color-link: #052c65;\r\n$white: #fff;\r\n$date-color: #6C757D;\r\n$black: #000;\r\n$chart-color: #290661;\r\n$background-form: #e9ecef;\r\n$border-color-form: #ced4da;\r\n$color-input: #6c757d;\r\n$background-hover-btn: #0a57bf;\r\n\r\n\r\n\r\n","@use \"../variables/variables\" as vars;\r\n\r\n@mixin box-shadow{\r\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n@mixin font-bold{\r\n  font-weight: 500;\r\n}\r\n@mixin font-regular{\r\n  font-weight: 400;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* binding */ Main)
/* harmony export */ });
class Main {
  constructor(openNewRoute) {
    this.openNewRoute = openNewRoute;
    this.pieChartCanvas = $('#donutChart').get(0).getContext('2d');
    this.pieChartCanvas2 = $('#donutChart2').get(0).getContext('2d');
    const pieData = {
      labels: ['Chrome', 'IE', 'FireFox', 'Safari', 'Opera', 'Navigator'],
      datasets: [{
        data: [700, 500, 400, 600, 300, 100],
        backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de']
      }]
    };
    const pieOptions = {
      maintainAspectRatio: false,
      responsive: true
    };
    new Chart(this.pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });
    new Chart(this.pieChartCanvas2, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });
  }
}

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const host = "http://localhost:3000";
const config = {
  host: host,
  api: host + `/api/`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _utils_file_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/file-utils */ "./src/utils/file-utils.js");
/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/auth-utils */ "./src/utils/auth-utils.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _utils_activateUi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/activateUi */ "./src/utils/activateUi.js");




class Router {
  constructor() {
    this.initEvents();
    this.titlePageElement = document.getElementById('title');
    this.contentPageElement = document.getElementById('content');
    this.adminLteStylesheetElement = document.getElementById('admin-lte-style');
    this.userName = null;
    this.routes = [{
      route: '/',
      title: 'Главная',
      filepathTemplate: '/templates/pages/main.html',
      useLayout: '/templates/layout.html',
      load: () => {
        new _components_main__WEBPACK_IMPORTED_MODULE_2__.Main(this.openNewRoute.bind(this));
      },
      styles: ['main.css'],
      scripts: ['Chart.min.js']
    }, {
      route: '/income',
      title: 'Доходы',
      filepathTemplate: '/templates/pages/income/income.html',
      useLayout: '/templates/layout.html',
      load: () => {
        // new Dashboard(this.openNewRoute.bind(this))
      }
    }, {
      route: '/expenses',
      title: 'Расходы',
      filepathTemplate: '/templates/pages/expenses/expenses.html',
      useLayout: '/templates/layout.html',
      load: () => {
        // new Dashboard(this.openNewRoute.bind(this))
      }
    }, {
      route: '/income-expenses',
      title: 'Доходы и Расходы',
      filepathTemplate: '/templates/pages/income-expenses/income-expenses.html',
      useLayout: '/templates/layout.html',
      load: () => {
        // new Dashboard(this.openNewRoute.bind(this))
      }
    }, {
      route: '/404',
      title: 'Страница не найдена',
      useLayout: false,
      filepathTemplate: '/templates/pages/404.html',
      styles: ['error-page.css']
    }, {
      route: '/login',
      title: 'Авторизация',
      filepathTemplate: '/templates/pages/auth/login.html',
      useLayout: false,
      load: () => {
        // new Login(this.openNewRoute.bind(this))
      },
      styles: ['form.css']
    }, {
      route: '/sign-up',
      title: 'Регистрация',
      useLayout: false,
      filepathTemplate: '/templates/pages/auth/sign-up.html',
      load: () => {
        // new SignUp(this.openNewRoute.bind(this))
      },
      unload: () => {},
      styles: ['form.css']
    }, {
      route: '/logout',
      load: () => {
        // new Logout(this.openNewRoute.bind(this))
      }
    }];
  }
  initEvents() {
    window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this)); // при загрузке контента у нас будет срабатывать функция activateRoute
    window.addEventListener('popstate', this.activateRoute.bind(this)); // отлов событий когда у нас изменился url
    document.addEventListener('click', this.clickHandler.bind(this));
  }
  async openNewRoute(url) {
    const currentRoute = window.location.pathname;
    history.pushState({}, '', url);
    await this.activateRoute(null, currentRoute);
  }
  async clickHandler(e) {
    let element = null;
    if (e.target.nodeName === 'A') {
      element = e.target;
    } else if (e.target.parentNode.nodeName === 'A') {
      element = e.target.parentNode;
    }
    if (element) {
      e.preventDefault();
      const currentRoute = window.location.pathname;
      const url = element.href.replace(window.location.origin, '');
      if (!url || currentRoute === url.replace('#', '') || url.startsWith('javascript:void(0)')) {
        return;
      }
      this.closeMobileSidebar();
      await this.openNewRoute(url);
    }
  }
  closeMobileSidebar() {
    if (window.innerWidth < 992) {
      // Mobile breakpoint
      const body = document.querySelector('body');
      const sidebar = document.querySelector('.main-sidebar');
      const overlay = document.querySelector('.sidebar-overlay');

      // Закрываем sidebar
      if (sidebar) sidebar.classList.remove('sidebar-open');
      if (body) body.classList.remove('sidebar-open');
      if (overlay) overlay.style.display = 'none';

      // Альтернативно, если используете AdminLTE
      if (typeof $.fn.pushMenu !== 'undefined') {
        $('[data-widget="pushmenu"]').pushMenu('collapse');
      }
    }
  }
  async activateRoute(e, oldRoute = null) {
    if (oldRoute) {
      const currentRoute = this.routes.find(item => item.route === oldRoute);
      if (currentRoute.styles && currentRoute.styles.length > 0) {
        currentRoute.styles.forEach(style => {
          document.querySelector(`link[href='/css/${style}']`).remove();
        });
      }
      if (currentRoute.scripts && currentRoute.scripts.length > 0) {
        currentRoute.scripts.forEach(script => {
          document.querySelector(`script[src='/js/${script}']`).remove();
        });
      }
      if (currentRoute.unload && typeof currentRoute.unload === 'function') {
        currentRoute.unload();
      }
    }
    const urlRoute = window.location.pathname;
    const newRoute = this.routes.find(item => item.route === urlRoute);
    if (newRoute) {
      if (newRoute.styles && newRoute.styles.length > 0) {
        for (const style of newRoute.styles) {
          await _utils_file_utils__WEBPACK_IMPORTED_MODULE_0__.FileUtils.loadPageStyle('/css/' + style, this.adminLteStylesheetElement);
        }
      }
      if (newRoute.scripts && newRoute.scripts.length > 0) {
        for (const script of newRoute.scripts) {
          await _utils_file_utils__WEBPACK_IMPORTED_MODULE_0__.FileUtils.loadPageScript('/js/' + script);
        }
      }
      if (newRoute.title) {
        this.titlePageElement.innerText = newRoute.title + ' | Freelance Studio';
      }
      if (newRoute.filepathTemplate) {
        let contentBlock = this.contentPageElement;
        if (newRoute.useLayout) {
          this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(response => response.text());
          contentBlock = document.getElementById('content-layout');
          this.closeMobileSidebar();
          document.body.classList.add('sidebar-mini');
          document.body.classList.add('layout-fixed');
          const selectNevBarElement = document.getElementById('select-nav-bar');
          const menuSelectNavBar = document.getElementById('menu-select-nav-bar');
          const cacheLinkElement = document.getElementById('cache-link');
          const mainLinkElement = document.getElementById('main-link');
          let isActive = false;
          // if(window.innerWidth < 993){
          //    document.getElementById('main-sidebar').classList.add('collapse');
          // }

          selectNevBarElement.addEventListener('click', function () {
            if (!isActive) {
              this.classList.add('active');
              cacheLinkElement.classList.remove('nav-link');
              mainLinkElement.classList.remove('nav-link');
              cacheLinkElement.classList.add('nav-link-disabled');
              mainLinkElement.classList.add('nav-link-disabled');
              menuSelectNavBar.classList.remove('d-none');
              isActive = true;
              return true;
            } else {
              cacheLinkElement.classList.add('nav-link');
              mainLinkElement.classList.add('nav-link');
              cacheLinkElement.classList.remove('nav-link-disabled');
              mainLinkElement.classList.remove('nav-link-disabled');
              this.classList.remove('active');
              menuSelectNavBar.classList.add('d-none');
              isActive = false;
              return false;
            }
          });

          // this.profileElement = document.getElementById('fullName');
          // if (!this.userName) {
          //    const userInfo = JSON.parse(AuthUtils.getAuthInfo(AuthUtils.userInfoKey));
          //    if (userInfo && userInfo.name) {
          //       this.userName = userInfo.name;
          //    }
          // }
          // this.profileElement.innerText = this.userName;
          if (newRoute.route === '/income' || newRoute.route === '/expenses') {
            selectNevBarElement.classList.add('active');
            menuSelectNavBar.classList.remove('d-none');
            isActive = true;
            cacheLinkElement.classList.remove('nav-link');
            mainLinkElement.classList.remove('nav-link');
            cacheLinkElement.classList.add('nav-link-disabled');
            mainLinkElement.classList.add('nav-link-disabled');
          }
          _utils_activateUi__WEBPACK_IMPORTED_MODULE_3__.ActivateUi.activateMenuItem(newRoute);
        } else {
          document.body.classList.remove('sidebar-mini');
          document.body.classList.remove('layout-fixed');
        }
        contentBlock.innerHTML = await fetch(newRoute.filepathTemplate).then(response => response.text());
      }
      if (newRoute.load && typeof newRoute.load === 'function') {
        newRoute.load();
      }
    } else {
      history.pushState({}, '', '/404');
      await this.activateRoute(null, null);
    }
  }
}

/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./common.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/utils/activateUi.js":
/*!*********************************!*\
  !*** ./src/utils/activateUi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivateUi: () => (/* binding */ ActivateUi)
/* harmony export */ });
class ActivateUi {
  static isRouteInMenuCollapse(routePath) {
    const menuCollapseRoutes = ['/income', '/expenses'];
    return menuCollapseRoutes.includes(routePath);
  }
  static activateMenuItem(route) {
    const allLinks = document.querySelectorAll('.sidebar .nav-link, .menu-collapse-link');
    const menuCollapse = document.getElementById('menu-select-nav-bar');
    const selectNavBar = document.getElementById('select-nav-bar');
    allLinks.forEach(link => {
      link.classList.remove('active');
      link.classList.remove('active-select');
    });
    const isInMenuCollapse = this.isRouteInMenuCollapse(route.route);
    if (isInMenuCollapse) {
      if (selectNavBar) {
        selectNavBar.classList.add('active');
      }
      if (menuCollapse) {
        menuCollapse.classList.remove('d-none');
      }
      const targetLink = document.querySelector(`.menu-collapse-link[href="${route.route}"]`);
      if (targetLink) {
        targetLink.classList.add('active-select');
      }
    } else {
      if (selectNavBar) {
        selectNavBar.classList.remove('active');
      }
      if (menuCollapse) {
        menuCollapse.classList.add('d-none');
      }
      allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === route.route) {
          link.classList.add('active');
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/utils/auth-utils.js":
/*!*********************************!*\
  !*** ./src/utils/auth-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthUtils: () => (/* binding */ AuthUtils)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ "./src/config/config.js");

class AuthUtils {
  static accessTokenKey = 'accessToken';
  static refreshTokenKey = 'refreshToken';
  static userInfoKey = 'userInfo';
  static setAuthInfo(accessToken, refreshToken, userInfo = null) {
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
    if (userInfo) {
      localStorage.setItem(this.userInfoKey, JSON.stringify(userInfo));
    }
  }
  static removeAuthInfo() {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.userInfoKey);
  }
  static getAuthInfo(key = null) {
    if (key && [this.accessTokenKey, this.refreshTokenKey, this.userInfoKey].includes(key)) {
      return localStorage.getItem(key);
    } else {
      return {
        [this.accessTokenKey]: localStorage.getItem(this.accessTokenKey),
        [this.refreshTokenKey]: localStorage.getItem(this.refreshTokenKey),
        [this.userInfoKey]: localStorage.getItem(this.userInfoKey)
      };
    }
  }
  static async updateRefreshToken() {
    let result = false;
    const refreshToken = this.getAuthInfo(this.refreshTokenKey);
    if (refreshToken) {
      const response = await fetch(_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].api + 'refresh', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          refreshToken: refreshToken
        })
      });
      if (response && response.status === 200) {
        const tokens = await response.json();
        if (tokens && !tokens.error) {
          this.setAuthInfo(tokens.accessToken, tokens.refreshToken);
          result = true;
        }
      }
    }
    if (!result) {
      this.removeAuthInfo();
    }
    return result;
  }
}

/***/ }),

/***/ "./src/utils/file-utils.js":
/*!*********************************!*\
  !*** ./src/utils/file-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUtils: () => (/* binding */ FileUtils)
/* harmony export */ });
class FileUtils {
  static loadPageScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve('Script loaded' + src);
      script.onerror = () => reject(new Error('Script load error for:' + src));
      document.body.appendChild(script);
    });
  }
  static loadPageStyle(src, insertBeforeElement) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = src;
      link.onload = () => resolve('Link loaded' + src);
      link.onerror = () => reject(new Error('Link load error for:' + src));
      insertBeforeElement.insertAdjacentElement('afterbegin', link);
    });
  }
  static convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('Can not convert file to base64'));
    });
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/common.scss */ "./src/styles/common.scss");


class App {
  constructor() {
    new _router__WEBPACK_IMPORTED_MODULE_0__.Router();
  }
}
new App();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsMkhBQTJILHlCQUF5QjtBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3TkFBd04sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdB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VUFBVSxDQUFDLENBQUM7TUFDL0JELE1BQU0sQ0FBQ0UsYUFBYSxDQUFDSCxJQUFJLENBQUM7TUFDMUJDLE1BQU0sQ0FBQ1QsTUFBTSxHQUFHLE1BQU1ILE9BQU8sQ0FBQ1ksTUFBTSxDQUFDckIsTUFBTSxDQUFDO01BQzVDcUIsTUFBTSxDQUFDUixPQUFPLEdBQUcsTUFBS0gsTUFBTSxDQUFDLElBQUlJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQztFQUNKO0FBQ0YsQzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLG1DOzs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0Y7QUFHN0IsTUFBTVUsR0FBRyxDQUFDO0VBQ1AxSixXQUFXQSxDQUFBLEVBQUc7SUFDWCxJQUFJMkIsMkNBQU0sQ0FBQyxDQUFDO0VBQ2Y7QUFDSDtBQUVDLElBQUkrSCxHQUFHLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3N0eWxlcy9jb21tb24uc2Nzcz8xYzQxIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3V0aWxzL2FjdGl2YXRlVWkuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdXRpbHMvYXV0aC11dGlscy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9maWxlLXV0aWxzLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluLWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluLWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkzcHgpIHtcbiAgLm1haW4taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAud3JhcHBlciAuY29udGVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogNDRweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAud3JhcHBlciAuY29udGVudC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIGNvbG9yOiAjMDUyQzY1O1xufVxuXG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0Q5RDlEOTtcbiAgd2lkdGg6IDIxOXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuLndyYXBwZXIgLm1haW4tc2lkZWJhciAuc2lkZWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLmxvZ28gaW1nIHtcbiAgcGFkZGluZzogNDBweCA3MXB4IDIwcHggNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE3OHB4O1xufVxuLndyYXBwZXIgLm1haW4tc2lkZWJhciAubmF2IC5uYXYtaXRlbSB7XG4gIHdpZHRoOiAxNzhweDtcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgbWFyZ2luOiAwO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxNzhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGNvbG9yOiAjMDUyYzY1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLndyYXBwZXIgLm1haW4tc2lkZWJhciAubmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xuICBnYXA6IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMwZDZlZmQ7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciBzdmcgcGF0aCB7XG4gIGZpbGw6ICNmZmY7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciBwIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLmFjdGl2ZSB7XG4gIGdhcDogMTBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzBkNmVmZDtcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLmFjdGl2ZSBzdmcgcGF0aCB7XG4gIGZpbGw6ICNmZmY7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5hY3RpdmUgcCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5uYXYtbGluay1kaXNhYmxlZCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGdhcDogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rLWRpc2FibGVkIHAge1xuICBjb2xvcjogIzA1MmM2NTtcbiAgbWFyZ2luOiAwO1xufVxuLndyYXBwZXIgLm1haW4tc2lkZWJhciAubmF2IC5uYXYtaXRlbSAubmF2LWxpbmstc2VsZWN0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5uYXYtbGluay1zZWxlY3QgcCB7XG4gIGNvbG9yOiAjMDUyYzY1O1xuICBtYXJnaW46IDA7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5tZW51LXNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBib3JkZXItYm90dG9tOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLm1lbnUtc2VsZWN0LmFjdGl2ZSBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5tZW51LWNvbGxhcHNlIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDZlZmQ7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5tZW51LWNvbGxhcHNlIC5hY3RpdmUtc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogIzBkNmVmZDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLm1lbnUtY29sbGFwc2UgLm1lbnUtY29sbGFwc2UtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgY29sb3I6ICMwZDZlZmQ7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLm1lbnUtY29sbGFwc2UgLm1lbnUtY29sbGFwc2UtbGluazpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwZDZlZmQ7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5tZW51LWNvbGxhcHNlIC5tZW51LWNvbGxhcHNlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMGQ2ZWZkO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLndyYXBwZXIgLm1haW4tc2lkZWJhciAudXNlci1wYW5lbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi53cmFwcGVyIC5tYWluLXNpZGViYXIgLnVzZXItcGFuZWwgLnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIyNnB4O1xuICB0b3A6IDQxcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjRDlEOUQ5O1xuICBsZWZ0OiAwO1xufVxuLndyYXBwZXIgLm1haW4tc2lkZWJhciAudXNlci1wYW5lbCAuYmFsYW5jZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGdhcDogMTBweDtcbiAgY29sb3I6ICMwNTJjNjU7XG59XG4ud3JhcHBlciAubWFpbi1zaWRlYmFyIC51c2VyLXBhbmVsIC5iYWxhbmNlIHN0cm9uZyB7XG4gIGNvbG9yOiAjMGQ2ZWZkO1xufVxuLndyYXBwZXIgLm1haW4tc2lkZWJhciAudXNlci1wYW5lbCAuaW5mbyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndyYXBwZXIgLm1haW4tc2lkZWJhciAudXNlci1wYW5lbCAuaW5mbyAuaW5mby1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQ6ICNEOUQ5RDk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLndyYXBwZXIgLm1haW4tc2lkZWJhciAudXNlci1wYW5lbCAuaW5mbyAuaW5mby1jaXJjbGUgLnByb2ZpbGUtdXNlciB7XG4gIGNvbG9yOiAjNkM3NTdEO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLndyYXBwZXIgLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDEwMHB4IDk0cHggMCAyOXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9hZGFwdGl2ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9taXgvbWl4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFFRTtJQUNFLGFBQUE7RUNDRjtBQUNGO0FERUE7RUFFRTtJQUNFLGFBQUE7RUNERjtBQUNGO0FES0E7RUFFRTtJQUNFLGNBQUE7RUNKRjtFRFFFO0lBQ0UsNEJBQUE7RUNOSjtBQUNGO0FEWUE7RUFFSTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtFQ1hKO0FBQ0Y7QUF2QkE7RUFDRSxpQ0NKWTtFREtaLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUF5QkY7O0FBdEJBO0VFTEUsZ0JBQUE7RUZRQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ1RpQjtBRGlDbkI7O0FBbkJFO0VBQ0UsK0JBQUE7RUFLQSxZQUFBO0VBQ0EsbUJBQUE7QUFrQko7QUF2Qkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUF5Qk47QUFuQk07RUFDRSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFxQlI7QUFoQkk7RUFDRSxrQkFBQTtFRS9CSixnQkFBQTtFRmlDSSxlQUFBO0VBQ0EsWUFBQTtBQWtCTjtBQWhCTTtFQUNFLFlBQUE7QUFrQlI7QUFoQlE7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VFbERSLDJDQUFBO0VGb0RRLGNDL0NHO0VEZ0RILG9CQUFBO0FBa0JWO0FBaEJVO0VBQ0UsbUJBQUE7QUFrQlo7QUFkUTtFQVNFLFNBQUE7RUFFQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJDdkVRO0FEOEVsQjtBQW5CVTtFQUNFLFVDeERKO0FENkVSO0FBbEJVO0VBQ0Usc0JBQUE7QUFvQlo7QUFWUTtFQVNFLFNBQUE7RUFFQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJDdkZRO0FEMEZsQjtBQWZVO0VBQ0UsVUN4RUo7QUR5RlI7QUFkVTtFQUNFLHNCQUFBO0FBZ0JaO0FBTlE7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUVY7QUFQVTtFQUNFLGNDL0ZDO0VEZ0dELFNBQUE7QUFTWjtBQU5RO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQVFWO0FBTlU7RUFDRSxjQzVHQztFRDZHRCxTQUFBO0FBUVo7QUFKUTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU1WO0FBRlU7RUFDRSx3QkFBQTtBQUlaO0FBQVE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0FBRVY7QUFBVTtFQUVFLG1CQ3RJTTtFRHVJTixzQkFBQTtFQUVBLHNCQUFBO0FBQVo7QUFLVTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGNDakpNO0VEbUpOLGtCQUFBO0FBSlo7QUFNWTtFQUVFLGdDQUFBO0FBTGQ7QUFTVTtFQUNFLG1CQzVKTTtFRDZKTixzQkFBQTtFQUVBLHNCQUFBO0FBUlo7QUFpQkk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBZk47QUFpQk07RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQWhCUjtBQW1CTTtFRXJMSixnQkFBQTtFRnVMTSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0M1TEs7QUQyS2I7QUFtQlE7RUFDRSxjQzlMUTtBRDZLbEI7QUFxQk07RUU5TEosZ0JBQUE7RUZnTU0sZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQW5CUjtBQXFCUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkNuTkc7RURvTkgsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUVyTlIsMkNBQUE7QUZtTUY7QUFxQlU7RUFDRSxjQ3pOSjtFRDBOSSxXQUFBO0VBQ0EsWUFBQTtBQW5CWjtBQThCRTtFQUNFLDBCQUFBO0FBNUJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcclxcbiAgLm1haW4taGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHJcXG4gIC5tYWluLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmVcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkzcHgpIHtcXHJcXG5cXHJcXG4gIC5tYWluLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrXFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3JhcHBlciB7XFxyXFxuICAgIC5jb250ZW50LXdyYXBwZXIge1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiA0NHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcXHJcXG4gIC53cmFwcGVyIHtcXHJcXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAdXNlIFxcXCJhZGFwdGl2ZS5zY3NzXFxcIjtcXHJcXG5AdXNlIFxcXCJ2YXJpYWJsZXMvdmFyaWFibGVzLnNjc3NcXFwiIGFzIHZhcnM7XFxyXFxuQHVzZSBcXFwibWl4L21peC5zY3NzXFxcIiBhcyBtaXg7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFycy4kZm9udC1yb2JvdG87XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIEBpbmNsdWRlIG1peC5mb250LWJvbGQ7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDdweDtcXHJcXG4gIGNvbG9yOiB2YXJzLiRiYWNrZ3JvdW5kLXRpdGxlO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuXFxyXFxuICAubWFpbi1zaWRlYmFyIHtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFycy4kYmFja2dyb3VuZDtcXHJcXG4gICAgLnNpZGViYXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHdpZHRoOiAyMTlweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG5cXHJcXG4gICAgLmxvZ28ge1xcclxcbiAgICAgIGltZ3tcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggNzFweCAyMHB4IDUwcHg7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFycy4kYmFja2dyb3VuZDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYge1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgICBAaW5jbHVkZSBtaXguZm9udC1yZWd1bGFyO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICB3aWR0aDogMTc4cHg7XFxyXFxuXFxyXFxuICAgICAgLm5hdi1pdGVtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxNzhweDtcXHJcXG5cXHJcXG4gICAgICAgIC5uYXYtbGluayB7XFxyXFxuICAgICAgICAgIG1hcmdpbjowO1xcclxcbiAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxNzhweDtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxyXFxuICAgICAgICAgIEBpbmNsdWRlIG1peC5ib3gtc2hhZG93O1xcclxcbiAgICAgICAgICBjb2xvcjogdmFycy4kY29sb3ItbGluaztcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG5cXHJcXG4gICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gICAgICAgICAgc3ZnIHBhdGgge1xcclxcbiAgICAgICAgICAgIGZpbGw6IHZhcnMuJHdoaXRlXFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHZhcnMuJHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgICBjb2xvcjogdmFycy4kd2hpdGUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFycy4kYmFja2dyb3VuZC1saW5rO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmFjdGl2ZSB7XFxyXFxuICAgICAgICAgIHN2ZyBwYXRoIHtcXHJcXG4gICAgICAgICAgICBmaWxsOiB2YXJzLiR3aGl0ZVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXJzLiR3aGl0ZSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgICAgY29sb3I6IHZhcnMuJHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcnMuJGJhY2tncm91bmQtbGluaztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYXYtbGluay1kaXNhYmxlZHtcXHJcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXJzLiRjb2xvci1saW5rO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLm5hdi1saW5rLXNlbGVjdCB7XFxyXFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxyXFxuXFxyXFxuICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXJzLiRjb2xvci1saW5rO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm1lbnUtc2VsZWN0IHtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxyXFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubWVudS1zZWxlY3QuYWN0aXZle1xcclxcbiAgICAgICAgICBzdmd7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubWVudS1jb2xsYXBzZSB7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcclxcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJzLiRiYWNrZ3JvdW5kLWxpbms7XFxyXFxuXFxyXFxuICAgICAgICAgIC5hY3RpdmUtc2VsZWN0IHtcXHJcXG5cXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXJzLiRiYWNrZ3JvdW5kLWxpbms7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFycy4kd2hpdGUgIWltcG9ydGFudDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAubWVudS1jb2xsYXBzZS1saW5rIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXJzLiRiYWNrZ3JvdW5kLWxpbms7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xcclxcblxcclxcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFycy4kYmFja2dyb3VuZC1saW5rO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAubWVudS1jb2xsYXBzZS1saW5rOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXJzLiRiYWNrZ3JvdW5kLWxpbms7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFycy4kd2hpdGUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudXNlci1wYW5lbCB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuXFxyXFxuICAgICAgLnJvdyB7XFxyXFxuXFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMjI2cHg7XFxyXFxuICAgICAgICB0b3A6IDQxcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNEOUQ5RDk7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYmFsYW5jZSwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgbWl4LmZvbnQtYm9sZDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgY29sb3I6IHZhcnMuJGNvbG9yLWJvbGQ7XFxyXFxuXFxyXFxuICAgICAgICBzdHJvbmcge1xcclxcbiAgICAgICAgICBjb2xvcjogdmFycy4kYmFja2dyb3VuZC1saW5rXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5pbmZvIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1peC5mb250LXJlZ3VsYXI7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZ2FwOiAxNnB4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIC5pbmZvLWNpcmNsZSB7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDM2cHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFycy4kYmFja2dyb3VuZDtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIEBpbmNsdWRlIG1peC5ib3gtc2hhZG93O1xcclxcblxcclxcbiAgICAgICAgICAucHJvZmlsZS11c2VyIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFycy4kY29sb3I7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudC13cmFwcGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTAwcHggOTRweCAwIDI5cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuJGZvbnQtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4kYmFja2dyb3VuZDogI0Q5RDlEOTtcXHJcXG4kY29sb3I6ICM2Qzc1N0Q7XFxyXFxuJGNvbG9yLWJvbGQ6ICMwNTJjNjU7XFxyXFxuJGJhY2tncm91bmQtbGluazogIzBkNmVmZDtcXHJcXG5cXHJcXG4kYmFja2dyb3VuZC10aXRsZTogIzA1MkM2NTtcXHJcXG4kY29sb3ItbGluazogIzA1MmM2NTtcXHJcXG4kd2hpdGU6ICNmZmY7XFxyXFxuJGRhdGUtY29sb3I6ICM2Qzc1N0Q7XFxyXFxuJGJsYWNrOiAjMDAwO1xcclxcbiRjaGFydC1jb2xvcjogIzI5MDY2MTtcXHJcXG4kYmFja2dyb3VuZC1mb3JtOiAjZTllY2VmO1xcclxcbiRib3JkZXItY29sb3ItZm9ybTogI2NlZDRkYTtcXHJcXG4kY29sb3ItaW5wdXQ6ICM2Yzc1N2Q7XFxyXFxuJGJhY2tncm91bmQtaG92ZXItYnRuOiAjMGE1N2JmO1xcclxcblxcclxcblxcclxcblxcclxcblwiLFwiQHVzZSBcXFwiLi4vdmFyaWFibGVzL3ZhcmlhYmxlc1xcXCIgYXMgdmFycztcXHJcXG5cXHJcXG5AbWl4aW4gYm94LXNoYWRvd3tcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcbkBtaXhpbiBmb250LWJvbGR7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5AbWl4aW4gZm9udC1yZWd1bGFye1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBNYWlue1xyXG4gICBjb25zdHJ1Y3RvcihvcGVuTmV3Um91dGUpIHtcclxuICAgICAgdGhpcy5vcGVuTmV3Um91dGUgPSBvcGVuTmV3Um91dGU7XHJcbiAgICAgIHRoaXMucGllQ2hhcnRDYW52YXMgPSAkKCcjZG9udXRDaGFydCcpLmdldCgwKS5nZXRDb250ZXh0KCcyZCcpXHJcbiAgICAgIHRoaXMucGllQ2hhcnRDYW52YXMyID0gJCgnI2RvbnV0Q2hhcnQyJykuZ2V0KDApLmdldENvbnRleHQoJzJkJylcclxuXHJcbiAgICAgIGNvbnN0IHBpZURhdGEgICAgICAgID0ge1xyXG4gICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgJ0Nocm9tZScsXHJcbiAgICAgICAgICAgICdJRScsXHJcbiAgICAgICAgICAgICdGaXJlRm94JyxcclxuICAgICAgICAgICAgJ1NhZmFyaScsXHJcbiAgICAgICAgICAgICdPcGVyYScsXHJcbiAgICAgICAgICAgICdOYXZpZ2F0b3InLFxyXG4gICAgICAgICBdLFxyXG4gICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGRhdGE6IFs3MDAsNTAwLDQwMCw2MDAsMzAwLDEwMF0sXHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IFsnI2Y1Njk1NCcsICcjMDBhNjVhJywgJyNmMzljMTInLCAnIzAwYzBlZicsICcjM2M4ZGJjJywgJyNkMmQ2ZGUnXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcGllT3B0aW9ucyAgICAgPSB7XHJcbiAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW8gOiBmYWxzZSxcclxuICAgICAgICAgcmVzcG9uc2l2ZSA6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICAgbmV3IENoYXJ0KHRoaXMucGllQ2hhcnRDYW52YXMsIHtcclxuICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgIGRhdGE6IHBpZURhdGEsXHJcbiAgICAgICAgIG9wdGlvbnM6IHBpZU9wdGlvbnNcclxuICAgICAgfSlcclxuICAgICAgbmV3IENoYXJ0KHRoaXMucGllQ2hhcnRDYW52YXMyLCB7XHJcbiAgICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICAgICBkYXRhOiBwaWVEYXRhLFxyXG4gICAgICAgICBvcHRpb25zOiBwaWVPcHRpb25zXHJcbiAgICAgIH0pXHJcbiAgIH1cclxuXHJcbn0iLCJjb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuSE9TVDtcclxuY29uc3QgY29uZmlnID0ge1xyXG4gICBob3N0OiBob3N0LCBhcGk6IGhvc3QgKyBgL2FwaS9gLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7IiwiaW1wb3J0IHtGaWxlVXRpbHN9IGZyb20gXCIuL3V0aWxzL2ZpbGUtdXRpbHNcIjtcclxuaW1wb3J0IHtBdXRoVXRpbHN9IGZyb20gXCIuL3V0aWxzL2F1dGgtdXRpbHNcIjtcclxuaW1wb3J0IHtNYWlufSBmcm9tIFwiLi9jb21wb25lbnRzL21haW5cIjtcclxuaW1wb3J0IHtBY3RpdmF0ZVVpfSBmcm9tIFwiLi91dGlscy9hY3RpdmF0ZVVpXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuaW5pdEV2ZW50cygpXHJcbiAgICAgIHRoaXMudGl0bGVQYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpXHJcbiAgICAgIHRoaXMuY29udGVudFBhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgICB0aGlzLmFkbWluTHRlU3R5bGVzaGVldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRtaW4tbHRlLXN0eWxlJylcclxuICAgICAgdGhpcy51c2VyTmFtZSA9IG51bGw7XHJcbiAgICAgIHRoaXMucm91dGVzID0gW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn0JPQu9Cw0LLQvdCw0Y8nLFxyXG4gICAgICAgICAgICBmaWxlcGF0aFRlbXBsYXRlOiAnL3RlbXBsYXRlcy9wYWdlcy9tYWluLmh0bWwnLFxyXG4gICAgICAgICAgICB1c2VMYXlvdXQ6ICcvdGVtcGxhdGVzL2xheW91dC5odG1sJyxcclxuICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICBuZXcgTWFpbih0aGlzLm9wZW5OZXdSb3V0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgICAgICAgICdtYWluLmNzcydcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgc2NyaXB0czogW1xyXG4gICAgICAgICAgICAgICAnQ2hhcnQubWluLmpzJyxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2luY29tZScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn0JTQvtGF0L7QtNGLJyxcclxuICAgICAgICAgICAgZmlsZXBhdGhUZW1wbGF0ZTogJy90ZW1wbGF0ZXMvcGFnZXMvaW5jb21lL2luY29tZS5odG1sJyxcclxuICAgICAgICAgICAgdXNlTGF5b3V0OiAnL3RlbXBsYXRlcy9sYXlvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgIGxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgLy8gbmV3IERhc2hib2FyZCh0aGlzLm9wZW5OZXdSb3V0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy9leHBlbnNlcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn0KDQsNGB0YXQvtC00YsnLFxyXG4gICAgICAgICAgICBmaWxlcGF0aFRlbXBsYXRlOiAnL3RlbXBsYXRlcy9wYWdlcy9leHBlbnNlcy9leHBlbnNlcy5odG1sJyxcclxuICAgICAgICAgICAgdXNlTGF5b3V0OiAnL3RlbXBsYXRlcy9sYXlvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgIGxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgLy8gbmV3IERhc2hib2FyZCh0aGlzLm9wZW5OZXdSb3V0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy9pbmNvbWUtZXhwZW5zZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ9CU0L7RhdC+0LTRiyDQuCDQoNCw0YHRhdC+0LTRiycsXHJcbiAgICAgICAgICAgIGZpbGVwYXRoVGVtcGxhdGU6ICcvdGVtcGxhdGVzL3BhZ2VzL2luY29tZS1leHBlbnNlcy9pbmNvbWUtZXhwZW5zZXMuaHRtbCcsXHJcbiAgICAgICAgICAgIHVzZUxheW91dDogJy90ZW1wbGF0ZXMvbGF5b3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgIC8vIG5ldyBEYXNoYm9hcmQodGhpcy5vcGVuTmV3Um91dGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgcm91dGU6ICcvNDA0JyxcclxuICAgICAgICAgICAgdGl0bGU6ICfQodGC0YDQsNC90LjRhtCwINC90LUg0L3QsNC50LTQtdC90LAnLFxyXG4gICAgICAgICAgICB1c2VMYXlvdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmaWxlcGF0aFRlbXBsYXRlOiAnL3RlbXBsYXRlcy9wYWdlcy80MDQuaHRtbCcsXHJcbiAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAnZXJyb3ItcGFnZS5jc3MnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy9sb2dpbicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn0JDQstGC0L7RgNC40LfQsNGG0LjRjycsXHJcbiAgICAgICAgICAgIGZpbGVwYXRoVGVtcGxhdGU6ICcvdGVtcGxhdGVzL3BhZ2VzL2F1dGgvbG9naW4uaHRtbCcsXHJcbiAgICAgICAgICAgIHVzZUxheW91dDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgLy8gbmV3IExvZ2luKHRoaXMub3Blbk5ld1JvdXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAnZm9ybS5jc3MnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy9zaWduLXVwJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPJyxcclxuICAgICAgICAgICAgdXNlTGF5b3V0OiBmYWxzZSxcclxuICAgICAgICAgICAgZmlsZXBhdGhUZW1wbGF0ZTogJy90ZW1wbGF0ZXMvcGFnZXMvYXV0aC9zaWduLXVwLmh0bWwnLFxyXG4gICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgIC8vIG5ldyBTaWduVXAodGhpcy5vcGVuTmV3Um91dGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5sb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAnZm9ybS5jc3MnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy9sb2dvdXQnLCBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgIC8vIG5ldyBMb2dvdXQodGhpcy5vcGVuTmV3Um91dGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgfVxyXG5cclxuICAgaW5pdEV2ZW50cygpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLmFjdGl2YXRlUm91dGUuYmluZCh0aGlzKSkgLy8g0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0LrQvtC90YLQtdC90YLQsCDRgyDQvdCw0YEg0LHRg9C00LXRgiDRgdGA0LDQsdCw0YLRi9Cy0LDRgtGMINGE0YPQvdC60YbQuNGPIGFjdGl2YXRlUm91dGVcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5hY3RpdmF0ZVJvdXRlLmJpbmQodGhpcykpIC8vINC+0YLQu9C+0LIg0YHQvtCx0YvRgtC40Lkg0LrQvtCz0LTQsCDRgyDQvdCw0YEg0LjQt9C80LXQvdC40LvRgdGPIHVybFxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcykpXHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIG9wZW5OZXdSb3V0ZSh1cmwpIHtcclxuICAgICAgY29uc3QgY3VycmVudFJvdXRlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcclxuICAgICAgYXdhaXQgdGhpcy5hY3RpdmF0ZVJvdXRlKG51bGwsIGN1cnJlbnRSb3V0ZSk7XHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIGNsaWNrSGFuZGxlcihlKSB7XHJcblxyXG4gICAgICBsZXQgZWxlbWVudCA9IG51bGxcclxuICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgZWxlbWVudCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgZWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgICAgICBjb25zdCB1cmwgPSBlbGVtZW50LmhyZWYucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ub3JpZ2luLCAnJylcclxuICAgICAgICAgaWYgKCF1cmwgfHwgKGN1cnJlbnRSb3V0ZSA9PT0gdXJsLnJlcGxhY2UoJyMnLCAnJykpIHx8IHVybC5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OnZvaWQoMCknKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5jbG9zZU1vYmlsZVNpZGViYXIoKTtcclxuICAgICAgICAgYXdhaXQgdGhpcy5vcGVuTmV3Um91dGUodXJsKVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgY2xvc2VNb2JpbGVTaWRlYmFyKCkge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5OTIpIHsgLy8gTW9iaWxlIGJyZWFrcG9pbnRcclxuICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNpZGViYXInKTtcclxuICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLW92ZXJsYXknKTtcclxuXHJcbiAgICAgICAgIC8vINCX0LDQutGA0YvQstCw0LXQvCBzaWRlYmFyXHJcbiAgICAgICAgIGlmIChzaWRlYmFyKSBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItb3BlbicpO1xyXG4gICAgICAgICBpZiAoYm9keSkgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLW9wZW4nKTtcclxuICAgICAgICAgaWYgKG92ZXJsYXkpIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgIC8vINCQ0LvRjNGC0LXRgNC90LDRgtC40LLQvdC+LCDQtdGB0LvQuCDQuNGB0L/QvtC70YzQt9GD0LXRgtC1IEFkbWluTFRFXHJcbiAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5wdXNoTWVudSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgJCgnW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nKS5wdXNoTWVudSgnY29sbGFwc2UnKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIGFjdGl2YXRlUm91dGUoZSwgb2xkUm91dGUgPSBudWxsKSB7XHJcbiAgICAgIGlmIChvbGRSb3V0ZSkge1xyXG4gICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSB0aGlzLnJvdXRlcy5maW5kKGl0ZW0gPT4gaXRlbS5yb3V0ZSA9PT0gb2xkUm91dGUpO1xyXG4gICAgICAgICBpZiAoY3VycmVudFJvdXRlLnN0eWxlcyAmJiBjdXJyZW50Um91dGUuc3R5bGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY3VycmVudFJvdXRlLnN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcclxuICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tocmVmPScvY3NzLyR7c3R5bGV9J11gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAoY3VycmVudFJvdXRlLnNjcmlwdHMgJiYgY3VycmVudFJvdXRlLnNjcmlwdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjdXJyZW50Um91dGUuc2NyaXB0cy5mb3JFYWNoKHNjcmlwdCA9PiB7XHJcbiAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmM9Jy9qcy8ke3NjcmlwdH0nXWApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmIChjdXJyZW50Um91dGUudW5sb2FkICYmIHR5cGVvZiBjdXJyZW50Um91dGUudW5sb2FkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb3V0ZS51bmxvYWQoKVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVybFJvdXRlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICAgIGNvbnN0IG5ld1JvdXRlID0gdGhpcy5yb3V0ZXMuZmluZChpdGVtID0+IGl0ZW0ucm91dGUgPT09IHVybFJvdXRlKVxyXG5cclxuICAgICAgaWYgKG5ld1JvdXRlKSB7XHJcbiAgICAgICAgIGlmIChuZXdSb3V0ZS5zdHlsZXMgJiYgbmV3Um91dGUuc3R5bGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzdHlsZSBvZiBuZXdSb3V0ZS5zdHlsZXMpIHtcclxuICAgICAgICAgICAgICAgYXdhaXQgRmlsZVV0aWxzLmxvYWRQYWdlU3R5bGUoJy9jc3MvJyArIHN0eWxlLCB0aGlzLmFkbWluTHRlU3R5bGVzaGVldEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmIChuZXdSb3V0ZS5zY3JpcHRzICYmIG5ld1JvdXRlLnNjcmlwdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiBuZXdSb3V0ZS5zY3JpcHRzKSB7XHJcbiAgICAgICAgICAgICAgIGF3YWl0IEZpbGVVdGlscy5sb2FkUGFnZVNjcmlwdCgnL2pzLycgKyBzY3JpcHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAobmV3Um91dGUudGl0bGUpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZVBhZ2VFbGVtZW50LmlubmVyVGV4dCA9IG5ld1JvdXRlLnRpdGxlICsgJyB8IEZyZWVsYW5jZSBTdHVkaW8nXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmIChuZXdSb3V0ZS5maWxlcGF0aFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50QmxvY2sgPSB0aGlzLmNvbnRlbnRQYWdlRWxlbWVudFxyXG4gICAgICAgICAgICBpZiAobmV3Um91dGUudXNlTGF5b3V0KSB7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQYWdlRWxlbWVudC5pbm5lckhUTUwgPSBhd2FpdCBmZXRjaChuZXdSb3V0ZS51c2VMYXlvdXQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgICAgICAgICBjb250ZW50QmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1sYXlvdXQnKVxyXG4gICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9iaWxlU2lkZWJhcigpO1xyXG4gICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbWluaScpXHJcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LWZpeGVkJylcclxuICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0TmV2QmFyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtbmF2LWJhcicpO1xyXG4gICAgICAgICAgICAgICBjb25zdCBtZW51U2VsZWN0TmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtc2VsZWN0LW5hdi1iYXInKTtcclxuICAgICAgICAgICAgICAgY29uc3QgY2FjaGVMaW5rRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWNoZS1saW5rJyk7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IG1haW5MaW5rRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWxpbmsnKTtcclxuICAgICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgIC8vIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgOTkzKXtcclxuICAgICAgICAgICAgICAgLy8gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tc2lkZWJhcicpLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XHJcbiAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgIHNlbGVjdE5ldkJhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNhY2hlTGlua0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWxpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgbWFpbkxpbmtFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1saW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNhY2hlTGlua0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmstZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgbWFpbkxpbmtFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rLWRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1lbnVTZWxlY3ROYXZCYXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICBjYWNoZUxpbmtFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1haW5MaW5rRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICBjYWNoZUxpbmtFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1saW5rLWRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1haW5MaW5rRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbGluay1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICBtZW51U2VsZWN0TmF2QmFyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgIC8vIHRoaXMucHJvZmlsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbE5hbWUnKTtcclxuICAgICAgICAgICAgICAgLy8gaWYgKCF0aGlzLnVzZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgIC8vICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZShBdXRoVXRpbHMuZ2V0QXV0aEluZm8oQXV0aFV0aWxzLnVzZXJJbmZvS2V5KSk7XHJcbiAgICAgICAgICAgICAgIC8vICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgIC8vICAgICAgIHRoaXMudXNlck5hbWUgPSB1c2VySW5mby5uYW1lO1xyXG4gICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9maWxlRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICBpZiAobmV3Um91dGUucm91dGUgPT09ICcvaW5jb21lJyB8fCBuZXdSb3V0ZS5yb3V0ZSA9PT0gJy9leHBlbnNlcycpIHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0TmV2QmFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgbWVudVNlbGVjdE5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgY2FjaGVMaW5rRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbGluaycpO1xyXG4gICAgICAgICAgICAgICAgICBtYWluTGlua0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWxpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgY2FjaGVMaW5rRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXYtbGluay1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICBtYWluTGlua0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmstZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBBY3RpdmF0ZVVpLmFjdGl2YXRlTWVudUl0ZW0obmV3Um91dGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItbWluaScpXHJcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbGF5b3V0LWZpeGVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50QmxvY2suaW5uZXJIVE1MID0gYXdhaXQgZmV0Y2gobmV3Um91dGUuZmlsZXBhdGhUZW1wbGF0ZSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYgKG5ld1JvdXRlLmxvYWQgJiYgdHlwZW9mIG5ld1JvdXRlLmxvYWQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbmV3Um91dGUubG9hZCgpXHJcbiAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnLzQwNCcpO1xyXG4gICAgICAgICBhd2FpdCB0aGlzLmFjdGl2YXRlUm91dGUobnVsbCwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuXHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tb24uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tb24uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBjbGFzcyBBY3RpdmF0ZVVpe1xyXG4gICBzdGF0aWMgICBpc1JvdXRlSW5NZW51Q29sbGFwc2Uocm91dGVQYXRoKSB7XHJcbiAgICAgIGNvbnN0IG1lbnVDb2xsYXBzZVJvdXRlcyA9IFsnL2luY29tZScsICcvZXhwZW5zZXMnXTtcclxuICAgICAgcmV0dXJuIG1lbnVDb2xsYXBzZVJvdXRlcy5pbmNsdWRlcyhyb3V0ZVBhdGgpO1xyXG4gICB9XHJcbiAgIHN0YXRpYyBhY3RpdmF0ZU1lbnVJdGVtKHJvdXRlKSB7XHJcbiAgICAgIGNvbnN0IGFsbExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXIgLm5hdi1saW5rLCAubWVudS1jb2xsYXBzZS1saW5rJyk7XHJcbiAgICAgIGNvbnN0IG1lbnVDb2xsYXBzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXNlbGVjdC1uYXYtYmFyJyk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdE5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtbmF2LWJhcicpO1xyXG5cclxuICAgICAgYWxsTGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtc2VsZWN0Jyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgaXNJbk1lbnVDb2xsYXBzZSA9IHRoaXMuaXNSb3V0ZUluTWVudUNvbGxhcHNlKHJvdXRlLnJvdXRlKTtcclxuXHJcbiAgICAgIGlmIChpc0luTWVudUNvbGxhcHNlKSB7XHJcbiAgICAgICAgIGlmIChzZWxlY3ROYXZCYXIpIHtcclxuICAgICAgICAgICAgc2VsZWN0TmF2QmFyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAobWVudUNvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgIG1lbnVDb2xsYXBzZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgY29uc3QgdGFyZ2V0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tZW51LWNvbGxhcHNlLWxpbmtbaHJlZj1cIiR7cm91dGUucm91dGV9XCJdYCk7XHJcbiAgICAgICAgIGlmICh0YXJnZXRMaW5rKSB7XHJcbiAgICAgICAgICAgIHRhcmdldExpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXNlbGVjdCcpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBpZiAoc2VsZWN0TmF2QmFyKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdE5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKG1lbnVDb2xsYXBzZSkge1xyXG4gICAgICAgICAgICBtZW51Q29sbGFwc2UuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGFsbExpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBpZiAoaHJlZiA9PT0gcm91dGUucm91dGUpIHtcclxuICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhVdGlscyB7XHJcbiAgc3RhdGljIGFjY2Vzc1Rva2VuS2V5ID0gJ2FjY2Vzc1Rva2VuJztcclxuICBzdGF0aWMgcmVmcmVzaFRva2VuS2V5ID0gJ3JlZnJlc2hUb2tlbic7XHJcbiAgc3RhdGljIHVzZXJJbmZvS2V5ID0gJ3VzZXJJbmZvJztcclxuICBzdGF0aWMgc2V0QXV0aEluZm8oYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgdXNlckluZm89bnVsbCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hY2Nlc3NUb2tlbktleSwgYWNjZXNzVG9rZW4pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5yZWZyZXNoVG9rZW5LZXksIHJlZnJlc2hUb2tlbik7XHJcbiAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy51c2VySW5mb0tleSwgSlNPTi5zdHJpbmdpZnkodXNlckluZm8pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVBdXRoSW5mbygpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuYWNjZXNzVG9rZW5LZXkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5yZWZyZXNoVG9rZW5LZXkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy51c2VySW5mb0tleSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0QXV0aEluZm8oa2V5ID0gbnVsbCkge1xyXG4gICAgaWYgKGtleSAmJiBbdGhpcy5hY2Nlc3NUb2tlbktleSwgdGhpcy5yZWZyZXNoVG9rZW5LZXksIHRoaXMudXNlckluZm9LZXldLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIFt0aGlzLmFjY2Vzc1Rva2VuS2V5XTogbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5hY2Nlc3NUb2tlbktleSksXHJcbiAgICAgICAgW3RoaXMucmVmcmVzaFRva2VuS2V5XTogbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5yZWZyZXNoVG9rZW5LZXkpLFxyXG4gICAgICAgIFt0aGlzLnVzZXJJbmZvS2V5XTogbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy51c2VySW5mb0tleSksXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVJlZnJlc2hUb2tlbigpe1xyXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gdGhpcy5nZXRBdXRoSW5mbyh0aGlzLnJlZnJlc2hUb2tlbktleSk7XHJcbiAgICBpZiAocmVmcmVzaFRva2VuKSB7XHJcbiAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbmZpZy5hcGkgKyAncmVmcmVzaCcsIHtcclxuICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe3JlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VufSksXHJcbiAgICAgICB9IClcclxuICAgICAgaWYocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYodG9rZW5zICYmICF0b2tlbnMuZXJyb3Ipe1xyXG4gICAgICAgICAgdGhpcy5zZXRBdXRoSW5mbyh0b2tlbnMuYWNjZXNzVG9rZW4sIHRva2Vucy5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZighcmVzdWx0KSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQXV0aEluZm8oKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBGaWxlVXRpbHN7XHJcbiAgc3RhdGljIGxvYWRQYWdlU2NyaXB0KHNyYyl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxuICAgICAgc2NyaXB0LnNyYyA9IHNyYztcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpPT4gcmVzb2x2ZSgnU2NyaXB0IGxvYWRlZCcgKyBzcmMpO1xyXG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpPT4gcmVqZWN0KG5ldyBFcnJvcignU2NyaXB0IGxvYWQgZXJyb3IgZm9yOicgKyBzcmMpKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxyXG4gICAgfSlcclxuICB9XHJcbiAgc3RhdGljIGxvYWRQYWdlU3R5bGUoc3JjLGluc2VydEJlZm9yZUVsZW1lbnQpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcclxuICAgICAgbGluay5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuICAgICAgbGluay50eXBlPSBcInRleHQvY3NzXCJcclxuICAgICAgbGluay5ocmVmID0gc3JjO1xyXG4gICAgICBsaW5rLm9ubG9hZCA9ICgpPT4gcmVzb2x2ZSgnTGluayBsb2FkZWQnICsgc3JjKTtcclxuICAgICAgbGluay5vbmVycm9yID0gKCk9PiByZWplY3QobmV3IEVycm9yKCdMaW5rIGxvYWQgZXJyb3IgZm9yOicgKyBzcmMpKTtcclxuICAgICAgaW5zZXJ0QmVmb3JlRWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBsaW5rKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb252ZXJ0RmlsZVRvQmFzZTY0KGZpbGUpe1xyXG4gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gKCk9PiByZWplY3QobmV3IEVycm9yKCdDYW4gbm90IGNvbnZlcnQgZmlsZSB0byBiYXNlNjQnKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1JvdXRlcn0gZnJvbSBcIi4vcm91dGVyXCJcclxuaW1wb3J0IFwiLi9zdHlsZXMvY29tbW9uLnNjc3NcIlxyXG5cclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBuZXcgUm91dGVyKCk7XHJcbiAgIH1cclxufVxyXG5cclxuKG5ldyBBcHAoKSk7XHJcbiJdLCJuYW1lcyI6WyJNYWluIiwiY29uc3RydWN0b3IiLCJvcGVuTmV3Um91dGUiLCJwaWVDaGFydENhbnZhcyIsIiQiLCJnZXQiLCJnZXRDb250ZXh0IiwicGllQ2hhcnRDYW52YXMyIiwicGllRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsInBpZU9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSIsIkNoYXJ0IiwidHlwZSIsIm9wdGlvbnMiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkhPU1QiLCJjb25maWciLCJhcGkiLCJGaWxlVXRpbHMiLCJBdXRoVXRpbHMiLCJBY3RpdmF0ZVVpIiwiUm91dGVyIiwiaW5pdEV2ZW50cyIsInRpdGxlUGFnZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudFBhZ2VFbGVtZW50IiwiYWRtaW5MdGVTdHlsZXNoZWV0RWxlbWVudCIsInVzZXJOYW1lIiwicm91dGVzIiwicm91dGUiLCJ0aXRsZSIsImZpbGVwYXRoVGVtcGxhdGUiLCJ1c2VMYXlvdXQiLCJsb2FkIiwiYmluZCIsInN0eWxlcyIsInNjcmlwdHMiLCJ1bmxvYWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYWN0aXZhdGVSb3V0ZSIsImNsaWNrSGFuZGxlciIsInVybCIsImN1cnJlbnRSb3V0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZSIsImVsZW1lbnQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsInBhcmVudE5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJyZXBsYWNlIiwib3JpZ2luIiwic3RhcnRzV2l0aCIsImNsb3NlTW9iaWxlU2lkZWJhciIsImlubmVyV2lkdGgiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsInNpZGViYXIiLCJvdmVybGF5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5IiwiZm4iLCJwdXNoTWVudSIsIm9sZFJvdXRlIiwiZmluZCIsIml0ZW0iLCJsZW5ndGgiLCJmb3JFYWNoIiwic2NyaXB0IiwidXJsUm91dGUiLCJuZXdSb3V0ZSIsImxvYWRQYWdlU3R5bGUiLCJsb2FkUGFnZVNjcmlwdCIsImlubmVyVGV4dCIsImNvbnRlbnRCbG9jayIsImlubmVySFRNTCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImFkZCIsInNlbGVjdE5ldkJhckVsZW1lbnQiLCJtZW51U2VsZWN0TmF2QmFyIiwiY2FjaGVMaW5rRWxlbWVudCIsIm1haW5MaW5rRWxlbWVudCIsImlzQWN0aXZlIiwiYWN0aXZhdGVNZW51SXRlbSIsImlzUm91dGVJbk1lbnVDb2xsYXBzZSIsInJvdXRlUGF0aCIsIm1lbnVDb2xsYXBzZVJvdXRlcyIsImluY2x1ZGVzIiwiYWxsTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUNvbGxhcHNlIiwic2VsZWN0TmF2QmFyIiwibGluayIsImlzSW5NZW51Q29sbGFwc2UiLCJ0YXJnZXRMaW5rIiwiZ2V0QXR0cmlidXRlIiwiYWNjZXNzVG9rZW5LZXkiLCJyZWZyZXNoVG9rZW5LZXkiLCJ1c2VySW5mb0tleSIsInNldEF1dGhJbmZvIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ1c2VySW5mbyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlQXV0aEluZm8iLCJyZW1vdmVJdGVtIiwiZ2V0QXV0aEluZm8iLCJrZXkiLCJnZXRJdGVtIiwidXBkYXRlUmVmcmVzaFRva2VuIiwicmVzdWx0IiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1cyIsInRva2VucyIsImpzb24iLCJlcnJvciIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3JlYXRlRWxlbWVudCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlRWxlbWVudCIsInJlbCIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNvbnZlcnRGaWxlVG9CYXNlNjQiLCJmaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJBcHAiXSwic291cmNlUm9vdCI6IiJ9