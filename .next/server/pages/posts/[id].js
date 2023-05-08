"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 3839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MegazineDetail = ({ megazine  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: megazine.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: megazine.content
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegazineDetail);
const getStaticPaths = async ()=>{
    const megazines = (await __webpack_require__.e(/* import() */ 723).then(__webpack_require__.t.bind(__webpack_require__, 5723, 19))).default;
    const paths = megazines.map((megazine)=>({
            params: {
                id: megazine.id
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const megazines = (await __webpack_require__.e(/* import() */ 723).then(__webpack_require__.t.bind(__webpack_require__, 5723, 19))).default;
    const megazine = megazines.find((megazine)=>megazine.id === params?.id);
    return {
        props: {
            megazine
        }
    };
};


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3839));
module.exports = __webpack_exports__;

})();