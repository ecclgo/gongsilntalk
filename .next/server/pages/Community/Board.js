"use strict";
(() => {
var exports = {};
exports.id = 494;
exports.ids = [494,848];
exports.modules = {

/***/ 6381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bx": () => (/* binding */ FirstContent),
/* harmony export */   "MB": () => (/* binding */ MovingSpan),
/* harmony export */   "j_": () => (/* binding */ SecondContent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FirstContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-6035c393-0"
})`
  position: absolute;
  top: 19.5px;
  left: 147.5px;

  width: 95px;
  height: 25px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  text-align: center;
  letter-spacing: -0.03em;
  cursor: pointer;

  color: ${(props)=>`${props.tabClicked === 0 ? "#000000" : "#D5D5D5"}`};
`;
const SecondContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(FirstContent).withConfig({
    componentId: "sc-6035c393-1"
})`
  left: 547.5px;
  color: ${(props)=>`${props.tabClicked === 1 ? "#000000" : "#D5D5D5"}`};
`;
const MovingSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-6035c393-2"
})`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: -0.02em;

  color: #000000;

  position: absolute;
  top: 28px;
  left: 30px;
`;


/***/ }),

/***/ 4579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6381);


function Board({ tabClicked , setTabClicked  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_1__/* .SecondContent */ .j_, {
            tabClicked: tabClicked,
            onClick: ()=>setTabClicked(1),
            children: "커뮤니티"
        })
    });
}


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4579));
module.exports = __webpack_exports__;

})();