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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/community/TabBox */ \"./src/components/community/TabBox.tsx\");\n/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/community/TabSpan */ \"./src/components/community/TabSpan.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var _components_community_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/community/Notice */ \"./src/components/community/Notice.tsx\");\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Paging */ \"./src/pages/Community/Paging.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Contents(param) {\n    let { tabClicked , setTabClicked  } = param;\n    _s();\n    const [innerTab, setInnerTab] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.Youtubes);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const [postPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(5);\n    const indexOfLast = currentPage * postPerPage;\n    const indexOfFirst = indexOfLast - postPerPage;\n    const currentPosts = (posts)=>{\n        let currentPosts = 0;\n        currentPosts = posts === null || posts === void 0 ? void 0 : posts.slice(indexOfFirst, indexOfLast);\n        return currentPosts;\n    };\n    //  API 생성시 수정\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = ()=>{\n            setPost(currentPosts(posts));\n        };\n        fetchData();\n    }, [\n        posts\n    ]);\n    console.log(currentPage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__.FirstContent, {\n                tabClicked: tabClicked,\n                onClick: ()=>setTabClicked(0),\n                children: \"공톡 컨텐츠\"\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            tabClicked === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.YoutubeTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(0),\n                        children: \"공톡 유튜브\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.MagazineTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(1),\n                        children: \"공톡 매거진\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this),\n                    innerTab === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.NoticeBox, {\n                                children: _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.NoticeData.map((a, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTag, {\n                                                children: \"공지\"\n                                            }, i, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTitle, {\n                                                children: [\n                                                    a.title,\n                                                    \" - \" + a.date\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 21\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.ContentsBox, {\n                                children: [\n                                    post.map((a, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.ProfileBox, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                            src: \"/ProPic.png\",\n                                                            alt: \"ProPic\",\n                                                            width: 30,\n                                                            height: 30,\n                                                            style: {\n                                                                marginBottom: \"16px\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YUsername, {\n                                                            children: \"공실앤톡\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                            lineNumber: 93,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                        src: \"/YImage.png\",\n                                                        alt: \"YImage\",\n                                                        width: 154,\n                                                        height: 108,\n                                                        style: {\n                                                            position: \"absolute\",\n                                                            left: \"600px\",\n                                                            marginTop: \"-5px\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.Ytitle, {\n                                                    children: a.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YContents, {\n                                                    children: a.contents\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YFooter, {\n                                                    children: [\n                                                        a.date + \" \",\n                                                        \" \",\n                                                        \"추천 \" + a.reco + \" \",\n                                                        \" \",\n                                                        \"댓글 \" + a.repl\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.Line, {}, void 0, false, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, i, true, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, this);\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Paging__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        totalPosts: posts === null || posts === void 0 ? void 0 : posts.length,\n                                        paginate: setCurrentPage\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(Contents, \"TEeF7AYwamarGdxpPhZ74dPSD5s=\");\n_c = Contents;\nvar _c;\n$RefreshReg$(_c, \"Contents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQ0w7QUFDVjtBQUNsQjtBQUNtQjtBQUNRO0FBUTNCO0FBQ2I7QUFDQTtBQU9oQixTQUFTb0IsU0FBUyxLQUFvQyxFQUFFO1FBQXRDLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFTLEdBQXBDOztJQUMvQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFTO0lBRWpELE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDRSxrREFBUUE7SUFDM0MsTUFBTSxDQUFDa0IsYUFBYUMsZUFBZSxHQUFHckIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDc0IsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXdCLGNBQWNKLGNBQWNFO0lBQ2xDLE1BQU1HLGVBQWVELGNBQWNGO0lBRW5DLE1BQU1JLGVBQWUsQ0FBQ1IsUUFBZTtRQUNuQyxJQUFJUSxlQUFlO1FBQ25CQSxlQUFlUixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9TLEtBQUssQ0FBQ0YsY0FBY0Q7UUFDMUMsT0FBT0U7SUFDVDtJQUVBLGNBQWM7SUFDZCxNQUFNLENBQUNFLE1BQU1DLFFBQVEsR0FBRzdCLCtDQUFRQSxDQUFNLEVBQUU7SUFDeENELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNK0IsWUFBWSxJQUFNO1lBQ3RCRCxRQUFRSCxhQUFhUjtRQUN2QjtRQUNBWTtJQUNGLEdBQUc7UUFBQ1o7S0FBTTtJQUdaYSxRQUFRQyxHQUFHLENBQUNaO0lBQ1YscUJBQ0U7OzBCQUNFLDhEQUFDdEIsdUVBQVlBO2dCQUFDZ0IsWUFBWUE7Z0JBQVltQixTQUFTLElBQU1sQixjQUFjOzBCQUFJOzs7Ozs7WUFHdEVELGVBQWUsa0JBQ2Q7O2tDQUNFLDhEQUFDakIsb0VBQVVBO3dCQUFDbUIsVUFBVUE7d0JBQVVpQixTQUFTLElBQU1oQixZQUFZO2tDQUFJOzs7Ozs7a0NBRy9ELDhEQUFDckIscUVBQVdBO3dCQUFDb0IsVUFBVUE7d0JBQVVpQixTQUFTLElBQU1oQixZQUFZO2tDQUFJOzs7Ozs7b0JBRy9ERCxhQUFhLGtCQUNaOzswQ0FDRSw4REFBQ3JCLHNFQUFTQTswQ0FDUE0sd0RBQWMsQ0FBQyxDQUFDa0MsR0FBR0MsSUFBTTtvQ0FDeEIscUJBQ0UsOERBQUNDOzswREFDQyw4REFBQ2xDLG1FQUFTQTswREFBUzsrQ0FBSGlDOzs7OzswREFDaEIsOERBQUNoQyxxRUFBV0E7O29EQUNUK0IsRUFBRUcsS0FBSztvREFDUCxRQUFRSCxFQUFFSSxJQUFJOzs7Ozs7Ozs7Ozs7O2dDQUl2Qjs7Ozs7OzBDQUVGLDhEQUFDOUMscUVBQVFBOzs7OzswQ0FDVCw4REFBQ1ksMEVBQVdBOztvQ0FDVHVCLEtBQUtNLEdBQUcsQ0FBQyxDQUFDQyxHQUFRQyxJQUFXO3dDQUM1QixxQkFDRSw4REFBQ0M7OzhEQUNDLDhEQUFDL0IseUVBQVVBOztzRUFDVCw4REFBQ0ssbURBQUtBOzREQUNKNkIsS0FBSzs0REFDTEMsS0FBSTs0REFDSkMsT0FBTzs0REFDUEMsUUFBUTs0REFDUkMsT0FBTztnRUFDTEMsY0FBYzs0REFDaEI7Ozs7OztzRUFFRiw4REFBQ3BDLHdFQUFTQTtzRUFBQzs7Ozs7Ozs7Ozs7OzhEQUViLDhEQUFDNEI7OERBQ0MsNEVBQUMxQixtREFBS0E7d0RBQ0o2QixLQUFLO3dEQUNMQyxLQUFJO3dEQUNKQyxPQUFPO3dEQUNQQyxRQUFRO3dEQUNSQyxPQUFPOzREQUNMRSxVQUFVOzREQUNWQyxNQUFNOzREQUNOQyxXQUFXO3dEQUNiOzs7Ozs7Ozs7Ozs4REFHSiw4REFBQ3RDLHFFQUFNQTs4REFBRXlCLEVBQUVHLEtBQUs7Ozs7Ozs4REFDaEIsOERBQUMvQix3RUFBU0E7OERBQUU0QixFQUFFYyxRQUFROzs7Ozs7OERBQ3RCLDhEQUFDekMsc0VBQU9BOzt3REFDTDJCLEVBQUVJLElBQUksR0FBRzt3REFBSTt3REFBRSxRQUFRSixFQUFFZSxJQUFJLEdBQUc7d0RBQUs7d0RBQ3JDLFFBQVFmLEVBQUVnQixJQUFJOzs7Ozs7OzhEQUVqQiw4REFBQ3pELGlFQUFJQTs7Ozs7OzJDQWhDRzBDOzs7OztvQ0FtQ2Q7a0RBQ0EsOERBQUN4QiwrQ0FBTUE7d0NBQUN3QyxZQUFZbEMsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPbUMsTUFBTTt3Q0FBRUMsVUFBVWpDOzs7Ozs7Ozs7Ozs7O3VDQUcvQyxJQUFJOzsrQkFFUixJQUFJOzs7QUFHZCxDQUFDO0dBdkd1QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0NvbW11bml0eS9Db250ZW50cy9pbmRleC50c3g/ZjE2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbXB0eUJveCwgTGluZSwgTm90aWNlQm94IH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW11bml0eS9Ob3RpY2VCb3gnO1xuaW1wb3J0IHsgTWFnYXppbmVUYWIsIFlvdXR1YmVUYWIgfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbXVuaXR5L1RhYkJveCc7XG5pbXBvcnQgeyBGaXJzdENvbnRlbnQgfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbXVuaXR5L1RhYlNwYW4nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5vdGljZURhdGEsIFlvdXR1YmVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vTm90aWNlRHVtbXknO1xuaW1wb3J0IHsgTm90aWNlVGFnLCBOb3RpY2VUaXRsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tdW5pdHkvTm90aWNlJztcbmltcG9ydCB7XG4gIENvbnRlbnRzQm94LFxuICBQcm9maWxlQm94LFxuICBZQ29udGVudHMsXG4gIFlGb290ZXIsXG4gIFlVc2VybmFtZSxcbiAgWXRpdGxlLFxufSBmcm9tICdAL2NvbXBvbmVudHMvY29tbXVuaXR5L0NvbnRlbnRzQm94JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBQYWdpbmcgZnJvbSAnLi4vUGFnaW5nJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdGFiQ2xpY2tlZDogbnVtYmVyO1xuICBzZXRUYWJDbGlja2VkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRzKHsgdGFiQ2xpY2tlZCwgc2V0VGFiQ2xpY2tlZCB9OiBQcm9wcykge1xuICBjb25zdCBbaW5uZXJUYWIsIHNldElubmVyVGFiXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShZb3V0dWJlcyk7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwb3N0UGVyUGFnZSwgc2V0UG9zdFBlclBhZ2VdID0gdXNlU3RhdGUoNSk7XG5cbiAgY29uc3QgaW5kZXhPZkxhc3QgPSBjdXJyZW50UGFnZSAqIHBvc3RQZXJQYWdlO1xuICBjb25zdCBpbmRleE9mRmlyc3QgPSBpbmRleE9mTGFzdCAtIHBvc3RQZXJQYWdlO1xuXG4gIGNvbnN0IGN1cnJlbnRQb3N0cyA9IChwb3N0czogYW55KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQb3N0cyA9IDA7XG4gICAgY3VycmVudFBvc3RzID0gcG9zdHM/LnNsaWNlKGluZGV4T2ZGaXJzdCwgaW5kZXhPZkxhc3QpO1xuICAgIHJldHVybiBjdXJyZW50UG9zdHM7XG4gIH07XG5cbiAgLy8gIEFQSSDsg53shLHsi5wg7IiY7KCVXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcbiAgICAgIHNldFBvc3QoY3VycmVudFBvc3RzKHBvc3RzKSk7XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3Bvc3RzXSk7XG5cblxuY29uc29sZS5sb2coY3VycmVudFBhZ2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rmlyc3RDb250ZW50IHRhYkNsaWNrZWQ9e3RhYkNsaWNrZWR9IG9uQ2xpY2s9eygpID0+IHNldFRhYkNsaWNrZWQoMCl9PlxuICAgICAgICDqs7XthqEg7Luo7YWQ7LigXG4gICAgICA8L0ZpcnN0Q29udGVudD5cbiAgICAgIHt0YWJDbGlja2VkID09PSAwID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxZb3V0dWJlVGFiIGlubmVyVGFiPXtpbm5lclRhYn0gb25DbGljaz17KCkgPT4gc2V0SW5uZXJUYWIoMCl9PlxuICAgICAgICAgICAg6rO17YahIOycoO2KnOu4jFxuICAgICAgICAgIDwvWW91dHViZVRhYj5cbiAgICAgICAgICA8TWFnYXppbmVUYWIgaW5uZXJUYWI9e2lubmVyVGFifSBvbkNsaWNrPXsoKSA9PiBzZXRJbm5lclRhYigxKX0+XG4gICAgICAgICAgICDqs7XthqEg66ek6rGw7KeEXG4gICAgICAgICAgPC9NYWdhemluZVRhYj5cbiAgICAgICAgICB7aW5uZXJUYWIgPT09IDAgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Tm90aWNlQm94PlxuICAgICAgICAgICAgICAgIHtOb3RpY2VEYXRhLm1hcCgoYSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8Tm90aWNlVGFnIGtleT17aX0+6rO17KeAPC9Ob3RpY2VUYWc+XG4gICAgICAgICAgICAgICAgICAgICAgPE5vdGljZVRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAge2EudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAtICcgKyBhLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ob3RpY2VUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L05vdGljZUJveD5cbiAgICAgICAgICAgICAgPEVtcHR5Qm94IC8+XG4gICAgICAgICAgICAgIDxDb250ZW50c0JveD5cbiAgICAgICAgICAgICAgICB7cG9zdC5tYXAoKGE6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnL1Byb1BpYy5wbmcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9QaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFlVc2VybmFtZT7qs7Xsi6TslaTthqE8L1lVc2VybmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eycvWUltYWdlLnBuZyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIllJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTA4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc2MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxZdGl0bGU+e2EudGl0bGV9PC9ZdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgPFlDb250ZW50cz57YS5jb250ZW50c308L1lDb250ZW50cz5cbiAgICAgICAgICAgICAgICAgICAgICA8WUZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthLmRhdGUgKyAnICd9IHsn7LaU7LKcICcgKyBhLnJlY28gKyAnICd9eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsn64yT6riAICcgKyBhLnJlcGx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9ZRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8UGFnaW5nIHRvdGFsUG9zdHM9e3Bvc3RzPy5sZW5ndGh9IHBhZ2luYXRlPXtzZXRDdXJyZW50UGFnZX0vPlxuICAgICAgICAgICAgICA8L0NvbnRlbnRzQm94PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRW1wdHlCb3giLCJMaW5lIiwiTm90aWNlQm94IiwiTWFnYXppbmVUYWIiLCJZb3V0dWJlVGFiIiwiRmlyc3RDb250ZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOb3RpY2VEYXRhIiwiWW91dHViZXMiLCJOb3RpY2VUYWciLCJOb3RpY2VUaXRsZSIsIkNvbnRlbnRzQm94IiwiUHJvZmlsZUJveCIsIllDb250ZW50cyIsIllGb290ZXIiLCJZVXNlcm5hbWUiLCJZdGl0bGUiLCJJbWFnZSIsIlBhZ2luZyIsIkNvbnRlbnRzIiwidGFiQ2xpY2tlZCIsInNldFRhYkNsaWNrZWQiLCJpbm5lclRhYiIsInNldElubmVyVGFiIiwicG9zdHMiLCJzZXRQb3N0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwb3N0UGVyUGFnZSIsInNldFBvc3RQZXJQYWdlIiwiaW5kZXhPZkxhc3QiLCJpbmRleE9mRmlyc3QiLCJjdXJyZW50UG9zdHMiLCJzbGljZSIsInBvc3QiLCJzZXRQb3N0IiwiZmV0Y2hEYXRhIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJtYXAiLCJhIiwiaSIsImRpdiIsInRpdGxlIiwiZGF0ZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJwb3NpdGlvbiIsImxlZnQiLCJtYXJnaW5Ub3AiLCJjb250ZW50cyIsInJlY28iLCJyZXBsIiwidG90YWxQb3N0cyIsImxlbmd0aCIsInBhZ2luYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/index.tsx\n"));

/***/ })

});