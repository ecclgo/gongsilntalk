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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/community/TabBox */ \"./src/components/community/TabBox.tsx\");\n/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/community/TabSpan */ \"./src/components/community/TabSpan.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var _components_community_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/community/Notice */ \"./src/components/community/Notice.tsx\");\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Contents(param) {\n    let { tabClicked , setTabClicked  } = param;\n    _s();\n    const [innerTab, setInnerTab] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.Youtubes);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const [postPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(5);\n    const indexOfLast = currentPage * postPerPage;\n    const indexOfFirst = indexOfLast - postPerPage;\n    const currentPosts = (posts)=>{\n        let currentPosts = 0;\n        currentPosts = posts === null || posts === void 0 ? void 0 : posts.slice(indexOfFirst, indexOfLast);\n        return currentPosts;\n    };\n    //  API 생성시 수정\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setPost(currentPosts(posts));\n    }, [\n        innerTab\n    ]);\n    console.log(post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__.FirstContent, {\n                tabClicked: tabClicked,\n                onClick: ()=>setTabClicked(0),\n                children: \"공톡 컨텐츠\"\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            tabClicked === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.YoutubeTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(0),\n                        children: \"공톡 유튜브\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.MagazineTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(1),\n                        children: \"공톡 매거진\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    innerTab === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.NoticeBox, {\n                                children: _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.NoticeData.map((a, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTag, {\n                                                children: \"공지\"\n                                            }, i, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTitle, {\n                                                children: [\n                                                    a.title,\n                                                    \" - \" + a.date\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.ContentsBox, {\n                                children: post.map((a, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.ProfileBox, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                        src: \"/ProPic.png\",\n                                                        alt: \"ProPic\",\n                                                        width: 30,\n                                                        height: 30,\n                                                        style: {\n                                                            marginBottom: \"16px\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YUsername, {\n                                                        children: \"공실앤톡\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 34\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                    src: \"/YImage.png\",\n                                                    alt: \"YImage\",\n                                                    width: 154,\n                                                    height: 108,\n                                                    style: {\n                                                        position: \"absolute\",\n                                                        left: \"600px\",\n                                                        marginBottom: \"10px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 31\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.Ytitle, {\n                                                children: a.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 120,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YContents, {\n                                                children: a.contents\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 123,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YFooter, {\n                                                children: [\n                                                    a.date + \" \",\n                                                    \" \",\n                                                    \"추천 \" + a.reco + \" \",\n                                                    \" \",\n                                                    \"댓글 \" + a.repl\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 126,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.Line, {}, void 0, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 129,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, i, true, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 25\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(Contents, \"TEeF7AYwamarGdxpPhZ74dPSD5s=\");\n_c = Contents;\nvar _c;\n$RefreshReg$(_c, \"Contents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDTDtBQUNWO0FBQ2xCO0FBQ21CO0FBQ1E7QUFDNkM7QUFDckY7QUFlaEIsU0FBU21CLFNBQVMsS0FBa0MsRUFBRTtRQUFwQyxFQUFDQyxXQUFVLEVBQUVDLGNBQWEsRUFBUSxHQUFsQzs7SUFDL0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBUztJQUVqRCxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBQ0Usa0RBQVFBO0lBQzNDLE1BQU0sQ0FBQ2lCLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3FCLGFBQWFDLGVBQWUsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU11QixjQUFjSixjQUFjRTtJQUNsQyxNQUFNRyxlQUFlRCxjQUFjRjtJQUVuQyxNQUFNSSxlQUFlLENBQUNSLFFBQWU7UUFDbkMsSUFBSVEsZUFBZTtRQUNuQkEsZUFBZVIsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPUyxLQUFLLENBQUNGLGNBQWNEO1FBQzFDLE9BQU9FO0lBQ1Q7SUFFQSxjQUFjO0lBQ2QsTUFBTSxDQUFDRSxNQUFNQyxRQUFRLEdBQUc1QiwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ3hDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2Q2QixRQUFRSCxhQUFhUjtJQUN2QixHQUFHO1FBQUNGO0tBQVM7SUFFWGMsUUFBUUMsR0FBRyxDQUFDSDtJQUNkLHFCQUNFOzswQkFDRSw4REFBQzdCLHVFQUFZQTtnQkFDVGUsWUFBWUE7Z0JBQ1prQixTQUFTLElBQU1qQixjQUFjOzBCQUM5Qjs7Ozs7O1lBSURELGVBQWUsa0JBRWI7O2tDQUNFLDhEQUFDaEIsb0VBQVVBO3dCQUNUa0IsVUFBVUE7d0JBQ1ZnQixTQUFTLElBQU1mLFlBQVk7a0NBQzVCOzs7Ozs7a0NBR0QsOERBQUNwQixxRUFBV0E7d0JBQ1ZtQixVQUFVQTt3QkFDVmdCLFNBQVMsSUFBTWYsWUFBWTtrQ0FDNUI7Ozs7OztvQkFJQ0QsYUFBYSxrQkFFWDs7MENBQ0EsOERBQUNwQixzRUFBU0E7MENBRVJNLHdEQUFjLENBQUMsQ0FBQ2dDLEdBQUdDLElBQU07b0NBQ3JCLHFCQUNFLDhEQUFDQzs7MERBQ0MsOERBQUNoQyxtRUFBU0E7MERBQVM7K0NBQUgrQjs7Ozs7MERBR2hCLDhEQUFDOUIscUVBQVdBOztvREFDVDZCLEVBQUVHLEtBQUs7b0RBQ1AsUUFBUUgsRUFBRUksSUFBSTs7Ozs7Ozs7Ozs7OztnQ0FJdkI7Ozs7OzswQ0FHSiw4REFBQzVDLHFFQUFRQTs7Ozs7MENBQ1QsOERBQUNZLDBFQUFXQTswQ0FFUnNCLEtBQUtLLEdBQUcsQ0FBQyxDQUFDQyxHQUFRQyxJQUFXO29DQUMzQixxQkFDRSw4REFBQ0M7OzBEQUNDLDhEQUFDN0IseUVBQVVBOztrRUFDVCw4REFBQ0ssbURBQUtBO3dEQUNKMkIsS0FBSzt3REFDTEMsS0FBSTt3REFDSkMsT0FBTzt3REFDUEMsUUFBUTt3REFDVkMsT0FBTzs0REFDTEMsY0FBYzt3REFDaEI7Ozs7OztrRUFBSyw4REFBQ2xDLHdFQUFTQTtrRUFBQzs7Ozs7Ozs7Ozs7OzBEQUVoQiw4REFBQzBCOzBEQUNDLDRFQUFDeEIsbURBQUtBO29EQUNKMkIsS0FBSztvREFDTEMsS0FBSTtvREFDSkMsT0FBTztvREFDUEMsUUFBUTtvREFDUkMsT0FBTzt3REFDTEUsVUFBUzt3REFDVEMsTUFBTTt3REFDTkYsY0FBYztvREFDaEI7Ozs7Ozs7Ozs7OzBEQUdOLDhEQUFDakMscUVBQU1BOzBEQUNKdUIsRUFBRUcsS0FBSzs7Ozs7OzBEQUVWLDhEQUFDN0Isd0VBQVNBOzBEQUNQMEIsRUFBRWEsUUFBUTs7Ozs7OzBEQUViLDhEQUFDdEMsc0VBQU9BOztvREFDTHlCLEVBQUVJLElBQUksR0FBRztvREFBSTtvREFBRSxRQUFRSixFQUFFYyxJQUFJLEdBQUc7b0RBQUk7b0RBQUUsUUFBUWQsRUFBRWUsSUFBSTs7Ozs7OzswREFFdkQsOERBQUN0RCxpRUFBSUE7Ozs7Ozt1Q0FqQ0d3Qzs7Ozs7Z0NBb0NkOzs7Ozs7O3VDQU1OLElBQUk7OytCQUtWLElBQUk7OztBQUlaLENBQUM7R0E1SHVCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0NvbW11bml0eS9Db250ZW50cy9pbmRleC50c3g/ZjE2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbXB0eUJveCwgTGluZSwgTm90aWNlQm94IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvTm90aWNlQm94XCI7XG5pbXBvcnQgeyBNYWdhemluZVRhYiwgWW91dHViZVRhYiB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L1RhYkJveFwiO1xuaW1wb3J0IHsgRmlyc3RDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvVGFiU3BhblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTm90aWNlRGF0YSwgWW91dHViZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vTm90aWNlRHVtbXlcIjtcbmltcG9ydCB7IE5vdGljZVRhZywgTm90aWNlVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW11bml0eS9Ob3RpY2VcIjtcbmltcG9ydCB7IENvbnRlbnRzQm94LCBQcm9maWxlQm94LCBZQ29udGVudHMsIFlGb290ZXIsIFlVc2VybmFtZSwgWXRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvQ29udGVudHNCb3hcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG50eXBlIFByb3BzID0ge1xuICB0YWJDbGlja2VkOiBudW1iZXIsXG4gIHNldFRhYkNsaWNrZWQ6ICBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pixcbn1cblxudHlwZSBQb3N0ID0ge1xuICB0aXRsZTogc3RyaW5nLFxuICBjb250ZW50czogc3RyaW5nLFxuICBkYXRlOiBzdHJpbmcsXG4gIHJlY286IG51bWJlcixcbiAgcmVwbDogbnVtYmVyLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50cyh7dGFiQ2xpY2tlZCwgc2V0VGFiQ2xpY2tlZH06IFByb3BzKSB7IFxuICBjb25zdCBbaW5uZXJUYWIsIHNldElubmVyVGFiXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShZb3V0dWJlcyk7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwb3N0UGVyUGFnZSwgc2V0UG9zdFBlclBhZ2VdID0gdXNlU3RhdGUoNSk7XG5cbiAgY29uc3QgaW5kZXhPZkxhc3QgPSBjdXJyZW50UGFnZSAqIHBvc3RQZXJQYWdlO1xuICBjb25zdCBpbmRleE9mRmlyc3QgPSBpbmRleE9mTGFzdCAtIHBvc3RQZXJQYWdlO1xuXG4gIGNvbnN0IGN1cnJlbnRQb3N0cyA9IChwb3N0czogYW55KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQb3N0cyA9IDA7XG4gICAgY3VycmVudFBvc3RzID0gcG9zdHM/LnNsaWNlKGluZGV4T2ZGaXJzdCwgaW5kZXhPZkxhc3QpO1xuICAgIHJldHVybiBjdXJyZW50UG9zdHM7XG4gIH07XG5cbiAgLy8gIEFQSSDsg53shLHsi5wg7IiY7KCVXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBvc3QoY3VycmVudFBvc3RzKHBvc3RzKSk7XG4gIH0sIFtpbm5lclRhYl0pO1xuXG4gICAgY29uc29sZS5sb2cocG9zdCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGaXJzdENvbnRlbnRcbiAgICAgICAgICB0YWJDbGlja2VkPXt0YWJDbGlja2VkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYkNsaWNrZWQoMCl9XG4gICAgICAgID5cbiAgICAgICAgICDqs7XthqEg7Luo7YWQ7LigXG4gICAgICA8L0ZpcnN0Q29udGVudD5cbiAgICAgIHtcbiAgICAgICAgdGFiQ2xpY2tlZCA9PT0gMCA/XG4gICAgICAgIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFlvdXR1YmVUYWJcbiAgICAgICAgICAgICAgaW5uZXJUYWI9e2lubmVyVGFifVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbm5lclRhYigwKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg6rO17YahIOycoO2KnOu4jFxuICAgICAgICAgICAgPC9Zb3V0dWJlVGFiPlxuICAgICAgICAgICAgPE1hZ2F6aW5lVGFiXG4gICAgICAgICAgICAgIGlubmVyVGFiPXtpbm5lclRhYn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW5uZXJUYWIoMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOqzte2GoSDrp6TqsbDsp4RcbiAgICAgICAgICAgIDwvTWFnYXppbmVUYWI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlubmVyVGFiID09PSAwID9cbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPE5vdGljZUJveD5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIE5vdGljZURhdGEubWFwKChhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RpY2VUYWcga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDqs7Xsp4BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ob3RpY2VUYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RpY2VUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAtICcgKyBhLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTm90aWNlVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Ob3RpY2VCb3g+XG4gICAgICAgICAgICAgICAgPEVtcHR5Qm94IC8+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRzQm94PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb3N0Lm1hcCgoYTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eycvUHJvUGljLnBuZyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9QaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPjxZVXNlcm5hbWU+6rO17Iuk7JWk7YahPC9ZVXNlcm5hbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy9ZSW1hZ2UucG5nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiWUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNjAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8WXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1l0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFlDb250ZW50cz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YS5jb250ZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ZQ29udGVudHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxZRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthLmRhdGUgKyBcIiBcIn0ge1wi7LaU7LKcIFwiICsgYS5yZWNvICsgXCIgXCJ9IHtcIuuMk+q4gCBcIiArIGEucmVwbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ZRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ29udGVudHNCb3g+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICAgICAgOlxuICAgICAgICBudWxsXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn07Il0sIm5hbWVzIjpbIkVtcHR5Qm94IiwiTGluZSIsIk5vdGljZUJveCIsIk1hZ2F6aW5lVGFiIiwiWW91dHViZVRhYiIsIkZpcnN0Q29udGVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTm90aWNlRGF0YSIsIllvdXR1YmVzIiwiTm90aWNlVGFnIiwiTm90aWNlVGl0bGUiLCJDb250ZW50c0JveCIsIlByb2ZpbGVCb3giLCJZQ29udGVudHMiLCJZRm9vdGVyIiwiWVVzZXJuYW1lIiwiWXRpdGxlIiwiSW1hZ2UiLCJDb250ZW50cyIsInRhYkNsaWNrZWQiLCJzZXRUYWJDbGlja2VkIiwiaW5uZXJUYWIiLCJzZXRJbm5lclRhYiIsInBvc3RzIiwic2V0UG9zdHMiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicG9zdFBlclBhZ2UiLCJzZXRQb3N0UGVyUGFnZSIsImluZGV4T2ZMYXN0IiwiaW5kZXhPZkZpcnN0IiwiY3VycmVudFBvc3RzIiwic2xpY2UiLCJwb3N0Iiwic2V0UG9zdCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwibWFwIiwiYSIsImkiLCJkaXYiLCJ0aXRsZSIsImRhdGUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJsZWZ0IiwiY29udGVudHMiLCJyZWNvIiwicmVwbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/index.tsx\n"));

/***/ })

});