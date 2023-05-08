"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./src/pages/posts/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/posts/[id].tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MegazineDetail = ({ megazine  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: megazine.title\n                }, void 0, false, {\n                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/posts/[id].tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: megazine.content\n                }, void 0, false, {\n                    fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/posts/[id].tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ecclgo/dev/gongsilntalk/src/pages/posts/[id].tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegazineDetail);\nconst getStaticPaths = async ()=>{\n    const megazines = (await __webpack_require__.e(/*! import() */ \"MegazineDummy_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../MegazineDummy.json */ \"./MegazineDummy.json\", 19))).default;\n    const paths = megazines.map((megazine)=>({\n            params: {\n                id: megazine.id\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params  })=>{\n    const megazines = (await __webpack_require__.e(/*! import() */ \"MegazineDummy_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../MegazineDummy.json */ \"./MegazineDummy.json\", 19))).default;\n    const megazine = megazines.find((megazine)=>megazine.id === params?.id);\n    return {\n        props: {\n            megazine\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT0EsTUFBTUEsaUJBQWtDLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDeEQscUJBQ0U7a0JBQ0UsNEVBQUNDOzs4QkFDQyw4REFBQ0M7OEJBQUdGLFNBQVNHLEtBQUs7Ozs7Ozs4QkFDbEIsOERBQUNEOzhCQUFHRixTQUFTSSxPQUFPOzs7Ozs7Ozs7Ozs7O0FBSTVCO0FBRUEsaUVBQWVMLGNBQWNBLEVBQUM7QUFHdkIsTUFBTU0saUJBQWlDLFVBQVc7SUFDdkQsTUFBTUMsWUFBWSxDQUFDLE1BQU0sZ0xBQW9DLEVBQUdDLE9BQU87SUFDdkUsTUFBTUMsUUFBUUYsVUFBVUcsR0FBRyxDQUFDLENBQUNULFdBQW1CO1lBQUNVLFFBQVE7Z0JBQUVDLElBQUlYLFNBQVNXLEVBQUU7WUFBQTtRQUFDO0lBRTNFLE9BQU87UUFBRUg7UUFBT0ksVUFBVSxLQUFLO0lBQUE7QUFDakMsRUFBRTtBQUVLLE1BQU1DLGlCQUFpQyxPQUFPLEVBQUVILE9BQU0sRUFBRSxHQUFLO0lBQ2xFLE1BQU1KLFlBQVksQ0FBQyxNQUFNLGdMQUFvQyxFQUFHQyxPQUFPO0lBQ3ZFLE1BQU1QLFdBQVdNLFVBQVVRLElBQUksQ0FBQyxDQUFDZCxXQUFrQkEsU0FBU1csRUFBRSxLQUFLRCxRQUFRQztJQUMzRSxPQUFPO1FBQUVJLE9BQU87WUFBRWY7UUFBUztJQUFFO0FBQy9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb25nc2lsbnRhbGsvLi9zcmMvcGFnZXMvcG9zdHMvW2lkXS50c3g/ODIxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWdhemluZSB9IGZyb20gXCJAL3BhZ2VzL3R5cGVzL01lZ2F6aW5lXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbWVnYXppbmU6IE1lZ2F6aW5lO1xufVxuXG5jb25zdCBNZWdhemluZURldGFpbDogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgbWVnYXppbmUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD57bWVnYXppbmUudGl0bGV9PC9wPlxuICAgICAgICA8cD57bWVnYXppbmUuY29udGVudH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVnYXppbmVEZXRhaWw7XG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jKCkgPT4ge1xuICBjb25zdCBtZWdhemluZXMgPSAoYXdhaXQgaW1wb3J0KCcuLi8uLi8uLi9NZWdhemluZUR1bW15Lmpzb24nKSkuZGVmYXVsdDtcbiAgY29uc3QgcGF0aHMgPSBtZWdhemluZXMubWFwKChtZWdhemluZTogYW55KSA9PiAoe3BhcmFtczogeyBpZDogbWVnYXppbmUuaWR9fSkpO1xuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2V9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG1lZ2F6aW5lcyA9IChhd2FpdCBpbXBvcnQoJy4uLy4uLy4uL01lZ2F6aW5lRHVtbXkuanNvbicpKS5kZWZhdWx0O1xuICBjb25zdCBtZWdhemluZSA9IG1lZ2F6aW5lcy5maW5kKChtZWdhemluZTogYW55KSA9PiBtZWdhemluZS5pZCA9PT0gcGFyYW1zPy5pZCk7XG4gIHJldHVybiB7IHByb3BzOiB7IG1lZ2F6aW5lIH0gfTtcbn0iXSwibmFtZXMiOlsiTWVnYXppbmVEZXRhaWwiLCJtZWdhemluZSIsImRpdiIsInAiLCJ0aXRsZSIsImNvbnRlbnQiLCJnZXRTdGF0aWNQYXRocyIsIm1lZ2F6aW5lcyIsImRlZmF1bHQiLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsImlkIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImZpbmQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/[id].tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();