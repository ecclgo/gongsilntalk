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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/community/TabBox */ \"./src/components/community/TabBox.tsx\");\n/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/community/TabSpan */ \"./src/components/community/TabSpan.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var _components_community_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/community/Notice */ \"./src/components/community/Notice.tsx\");\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Contents(param) {\n    let { tabClicked , setTabClicked  } = param;\n    _s();\n    const [innerTab, setInnerTab] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [truncatedContent, setTruncagtedContent] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const divRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    let newText = _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.Youtubes.map((a, i)=>{\n        return a.contents;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const div = divRef.current;\n        const maxHeight = div.offsetHeight;\n        for(let i = 0; i <= newText.length; i++){\n            let truncated = newText[i];\n            if (div.scrollHeight > maxHeight) {\n                truncated = truncated.replace(/\\W*\\s(\\S)*$/, \"...\");\n                div.innerHTML = truncated;\n            }\n            setTruncagtedContent(truncated);\n        }\n        console.log(div.scrollHeight);\n        console.log(maxHeight);\n    }, [\n        newText\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_3__.FirstContent, {\n                tabClicked: tabClicked,\n                onClick: ()=>setTabClicked(0),\n                children: \"공톡 컨텐츠\"\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            tabClicked === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.YoutubeTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(0),\n                        children: \"공톡 유튜브\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_2__.MagazineTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(1),\n                        children: \"공톡 매거진\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.NoticeBox, {\n                        children: _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.NoticeData.map((a, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTag, {\n                                        children: \"공지\"\n                                    }, i, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_Notice__WEBPACK_IMPORTED_MODULE_6__.NoticeTitle, {\n                                        children: [\n                                            a.title,\n                                            \" - \" + a.date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.ContentsBox, {\n                        children: _NoticeDummy__WEBPACK_IMPORTED_MODULE_5__.Youtubes.map((a, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.ProfileBox, {}, void 0, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.Ytitle, {\n                                        children: a.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_7__.YContents, {\n                                        ref: divRef,\n                                        children: truncatedContent\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, i, true, {\n                                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(Contents, \"MUB5Pp5DJGO0PUAXqJApQBO9SdQ=\");\n_c = Contents;\nvar _c;\n$RefreshReg$(_c, \"Contents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1GO0FBQ1g7QUFDVjtBQUNWO0FBQ1c7QUFDUTtBQUNhO0FBT3JFLFNBQVNnQixTQUFTLEtBQWtDLEVBQUU7UUFBcEMsRUFBQ0MsV0FBVSxFQUFFQyxjQUFhLEVBQVEsR0FBbEM7O0lBQy9CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNhLGtCQUFrQkMscUJBQXFCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzFELE1BQU1lLFNBQVNoQiw2Q0FBTUEsQ0FBQyxJQUFJO0lBRTFCLElBQUlpQixVQUFVZCxzREFBWSxDQUFDLENBQUNnQixHQUFHQyxJQUFNO1FBQ25DLE9BQ0lELEVBQUVFLFFBQVE7SUFFaEI7SUFFQXRCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNdUIsTUFBV04sT0FBT08sT0FBTztRQUMvQixNQUFNQyxZQUFZRixJQUFJRyxZQUFZO1FBR2xDLElBQUksSUFBSUwsSUFBRSxHQUFHQSxLQUFLSCxRQUFRUyxNQUFNLEVBQUVOLElBQUs7WUFDckMsSUFBSU8sWUFBaUJWLE9BQU8sQ0FBQ0csRUFBRTtZQUMvQixJQUFJRSxJQUFJTSxZQUFZLEdBQUdKLFdBQVc7Z0JBQ2hDRyxZQUFZQSxVQUFVRSxPQUFPLENBQUMsZUFBZTtnQkFDN0NQLElBQUlRLFNBQVMsR0FBR0g7WUFDbEIsQ0FBQztZQUNEWixxQkFBcUJZO1FBQ3ZCO1FBQ0FJLFFBQVFDLEdBQUcsQ0FBQ1YsSUFBSU0sWUFBWTtRQUM1QkcsUUFBUUMsR0FBRyxDQUFDUjtJQUNkLEdBQUc7UUFBQ1A7S0FBUTtJQUVaLHFCQUNFOzswQkFDRSw4REFBQ25CLHVFQUFZQTtnQkFDVFksWUFBWUE7Z0JBQ1p1QixTQUFTLElBQU10QixjQUFjOzBCQUM5Qjs7Ozs7O1lBSURELGVBQWUsa0JBRWI7O2tDQUNFLDhEQUFDYixvRUFBVUE7d0JBQ1RlLFVBQVVBO3dCQUNWcUIsU0FBUyxJQUFNcEIsWUFBWTtrQ0FDNUI7Ozs7OztrQ0FHRCw4REFBQ2pCLHFFQUFXQTt3QkFDVmdCLFVBQVVBO3dCQUNWcUIsU0FBUyxJQUFNcEIsWUFBWTtrQ0FDNUI7Ozs7OztrQ0FHRCw4REFBQ25CLHNFQUFTQTtrQ0FFTlEsd0RBQWMsQ0FBQyxDQUFDaUIsR0FBR0MsSUFBTTs0QkFDdkIscUJBQ0UsOERBQUNFOztrREFDQyw4REFBQ2xCLG1FQUFTQTtrREFBUzt1Q0FBSGdCOzs7OztrREFHaEIsOERBQUNmLHFFQUFXQTs7NENBQ1RjLEVBQUVlLEtBQUs7NENBQ1AsUUFBUWYsRUFBRWdCLElBQUk7Ozs7Ozs7Ozs7Ozs7d0JBSXZCOzs7Ozs7a0NBR0osOERBQUMxQyxxRUFBUUE7Ozs7O2tDQUNULDhEQUFDYSwwRUFBV0E7a0NBRVJILHNEQUFZLENBQUMsQ0FBQ2dCLEdBQUdDLElBQU07NEJBQ3JCLHFCQUNFLDhEQUFDRTs7a0RBQ0MsOERBQUMzQix1RUFBVUE7Ozs7O2tEQUNYLDhEQUFDYSxxRUFBTUE7a0RBQ0pXLEVBQUVlLEtBQUs7Ozs7OztrREFFViw4REFBQzNCLHdFQUFTQTt3Q0FBQzZCLEtBQUtwQjtrREFDYkY7Ozs7Ozs7K0JBTktNOzs7Ozt3QkFVZDs7Ozs7OzsrQkFNUixJQUFJOzs7QUFJWixDQUFDO0dBOUZ1Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0NvbW11bml0eS9Db250ZW50cy9pbmRleC50c3g/ZjE2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbXB0eUJveCwgTm90aWNlQm94LCBQcm9maWxlQm94IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvTm90aWNlQm94XCI7XG5pbXBvcnQgeyBNYWdhemluZVRhYiwgWW91dHViZVRhYiB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L1RhYkJveFwiO1xuaW1wb3J0IHsgRmlyc3RDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvVGFiU3BhblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOb3RpY2VEYXRhLCBZb3V0dWJlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9Ob3RpY2VEdW1teVwiO1xuaW1wb3J0IHsgTm90aWNlVGFnLCBOb3RpY2VUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbXVuaXR5L05vdGljZVwiO1xuaW1wb3J0IHsgQ29udGVudHNCb3gsIFlDb250ZW50cywgWXRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tdW5pdHkvQ29udGVudHNCb3hcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGFiQ2xpY2tlZDogbnVtYmVyLFxuICBzZXRUYWJDbGlja2VkOiAgUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRzKHt0YWJDbGlja2VkLCBzZXRUYWJDbGlja2VkfTogUHJvcHMpIHsgXG4gIGNvbnN0IFtpbm5lclRhYiwgc2V0SW5uZXJUYWJdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3RydW5jYXRlZENvbnRlbnQsIHNldFRydW5jYWd0ZWRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkaXZSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgbGV0IG5ld1RleHQgPSBZb3V0dWJlcy5tYXAoKGEsIGkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICBhLmNvbnRlbnRzXG4gICAgKTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaXY6IGFueSA9IGRpdlJlZi5jdXJyZW50O1xuICAgIGNvbnN0IG1heEhlaWdodCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICBcbiAgICBmb3IobGV0IGk9MDsgaSA8PSBuZXdUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdHJ1bmNhdGVkOiBhbnkgPSBuZXdUZXh0W2ldO1xuICAgICAgaWYgKGRpdi5zY3JvbGxIZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgdHJ1bmNhdGVkID0gdHJ1bmNhdGVkLnJlcGxhY2UoL1xcVypcXHMoXFxTKSokLywgXCIuLi5cIik7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSB0cnVuY2F0ZWQ7XG4gICAgICB9XG4gICAgICBzZXRUcnVuY2FndGVkQ29udGVudCh0cnVuY2F0ZWQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkaXYuc2Nyb2xsSGVpZ2h0KTtcbiAgICBjb25zb2xlLmxvZyhtYXhIZWlnaHQpO1xuICB9LCBbbmV3VGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGaXJzdENvbnRlbnRcbiAgICAgICAgICB0YWJDbGlja2VkPXt0YWJDbGlja2VkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYkNsaWNrZWQoMCl9XG4gICAgICAgID5cbiAgICAgICAgICDqs7XthqEg7Luo7YWQ7LigXG4gICAgICA8L0ZpcnN0Q29udGVudD5cbiAgICAgIHtcbiAgICAgICAgdGFiQ2xpY2tlZCA9PT0gMCA/XG4gICAgICAgIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFlvdXR1YmVUYWJcbiAgICAgICAgICAgICAgaW5uZXJUYWI9e2lubmVyVGFifVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbm5lclRhYigwKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg6rO17YahIOycoO2KnOu4jFxuICAgICAgICAgICAgPC9Zb3V0dWJlVGFiPlxuICAgICAgICAgICAgPE1hZ2F6aW5lVGFiXG4gICAgICAgICAgICAgIGlubmVyVGFiPXtpbm5lclRhYn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW5uZXJUYWIoMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOqzte2GoSDrp6TqsbDsp4RcbiAgICAgICAgICAgIDwvTWFnYXppbmVUYWI+XG4gICAgICAgICAgICA8Tm90aWNlQm94PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgTm90aWNlRGF0YS5tYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPE5vdGljZVRhZyBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAg6rO17KeAXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ob3RpY2VUYWc+XG4gICAgICAgICAgICAgICAgICAgICAgPE5vdGljZVRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAge2EudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAtICcgKyBhLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ob3RpY2VUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Ob3RpY2VCb3g+XG4gICAgICAgICAgICA8RW1wdHlCb3ggLz5cbiAgICAgICAgICAgIDxDb250ZW50c0JveD5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFlvdXR1YmVzLm1hcCgoYSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlQm94IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFl0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvWXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgIDxZQ29udGVudHMgcmVmPXtkaXZSZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RydW5jYXRlZENvbnRlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgIDwvWUNvbnRlbnRzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0NvbnRlbnRzQm94PlxuICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgICAgIDpcbiAgICAgICAgbnVsbFxuICAgICAgfVxuICAgIDwvPlxuICApXG59OyJdLCJuYW1lcyI6WyJFbXB0eUJveCIsIk5vdGljZUJveCIsIlByb2ZpbGVCb3giLCJNYWdhemluZVRhYiIsIllvdXR1YmVUYWIiLCJGaXJzdENvbnRlbnQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk5vdGljZURhdGEiLCJZb3V0dWJlcyIsIk5vdGljZVRhZyIsIk5vdGljZVRpdGxlIiwiQ29udGVudHNCb3giLCJZQ29udGVudHMiLCJZdGl0bGUiLCJDb250ZW50cyIsInRhYkNsaWNrZWQiLCJzZXRUYWJDbGlja2VkIiwiaW5uZXJUYWIiLCJzZXRJbm5lclRhYiIsInRydW5jYXRlZENvbnRlbnQiLCJzZXRUcnVuY2FndGVkQ29udGVudCIsImRpdlJlZiIsIm5ld1RleHQiLCJtYXAiLCJhIiwiaSIsImNvbnRlbnRzIiwiZGl2IiwiY3VycmVudCIsIm1heEhlaWdodCIsIm9mZnNldEhlaWdodCIsImxlbmd0aCIsInRydW5jYXRlZCIsInNjcm9sbEhlaWdodCIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsInRpdGxlIiwiZGF0ZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/index.tsx\n"));

/***/ })

});