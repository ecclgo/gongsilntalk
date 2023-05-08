"use strict";
(() => {
var exports = {};
exports.id = 468;
exports.ids = [468,848,821];
exports.modules = {

/***/ 7611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ FindPW)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FindPW = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-888ed9fa-0"
})`
  position: absolute;
  width: 78px;
  height: 18px;
  left: 420px;
  top: 250px;
  bottom: 218px;
  right: 80px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #9b9b9b;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  cursor: pointer;
`;


/***/ }),

/***/ 7987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ KeepLogin)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const KeepLogin = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-f23fbab5-0"
})`
  position: absolute;
  top: 257px;
  left: 102px;
  right: 382px;
  bottom: 218px;

  width: 110px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #666666;
`;


/***/ }),

/***/ 7819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_auth_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1775);
/* harmony import */ var _components_auth_FindPW__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7611);
/* harmony import */ var _components_auth_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5841);
/* harmony import */ var _components_auth_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4912);
/* harmony import */ var _components_auth_KeepLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7987);
/* harmony import */ var _components_auth_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1799);
/* harmony import */ var _components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2120);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_9__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function SignIn() {
    const { register , handleSubmit , getValues , clearErrors , formState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
        mode: "onChange"
    });
    const onSubmit = async (data)=>{
        const { email  } = getValues();
        console.log(data);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_auth_Form__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l, {
            onSubmit: handleSubmit(onSubmit),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_Label__WEBPACK_IMPORTED_MODULE_6__/* .Label */ .__, {
                    children: "공실앤톡 로그인"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_Input__WEBPACK_IMPORTED_MODULE_4__/* .EInput */ .fT, {
                    ...register("email", {
                        required: "email을 입력해주세요."
                    }),
                    name: "email",
                    type: "email",
                    placeholder: "이메일을 입력해주세요."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_Input__WEBPACK_IMPORTED_MODULE_4__/* .PInput */ .V9, {
                    ...register("password", {
                        required: "password를 입력해주세요."
                    }),
                    name: "password",
                    type: "password",
                    placeholder: "비밀번호를 입력해주세요."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_Checkbox__WEBPACK_IMPORTED_MODULE_1__/* .CheckBox */ .Jg, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_KeepLogin__WEBPACK_IMPORTED_MODULE_5__/* .KeepLogin */ .h, {
                    children: "로그인 상태 유지"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_FindPW__WEBPACK_IMPORTED_MODULE_2__/* .FindPW */ .s, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                        href: "/FindPW",
                        children: "비밀번호 찾기"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .zx, {
                    children: "로그인"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [373,664,787,710], () => (__webpack_exec__(7819)));
module.exports = __webpack_exports__;

})();