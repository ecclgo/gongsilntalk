"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Community",{

/***/ "./src/pages/Community/Paging.tsx":
/*!****************************************!*\
  !*** ./src/pages/Community/Paging.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Paging; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_PagingStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/PagingStyle */ \"./src/components/community/PagingStyle.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Paging(param) {\n    let { totalPosts , paginate  } = param;\n    _s();\n    const [activeBtn, setActiveBtb] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const handleClick = (number)=>{\n        setActiveBtb(number);\n    };\n    const pageNumbers = [];\n    for(let i = 1; i < Math.ceil(totalPosts / 5); i++){\n        pageNumbers.push(i);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_PagingStyle__WEBPACK_IMPORTED_MODULE_1__.PageUl, {\n                    children: pageNumbers.map((number)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_PagingStyle__WEBPACK_IMPORTED_MODULE_1__.PageLi, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_PagingStyle__WEBPACK_IMPORTED_MODULE_1__.PageSpan, {\n                                children: number\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Paging.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 17\n                            }, this)\n                        }, number, false, {\n                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Paging.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Paging.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Paging.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Paging.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Paging, \"0sefinO2ZXKHNTPDzoBYvxeiaYU=\");\n_c = Paging;\nvar _c;\n$RefreshReg$(_c, \"Paging\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L1BhZ2luZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEU7QUFDN0M7QUFPbEIsU0FBU0ksT0FBTyxLQUErQixFQUFFO1FBQWpDLEVBQUVDLFdBQVUsRUFBRUMsU0FBUSxFQUFTLEdBQS9COztJQUM3QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQVM7SUFFbkQsTUFBTU0sY0FBYyxDQUFDQyxTQUFtQjtRQUN0Q0YsYUFBYUU7SUFDZjtJQUVBLE1BQU1DLGNBQWMsRUFBRTtJQUN0QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUMsS0FBS0MsSUFBSSxDQUFDVCxhQUFhLElBQUlPLElBQUs7UUFDbERELFlBQVlJLElBQUksQ0FBQ0g7SUFDbkI7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0k7c0JBQ0MsNEVBQUNDOzBCQUNDLDRFQUFDZixxRUFBTUE7OEJBQ0pTLFlBQVlPLEdBQUcsQ0FBQyxDQUFDUix1QkFDaEIsOERBQUNWLHFFQUFNQTtzQ0FDTCw0RUFBQ0MsdUVBQVFBOzBDQUNOUzs7Ozs7OzJCQUZRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzNCLENBQUM7R0E3QnVCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvQ29tbXVuaXR5L1BhZ2luZy50c3g/MGFkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlTGksIFBhZ2VTcGFuLCBQYWdlVWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW11bml0eS9QYWdpbmdTdHlsZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdG90YWxQb3N0czogbnVtYmVyLFxuICBwYWdpbmF0ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmcoeyB0b3RhbFBvc3RzLCBwYWdpbmF0ZSB9OiBQcm9wcykge1xuICBjb25zdCBbYWN0aXZlQnRuLCBzZXRBY3RpdmVCdGJdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChudW1iZXI6IG51bWJlcikgPT4ge1xuICAgIHNldEFjdGl2ZUJ0YihudW1iZXIpO1xuICB9O1xuXG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgTWF0aC5jZWlsKHRvdGFsUG9zdHMgLyA1KTsgaSsrKSB7XG4gICAgcGFnZU51bWJlcnMucHVzaChpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxQYWdlVWw+XG4gICAgICAgICAgICB7cGFnZU51bWJlcnMubWFwKChudW1iZXI6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8UGFnZUxpIGtleT17bnVtYmVyfT5cbiAgICAgICAgICAgICAgICA8UGFnZVNwYW4+XG4gICAgICAgICAgICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgICAgICAgIDwvUGFnZVNwYW4+XG4gICAgICAgICAgICAgIDwvUGFnZUxpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9QYWdlVWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUGFnZUxpIiwiUGFnZVNwYW4iLCJQYWdlVWwiLCJ1c2VTdGF0ZSIsIlBhZ2luZyIsInRvdGFsUG9zdHMiLCJwYWdpbmF0ZSIsImFjdGl2ZUJ0biIsInNldEFjdGl2ZUJ0YiIsImhhbmRsZUNsaWNrIiwibnVtYmVyIiwicGFnZU51bWJlcnMiLCJpIiwiTWF0aCIsImNlaWwiLCJwdXNoIiwiZGl2IiwibmF2IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Community/Paging.tsx\n"));

/***/ })

});