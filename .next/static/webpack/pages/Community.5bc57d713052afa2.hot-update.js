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

/***/ "./src/components/community/PagingStyle.tsx":
/*!**************************************************!*\
  !*** ./src/components/community/PagingStyle.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageLi\": function() { return /* binding */ PageLi; },\n/* harmony export */   \"PageSpan\": function() { return /* binding */ PageSpan; },\n/* harmony export */   \"PageUl\": function() { return /* binding */ PageUl; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  \\n  list-style: none;\\n  text-align: center;\\n  border-radius: 3px;\\n  color: black;\\n  padding: 1px;\\n  \\n  top: 1100px;\\n  \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: inline-block;\\n  font-size: 15px;\\n  font-weight: 600;\\n  padding: 5px;\\n  border-radius: 5px;\\n  width: 25px;\\n  background-color: #FFFFFF;\\n  &:hover {\\n    cursor: pointer;\\n    background-color: green;\\n  }\\n  &:focus::after {\\n    color: green;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 5px 5px;\\n  width: 25px;\\n  font-size: 20px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  background-color: 'orange';\\n  color: '#333333';\\n  border: none;\\n  &:hover {\\n    background-color: green;\\n  }\\n  &:focus::after {\\n    border-radius: 100%;\\n    color: black;\\n    background-color: green;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst PageUl = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul.withConfig({\n    displayName: \"PagingStyle__PageUl\",\n    componentId: \"sc-f50343cf-0\"\n})(_templateObject());\nconst PageLi = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li.withConfig({\n    displayName: \"PagingStyle__PageLi\",\n    componentId: \"sc-f50343cf-1\"\n})(_templateObject1());\nconst PageSpan = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n    displayName: \"PagingStyle__PageSpan\",\n    componentId: \"sc-f50343cf-2\"\n})(_templateObject2());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tdW5pdHkvUGFnaW5nU3R5bGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxTQUFTRCx1RUFBUzs7O3NCQVc3QjtBQUVLLE1BQU1HLFNBQVNILHVFQUFTOzs7dUJBZTdCO0FBRUssTUFBTUssV0FBV0wsMkVBQWE7Ozt1QkFpQm5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW11bml0eS9QYWdpbmdTdHlsZS50c3g/NDA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgUGFnZVVsID0gc3R5bGVkLnVsYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxcHg7XG4gIFxuICB0b3A6IDExMDBweDtcbiAgXG5gO1xuXG5leHBvcnQgY29uc3QgUGFnZUxpID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH1cbiAgJjpmb2N1czo6YWZ0ZXIge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFBhZ2VTcGFuID0gc3R5bGVkLmJ1dHRvbmBcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICdvcmFuZ2UnO1xuICBjb2xvcjogJyMzMzMzMzMnO1xuICBib3JkZXI6IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9XG4gICY6Zm9jdXM6OmFmdGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgfVxuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiUGFnZVVsIiwidWwiLCJQYWdlTGkiLCJsaSIsIlBhZ2VTcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/community/PagingStyle.tsx\n"));

/***/ })

});