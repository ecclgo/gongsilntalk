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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Youtube; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var _components_community_Notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/community/Notice */ \"./src/components/community/Notice.tsx\");\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Paging */ \"./src/pages/Community/Paging.tsx\");\n/* harmony import */ var _components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/OrderBy */ \"./src/components/community/OrderBy.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Youtube(param) {\n    let { post , posts , setCurrentPage  } = param;\n    _s();\n    const [clickedOrder, setClickedOrder] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0);\n    const handleClick = (number)=>{\n        setClickedOrder(number);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.NoticeBox, {\n                children: _NoticeDummy__WEBPACK_IMPORTED_MODULE_2__.NoticeData.map((a, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_3__.NoticeTag, {\n                                children: \"공지\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_3__.NoticeTitle, {\n                                children: [\n                                    a.title,\n                                    \" - \" + a.date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, i, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.OrderBox, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.Updated, {\n                        clickedOrder: clickedOrder === 0,\n                        onClick: ()=>{\n                            handleClick(0);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.ClickedOrder, {\n                                clickedOrder: clickedOrder === 0,\n                                onClick: ()=>{\n                                    handleClick(0);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            \"최신순\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.Recommend, {\n                        clickedOrder: clickedOrder === 1,\n                        onClick: ()=>{\n                            handleClick(1);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.ClickedOrder, {\n                                clickedOrder: clickedOrder === 1,\n                                onClick: ()=>{\n                                    handleClick(1);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            \"추천순\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.Repl, {\n                        clickedOrder: clickedOrder === 2,\n                        onClick: ()=>{\n                            handleClick(2);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.ClickedOrder, {\n                                clickedOrder: clickedOrder === 2,\n                                onClick: ()=>{\n                                    handleClick(2);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            \"댓글순\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.ContentsBox, {\n                children: [\n                    post.map((a, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.ProfileBox, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: \"/ProPic.png\",\n                                            alt: \"ProPic\",\n                                            width: 30,\n                                            height: 30,\n                                            style: {\n                                                marginBottom: \"16px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.YUsername, {\n                                            children: \"공실앤톡\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: \"/YImage.png\",\n                                        alt: \"YImage\",\n                                        width: 154,\n                                        height: 108,\n                                        style: {\n                                            position: \"absolute\",\n                                            left: \"600px\",\n                                            marginTop: \"-20px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.Ytitle, {\n                                    children: a.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.YContents, {\n                                    children: a.contents\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.YFooter, {\n                                    children: [\n                                        a.date + \" \",\n                                        \" \",\n                                        \"추천 \" + a.reco + \" \",\n                                        \" \",\n                                        \"댓글 \" + a.repl\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.Line, {}, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Paging__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        totalPosts: posts === null || posts === void 0 ? void 0 : posts.length,\n                        paginate: setCurrentPage\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.MovingBox, {\n                children: \"asdas\"\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Youtube, \"dNe7GOYxdVO6VE0VS0IlnteLb20=\");\n_c = Youtube;\nvar _c;\n$RefreshReg$(_c, \"Youtube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL1lvdXR1YmUvWW91dHViZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQ3JCO0FBQ2U7QUFDd0Q7QUFDaEc7QUFDRztBQUNnRTtBQUNqRTtBQVFsQixTQUFTcUIsUUFBUSxLQUFzQyxFQUFFO1FBQXhDLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxlQUFjLEVBQVMsR0FBdEM7O0lBQzlCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFTO0lBRXpELE1BQU1PLGNBQWMsQ0FBQ0MsU0FBbUI7UUFDdENGLGdCQUFnQkU7SUFDbEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUMxQixzRUFBU0E7MEJBQ1BDLHdEQUFjLENBQUMsQ0FBQzJCLEdBQUdDLElBQU07b0JBQ3hCLHFCQUNFLDhEQUFDQzs7MENBQ0MsOERBQUM1QixtRUFBU0E7MENBQUM7Ozs7OzswQ0FDWCw4REFBQ0MscUVBQVdBOztvQ0FDVHlCLEVBQUVHLEtBQUs7b0NBQ1AsUUFBUUgsRUFBRUksSUFBSTs7Ozs7Ozs7dUJBSlRIOzs7OztnQkFRZDs7Ozs7OzBCQUVGLDhEQUFDL0IscUVBQVFBOzs7OzswQkFDVCw4REFBQ2UsbUVBQVFBOztrQ0FDTCw4REFBQ0Msa0VBQU9BO3dCQUFDUyxjQUFjQSxpQkFBaUI7d0JBQUdVLFNBQVMsSUFBTTs0QkFBQ1IsWUFBWTt3QkFBRTs7MENBQ3ZFLDhEQUFDUix1RUFBWUE7Z0NBQUNNLGNBQWNBLGlCQUFpQjtnQ0FBR1UsU0FBUyxJQUFNO29DQUFDUixZQUFZO2dDQUFFOzs7Ozs7NEJBQUs7Ozs7Ozs7a0NBR3JGLDhEQUFDVixvRUFBU0E7d0JBQUNRLGNBQWNBLGlCQUFpQjt3QkFBR1UsU0FBUyxJQUFNOzRCQUFDUixZQUFZO3dCQUFFOzswQ0FDekUsOERBQUNSLHVFQUFZQTtnQ0FBQ00sY0FBY0EsaUJBQWlCO2dDQUFHVSxTQUFTLElBQU07b0NBQUNSLFlBQVk7Z0NBQUU7Ozs7Ozs0QkFBSzs7Ozs7OztrQ0FHckYsOERBQUNULCtEQUFJQTt3QkFBQ08sY0FBY0EsaUJBQWlCO3dCQUFHVSxTQUFTLElBQU07NEJBQUNSLFlBQVk7d0JBQUU7OzBDQUNwRSw4REFBQ1IsdUVBQVlBO2dDQUFDTSxjQUFjQSxpQkFBaUI7Z0NBQUdVLFNBQVMsSUFBTTtvQ0FBQ1IsWUFBWTtnQ0FBRTs7Ozs7OzRCQUFLOzs7Ozs7O2tDQUdyRiw4REFBQzNCLHFFQUFRQTs7Ozs7Ozs7Ozs7MEJBRWIsOERBQUNNLDBFQUFXQTs7b0JBQ1RnQixLQUFLTyxHQUFHLENBQUMsQ0FBQ0MsR0FBUUMsSUFBVzt3QkFDNUIscUJBQ0UsOERBQUNDOzs4Q0FDQyw4REFBQ3hCLHlFQUFVQTs7c0RBQ1QsOERBQUNLLG1EQUFLQTs0Q0FDSnVCLEtBQUs7NENBQ0xDLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JDLE9BQU87Z0RBQ0xDLGNBQWM7NENBQ2hCOzs7Ozs7c0RBRUYsOERBQUM5Qix3RUFBU0E7c0RBQUM7Ozs7Ozs7Ozs7Ozs4Q0FFYiw4REFBQ3FCOzhDQUNDLDRFQUFDbkIsbURBQUtBO3dDQUNKdUIsS0FBSzt3Q0FDTEMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsT0FBTzs0Q0FDTEUsVUFBVTs0Q0FDVkMsTUFBTTs0Q0FDTkMsV0FBVzt3Q0FDYjs7Ozs7Ozs7Ozs7OENBR0osOERBQUNoQyxxRUFBTUE7OENBQUVrQixFQUFFRyxLQUFLOzs7Ozs7OENBQ2hCLDhEQUFDeEIsd0VBQVNBOzhDQUFFcUIsRUFBRWUsUUFBUTs7Ozs7OzhDQUN0Qiw4REFBQ25DLHNFQUFPQTs7d0NBQ0xvQixFQUFFSSxJQUFJLEdBQUc7d0NBQUk7d0NBQUUsUUFBUUosRUFBRWdCLElBQUksR0FBRzt3Q0FBSzt3Q0FDckMsUUFBUWhCLEVBQUVpQixJQUFJOzs7Ozs7OzhDQUVqQiw4REFBQzlDLGlFQUFJQTs7Ozs7OzJCQWhDRzhCOzs7OztvQkFtQ2Q7a0NBQ0EsOERBQUNqQiwrQ0FBTUE7d0JBQUNrQyxZQUFZekIsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPMEIsTUFBTTt3QkFBRUMsVUFBVTFCOzs7Ozs7Ozs7Ozs7MEJBRS9DLDhEQUFDakIsd0VBQVNBOzBCQUFDOzs7Ozs7OztBQUtqQixDQUFDO0dBcEZ1QmM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0NvbW11bml0eS9Db250ZW50cy9Zb3V0dWJlL1lvdXR1YmUudHN4PzViOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1wdHlCb3gsIExpbmUsIE5vdGljZUJveCB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L05vdGljZUJveFwiO1xuaW1wb3J0IHsgTm90aWNlRGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9Ob3RpY2VEdW1teVwiO1xuaW1wb3J0IHsgTm90aWNlVGFnLCBOb3RpY2VUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L05vdGljZVwiO1xuaW1wb3J0IHsgQ29udGVudHNCb3gsIE1vdmluZ0JveCwgUHJvZmlsZUJveCwgWUNvbnRlbnRzLCBZRm9vdGVyLCBZVXNlcm5hbWUsIFl0aXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L0NvbnRlbnRzQm94XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBQYWdpbmcgZnJvbSBcIi4uLy4uL1BhZ2luZ1wiO1xuaW1wb3J0IHsgT3JkZXJCb3gsIFVwZGF0ZWQsIFJlY29tbWVuZCwgUmVwbCwgQ2xpY2tlZE9yZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvT3JkZXJCeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9zdDogYW55LFxuICBwb3N0czogYW55LFxuICBzZXRDdXJyZW50UGFnZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdXR1YmUoeyBwb3N0LCBwb3N0cywgc2V0Q3VycmVudFBhZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgW2NsaWNrZWRPcmRlciwgc2V0Q2xpY2tlZE9yZGVyXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAobnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICBzZXRDbGlja2VkT3JkZXIobnVtYmVyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Tm90aWNlQm94PlxuICAgICAgICB7Tm90aWNlRGF0YS5tYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8Tm90aWNlVGFnPuqzteyngDwvTm90aWNlVGFnPlxuICAgICAgICAgICAgICA8Tm90aWNlVGl0bGU+XG4gICAgICAgICAgICAgICAge2EudGl0bGV9XG4gICAgICAgICAgICAgICAgeycgLSAnICsgYS5kYXRlfVxuICAgICAgICAgICAgICA8L05vdGljZVRpdGxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L05vdGljZUJveD5cbiAgICAgIDxFbXB0eUJveCAvPlxuICAgICAgPE9yZGVyQm94PlxuICAgICAgICAgIDxVcGRhdGVkIGNsaWNrZWRPcmRlcj17Y2xpY2tlZE9yZGVyID09PSAwfSBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soMCl9fT5cbiAgICAgICAgICAgIDxDbGlja2VkT3JkZXIgY2xpY2tlZE9yZGVyPXtjbGlja2VkT3JkZXIgPT09IDB9IG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljaygwKX19IC8+XG4gICAgICAgICAgICDstZzsi6DsiJxcbiAgICAgICAgICA8L1VwZGF0ZWQ+XG4gICAgICAgICAgPFJlY29tbWVuZCBjbGlja2VkT3JkZXI9e2NsaWNrZWRPcmRlciA9PT0gMX0gb25DbGljaz17KCkgPT4ge2hhbmRsZUNsaWNrKDEpfX0+XG4gICAgICAgICAgICA8Q2xpY2tlZE9yZGVyIGNsaWNrZWRPcmRlcj17Y2xpY2tlZE9yZGVyID09PSAxfSBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soMSl9fSAvPlxuICAgICAgICAgICAg7LaU7LKc7IicXG4gICAgICAgICAgPC9SZWNvbW1lbmQ+XG4gICAgICAgICAgPFJlcGwgY2xpY2tlZE9yZGVyPXtjbGlja2VkT3JkZXIgPT09IDJ9IG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljaygyKX19PlxuICAgICAgICAgICAgPENsaWNrZWRPcmRlciBjbGlja2VkT3JkZXI9e2NsaWNrZWRPcmRlciA9PT0gMn0gb25DbGljaz17KCkgPT4ge2hhbmRsZUNsaWNrKDIpfX0gLz5cbiAgICAgICAgICAgIOuMk+q4gOyInFxuICAgICAgICAgIDwvUmVwbD5cbiAgICAgICAgICA8RW1wdHlCb3ggLz5cbiAgICAgIDwvT3JkZXJCb3g+XG4gICAgICA8Q29udGVudHNCb3g+XG4gICAgICAgIHtwb3N0Lm1hcCgoYTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8UHJvZmlsZUJveD5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17Jy9Qcm9QaWMucG5nJ31cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlByb1BpY1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFlVc2VybmFtZT7qs7Xsi6TslaTthqE8L1lVc2VybmFtZT5cbiAgICAgICAgICAgICAgPC9Qcm9maWxlQm94PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXsnL1lJbWFnZS5wbmcnfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiWUltYWdlXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTR9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwOH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNjAwcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctMjBweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8WXRpdGxlPnthLnRpdGxlfTwvWXRpdGxlPlxuICAgICAgICAgICAgICA8WUNvbnRlbnRzPnthLmNvbnRlbnRzfTwvWUNvbnRlbnRzPlxuICAgICAgICAgICAgICA8WUZvb3Rlcj5cbiAgICAgICAgICAgICAgICB7YS5kYXRlICsgJyAnfSB7J+y2lOyynCAnICsgYS5yZWNvICsgJyAnfXsnICd9XG4gICAgICAgICAgICAgICAgeyfrjJPquIAgJyArIGEucmVwbH1cbiAgICAgICAgICAgICAgPC9ZRm9vdGVyPlxuICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxQYWdpbmcgdG90YWxQb3N0cz17cG9zdHM/Lmxlbmd0aH0gcGFnaW5hdGU9e3NldEN1cnJlbnRQYWdlfS8+XG4gICAgICA8L0NvbnRlbnRzQm94PlxuICAgICAgPE1vdmluZ0JveD5cbiAgICAgICAgYXNkYXNcbiAgICAgIDwvTW92aW5nQm94PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIkVtcHR5Qm94IiwiTGluZSIsIk5vdGljZUJveCIsIk5vdGljZURhdGEiLCJOb3RpY2VUYWciLCJOb3RpY2VUaXRsZSIsIkNvbnRlbnRzQm94IiwiTW92aW5nQm94IiwiUHJvZmlsZUJveCIsIllDb250ZW50cyIsIllGb290ZXIiLCJZVXNlcm5hbWUiLCJZdGl0bGUiLCJJbWFnZSIsIlBhZ2luZyIsIk9yZGVyQm94IiwiVXBkYXRlZCIsIlJlY29tbWVuZCIsIlJlcGwiLCJDbGlja2VkT3JkZXIiLCJ1c2VTdGF0ZSIsIllvdXR1YmUiLCJwb3N0IiwicG9zdHMiLCJzZXRDdXJyZW50UGFnZSIsImNsaWNrZWRPcmRlciIsInNldENsaWNrZWRPcmRlciIsImhhbmRsZUNsaWNrIiwibnVtYmVyIiwibWFwIiwiYSIsImkiLCJkaXYiLCJ0aXRsZSIsImRhdGUiLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsInBvc2l0aW9uIiwibGVmdCIsIm1hcmdpblRvcCIsImNvbnRlbnRzIiwicmVjbyIsInJlcGwiLCJ0b3RhbFBvc3RzIiwibGVuZ3RoIiwicGFnaW5hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/Youtube/Youtube.tsx\n"));

/***/ })

});