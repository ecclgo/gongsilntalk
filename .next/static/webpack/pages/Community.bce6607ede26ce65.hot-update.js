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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Youtube; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var _components_community_Notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/community/Notice */ \"./src/components/community/Notice.tsx\");\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Paging */ \"./src/pages/Community/Paging.tsx\");\n/* harmony import */ var _components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/OrderBy */ \"./src/components/community/OrderBy.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/community/TabSpan */ \"./src/components/community/TabSpan.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Youtube(param) {\n    let { post , posts , setCurrentPage  } = param;\n    _s();\n    const [clickedOrder, setClickedOrder] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0);\n    const handleClick = (number)=>{\n        setClickedOrder(number);\n    };\n    const [showSearch, setShowSearch] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const handleSearchClick = ()=>{\n        setShowSearch(!showSearch);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.NoticeBox, {\n                children: _NoticeDummy__WEBPACK_IMPORTED_MODULE_2__.NoticeData.map((a, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_3__.NoticeTag, {\n                                children: \"공지\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_3__.NoticeTitle, {\n                                children: [\n                                    a.title,\n                                    \" - \" + a.date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, i, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.OrderBox, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.Updated, {\n                        clickedOrder: clickedOrder === 0,\n                        onClick: ()=>{\n                            handleClick(0);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.ClickedOrder, {\n                                clickedOrder: clickedOrder === 0,\n                                onClick: ()=>{\n                                    handleClick(0);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            \"최신순\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.Recommend, {\n                        clickedOrder: clickedOrder === 1,\n                        onClick: ()=>{\n                            handleClick(1);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.ClickedOrder, {\n                                clickedOrder: clickedOrder === 1,\n                                onClick: ()=>{\n                                    handleClick(1);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            \"추천순\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.Repl, {\n                        clickedOrder: clickedOrder === 2,\n                        onClick: ()=>{\n                            handleClick(2);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_7__.ClickedOrder, {\n                                clickedOrder: clickedOrder === 2,\n                                onClick: ()=>{\n                                    handleClick(2);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            \"댓글순\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.ContentsBox, {\n                children: [\n                    post.map((a, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.ProfileBox, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: \"/ProPic.png\",\n                                            alt: \"ProPic\",\n                                            width: 30,\n                                            height: 30,\n                                            style: {\n                                                marginBottom: \"16px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.YUsername, {\n                                            children: \"공실앤톡\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: \"/YImage.png\",\n                                        alt: \"YImage\",\n                                        width: 154,\n                                        height: 108,\n                                        style: {\n                                            position: \"absolute\",\n                                            left: \"600px\",\n                                            marginTop: \"-20px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.Ytitle, {\n                                    children: a.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.YContents, {\n                                    children: a.contents\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.YFooter, {\n                                    children: [\n                                        a.date + \" \",\n                                        \" \",\n                                        \"추천 \" + a.reco + \" \",\n                                        \" \",\n                                        \"댓글 \" + a.repl\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.Line, {}, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Paging__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        totalPosts: posts === null || posts === void 0 ? void 0 : posts.length,\n                        paginate: setCurrentPage\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_4__.MovingBox, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_9__.MovingSpan, {\n                    children: \"공톡 유튜브 추천글\"\n                }, void 0, false, {\n                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Youtube, \"jkhhhZ3hb4IbTtJ8PbfdihE8Z/8=\");\n_c = Youtube;\nvar _c;\n$RefreshReg$(_c, \"Youtube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL1lvdXR1YmUvWW91dHViZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RTtBQUNyQjtBQUNlO0FBQ3dEO0FBQ2hHO0FBQ0c7QUFDZ0U7QUFDakU7QUFDMkI7QUFRN0MsU0FBU3NCLFFBQVEsS0FBc0MsRUFBRTtRQUF4QyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsZUFBYyxFQUFTLEdBQXRDOztJQUM5QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBUztJQUV6RCxNQUFNUSxjQUFjLENBQUNDLFNBQW1CO1FBQ3RDRixnQkFBZ0JFO0lBQ2xCO0lBRUEsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFFbEQsTUFBTVksb0JBQW9CLElBQU07UUFDOUJELGNBQWMsQ0FBQ0Q7SUFDakI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUM1QixzRUFBU0E7MEJBQ1BDLHdEQUFjLENBQUMsQ0FBQytCLEdBQUdDLElBQU07b0JBQ3hCLHFCQUNFLDhEQUFDQzs7MENBQ0MsOERBQUNoQyxtRUFBU0E7MENBQUM7Ozs7OzswQ0FDWCw4REFBQ0MscUVBQVdBOztvQ0FDVDZCLEVBQUVHLEtBQUs7b0NBQ1AsUUFBUUgsRUFBRUksSUFBSTs7Ozs7Ozs7dUJBSlRIOzs7OztnQkFRZDs7Ozs7OzBCQUVGLDhEQUFDbkMscUVBQVFBOzs7OzswQkFDVCw4REFBQ2UsbUVBQVFBOztrQ0FDTCw4REFBQ0Msa0VBQU9BO3dCQUFDVSxjQUFjQSxpQkFBaUI7d0JBQUdhLFNBQVMsSUFBTTs0QkFBQ1gsWUFBWTt3QkFBRTs7MENBQ3ZFLDhEQUFDVCx1RUFBWUE7Z0NBQUNPLGNBQWNBLGlCQUFpQjtnQ0FBR2EsU0FBUyxJQUFNO29DQUFDWCxZQUFZO2dDQUFFOzs7Ozs7NEJBQUs7Ozs7Ozs7a0NBR3JGLDhEQUFDWCxvRUFBU0E7d0JBQUNTLGNBQWNBLGlCQUFpQjt3QkFBR2EsU0FBUyxJQUFNOzRCQUFDWCxZQUFZO3dCQUFFOzswQ0FDekUsOERBQUNULHVFQUFZQTtnQ0FBQ08sY0FBY0EsaUJBQWlCO2dDQUFHYSxTQUFTLElBQU07b0NBQUNYLFlBQVk7Z0NBQUU7Ozs7Ozs0QkFBSzs7Ozs7OztrQ0FHckYsOERBQUNWLCtEQUFJQTt3QkFBQ1EsY0FBY0EsaUJBQWlCO3dCQUFHYSxTQUFTLElBQU07NEJBQUNYLFlBQVk7d0JBQUU7OzBDQUNwRSw4REFBQ1QsdUVBQVlBO2dDQUFDTyxjQUFjQSxpQkFBaUI7Z0NBQUdhLFNBQVMsSUFBTTtvQ0FBQ1gsWUFBWTtnQ0FBRTs7Ozs7OzRCQUFLOzs7Ozs7O2tDQUdyRiw4REFBQzVCLHFFQUFRQTs7Ozs7Ozs7Ozs7MEJBRWIsOERBQUNNLDBFQUFXQTs7b0JBQ1RpQixLQUFLVSxHQUFHLENBQUMsQ0FBQ0MsR0FBUUMsSUFBVzt3QkFDNUIscUJBQ0UsOERBQUNDOzs4Q0FDQyw4REFBQzVCLHlFQUFVQTs7c0RBQ1QsOERBQUNLLG1EQUFLQTs0Q0FDSjJCLEtBQUs7NENBQ0xDLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JDLE9BQU87Z0RBQ0xDLGNBQWM7NENBQ2hCOzs7Ozs7c0RBRUYsOERBQUNsQyx3RUFBU0E7c0RBQUM7Ozs7Ozs7Ozs7Ozs4Q0FFYiw4REFBQ3lCOzhDQUNDLDRFQUFDdkIsbURBQUtBO3dDQUNKMkIsS0FBSzt3Q0FDTEMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsT0FBTzs0Q0FDTEUsVUFBVTs0Q0FDVkMsTUFBTTs0Q0FDTkMsV0FBVzt3Q0FDYjs7Ozs7Ozs7Ozs7OENBR0osOERBQUNwQyxxRUFBTUE7OENBQUVzQixFQUFFRyxLQUFLOzs7Ozs7OENBQ2hCLDhEQUFDNUIsd0VBQVNBOzhDQUFFeUIsRUFBRWUsUUFBUTs7Ozs7OzhDQUN0Qiw4REFBQ3ZDLHNFQUFPQTs7d0NBQ0x3QixFQUFFSSxJQUFJLEdBQUc7d0NBQUk7d0NBQUUsUUFBUUosRUFBRWdCLElBQUksR0FBRzt3Q0FBSTt3Q0FBRSxRQUFRaEIsRUFBRWlCLElBQUk7Ozs7Ozs7OENBRXZELDhEQUFDbEQsaUVBQUlBOzs7Ozs7MkJBL0JHa0M7Ozs7O29CQWtDZDtrQ0FDQSw4REFBQ3JCLCtDQUFNQTt3QkFBQ3NDLFlBQVk1QixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU82QixNQUFNO3dCQUFFQyxVQUFVN0I7Ozs7Ozs7Ozs7OzswQkFFL0MsOERBQUNsQix3RUFBU0E7MEJBQ1IsNEVBQUNjLHFFQUFVQTs4QkFBQzs7Ozs7Ozs7Ozs7OztBQU1wQixDQUFDO0dBM0Z1QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0NvbW11bml0eS9Db250ZW50cy9Zb3V0dWJlL1lvdXR1YmUudHN4PzViOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1wdHlCb3gsIExpbmUsIE5vdGljZUJveCB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L05vdGljZUJveFwiO1xuaW1wb3J0IHsgTm90aWNlRGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9Ob3RpY2VEdW1teVwiO1xuaW1wb3J0IHsgTm90aWNlVGFnLCBOb3RpY2VUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L05vdGljZVwiO1xuaW1wb3J0IHsgQ29udGVudHNCb3gsIE1vdmluZ0JveCwgUHJvZmlsZUJveCwgWUNvbnRlbnRzLCBZRm9vdGVyLCBZVXNlcm5hbWUsIFl0aXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L0NvbnRlbnRzQm94XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBQYWdpbmcgZnJvbSBcIi4uLy4uL1BhZ2luZ1wiO1xuaW1wb3J0IHsgT3JkZXJCb3gsIFVwZGF0ZWQsIFJlY29tbWVuZCwgUmVwbCwgQ2xpY2tlZE9yZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvT3JkZXJCeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vdmluZ1NwYW4gfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW11bml0eS9UYWJTcGFuXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3Q6IGFueSxcbiAgcG9zdHM6IGFueSxcbiAgc2V0Q3VycmVudFBhZ2U6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZb3V0dWJlKHsgcG9zdCwgcG9zdHMsIHNldEN1cnJlbnRQYWdlIH06IFByb3BzKSB7XG4gIGNvbnN0IFtjbGlja2VkT3JkZXIsIHNldENsaWNrZWRPcmRlcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKG51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgc2V0Q2xpY2tlZE9yZGVyKG51bWJlcik7XG4gIH07XG5cbiAgY29uc3QgW3Nob3dTZWFyY2gsIHNldFNob3dTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENsaWNrID0gKCkgPT4ge1xuICAgIHNldFNob3dTZWFyY2goIXNob3dTZWFyY2gpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOb3RpY2VCb3g+XG4gICAgICAgIHtOb3RpY2VEYXRhLm1hcCgoYSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgIDxOb3RpY2VUYWc+6rO17KeAPC9Ob3RpY2VUYWc+XG4gICAgICAgICAgICAgIDxOb3RpY2VUaXRsZT5cbiAgICAgICAgICAgICAgICB7YS50aXRsZX1cbiAgICAgICAgICAgICAgICB7JyAtICcgKyBhLmRhdGV9XG4gICAgICAgICAgICAgIDwvTm90aWNlVGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTm90aWNlQm94PlxuICAgICAgPEVtcHR5Qm94IC8+XG4gICAgICA8T3JkZXJCb3g+XG4gICAgICAgICAgPFVwZGF0ZWQgY2xpY2tlZE9yZGVyPXtjbGlja2VkT3JkZXIgPT09IDB9IG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljaygwKX19PlxuICAgICAgICAgICAgPENsaWNrZWRPcmRlciBjbGlja2VkT3JkZXI9e2NsaWNrZWRPcmRlciA9PT0gMH0gb25DbGljaz17KCkgPT4ge2hhbmRsZUNsaWNrKDApfX0gLz5cbiAgICAgICAgICAgIOy1nOyLoOyInFxuICAgICAgICAgIDwvVXBkYXRlZD5cbiAgICAgICAgICA8UmVjb21tZW5kIGNsaWNrZWRPcmRlcj17Y2xpY2tlZE9yZGVyID09PSAxfSBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soMSl9fT5cbiAgICAgICAgICAgIDxDbGlja2VkT3JkZXIgY2xpY2tlZE9yZGVyPXtjbGlja2VkT3JkZXIgPT09IDF9IG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljaygxKX19IC8+XG4gICAgICAgICAgICDstpTsspzsiJxcbiAgICAgICAgICA8L1JlY29tbWVuZD5cbiAgICAgICAgICA8UmVwbCBjbGlja2VkT3JkZXI9e2NsaWNrZWRPcmRlciA9PT0gMn0gb25DbGljaz17KCkgPT4ge2hhbmRsZUNsaWNrKDIpfX0+XG4gICAgICAgICAgICA8Q2xpY2tlZE9yZGVyIGNsaWNrZWRPcmRlcj17Y2xpY2tlZE9yZGVyID09PSAyfSBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soMil9fSAvPlxuICAgICAgICAgICAg64yT6riA7IicXG4gICAgICAgICAgPC9SZXBsPlxuICAgICAgICAgIDxFbXB0eUJveCAvPlxuICAgICAgPC9PcmRlckJveD5cbiAgICAgIDxDb250ZW50c0JveD5cbiAgICAgICAge3Bvc3QubWFwKChhOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgIDxQcm9maWxlQm94PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXsnL1Byb1BpYy5wbmcnfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvUGljXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8WVVzZXJuYW1lPuqzteyLpOyVpO2GoTwvWVVzZXJuYW1lPlxuICAgICAgICAgICAgICA8L1Byb2ZpbGVCb3g+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9eycvWUltYWdlLnBuZyd9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJZSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1NH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTA4fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc2MDBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy0yMHB4JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxZdGl0bGU+e2EudGl0bGV9PC9ZdGl0bGU+XG4gICAgICAgICAgICAgIDxZQ29udGVudHM+e2EuY29udGVudHN9PC9ZQ29udGVudHM+XG4gICAgICAgICAgICAgIDxZRm9vdGVyPlxuICAgICAgICAgICAgICAgIHthLmRhdGUgKyAnICd9IHsn7LaU7LKcICcgKyBhLnJlY28gKyAnICd9IHsn64yT6riAICcgKyBhLnJlcGx9XG4gICAgICAgICAgICAgIDwvWUZvb3Rlcj5cbiAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8UGFnaW5nIHRvdGFsUG9zdHM9e3Bvc3RzPy5sZW5ndGh9IHBhZ2luYXRlPXtzZXRDdXJyZW50UGFnZX0vPlxuICAgICAgPC9Db250ZW50c0JveD5cbiAgICAgIDxNb3ZpbmdCb3g+XG4gICAgICAgIDxNb3ZpbmdTcGFuPlxuICAgICAgICAgIOqzte2GoSDsnKDtipzruIwg7LaU7LKc6riAXG4gICAgICAgIDwvTW92aW5nU3Bhbj5cbiAgICAgIDwvTW92aW5nQm94PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIkVtcHR5Qm94IiwiTGluZSIsIk5vdGljZUJveCIsIk5vdGljZURhdGEiLCJOb3RpY2VUYWciLCJOb3RpY2VUaXRsZSIsIkNvbnRlbnRzQm94IiwiTW92aW5nQm94IiwiUHJvZmlsZUJveCIsIllDb250ZW50cyIsIllGb290ZXIiLCJZVXNlcm5hbWUiLCJZdGl0bGUiLCJJbWFnZSIsIlBhZ2luZyIsIk9yZGVyQm94IiwiVXBkYXRlZCIsIlJlY29tbWVuZCIsIlJlcGwiLCJDbGlja2VkT3JkZXIiLCJ1c2VTdGF0ZSIsIk1vdmluZ1NwYW4iLCJZb3V0dWJlIiwicG9zdCIsInBvc3RzIiwic2V0Q3VycmVudFBhZ2UiLCJjbGlja2VkT3JkZXIiLCJzZXRDbGlja2VkT3JkZXIiLCJoYW5kbGVDbGljayIsIm51bWJlciIsInNob3dTZWFyY2giLCJzZXRTaG93U2VhcmNoIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJtYXAiLCJhIiwiaSIsImRpdiIsInRpdGxlIiwiZGF0ZSIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJsZWZ0IiwibWFyZ2luVG9wIiwiY29udGVudHMiLCJyZWNvIiwicmVwbCIsInRvdGFsUG9zdHMiLCJsZW5ndGgiLCJwYWdpbmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/Youtube/Youtube.tsx\n"));

/***/ })

});