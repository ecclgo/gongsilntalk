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

/***/ "./src/pages/Community/Contents/Youtube/Youtube.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/Community/Contents/Youtube/Youtube.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Youtube; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var _components_community_Notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/community/Notice */ \"./src/components/community/Notice.tsx\");\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Paging */ \"./src/pages/Community/Paging.tsx\");\n/* harmony import */ var _components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/OrderBy */ \"./src/components/community/OrderBy.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Youtube(param) {\n    let { post , posts , setCurrentPage  } = param;\n    _s();\n    const [clickedOrder, setClickedOrder] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0);\n    const handleClick = (number)=>{\n        setClickedOrder(number);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.NoticeBox, {\n                children: _NoticeDummy__WEBPACK_IMPORTED_MODULE_2__.NoticeData.map((a, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_3__.NoticeTag, {\n                                children: \"공지\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_3__.NoticeTitle, {\n                                children: [\n                                    a.title,\n                                    \" - \" + a.date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, i, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.OrderBox, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.Updated, {\n                            clickedOrder: clickedOrder === 0,\n                            onClick: ()=>{\n                                handleClick(0);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.ClickedOrder, {}, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                \"최신순\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.Recommend, {\n                            clickedOrder: clickedOrder === 1,\n                            onClick: ()=>{\n                                handleClick(1);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.ClickedOrder, {}, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                \"추천순\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.Repl, {\n                            clickedOrder: clickedOrder === 2,\n                            onClick: ()=>{\n                                handleClick(2);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.ClickedOrder, {}, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                \"댓글순\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.ContentsBox, {\n                children: [\n                    post.map((a, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.ProfileBox, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: \"/ProPic.png\",\n                                            alt: \"ProPic\",\n                                            width: 30,\n                                            height: 30,\n                                            style: {\n                                                marginBottom: \"16px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.YUsername, {\n                                            children: \"공실앤톡\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: \"/YImage.png\",\n                                        alt: \"YImage\",\n                                        width: 154,\n                                        height: 108,\n                                        style: {\n                                            position: \"absolute\",\n                                            left: \"600px\",\n                                            marginTop: \"-5px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.Ytitle, {\n                                    children: a.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.YContents, {\n                                    children: a.contents\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.YFooter, {\n                                    children: [\n                                        a.date + \" \",\n                                        \" \",\n                                        \"추천 \" + a.reco + \" \",\n                                        \" \",\n                                        \"댓글 \" + a.repl\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.Line, {}, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Paging__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        totalPosts: posts === null || posts === void 0 ? void 0 : posts.length,\n                        paginate: setCurrentPage\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Youtube, \"dNe7GOYxdVO6VE0VS0IlnteLb20=\");\n_c = Youtube;\nvar _c;\n$RefreshReg$(_c, \"Youtube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL1lvdXR1YmUvWW91dHViZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQ3JCO0FBQ2U7QUFDNkM7QUFDckY7QUFDRztBQUNnRTtBQUNqRTtBQVFsQixTQUFTb0IsUUFBUSxLQUFzQyxFQUFFO1FBQXhDLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxlQUFjLEVBQVMsR0FBdEM7O0lBQzlCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFTO0lBRXpELE1BQU1PLGNBQWMsQ0FBQ0MsU0FBbUI7UUFDdENGLGdCQUFnQkU7SUFDbEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN6QixzRUFBU0E7MEJBQ1BDLHdEQUFjLENBQUMsQ0FBQzBCLEdBQUdDLElBQU07b0JBQ3hCLHFCQUNFLDhEQUFDQzs7MENBQ0MsOERBQUMzQixtRUFBU0E7MENBQUM7Ozs7OzswQ0FDWCw4REFBQ0MscUVBQVdBOztvQ0FDVHdCLEVBQUVHLEtBQUs7b0NBQ1AsUUFBUUgsRUFBRUksSUFBSTs7Ozs7Ozs7dUJBSlRIOzs7OztnQkFRZDs7Ozs7OzBCQUVGLDhEQUFDOUIscUVBQVFBOzs7OzswQkFDVCw4REFBQ2MsbUVBQVFBOzBCQUNQOztzQ0FDRSw4REFBQ0Msa0VBQU9BOzRCQUFDUyxjQUFjQSxpQkFBaUI7NEJBQUdVLFNBQVMsSUFBTTtnQ0FBQ1IsWUFBWTs0QkFBRTs7OENBQ3ZFLDhEQUFDUix1RUFBWUE7Ozs7O2dDQUFHOzs7Ozs7O3NDQUdsQiw4REFBQ0Ysb0VBQVNBOzRCQUFDUSxjQUFjQSxpQkFBaUI7NEJBQUdVLFNBQVMsSUFBTTtnQ0FBQ1IsWUFBWTs0QkFBRTs7OENBQ3pFLDhEQUFDUix1RUFBWUE7Ozs7O2dDQUFHOzs7Ozs7O3NDQUdsQiw4REFBQ0QsK0RBQUlBOzRCQUFDTyxjQUFjQSxpQkFBaUI7NEJBQUdVLFNBQVMsSUFBTTtnQ0FBQ1IsWUFBWTs0QkFBRTs7OENBQ3BFLDhEQUFDUix1RUFBWUE7Ozs7O2dDQUFHOzs7Ozs7Ozs7Ozs7OzswQkFLdEIsOERBQUNaLDBFQUFXQTs7b0JBQ1RlLEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxHQUFRQyxJQUFXO3dCQUM1QixxQkFDRSw4REFBQ0M7OzhDQUNDLDhEQUFDeEIseUVBQVVBOztzREFDVCw4REFBQ0ssbURBQUtBOzRDQUNKdUIsS0FBSzs0Q0FDTEMsS0FBSTs0Q0FDSkMsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUkMsT0FBTztnREFDTEMsY0FBYzs0Q0FDaEI7Ozs7OztzREFFRiw4REFBQzlCLHdFQUFTQTtzREFBQzs7Ozs7Ozs7Ozs7OzhDQUViLDhEQUFDcUI7OENBQ0MsNEVBQUNuQixtREFBS0E7d0NBQ0p1QixLQUFLO3dDQUNMQyxLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSQyxPQUFPOzRDQUNMRSxVQUFVOzRDQUNWQyxNQUFNOzRDQUNOQyxXQUFXO3dDQUNiOzs7Ozs7Ozs7Ozs4Q0FHSiw4REFBQ2hDLHFFQUFNQTs4Q0FBRWtCLEVBQUVHLEtBQUs7Ozs7Ozs4Q0FDaEIsOERBQUN4Qix3RUFBU0E7OENBQUVxQixFQUFFZSxRQUFROzs7Ozs7OENBQ3RCLDhEQUFDbkMsc0VBQU9BOzt3Q0FDTG9CLEVBQUVJLElBQUksR0FBRzt3Q0FBSTt3Q0FBRSxRQUFRSixFQUFFZ0IsSUFBSSxHQUFHO3dDQUFLO3dDQUNyQyxRQUFRaEIsRUFBRWlCLElBQUk7Ozs7Ozs7OENBRWpCLDhEQUFDN0MsaUVBQUlBOzs7Ozs7MkJBaENHNkI7Ozs7O29CQW1DZDtrQ0FDQSw4REFBQ2pCLCtDQUFNQTt3QkFBQ2tDLFlBQVl6QixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU8wQixNQUFNO3dCQUFFQyxVQUFVMUI7Ozs7Ozs7Ozs7Ozs7O0FBSXJELENBQUM7R0FsRnVCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL1lvdXR1YmUvWW91dHViZS50c3g/NWI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbXB0eUJveCwgTGluZSwgTm90aWNlQm94IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvTm90aWNlQm94XCI7XG5pbXBvcnQgeyBOb3RpY2VEYXRhIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL05vdGljZUR1bW15XCI7XG5pbXBvcnQgeyBOb3RpY2VUYWcsIE5vdGljZVRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvTm90aWNlXCI7XG5pbXBvcnQgeyBDb250ZW50c0JveCwgUHJvZmlsZUJveCwgWUNvbnRlbnRzLCBZRm9vdGVyLCBZVXNlcm5hbWUsIFl0aXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L0NvbnRlbnRzQm94XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBQYWdpbmcgZnJvbSBcIi4uLy4uL1BhZ2luZ1wiO1xuaW1wb3J0IHsgT3JkZXJCb3gsIFVwZGF0ZWQsIFJlY29tbWVuZCwgUmVwbCwgQ2xpY2tlZE9yZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvT3JkZXJCeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9zdDogYW55LFxuICBwb3N0czogYW55LFxuICBzZXRDdXJyZW50UGFnZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdXR1YmUoeyBwb3N0LCBwb3N0cywgc2V0Q3VycmVudFBhZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgW2NsaWNrZWRPcmRlciwgc2V0Q2xpY2tlZE9yZGVyXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAobnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICBzZXRDbGlja2VkT3JkZXIobnVtYmVyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Tm90aWNlQm94PlxuICAgICAgICB7Tm90aWNlRGF0YS5tYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8Tm90aWNlVGFnPuqzteyngDwvTm90aWNlVGFnPlxuICAgICAgICAgICAgICA8Tm90aWNlVGl0bGU+XG4gICAgICAgICAgICAgICAge2EudGl0bGV9XG4gICAgICAgICAgICAgICAgeycgLSAnICsgYS5kYXRlfVxuICAgICAgICAgICAgICA8L05vdGljZVRpdGxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L05vdGljZUJveD5cbiAgICAgIDxFbXB0eUJveCAvPlxuICAgICAgPE9yZGVyQm94PlxuICAgICAgICA8PlxuICAgICAgICAgIDxVcGRhdGVkIGNsaWNrZWRPcmRlcj17Y2xpY2tlZE9yZGVyID09PSAwfSBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soMCl9fT5cbiAgICAgICAgICAgIDxDbGlja2VkT3JkZXIgLz5cbiAgICAgICAgICAgIOy1nOyLoOyInFxuICAgICAgICAgIDwvVXBkYXRlZD5cbiAgICAgICAgICA8UmVjb21tZW5kIGNsaWNrZWRPcmRlcj17Y2xpY2tlZE9yZGVyID09PSAxfSBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soMSl9fT5cbiAgICAgICAgICAgIDxDbGlja2VkT3JkZXIgLz5cbiAgICAgICAgICAgIOy2lOyynOyInFxuICAgICAgICAgIDwvUmVjb21tZW5kPlxuICAgICAgICAgIDxSZXBsIGNsaWNrZWRPcmRlcj17Y2xpY2tlZE9yZGVyID09PSAyfSBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soMil9fT5cbiAgICAgICAgICAgIDxDbGlja2VkT3JkZXIgLz5cbiAgICAgICAgICAgIOuMk+q4gOyInFxuICAgICAgICAgIDwvUmVwbD5cbiAgICAgICAgPC8+XG4gICAgICA8L09yZGVyQm94PlxuICAgICAgPENvbnRlbnRzQm94PlxuICAgICAgICB7cG9zdC5tYXAoKGE6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgPFByb2ZpbGVCb3g+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9eycvUHJvUGljLnBuZyd9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9QaWNcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxZVXNlcm5hbWU+6rO17Iuk7JWk7YahPC9ZVXNlcm5hbWU+XG4gICAgICAgICAgICAgIDwvUHJvZmlsZUJveD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17Jy9ZSW1hZ2UucG5nJ31cbiAgICAgICAgICAgICAgICAgIGFsdD1cIllJbWFnZVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTU0fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDh9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzYwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTVweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8WXRpdGxlPnthLnRpdGxlfTwvWXRpdGxlPlxuICAgICAgICAgICAgICA8WUNvbnRlbnRzPnthLmNvbnRlbnRzfTwvWUNvbnRlbnRzPlxuICAgICAgICAgICAgICA8WUZvb3Rlcj5cbiAgICAgICAgICAgICAgICB7YS5kYXRlICsgJyAnfSB7J+y2lOyynCAnICsgYS5yZWNvICsgJyAnfXsnICd9XG4gICAgICAgICAgICAgICAgeyfrjJPquIAgJyArIGEucmVwbH1cbiAgICAgICAgICAgICAgPC9ZRm9vdGVyPlxuICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxQYWdpbmcgdG90YWxQb3N0cz17cG9zdHM/Lmxlbmd0aH0gcGFnaW5hdGU9e3NldEN1cnJlbnRQYWdlfS8+XG4gICAgICA8L0NvbnRlbnRzQm94PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIkVtcHR5Qm94IiwiTGluZSIsIk5vdGljZUJveCIsIk5vdGljZURhdGEiLCJOb3RpY2VUYWciLCJOb3RpY2VUaXRsZSIsIkNvbnRlbnRzQm94IiwiUHJvZmlsZUJveCIsIllDb250ZW50cyIsIllGb290ZXIiLCJZVXNlcm5hbWUiLCJZdGl0bGUiLCJJbWFnZSIsIlBhZ2luZyIsIk9yZGVyQm94IiwiVXBkYXRlZCIsIlJlY29tbWVuZCIsIlJlcGwiLCJDbGlja2VkT3JkZXIiLCJ1c2VTdGF0ZSIsIllvdXR1YmUiLCJwb3N0IiwicG9zdHMiLCJzZXRDdXJyZW50UGFnZSIsImNsaWNrZWRPcmRlciIsInNldENsaWNrZWRPcmRlciIsImhhbmRsZUNsaWNrIiwibnVtYmVyIiwibWFwIiwiYSIsImkiLCJkaXYiLCJ0aXRsZSIsImRhdGUiLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsInBvc2l0aW9uIiwibGVmdCIsIm1hcmdpblRvcCIsImNvbnRlbnRzIiwicmVjbyIsInJlcGwiLCJ0b3RhbFBvc3RzIiwibGVuZ3RoIiwicGFnaW5hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/Youtube/Youtube.tsx\n"));

/***/ })

});