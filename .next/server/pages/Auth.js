"use strict";
(() => {
var exports = {};
exports.id = 984;
exports.ids = [984,821];
exports.modules = {

/***/ 2027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthBox": () => (/* binding */ AuthBox),
/* harmony export */   "AuthText": () => (/* binding */ AuthText),
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_auth_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4912);
/* harmony import */ var _components_auth_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1799);
/* harmony import */ var _components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);






const AuthBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-411b4455-0"
})`
  position: absolute;
  width: 578px;
  height: 526px;
  left: 671px;
  top: 311px;

  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;
const AuthText = styled_components__WEBPACK_IMPORTED_MODULE_5___default().span.withConfig({
    componentId: "sc-411b4455-1"
})`
  position: absolute;
  width: 84px;
  height: 28px;
  top: 80px;
  left: 247px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #000000;
`;
function Auth() {
    const [authCode, setAuthCode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AuthBox, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthText, {
                    children: "본인 인증"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_Label__WEBPACK_IMPORTED_MODULE_2__/* .AuthName */ .VS, {
                            children: "이름"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_Input__WEBPACK_IMPORTED_MODULE_1__/* .AuthNameInput */ .C$, {
                            name: "name",
                            type: "text",
                            placeholder: "홍길동"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_Label__WEBPACK_IMPORTED_MODULE_2__/* .AuthPhone */ .KE, {
                            children: "휴대전화"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_Input__WEBPACK_IMPORTED_MODULE_1__/* .AuthPhoneNum */ .zR, {
                            name: "phone",
                            type: "text",
                            placeholder: "-없이 숫자만 입력"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_3__/* .AuthSend */ .KY, {
                            children: "인증번호 전송"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_Input__WEBPACK_IMPORTED_MODULE_1__/* .AuthPhoneSMS */ .qW, {
                            name: "confirmNum",
                            type: "text",
                            placeholder: "인증번호 입력"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_3__/* .AuthConfirm */ .zO, {
                            authCode: authCode,
                            disabled: authCode,
                            children: "인증번호 확인"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_3__/* .ConfirmSend */ .NN, {
                            children: "완료"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [787], () => (__webpack_exec__(2027)));
module.exports = __webpack_exports__;

})();