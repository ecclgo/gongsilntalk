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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Youtube; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Paging */ \"./src/pages/Community/Paging.tsx\");\n/* harmony import */ var _components_community_OrderBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/community/OrderBy */ \"./src/components/community/OrderBy.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/TabSpan */ \"./src/components/community/TabSpan.tsx\");\n/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Notice */ \"./src/pages/Community/Contents/Notice.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Youtube(param) {\n    let { post , yPosts , setCurrentPage  } = param;\n    _s();\n    const [clickedOrder, setClickedOrder] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const handleClick = (number)=>{\n        setClickedOrder(number);\n    };\n    console.log(post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Notice__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_5__.OrderBox, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_5__.Updated, {\n                        clickedOrder: clickedOrder === 0,\n                        onClick: ()=>{\n                            handleClick(0);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_5__.ClickedOrder, {\n                                clickedOrder: clickedOrder === 0,\n                                onClick: ()=>{\n                                    handleClick(0);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            \"최신순\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_5__.Recommend, {\n                        clickedOrder: clickedOrder === 1,\n                        onClick: ()=>{\n                            handleClick(1);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_5__.ClickedOrder, {\n                                clickedOrder: clickedOrder === 1,\n                                onClick: ()=>{\n                                    handleClick(1);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            \"추천순\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_5__.Repl, {\n                        clickedOrder: clickedOrder === 2,\n                        onClick: ()=>{\n                            handleClick(2);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_OrderBy__WEBPACK_IMPORTED_MODULE_5__.ClickedOrder, {\n                                clickedOrder: clickedOrder === 2,\n                                onClick: ()=>{\n                                    handleClick(2);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            \"댓글순\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_2__.ContentsBox, {\n                children: [\n                    post === null || post === void 0 ? void 0 : post.map((a, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_2__.ProfileBox, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/ProPic.png\",\n                                            alt: \"ProPic\",\n                                            width: 30,\n                                            height: 30,\n                                            style: {\n                                                marginBottom: \"16px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_2__.YUsername, {\n                                            children: \"공실앤톡\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/YImage.png\",\n                                        alt: \"YImage\",\n                                        width: 154,\n                                        height: 108,\n                                        style: {\n                                            position: \"absolute\",\n                                            left: \"600px\",\n                                            marginTop: \"-20px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_2__.Ytitle, {\n                                    children: a.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_2__.YContents, {\n                                    children: a.contents\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_2__.YFooter, {\n                                    children: [\n                                        a.date + \" \",\n                                        \" \",\n                                        \"추천 \" + a.reco + \" \",\n                                        \" \",\n                                        \"댓글 \" + a.repl\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.Line, {}, void 0, false, {\n                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Paging__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        totalPosts: yPosts === null || yPosts === void 0 ? void 0 : yPosts.length,\n                        paginate: setCurrentPage\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_2__.MovingBox, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_7__.MovingSpan, {\n                    children: \"공톡 유튜브 추천글\"\n                }, void 0, false, {\n                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/Youtube/Youtube.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Youtube, \"dNe7GOYxdVO6VE0VS0IlnteLb20=\");\n_c = Youtube;\nvar _c;\n$RefreshReg$(_c, \"Youtube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL1lvdXR1YmUvWW91dHViZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ3VFO0FBQ2hHO0FBQ0c7QUFDZ0U7QUFDakU7QUFDMkI7QUFDN0I7QUFRaEIsU0FBU2tCLFFBQVEsS0FBdUMsRUFBRTtRQUF6QyxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRUMsZUFBYyxFQUFTLEdBQXZDOztJQUM5QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBUztJQUV6RCxNQUFNUyxjQUFjLENBQUNDLFNBQW1CO1FBQ3RDRixnQkFBZ0JFO0lBQ2xCO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ1I7SUFFWixxQkFDRTs7MEJBQ0UsOERBQUNGLCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUNQLG1FQUFRQTs7a0NBQ0wsOERBQUNDLGtFQUFPQTt3QkFBQ1csY0FBY0EsaUJBQWlCO3dCQUFHTSxTQUFTLElBQU07NEJBQUNKLFlBQVk7d0JBQUU7OzBDQUN2RSw4REFBQ1YsdUVBQVlBO2dDQUFDUSxjQUFjQSxpQkFBaUI7Z0NBQUdNLFNBQVMsSUFBTTtvQ0FBQ0osWUFBWTtnQ0FBRTs7Ozs7OzRCQUFLOzs7Ozs7O2tDQUdyRiw4REFBQ1osb0VBQVNBO3dCQUFDVSxjQUFjQSxpQkFBaUI7d0JBQUdNLFNBQVMsSUFBTTs0QkFBQ0osWUFBWTt3QkFBRTs7MENBQ3pFLDhEQUFDVix1RUFBWUE7Z0NBQUNRLGNBQWNBLGlCQUFpQjtnQ0FBR00sU0FBUyxJQUFNO29DQUFDSixZQUFZO2dDQUFFOzs7Ozs7NEJBQUs7Ozs7Ozs7a0NBR3JGLDhEQUFDWCwrREFBSUE7d0JBQUNTLGNBQWNBLGlCQUFpQjt3QkFBR00sU0FBUyxJQUFNOzRCQUFDSixZQUFZO3dCQUFFOzswQ0FDcEUsOERBQUNWLHVFQUFZQTtnQ0FBQ1EsY0FBY0EsaUJBQWlCO2dDQUFHTSxTQUFTLElBQU07b0NBQUNKLFlBQVk7Z0NBQUU7Ozs7Ozs0QkFBSzs7Ozs7Ozs7Ozs7OzswQkFJekYsOERBQUN2QiwwRUFBV0E7O29CQUNUa0IsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVSxHQUFHLENBQUMsQ0FBQ0MsR0FBUUMsSUFBYzt3QkFDaEMscUJBQ0UsOERBQUNDOzs4Q0FDQyw4REFBQzdCLHlFQUFVQTs7c0RBQ1QsOERBQUNLLG1EQUFLQTs0Q0FDSnlCLEtBQUs7NENBQ0xDLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JDLE9BQU87Z0RBQ0xDLGNBQWM7NENBQ2hCOzs7Ozs7c0RBRUYsOERBQUNoQyx3RUFBU0E7c0RBQUM7Ozs7Ozs7Ozs7Ozs4Q0FFYiw4REFBQzBCOzhDQUNDLDRFQUFDeEIsbURBQUtBO3dDQUNKeUIsS0FBSzt3Q0FDTEMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsT0FBTzs0Q0FDTEUsVUFBVTs0Q0FDVkMsTUFBTTs0Q0FDTkMsV0FBVzt3Q0FDYjs7Ozs7Ozs7Ozs7OENBR0osOERBQUNsQyxxRUFBTUE7OENBQUV1QixFQUFFWSxLQUFLOzs7Ozs7OENBQ2hCLDhEQUFDdEMsd0VBQVNBOzhDQUFFMEIsRUFBRWEsUUFBUTs7Ozs7OzhDQUN0Qiw4REFBQ3RDLHNFQUFPQTs7d0NBQ0x5QixFQUFFYyxJQUFJLEdBQUc7d0NBQUk7d0NBQUUsUUFBUWQsRUFBRWUsSUFBSSxHQUFHO3dDQUFJO3dDQUFFLFFBQVFmLEVBQUVnQixJQUFJOzs7Ozs7OzhDQUV2RCw4REFBQzlDLGlFQUFJQTs7Ozs7OzJCQS9CRytCOzs7OztvQkFrQ2Q7a0NBQ0EsOERBQUN0QiwrQ0FBTUE7d0JBQUNzQyxZQUFZM0IsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRNEIsTUFBTTt3QkFBRUMsVUFBVTVCOzs7Ozs7Ozs7Ozs7MEJBRWhELDhEQUFDbkIsd0VBQVNBOzBCQUNSLDRFQUFDYyxxRUFBVUE7OEJBQUM7Ozs7Ozs7Ozs7Ozs7QUFNcEIsQ0FBQztHQXhFdUJFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Db21tdW5pdHkvQ29udGVudHMvWW91dHViZS9Zb3V0dWJlLnRzeD81YjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmUgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW11bml0eS9Ob3RpY2VCb3hcIjtcbmltcG9ydCB7IENvbnRlbnRzQm94LCBNb3ZpbmdCb3gsIFByb2ZpbGVCb3gsIFlDb250ZW50cywgWUZvb3RlciwgWVVzZXJuYW1lLCBZdGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW11bml0eS9Db250ZW50c0JveFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUGFnaW5nIGZyb20gXCIuLi8uLi9QYWdpbmdcIjtcbmltcG9ydCB7IE9yZGVyQm94LCBVcGRhdGVkLCBSZWNvbW1lbmQsIFJlcGwsIENsaWNrZWRPcmRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L09yZGVyQnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb3ZpbmdTcGFuIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvVGFiU3BhblwiO1xuaW1wb3J0IE5vdGljZSBmcm9tIFwiLi4vTm90aWNlXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3Q6IGFueSxcbiAgeVBvc3RzOiBhbnksXG4gIHNldEN1cnJlbnRQYWdlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWW91dHViZSh7IHBvc3QsIHlQb3N0cywgc2V0Q3VycmVudFBhZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgW2NsaWNrZWRPcmRlciwgc2V0Q2xpY2tlZE9yZGVyXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAobnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICBzZXRDbGlja2VkT3JkZXIobnVtYmVyKTtcbiAgfTtcbiAgY29uc29sZS5sb2cocG9zdClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Tm90aWNlIC8+XG4gICAgICA8T3JkZXJCb3g+XG4gICAgICAgICAgPFVwZGF0ZWQgY2xpY2tlZE9yZGVyPXtjbGlja2VkT3JkZXIgPT09IDB9IG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljaygwKX19PlxuICAgICAgICAgICAgPENsaWNrZWRPcmRlciBjbGlja2VkT3JkZXI9e2NsaWNrZWRPcmRlciA9PT0gMH0gb25DbGljaz17KCkgPT4ge2hhbmRsZUNsaWNrKDApfX0gLz5cbiAgICAgICAgICAgIOy1nOyLoOyInFxuICAgICAgICAgIDwvVXBkYXRlZD5cbiAgICAgICAgICA8UmVjb21tZW5kIGNsaWNrZWRPcmRlcj17Y2xpY2tlZE9yZGVyID09PSAxfSBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soMSl9fT5cbiAgICAgICAgICAgIDxDbGlja2VkT3JkZXIgY2xpY2tlZE9yZGVyPXtjbGlja2VkT3JkZXIgPT09IDF9IG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljaygxKX19IC8+XG4gICAgICAgICAgICDstpTsspzsiJxcbiAgICAgICAgICA8L1JlY29tbWVuZD5cbiAgICAgICAgICA8UmVwbCBjbGlja2VkT3JkZXI9e2NsaWNrZWRPcmRlciA9PT0gMn0gb25DbGljaz17KCkgPT4ge2hhbmRsZUNsaWNrKDIpfX0+XG4gICAgICAgICAgICA8Q2xpY2tlZE9yZGVyIGNsaWNrZWRPcmRlcj17Y2xpY2tlZE9yZGVyID09PSAyfSBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soMil9fSAvPlxuICAgICAgICAgICAg64yT6riA7IicXG4gICAgICAgICAgPC9SZXBsPlxuICAgICAgPC9PcmRlckJveD5cbiAgICAgIDxDb250ZW50c0JveD5cbiAgICAgICAge3Bvc3Q/Lm1hcCgoYTogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8UHJvZmlsZUJveD5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17Jy9Qcm9QaWMucG5nJ31cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlByb1BpY1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFlVc2VybmFtZT7qs7Xsi6TslaTthqE8L1lVc2VybmFtZT5cbiAgICAgICAgICAgICAgPC9Qcm9maWxlQm94PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXsnL1lJbWFnZS5wbmcnfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiWUltYWdlXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTR9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwOH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNjAwcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctMjBweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8WXRpdGxlPnthLnRpdGxlfTwvWXRpdGxlPlxuICAgICAgICAgICAgICA8WUNvbnRlbnRzPnthLmNvbnRlbnRzfTwvWUNvbnRlbnRzPlxuICAgICAgICAgICAgICA8WUZvb3Rlcj5cbiAgICAgICAgICAgICAgICB7YS5kYXRlICsgJyAnfSB7J+y2lOyynCAnICsgYS5yZWNvICsgJyAnfSB7J+uMk+q4gCAnICsgYS5yZXBsfVxuICAgICAgICAgICAgICA8L1lGb290ZXI+XG4gICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPFBhZ2luZyB0b3RhbFBvc3RzPXt5UG9zdHM/Lmxlbmd0aH0gcGFnaW5hdGU9e3NldEN1cnJlbnRQYWdlfS8+XG4gICAgICA8L0NvbnRlbnRzQm94PlxuICAgICAgPE1vdmluZ0JveD5cbiAgICAgICAgPE1vdmluZ1NwYW4+XG4gICAgICAgICAg6rO17YahIOycoO2KnOu4jCDstpTsspzquIBcbiAgICAgICAgPC9Nb3ZpbmdTcGFuPlxuICAgICAgPC9Nb3ZpbmdCb3g+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsiTGluZSIsIkNvbnRlbnRzQm94IiwiTW92aW5nQm94IiwiUHJvZmlsZUJveCIsIllDb250ZW50cyIsIllGb290ZXIiLCJZVXNlcm5hbWUiLCJZdGl0bGUiLCJJbWFnZSIsIlBhZ2luZyIsIk9yZGVyQm94IiwiVXBkYXRlZCIsIlJlY29tbWVuZCIsIlJlcGwiLCJDbGlja2VkT3JkZXIiLCJ1c2VTdGF0ZSIsIk1vdmluZ1NwYW4iLCJOb3RpY2UiLCJZb3V0dWJlIiwicG9zdCIsInlQb3N0cyIsInNldEN1cnJlbnRQYWdlIiwiY2xpY2tlZE9yZGVyIiwic2V0Q2xpY2tlZE9yZGVyIiwiaGFuZGxlQ2xpY2siLCJudW1iZXIiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsIm1hcCIsImEiLCJpIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsInBvc2l0aW9uIiwibGVmdCIsIm1hcmdpblRvcCIsInRpdGxlIiwiY29udGVudHMiLCJkYXRlIiwicmVjbyIsInJlcGwiLCJ0b3RhbFBvc3RzIiwibGVuZ3RoIiwicGFnaW5hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/Youtube/Youtube.tsx\n"));

/***/ })

});