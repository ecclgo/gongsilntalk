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

/***/ "./src/components/community/SearchInput.tsx":
/*!**************************************************!*\
  !*** ./src/components/community/SearchInput.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchContainer\": function() { return /* binding */ SearchContainer; },\n/* harmony export */   \"SearchIcon\": function() { return /* binding */ SearchIcon; },\n/* harmony export */   \"SearchInput\": function() { return /* binding */ SearchInput; },\n/* harmony export */   \"slideIn\": function() { return /* binding */ slideIn; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  from {\\n    transform: translateX(-100%);\\n  }\\n\\n  to {\\n    transform: translateX(0);\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  from {\\n    transform: translateX(0);\\n  }\\n\\n  to {\\n    transform: translateX(-100%);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 50%;\\n  right: 0;\\n  transform: translateY(-50%);\\n  cursor: pointer;\\n  transition: transform 0.2s ease-in-out;\\n\\n  &:hover {\\n    transform: translateY(-50%) scale(1.2);\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 50%;\\n  right: 0;\\n  transform: translateY(-50%) translateX(-100%);\\n  width: 200px;\\n  padding: 8px;\\n  border-radius: 4px;\\n  border: none;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\\n  animation: \",\n        \" 0.2s forwards;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst slideIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject());\nconst slideOut = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject1());\nconst SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"SearchInput__SearchContainer\",\n    componentId: \"sc-1fad45b6-0\"\n})(_templateObject2());\nconst SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].i.withConfig({\n    displayName: \"SearchInput__SearchIcon\",\n    componentId: \"sc-1fad45b6-1\"\n})(_templateObject3());\nconst SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input.withConfig({\n    displayName: \"SearchInput\",\n    componentId: \"sc-1fad45b6-2\"\n})(_templateObject4(), (param)=>{\n    let { show  } = param;\n    return show ? slideIn : slideOut;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tdW5pdHkvU2VhcmNoSW5wdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBRS9DLE1BQU1FLFVBQVVELDREQUFTQSxvQkFROUI7QUFFRixNQUFNRSxXQUFXRiw0REFBU0E7QUFVbkIsTUFBTUcsa0JBQWtCSix3RUFBVTs7O3VCQUV2QztBQUVLLE1BQU1NLGFBQWFOLHNFQUFROzs7dUJBV2hDO0FBRUssTUFBTVEsY0FBY1IsMEVBQVk7Ozt1QkFVeEIsU0FBZVU7UUFBZCxFQUFFQSxLQUFJLEVBQUU7V0FBTUEsT0FBT1IsVUFBVUMsUUFBUTtBQUFELEdBQ3BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW11bml0eS9TZWFyY2hJbnB1dC50c3g/NTZlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVJbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbmA7XG5cbmNvbnN0IHNsaWRlT3V0ID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hJY29uID0gc3R5bGVkLmlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEuMik7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBhbmltYXRpb246ICR7KHsgc2hvdyB9KSA9PiAoc2hvdyA/IHNsaWRlSW4gOiBzbGlkZU91dCl9IDAuMnMgZm9yd2FyZHM7XG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJrZXlmcmFtZXMiLCJzbGlkZUluIiwic2xpZGVPdXQiLCJTZWFyY2hDb250YWluZXIiLCJkaXYiLCJTZWFyY2hJY29uIiwiaSIsIlNlYXJjaElucHV0IiwiaW5wdXQiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/community/SearchInput.tsx\n"));

/***/ }),

/***/ "./src/pages/Community/Contents/index.tsx":
/*!************************************************!*\
  !*** ./src/pages/Community/Contents/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/TabBox */ \"./src/components/community/TabBox.tsx\");\n/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/community/TabSpan */ \"./src/components/community/TabSpan.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var _Youtube_Youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Youtube/Youtube */ \"./src/pages/Community/Contents/Youtube/Youtube.tsx\");\n/* harmony import */ var _Magazine_Magazine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Magazine/Magazine */ \"./src/pages/Community/Contents/Magazine/Magazine.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_community_SearchInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/community/SearchInput */ \"./src/components/community/SearchInput.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Contents(param) {\n    let { tabClicked , setTabClicked  } = param;\n    _s();\n    const [innerTab, setInnerTab] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_4__.Youtubes);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [postPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(5);\n    const indexOfLast = currentPage * postPerPage;\n    const indexOfFirst = indexOfLast - postPerPage;\n    const currentPosts = (posts)=>{\n        let currentPosts = 0;\n        currentPosts = posts === null || posts === void 0 ? void 0 : posts.slice(indexOfFirst, indexOfLast);\n        return currentPosts;\n    };\n    //  API 생성시 수정\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = ()=>{\n            setPost(currentPosts(posts));\n        };\n        fetchData();\n    }, [\n        currentPage\n    ]);\n    const [showSearch, setShowSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleSearchClick = ()=>{\n        setShowSearch(!showSearch);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_2__.FirstContent, {\n                tabClicked: tabClicked,\n                onClick: ()=>setTabClicked(0),\n                children: \"공톡 컨텐츠\"\n            }, void 0, false, {\n                fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            tabClicked === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__.YoutubeTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(0),\n                        children: \"공톡 유튜브\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__.MagazineTab, {\n                        innerTab: innerTab,\n                        onClick: ()=>setInnerTab(1),\n                        children: \"공톡 매거진\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_community_SearchInput__WEBPACK_IMPORTED_MODULE_8__.SearchContainer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            src: \"/SearchIcon.png\",\n                            alt: \"SearchIcon\",\n                            width: 20,\n                            height: 20,\n                            style: {\n                                position: \"absolute\",\n                                left: \"718px\",\n                                top: \"100px\",\n                                cursor: \"pointer\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    innerTab === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Youtube_Youtube__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        post: post,\n                        posts: posts,\n                        setCurrentPage: setCurrentPage\n                    }, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Magazine_Magazine__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/Contents/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(Contents, \"lqYyph3y1LWPWnZvYugGaHYoAFM=\");\n_c = Contents;\nvar _c;\n$RefreshReg$(_c, \"Contents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0U7QUFDVjtBQUNsQjtBQUNPO0FBQ1g7QUFDRztBQUNaO0FBQ3NDO0FBT3RELFNBQVNVLFNBQVMsS0FBb0MsRUFBRTtRQUF0QyxFQUFFQyxXQUFVLEVBQUVDLGNBQWEsRUFBUyxHQUFwQzs7SUFDL0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFTO0lBRWpELE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ3hDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQ0Msa0RBQVFBO0lBQzNDLE1BQU0sQ0FBQ2MsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDaUIsYUFBYUMsZUFBZSxHQUFHbEIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTW1CLGNBQWNKLGNBQWNFO0lBQ2xDLE1BQU1HLGVBQWVELGNBQWNGO0lBRW5DLE1BQU1JLGVBQWUsQ0FBQ1IsUUFBZTtRQUNuQyxJQUFJUSxlQUFlO1FBQ25CQSxlQUFlUixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9TLEtBQUssQ0FBQ0YsY0FBY0Q7UUFDMUMsT0FBT0U7SUFDVDtJQUVBLGNBQWM7SUFDZHRCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNd0IsWUFBWSxJQUFNO1lBQ3RCWCxRQUFRUyxhQUFhUjtRQUN2QjtRQUNBVTtJQUNGLEdBQUc7UUFBQ1I7S0FBWTtJQUVoQixNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR3pCLCtDQUFRQSxDQUFDLEtBQUs7SUFFbEQsTUFBTTBCLG9CQUFvQixJQUFNO1FBQzlCRCxjQUFjLENBQUNEO0lBQ2pCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDMUIsdUVBQVlBO2dCQUFDUyxZQUFZQTtnQkFBWW9CLFNBQVMsSUFBTW5CLGNBQWM7MEJBQUk7Ozs7OztZQUd0RUQsZUFBZSxrQkFDZDs7a0NBQ0UsOERBQUNWLG9FQUFVQTt3QkFBQ1ksVUFBVUE7d0JBQVVrQixTQUFTLElBQU1qQixZQUFZO2tDQUFJOzs7Ozs7a0NBRy9ELDhEQUFDZCxxRUFBV0E7d0JBQUNhLFVBQVVBO3dCQUFVa0IsU0FBUyxJQUFNakIsWUFBWTtrQ0FBSTs7Ozs7O2tDQUdoRSw4REFBQ0wsOEVBQWVBO2tDQUNkLDRFQUFDRCxtREFBS0E7NEJBQ0p3QixLQUFLOzRCQUNMQyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxPQUFPO2dDQUNMQyxVQUFVO2dDQUNWQyxNQUFNO2dDQUNOQyxLQUFLO2dDQUNMQyxRQUFROzRCQUNWOzs7Ozs7Ozs7OztvQkFLRjNCLGFBQWEsa0JBRVgsOERBQUNQLHdEQUFPQTt3QkFBQ1MsTUFBTUE7d0JBQU1FLE9BQU9BO3dCQUFPRyxnQkFBZ0JBOzs7Ozs2Q0FJbkQsOERBQUNiLDBEQUFRQTs7Ozs0QkFDVjs7K0JBR0gsSUFBSTs7O0FBR2QsQ0FBQztHQXpFdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Db21tdW5pdHkvQ29udGVudHMvaW5kZXgudHN4P2YxNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFnYXppbmVUYWIsIFlvdXR1YmVUYWIgfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbXVuaXR5L1RhYkJveCc7XG5pbXBvcnQgeyBGaXJzdENvbnRlbnQgfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbXVuaXR5L1RhYlNwYW4nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFlvdXR1YmVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vTm90aWNlRHVtbXknO1xuaW1wb3J0IFlvdXR1YmUgZnJvbSAnLi9Zb3V0dWJlL1lvdXR1YmUnO1xuaW1wb3J0IE1hZ2F6aW5lIGZyb20gJy4vTWFnYXppbmUvTWFnYXppbmUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW11bml0eS9TZWFyY2hJbnB1dCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRhYkNsaWNrZWQ6IG51bWJlcjtcbiAgc2V0VGFiQ2xpY2tlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50cyh7IHRhYkNsaWNrZWQsIHNldFRhYkNsaWNrZWQgfTogUHJvcHMpIHtcbiAgY29uc3QgW2lubmVyVGFiLCBzZXRJbm5lclRhYl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFlvdXR1YmVzKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3Bvc3RQZXJQYWdlLCBzZXRQb3N0UGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTtcblxuICBjb25zdCBpbmRleE9mTGFzdCA9IGN1cnJlbnRQYWdlICogcG9zdFBlclBhZ2U7XG4gIGNvbnN0IGluZGV4T2ZGaXJzdCA9IGluZGV4T2ZMYXN0IC0gcG9zdFBlclBhZ2U7XG5cbiAgY29uc3QgY3VycmVudFBvc3RzID0gKHBvc3RzOiBhbnkpID0+IHtcbiAgICBsZXQgY3VycmVudFBvc3RzID0gMDtcbiAgICBjdXJyZW50UG9zdHMgPSBwb3N0cz8uc2xpY2UoaW5kZXhPZkZpcnN0LCBpbmRleE9mTGFzdCk7XG4gICAgcmV0dXJuIGN1cnJlbnRQb3N0cztcbiAgfTtcblxuICAvLyAgQVBJIOyDneyEseyLnCDsiJjsoJVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XG4gICAgICBzZXRQb3N0KGN1cnJlbnRQb3N0cyhwb3N0cykpO1xuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtjdXJyZW50UGFnZV0pO1xuXG4gIGNvbnN0IFtzaG93U2VhcmNoLCBzZXRTaG93U2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2hDbGljayA9ICgpID0+IHtcbiAgICBzZXRTaG93U2VhcmNoKCFzaG93U2VhcmNoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rmlyc3RDb250ZW50IHRhYkNsaWNrZWQ9e3RhYkNsaWNrZWR9IG9uQ2xpY2s9eygpID0+IHNldFRhYkNsaWNrZWQoMCl9PlxuICAgICAgICDqs7XthqEg7Luo7YWQ7LigXG4gICAgICA8L0ZpcnN0Q29udGVudD5cbiAgICAgIHt0YWJDbGlja2VkID09PSAwID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxZb3V0dWJlVGFiIGlubmVyVGFiPXtpbm5lclRhYn0gb25DbGljaz17KCkgPT4gc2V0SW5uZXJUYWIoMCl9PlxuICAgICAgICAgICAg6rO17YahIOycoO2KnOu4jFxuICAgICAgICAgIDwvWW91dHViZVRhYj5cbiAgICAgICAgICA8TWFnYXppbmVUYWIgaW5uZXJUYWI9e2lubmVyVGFifSBvbkNsaWNrPXsoKSA9PiBzZXRJbm5lclRhYigxKX0+XG4gICAgICAgICAgICDqs7XthqEg66ek6rGw7KeEXG4gICAgICAgICAgPC9NYWdhemluZVRhYj5cbiAgICAgICAgICA8U2VhcmNoQ29udGFpbmVyPlxuICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICBzcmM9eycvU2VhcmNoSWNvbi5wbmcnfVxuICAgICAgICAgICAgICBhbHQ9J1NlYXJjaEljb24nXG4gICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzE4cHhcIixcbiAgICAgICAgICAgICAgICB0b3A6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgPC9TZWFyY2hDb250YWluZXI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaW5uZXJUYWIgPT09IDAgPyBcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgPFlvdXR1YmUgcG9zdD17cG9zdH0gcG9zdHM9e3Bvc3RzfSBzZXRDdXJyZW50UGFnZT17c2V0Q3VycmVudFBhZ2V9IC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIDxNYWdhemluZSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJNYWdhemluZVRhYiIsIllvdXR1YmVUYWIiLCJGaXJzdENvbnRlbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIllvdXR1YmVzIiwiWW91dHViZSIsIk1hZ2F6aW5lIiwiSW1hZ2UiLCJTZWFyY2hDb250YWluZXIiLCJDb250ZW50cyIsInRhYkNsaWNrZWQiLCJzZXRUYWJDbGlja2VkIiwiaW5uZXJUYWIiLCJzZXRJbm5lclRhYiIsInBvc3QiLCJzZXRQb3N0IiwicG9zdHMiLCJzZXRQb3N0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwb3N0UGVyUGFnZSIsInNldFBvc3RQZXJQYWdlIiwiaW5kZXhPZkxhc3QiLCJpbmRleE9mRmlyc3QiLCJjdXJyZW50UG9zdHMiLCJzbGljZSIsImZldGNoRGF0YSIsInNob3dTZWFyY2giLCJzZXRTaG93U2VhcmNoIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/index.tsx\n"));

/***/ })

});