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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/community/TabBox */ \"./src/components/community/TabBox.tsx\");\n/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/community/TabSpan */ \"./src/components/community/TabSpan.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var _components_community_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/community/Notice */ \"./src/components/community/Notice.tsx\");\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Paging */ \"./src/pages/Community/Paging.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Contents(param) {\n    let { tabClicked , setTabClicked  } = param;\n    _s();\n    const [innerTab, setInnerTab] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.Youtubes);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const [postPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(5);\n    const indexOfLast = currentPage * postPerPage;\n    const indexOfFirst = indexOfLast - postPerPage;\n    const currentPosts = (posts)=>{\n        let currentPosts = 0;\n        currentPosts = posts === null || posts === void 0 ? void 0 : posts.slice(indexOfFirst, indexOfLast);\n        return currentPosts;\n    };\n    //  API 생성시 수정\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setPost(currentPosts(posts));\n    }, [\n        innerTab\n    ]);\n    console.log(currentPage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__.FirstContent, {\n                tabClicked: tabClicked,\n                onClick: ()=>setTabClicked(0),\n                children: \"공톡 컨텐츠\"\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            tabClicked === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.YoutubeTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(0),\n                        children: \"공톡 유튜브\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.MagazineTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(1),\n                        children: \"공톡 매거진\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    innerTab === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.NoticeBox, {\n                                children: _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.NoticeData.map((a, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTag, {\n                                                children: \"공지\"\n                                            }, i, false, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTitle, {\n                                                children: [\n                                                    a.title,\n                                                    \" - \" + a.date\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.ContentsBox, {\n                                children: [\n                                    post.map((a, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.ProfileBox, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                            src: \"/ProPic.png\",\n                                                            alt: \"ProPic\",\n                                                            width: 30,\n                                                            height: 30,\n                                                            style: {\n                                                                marginBottom: \"16px\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YUsername, {\n                                                            children: \"공실앤톡\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                        src: \"/YImage.png\",\n                                                        alt: \"YImage\",\n                                                        width: 154,\n                                                        height: 108,\n                                                        style: {\n                                                            position: \"absolute\",\n                                                            left: \"600px\",\n                                                            marginTop: \"-5px\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.Ytitle, {\n                                                    children: a.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YContents, {\n                                                    children: a.contents\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YFooter, {\n                                                    children: [\n                                                        a.date + \" \",\n                                                        \" \",\n                                                        \"추천 \" + a.reco + \" \",\n                                                        \" \",\n                                                        \"댓글 \" + a.repl\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.Line, {}, void 0, false, {\n                                                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, i, true, {\n                                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 21\n                                        }, this);\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Paging__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        totalPosts: posts === null || posts === void 0 ? void 0 : posts.length,\n                                        paginate: setCurrentPage\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(Contents, \"TEeF7AYwamarGdxpPhZ74dPSD5s=\");\n_c = Contents;\nvar _c;\n$RefreshReg$(_c, \"Contents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQ0w7QUFDVjtBQUNsQjtBQUNtQjtBQUNRO0FBUTNCO0FBQ2I7QUFDQTtBQU9oQixTQUFTb0IsU0FBUyxLQUFvQyxFQUFFO1FBQXRDLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFTLEdBQXBDOztJQUMvQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFTO0lBRWpELE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDRSxrREFBUUE7SUFDM0MsTUFBTSxDQUFDa0IsYUFBYUMsZUFBZSxHQUFHckIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDc0IsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXdCLGNBQWNKLGNBQWNFO0lBQ2xDLE1BQU1HLGVBQWVELGNBQWNGO0lBRW5DLE1BQU1JLGVBQWUsQ0FBQ1IsUUFBZTtRQUNuQyxJQUFJUSxlQUFlO1FBQ25CQSxlQUFlUixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9TLEtBQUssQ0FBQ0YsY0FBY0Q7UUFDMUMsT0FBT0U7SUFDVDtJQUVBLGNBQWM7SUFDZCxNQUFNLENBQUNFLE1BQU1DLFFBQVEsR0FBRzdCLCtDQUFRQSxDQUFNLEVBQUU7SUFDeENELGdEQUFTQSxDQUFDLElBQU07UUFDZDhCLFFBQVFILGFBQWFSO0lBQ3ZCLEdBQUc7UUFBQ0Y7S0FBUztJQUNmYyxRQUFRQyxHQUFHLENBQUNYO0lBQ1YscUJBQ0U7OzBCQUNFLDhEQUFDdEIsdUVBQVlBO2dCQUFDZ0IsWUFBWUE7Z0JBQVlrQixTQUFTLElBQU1qQixjQUFjOzBCQUFJOzs7Ozs7WUFHdEVELGVBQWUsa0JBQ2Q7O2tDQUNFLDhEQUFDakIsb0VBQVVBO3dCQUFDbUIsVUFBVUE7d0JBQVVnQixTQUFTLElBQU1mLFlBQVk7a0NBQUk7Ozs7OztrQ0FHL0QsOERBQUNyQixxRUFBV0E7d0JBQUNvQixVQUFVQTt3QkFBVWdCLFNBQVMsSUFBTWYsWUFBWTtrQ0FBSTs7Ozs7O29CQUcvREQsYUFBYSxrQkFDWjs7MENBQ0UsOERBQUNyQixzRUFBU0E7MENBQ1BNLHdEQUFjLENBQUMsQ0FBQ2lDLEdBQUdDLElBQU07b0NBQ3hCLHFCQUNFLDhEQUFDQzs7MERBQ0MsOERBQUNqQyxtRUFBU0E7MERBQVM7K0NBQUhnQzs7Ozs7MERBQ2hCLDhEQUFDL0IscUVBQVdBOztvREFDVDhCLEVBQUVHLEtBQUs7b0RBQ1AsUUFBUUgsRUFBRUksSUFBSTs7Ozs7Ozs7Ozs7OztnQ0FJdkI7Ozs7OzswQ0FFRiw4REFBQzdDLHFFQUFRQTs7Ozs7MENBQ1QsOERBQUNZLDBFQUFXQTs7b0NBQ1R1QixLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsR0FBUUMsSUFBVzt3Q0FDNUIscUJBQ0UsOERBQUNDOzs4REFDQyw4REFBQzlCLHlFQUFVQTs7c0VBQ1QsOERBQUNLLG1EQUFLQTs0REFDSjRCLEtBQUs7NERBQ0xDLEtBQUk7NERBQ0pDLE9BQU87NERBQ1BDLFFBQVE7NERBQ1JDLE9BQU87Z0VBQ0xDLGNBQWM7NERBQ2hCOzs7Ozs7c0VBRUYsOERBQUNuQyx3RUFBU0E7c0VBQUM7Ozs7Ozs7Ozs7Ozs4REFFYiw4REFBQzJCOzhEQUNDLDRFQUFDekIsbURBQUtBO3dEQUNKNEIsS0FBSzt3REFDTEMsS0FBSTt3REFDSkMsT0FBTzt3REFDUEMsUUFBUTt3REFDUkMsT0FBTzs0REFDTEUsVUFBVTs0REFDVkMsTUFBTTs0REFDTkMsV0FBVzt3REFDYjs7Ozs7Ozs7Ozs7OERBR0osOERBQUNyQyxxRUFBTUE7OERBQUV3QixFQUFFRyxLQUFLOzs7Ozs7OERBQ2hCLDhEQUFDOUIsd0VBQVNBOzhEQUFFMkIsRUFBRWMsUUFBUTs7Ozs7OzhEQUN0Qiw4REFBQ3hDLHNFQUFPQTs7d0RBQ0wwQixFQUFFSSxJQUFJLEdBQUc7d0RBQUk7d0RBQUUsUUFBUUosRUFBRWUsSUFBSSxHQUFHO3dEQUFLO3dEQUNyQyxRQUFRZixFQUFFZ0IsSUFBSTs7Ozs7Ozs4REFFakIsOERBQUN4RCxpRUFBSUE7Ozs7OzsyQ0FoQ0d5Qzs7Ozs7b0NBbUNkO2tEQUNBLDhEQUFDdkIsK0NBQU1BO3dDQUFDdUMsWUFBWWpDLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT2tDLE1BQU07d0NBQUVDLFVBQVVoQzs7Ozs7Ozs7Ozs7Ozt1Q0FHL0MsSUFBSTs7K0JBRVIsSUFBSTs7O0FBR2QsQ0FBQztHQWxHdUJSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Db21tdW5pdHkvQ29udGVudHMvaW5kZXgudHN4P2YxNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1wdHlCb3gsIExpbmUsIE5vdGljZUJveCB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tdW5pdHkvTm90aWNlQm94JztcbmltcG9ydCB7IE1hZ2F6aW5lVGFiLCBZb3V0dWJlVGFiIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW11bml0eS9UYWJCb3gnO1xuaW1wb3J0IHsgRmlyc3RDb250ZW50IH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW11bml0eS9UYWJTcGFuJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOb3RpY2VEYXRhLCBZb3V0dWJlcyB9IGZyb20gJy4uLy4uLy4uLy4uL05vdGljZUR1bW15JztcbmltcG9ydCB7IE5vdGljZVRhZywgTm90aWNlVGl0bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbXVuaXR5L05vdGljZSc7XG5pbXBvcnQge1xuICBDb250ZW50c0JveCxcbiAgUHJvZmlsZUJveCxcbiAgWUNvbnRlbnRzLFxuICBZRm9vdGVyLFxuICBZVXNlcm5hbWUsXG4gIFl0aXRsZSxcbn0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW11bml0eS9Db250ZW50c0JveCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUGFnaW5nIGZyb20gJy4uL1BhZ2luZyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRhYkNsaWNrZWQ6IG51bWJlcjtcbiAgc2V0VGFiQ2xpY2tlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50cyh7IHRhYkNsaWNrZWQsIHNldFRhYkNsaWNrZWQgfTogUHJvcHMpIHtcbiAgY29uc3QgW2lubmVyVGFiLCBzZXRJbm5lclRhYl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoWW91dHViZXMpO1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcG9zdFBlclBhZ2UsIHNldFBvc3RQZXJQYWdlXSA9IHVzZVN0YXRlKDUpO1xuXG4gIGNvbnN0IGluZGV4T2ZMYXN0ID0gY3VycmVudFBhZ2UgKiBwb3N0UGVyUGFnZTtcbiAgY29uc3QgaW5kZXhPZkZpcnN0ID0gaW5kZXhPZkxhc3QgLSBwb3N0UGVyUGFnZTtcblxuICBjb25zdCBjdXJyZW50UG9zdHMgPSAocG9zdHM6IGFueSkgPT4ge1xuICAgIGxldCBjdXJyZW50UG9zdHMgPSAwO1xuICAgIGN1cnJlbnRQb3N0cyA9IHBvc3RzPy5zbGljZShpbmRleE9mRmlyc3QsIGluZGV4T2ZMYXN0KTtcbiAgICByZXR1cm4gY3VycmVudFBvc3RzO1xuICB9O1xuXG4gIC8vICBBUEkg7IOd7ISx7IucIOyImOyglVxuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQb3N0KGN1cnJlbnRQb3N0cyhwb3N0cykpO1xuICB9LCBbaW5uZXJUYWJdKTtcbmNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZpcnN0Q29udGVudCB0YWJDbGlja2VkPXt0YWJDbGlja2VkfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWJDbGlja2VkKDApfT5cbiAgICAgICAg6rO17YahIOy7qO2FkOy4oFxuICAgICAgPC9GaXJzdENvbnRlbnQ+XG4gICAgICB7dGFiQ2xpY2tlZCA9PT0gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8WW91dHViZVRhYiBpbm5lclRhYj17aW5uZXJUYWJ9IG9uQ2xpY2s9eygpID0+IHNldElubmVyVGFiKDApfT5cbiAgICAgICAgICAgIOqzte2GoSDsnKDtipzruIxcbiAgICAgICAgICA8L1lvdXR1YmVUYWI+XG4gICAgICAgICAgPE1hZ2F6aW5lVGFiIGlubmVyVGFiPXtpbm5lclRhYn0gb25DbGljaz17KCkgPT4gc2V0SW5uZXJUYWIoMSl9PlxuICAgICAgICAgICAg6rO17YahIOunpOqxsOynhFxuICAgICAgICAgIDwvTWFnYXppbmVUYWI+XG4gICAgICAgICAge2lubmVyVGFiID09PSAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPE5vdGljZUJveD5cbiAgICAgICAgICAgICAgICB7Tm90aWNlRGF0YS5tYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPE5vdGljZVRhZyBrZXk9e2l9PuqzteyngDwvTm90aWNlVGFnPlxuICAgICAgICAgICAgICAgICAgICAgIDxOb3RpY2VUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgeycgLSAnICsgYS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTm90aWNlVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9Ob3RpY2VCb3g+XG4gICAgICAgICAgICAgIDxFbXB0eUJveCAvPlxuICAgICAgICAgICAgICA8Q29udGVudHNCb3g+XG4gICAgICAgICAgICAgICAge3Bvc3QubWFwKChhOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy9Qcm9QaWMucG5nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvUGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxZVXNlcm5hbWU+6rO17Iuk7JWk7YahPC9ZVXNlcm5hbWU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlQm94PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnL1lJbWFnZS5wbmcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJZSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTU0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwOH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNjAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy01cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8WXRpdGxlPnthLnRpdGxlfTwvWXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgIDxZQ29udGVudHM+e2EuY29udGVudHN9PC9ZQ29udGVudHM+XG4gICAgICAgICAgICAgICAgICAgICAgPFlGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YS5kYXRlICsgJyAnfSB7J+y2lOyynCAnICsgYS5yZWNvICsgJyAnfXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICB7J+uMk+q4gCAnICsgYS5yZXBsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvWUZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPFBhZ2luZyB0b3RhbFBvc3RzPXtwb3N0cz8ubGVuZ3RofSBwYWdpbmF0ZT17c2V0Q3VycmVudFBhZ2V9Lz5cbiAgICAgICAgICAgICAgPC9Db250ZW50c0JveD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkVtcHR5Qm94IiwiTGluZSIsIk5vdGljZUJveCIsIk1hZ2F6aW5lVGFiIiwiWW91dHViZVRhYiIsIkZpcnN0Q29udGVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTm90aWNlRGF0YSIsIllvdXR1YmVzIiwiTm90aWNlVGFnIiwiTm90aWNlVGl0bGUiLCJDb250ZW50c0JveCIsIlByb2ZpbGVCb3giLCJZQ29udGVudHMiLCJZRm9vdGVyIiwiWVVzZXJuYW1lIiwiWXRpdGxlIiwiSW1hZ2UiLCJQYWdpbmciLCJDb250ZW50cyIsInRhYkNsaWNrZWQiLCJzZXRUYWJDbGlja2VkIiwiaW5uZXJUYWIiLCJzZXRJbm5lclRhYiIsInBvc3RzIiwic2V0UG9zdHMiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicG9zdFBlclBhZ2UiLCJzZXRQb3N0UGVyUGFnZSIsImluZGV4T2ZMYXN0IiwiaW5kZXhPZkZpcnN0IiwiY3VycmVudFBvc3RzIiwic2xpY2UiLCJwb3N0Iiwic2V0UG9zdCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwibWFwIiwiYSIsImkiLCJkaXYiLCJ0aXRsZSIsImRhdGUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJsZWZ0IiwibWFyZ2luVG9wIiwiY29udGVudHMiLCJyZWNvIiwicmVwbCIsInRvdGFsUG9zdHMiLCJsZW5ndGgiLCJwYWdpbmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/index.tsx\n"));

/***/ })

});