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

/***/ "./src/pages/Community/Contents/index.tsx":
/*!************************************************!*\
  !*** ./src/pages/Community/Contents/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/community/TabBox */ \"./src/components/community/TabBox.tsx\");\n/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/community/TabSpan */ \"./src/components/community/TabSpan.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var _components_community_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/community/Notice */ \"./src/components/community/Notice.tsx\");\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Contents(param) {\n    let { tabClicked , setTabClicked  } = param;\n    _s();\n    const [innerTab, setInnerTab] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.Youtubes);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const [postPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(5);\n    const indexOfLast = currentPage * postPerPage;\n    const indexOfFirst = indexOfLast - postPerPage;\n    const currentPosts = (posts)=>{\n        let currentPosts = 0;\n        currentPosts = posts === null || posts === void 0 ? void 0 : posts.slice(indexOfFirst, indexOfLast);\n        return currentPosts;\n    };\n    //  API 생성시 수정\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setPost(currentPosts(posts));\n    }, [\n        innerTab\n    ]);\n    console.log(post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__.FirstContent, {\n                tabClicked: tabClicked,\n                onClick: ()=>setTabClicked(0),\n                children: \"공톡 컨텐츠\"\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            tabClicked === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.YoutubeTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(0),\n                        children: \"공톡 유튜브\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.MagazineTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(1),\n                        children: \"공톡 매거진\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    innerTab === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.NoticeBox, {\n                                children: _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.NoticeData.map((a, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTag, {\n                                                children: \"공지\"\n                                            }, i, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTitle, {\n                                                children: [\n                                                    a.title,\n                                                    \" - \" + a.date\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.ContentsBox, {\n                                children: post.map((a, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.ProfileBox, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                        src: \"/ProPic.png\",\n                                                        alt: \"ProPic\",\n                                                        width: 30,\n                                                        height: 30,\n                                                        style: {\n                                                            marginBottom: \"16px\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YUsername, {\n                                                        children: \"공실앤톡\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 34\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                            src: \"/YImage.png\",\n                                                            alt: \"YImage\",\n                                                            width: 100,\n                                                            height: 100\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                            lineNumber: 107,\n                                                            columnNumber: 31\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.Ytitle, {\n                                                children: a.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YContents, {\n                                                children: a.contents\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 118,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YFooter, {\n                                                children: [\n                                                    a.date + \" \",\n                                                    \" \",\n                                                    \"추천 \" + a.reco + \" \",\n                                                    \" \",\n                                                    \"댓글 \" + a.repl\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 121,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.Line, {}, void 0, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, i, true, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 25\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(Contents, \"TEeF7AYwamarGdxpPhZ74dPSD5s=\");\n_c = Contents;\nvar _c;\n$RefreshReg$(_c, \"Contents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDTDtBQUNWO0FBQ2xCO0FBQ21CO0FBQ1E7QUFDNkM7QUFDckY7QUFlaEIsU0FBU21CLFNBQVMsS0FBa0MsRUFBRTtRQUFwQyxFQUFDQyxXQUFVLEVBQUVDLGNBQWEsRUFBUSxHQUFsQzs7SUFDL0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBUztJQUVqRCxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBQ0Usa0RBQVFBO0lBQzNDLE1BQU0sQ0FBQ2lCLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3FCLGFBQWFDLGVBQWUsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU11QixjQUFjSixjQUFjRTtJQUNsQyxNQUFNRyxlQUFlRCxjQUFjRjtJQUVuQyxNQUFNSSxlQUFlLENBQUNSLFFBQWU7UUFDbkMsSUFBSVEsZUFBZTtRQUNuQkEsZUFBZVIsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPUyxLQUFLLENBQUNGLGNBQWNEO1FBQzFDLE9BQU9FO0lBQ1Q7SUFFQSxjQUFjO0lBQ2QsTUFBTSxDQUFDRSxNQUFNQyxRQUFRLEdBQUc1QiwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ3hDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2Q2QixRQUFRSCxhQUFhUjtJQUN2QixHQUFHO1FBQUNGO0tBQVM7SUFFWGMsUUFBUUMsR0FBRyxDQUFDSDtJQUNkLHFCQUNFOzswQkFDRSw4REFBQzdCLHVFQUFZQTtnQkFDVGUsWUFBWUE7Z0JBQ1prQixTQUFTLElBQU1qQixjQUFjOzBCQUM5Qjs7Ozs7O1lBSURELGVBQWUsa0JBRWI7O2tDQUNFLDhEQUFDaEIsb0VBQVVBO3dCQUNUa0IsVUFBVUE7d0JBQ1ZnQixTQUFTLElBQU1mLFlBQVk7a0NBQzVCOzs7Ozs7a0NBR0QsOERBQUNwQixxRUFBV0E7d0JBQ1ZtQixVQUFVQTt3QkFDVmdCLFNBQVMsSUFBTWYsWUFBWTtrQ0FDNUI7Ozs7OztvQkFJQ0QsYUFBYSxrQkFFWDs7MENBQ0EsOERBQUNwQixzRUFBU0E7MENBRVJNLHdEQUFjLENBQUMsQ0FBQ2dDLEdBQUdDLElBQU07b0NBQ3JCLHFCQUNFLDhEQUFDQzs7MERBQ0MsOERBQUNoQyxtRUFBU0E7MERBQVM7K0NBQUgrQjs7Ozs7MERBR2hCLDhEQUFDOUIscUVBQVdBOztvREFDVDZCLEVBQUVHLEtBQUs7b0RBQ1AsUUFBUUgsRUFBRUksSUFBSTs7Ozs7Ozs7Ozs7OztnQ0FJdkI7Ozs7OzswQ0FHSiw4REFBQzVDLHFFQUFRQTs7Ozs7MENBQ1QsOERBQUNZLDBFQUFXQTswQ0FFUnNCLEtBQUtLLEdBQUcsQ0FBQyxDQUFDQyxHQUFRQyxJQUFXO29DQUMzQixxQkFDRSw4REFBQ0M7OzBEQUNDLDhEQUFDN0IseUVBQVVBOztrRUFDVCw4REFBQ0ssbURBQUtBO3dEQUNKMkIsS0FBSzt3REFDTEMsS0FBSTt3REFDSkMsT0FBTzt3REFDUEMsUUFBUTt3REFDVkMsT0FBTzs0REFDTEMsY0FBYzt3REFDaEI7Ozs7OztrRUFBSyw4REFBQ2xDLHdFQUFTQTtrRUFBQzs7Ozs7O2tFQUNoQiw4REFBQzBCO2tFQUNDLDRFQUFDeEIsbURBQUtBOzREQUNKMkIsS0FBSzs0REFDTEMsS0FBSTs0REFDSkMsT0FBTzs0REFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBSWQsOERBQUMvQixxRUFBTUE7MERBQ0p1QixFQUFFRyxLQUFLOzs7Ozs7MERBRVYsOERBQUM3Qix3RUFBU0E7MERBQ1AwQixFQUFFVyxRQUFROzs7Ozs7MERBRWIsOERBQUNwQyxzRUFBT0E7O29EQUNMeUIsRUFBRUksSUFBSSxHQUFHO29EQUFJO29EQUFFLFFBQVFKLEVBQUVZLElBQUksR0FBRztvREFBSTtvREFBRSxRQUFRWixFQUFFYSxJQUFJOzs7Ozs7OzBEQUV2RCw4REFBQ3BELGlFQUFJQTs7Ozs7O3VDQTVCR3dDOzs7OztnQ0ErQmQ7Ozs7Ozs7dUNBTU4sSUFBSTs7K0JBS1YsSUFBSTs7O0FBSVosQ0FBQztHQXZIdUJ0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL2luZGV4LnRzeD9mMTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVtcHR5Qm94LCBMaW5lLCBOb3RpY2VCb3ggfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW11bml0eS9Ob3RpY2VCb3hcIjtcbmltcG9ydCB7IE1hZ2F6aW5lVGFiLCBZb3V0dWJlVGFiIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvVGFiQm94XCI7XG5pbXBvcnQgeyBGaXJzdENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW11bml0eS9UYWJTcGFuXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOb3RpY2VEYXRhLCBZb3V0dWJlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9Ob3RpY2VEdW1teVwiO1xuaW1wb3J0IHsgTm90aWNlVGFnLCBOb3RpY2VUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L05vdGljZVwiO1xuaW1wb3J0IHsgQ29udGVudHNCb3gsIFByb2ZpbGVCb3gsIFlDb250ZW50cywgWUZvb3RlciwgWVVzZXJuYW1lLCBZdGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW11bml0eS9Db250ZW50c0JveFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRhYkNsaWNrZWQ6IG51bWJlcixcbiAgc2V0VGFiQ2xpY2tlZDogIFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxufVxuXG50eXBlIFBvc3QgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIGNvbnRlbnRzOiBzdHJpbmcsXG4gIGRhdGU6IHN0cmluZyxcbiAgcmVjbzogbnVtYmVyLFxuICByZXBsOiBudW1iZXIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRzKHt0YWJDbGlja2VkLCBzZXRUYWJDbGlja2VkfTogUHJvcHMpIHsgXG4gIGNvbnN0IFtpbm5lclRhYiwgc2V0SW5uZXJUYWJdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFlvdXR1YmVzKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3Bvc3RQZXJQYWdlLCBzZXRQb3N0UGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTtcblxuICBjb25zdCBpbmRleE9mTGFzdCA9IGN1cnJlbnRQYWdlICogcG9zdFBlclBhZ2U7XG4gIGNvbnN0IGluZGV4T2ZGaXJzdCA9IGluZGV4T2ZMYXN0IC0gcG9zdFBlclBhZ2U7XG5cbiAgY29uc3QgY3VycmVudFBvc3RzID0gKHBvc3RzOiBhbnkpID0+IHtcbiAgICBsZXQgY3VycmVudFBvc3RzID0gMDtcbiAgICBjdXJyZW50UG9zdHMgPSBwb3N0cz8uc2xpY2UoaW5kZXhPZkZpcnN0LCBpbmRleE9mTGFzdCk7XG4gICAgcmV0dXJuIGN1cnJlbnRQb3N0cztcbiAgfTtcblxuICAvLyAgQVBJIOyDneyEseyLnCDsiJjsoJVcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UG9zdChjdXJyZW50UG9zdHMocG9zdHMpKTtcbiAgfSwgW2lubmVyVGFiXSk7XG5cbiAgICBjb25zb2xlLmxvZyhwb3N0KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZpcnN0Q29udGVudFxuICAgICAgICAgIHRhYkNsaWNrZWQ9e3RhYkNsaWNrZWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiQ2xpY2tlZCgwKX1cbiAgICAgICAgPlxuICAgICAgICAgIOqzte2GoSDsu6jthZDsuKBcbiAgICAgIDwvRmlyc3RDb250ZW50PlxuICAgICAge1xuICAgICAgICB0YWJDbGlja2VkID09PSAwID9cbiAgICAgICAgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8WW91dHViZVRhYlxuICAgICAgICAgICAgICBpbm5lclRhYj17aW5uZXJUYWJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElubmVyVGFiKDApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDqs7XthqEg7Jyg7Yqc67iMXG4gICAgICAgICAgICA8L1lvdXR1YmVUYWI+XG4gICAgICAgICAgICA8TWFnYXppbmVUYWJcbiAgICAgICAgICAgICAgaW5uZXJUYWI9e2lubmVyVGFifVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbm5lclRhYigxKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg6rO17YahIOunpOqxsOynhFxuICAgICAgICAgICAgPC9NYWdhemluZVRhYj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW5uZXJUYWIgPT09IDAgP1xuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Tm90aWNlQm94PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgTm90aWNlRGF0YS5tYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGljZVRhZyBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOqzteyngFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05vdGljZVRhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGljZVRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnIC0gJyArIGEuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ob3RpY2VUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L05vdGljZUJveD5cbiAgICAgICAgICAgICAgICA8RW1wdHlCb3ggLz5cbiAgICAgICAgICAgICAgICA8Q29udGVudHNCb3g+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3QubWFwKChhOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy9Qcm9QaWMucG5nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb1BpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+PFlVc2VybmFtZT7qs7Xsi6TslaTthqE8L1lVc2VybmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy9ZSW1hZ2UucG5nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiWUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxZdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2EudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvWXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8WUNvbnRlbnRzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthLmNvbnRlbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1lDb250ZW50cz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFlGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2EuZGF0ZSArIFwiIFwifSB7XCLstpTsspwgXCIgKyBhLnJlY28gKyBcIiBcIn0ge1wi64yT6riAIFwiICsgYS5yZXBsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1lGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Db250ZW50c0JveD5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgICA6XG4gICAgICAgIG51bGxcbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufTsiXSwibmFtZXMiOlsiRW1wdHlCb3giLCJMaW5lIiwiTm90aWNlQm94IiwiTWFnYXppbmVUYWIiLCJZb3V0dWJlVGFiIiwiRmlyc3RDb250ZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOb3RpY2VEYXRhIiwiWW91dHViZXMiLCJOb3RpY2VUYWciLCJOb3RpY2VUaXRsZSIsIkNvbnRlbnRzQm94IiwiUHJvZmlsZUJveCIsIllDb250ZW50cyIsIllGb290ZXIiLCJZVXNlcm5hbWUiLCJZdGl0bGUiLCJJbWFnZSIsIkNvbnRlbnRzIiwidGFiQ2xpY2tlZCIsInNldFRhYkNsaWNrZWQiLCJpbm5lclRhYiIsInNldElubmVyVGFiIiwicG9zdHMiLCJzZXRQb3N0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwb3N0UGVyUGFnZSIsInNldFBvc3RQZXJQYWdlIiwiaW5kZXhPZkxhc3QiLCJpbmRleE9mRmlyc3QiLCJjdXJyZW50UG9zdHMiLCJzbGljZSIsInBvc3QiLCJzZXRQb3N0IiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJtYXAiLCJhIiwiaSIsImRpdiIsInRpdGxlIiwiZGF0ZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJjb250ZW50cyIsInJlY28iLCJyZXBsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/index.tsx\n"));

/***/ })

});