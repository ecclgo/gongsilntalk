"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Community/NewPost",{

/***/ "./src/pages/Community/NewPost.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Community/NewPost.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewPost; }\n/* harmony export */ });\n/* harmony import */ var _Users_ecclgo_dev_gongsilntalk_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_community_NewPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NewPost */ \"./src/components/community/NewPost.tsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/ecclgo/dev/gongsilntalk/src/pages/Community/NewPost.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Users_ecclgo_dev_gongsilntalk_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\nfunction NewPost() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      enabled = _useState[0],\n      setEnabled = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var animation = requestAnimationFrame(function () {\n      return setEnabled(true);\n    });\n    return function () {\n      cancelAnimationFrame(animation);\n      setEnabled(false);\n    };\n  }, []);\n\n  if (!enabled) {\n    return null;\n  }\n\n  ;\n\n  var onDragEnd = function onDragEnd(_ref) {\n    var source = _ref.source,\n        destination = _ref.destination;\n    console.log('>>> source', source);\n    console.log('>>> destination', destination);\n  };\n\n  var handleDrop = function handleDrop(fileList) {\n    console.log('Dropped files:', fileList); // 추가적인 처리 로직을 수행할 수 있습니다.\n    // 예시로 성공 메시지를 표시합니다.\n\n    antd__WEBPACK_IMPORTED_MODULE_5__.message.success('Files dropped successfully!');\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    menuName: '',\n    title: '',\n    contents: '',\n    uploads: []\n  }),\n      postForm = _useState2[0],\n      setPostForm = _useState2[1];\n\n  var handleMenu = function handleMenu(value) {\n    setPostForm(function (prevState) {\n      return _objectSpread(_objectSpread({}, prevState), {}, {\n        menuName: value\n      });\n    });\n  };\n\n  var uploadButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      style: {\n        marginTop: 8\n      },\n      children: \"Upload\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_1__.NewPostBox, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_1__.NewPostText, {\n        children: \"\\uC2E0\\uADDC \\uAC8C\\uC2DC\\uAE00 \\uC791\\uC131\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_1__.BackArrowBox, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: '/BackArrow.png',\n          alt: \"BackArrow\",\n          width: 30,\n          height: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Select, {\n        defaultValue: \"\\uC9C8\\uBB38/\\uB2F5\\uBCC0\",\n        style: {\n          width: 330,\n          left: 30,\n          top: 180\n        },\n        onChange: handleMenu,\n        options: [{\n          value: \"QnA\",\n          label: \"질문/답변\"\n        }, {\n          value: \"FreeBoard\",\n          label: \"자유게시판\"\n        }, {\n          value: \"KnowHow\",\n          label: \"노하우\"\n        }, {\n          value: \"Review\",\n          label: \"후기\"\n        }]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_1__.BoardTitle, {\n        placeholder: \"\\uC81C\\uBAA9\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_1__.ContentsBox, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_1__.ContentsInput, {\n          placeholder: \"\\uB0B4\\uC6A9\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_1__.UploadBox, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_1__.UploadText, {\n          children: \"\\uC0AC\\uC9C4 \\uB4F1\\uB85D\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          style: {\n            position: \"absolute\",\n            top: \"100px\"\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.DragDropContext, {\n            onDragEnd: onDragEnd,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.Droppable, {\n              droppableId: \"droppable\",\n              children: function children(provided) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", _objectSpread({\n                  ref: provided.innerRef\n                }, provided.droppableProps), void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 100,\n                  columnNumber: 21\n                }, _this);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(NewPost, \"Z6X6/A5MrCEidAxNWH/Re0EyBGI=\");\n\n_c = NewPost;\n\nvar _c;\n\n$RefreshReg$(_c, \"NewPost\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL3BhZ2VzL0NvbW11bml0eS9OZXdQb3N0LnRzeD8zNjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhY2tBcnJvd0JveCwgQm9hcmRUaXRsZSwgQ29udGVudHNCb3gsIENvbnRlbnRzSW5wdXQsIE5ld1Bvc3RCb3gsIE5ld1Bvc3RUZXh0LCBVcGxvYWRCb3gsIFVwbG9hZFRleHQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW11bml0eS9OZXdQb3N0XCI7XG5pbXBvcnQgeyBNb2RhbCwgU2VsZWN0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBVcGxvYWQsIHsgUmNGaWxlLCBVcGxvYWRGaWxlLCBVcGxvYWRQcm9wcyB9IGZyb20gXCJhbnRkL2VzL3VwbG9hZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyb3BSZXN1bHQsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG5cbiAgY29uc3QgW2VuYWJsZWQsIHNldEVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldEVuYWJsZWQodHJ1ZSkpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgc2V0RW5hYmxlZChmYWxzZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGlmKCFlbmFibGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3Qgb25EcmFnRW5kID0gKHsgc291cmNlLCBkZXN0aW5hdGlvbiB9OiBEcm9wUmVzdWx0KSA9PiB7XG4gICAgY29uc29sZS5sb2coJz4+PiBzb3VyY2UnLCBzb3VyY2UpO1xuICAgIGNvbnNvbGUubG9nKCc+Pj4gZGVzdGluYXRpb24nLCBkZXN0aW5hdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJvcCA9IChmaWxlTGlzdDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Ryb3BwZWQgZmlsZXM6JywgZmlsZUxpc3QpO1xuICAgIC8vIOy2lOqwgOyggeyduCDsspjrpqwg66Gc7KeB7J2EIOyImO2Wie2VoCDsiJgg7J6I7Iq164uI64ukLlxuXG4gICAgLy8g7JiI7Iuc66GcIOyEseqztSDrqZTsi5zsp4Drpbwg7ZGc7Iuc7ZWp64uI64ukLlxuICAgIG1lc3NhZ2Uuc3VjY2VzcygnRmlsZXMgZHJvcHBlZCBzdWNjZXNzZnVsbHkhJyk7XG4gIH07XG5cbiAgY29uc3QgW3Bvc3RGb3JtLCBzZXRQb3N0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgbWVudU5hbWU6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBjb250ZW50czogJycsXG4gICAgdXBsb2FkczogW11cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlTWVudSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0UG9zdEZvcm0oKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBtZW51TmFtZTogdmFsdWVcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5ld1Bvc3RCb3g+XG4gICAgICAgIDxOZXdQb3N0VGV4dD5cbiAgICAgICAgICDsi6Dqt5wg6rKM7Iuc6riAIOyekeyEsVxuICAgICAgICA8L05ld1Bvc3RUZXh0PlxuICAgICAgICA8QmFja0Fycm93Qm94PlxuICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIHNyYz17Jy9CYWNrQXJyb3cucG5nJ31cbiAgICAgICAgICAgIGFsdD1cIkJhY2tBcnJvd1wiXG4gICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQmFja0Fycm93Qm94PlxuICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIuyniOusuC/ri7Xrs4BcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMzAsIGxlZnQ6IDMwLCB0b3A6IDE4MCB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZW51fVxuICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIHt2YWx1ZTogXCJRbkFcIiwgbGFiZWw6IFwi7KeI66y4L+uLteuzgFwifSxcbiAgICAgICAgICAgIHt2YWx1ZTogXCJGcmVlQm9hcmRcIiwgbGFiZWw6IFwi7J6Q7Jyg6rKM7Iuc7YyQXCJ9LFxuICAgICAgICAgICAge3ZhbHVlOiBcIktub3dIb3dcIiwgbGFiZWw6IFwi64W47ZWY7JqwXCJ9LFxuICAgICAgICAgICAge3ZhbHVlOiBcIlJldmlld1wiLCBsYWJlbDogXCLtm4TquLBcIn1cbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgICA8Qm9hcmRUaXRsZSBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpQuXCIvPlxuICAgICAgICA8Q29udGVudHNCb3g+XG4gICAgICAgICAgPENvbnRlbnRzSW5wdXQgcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiLz5cbiAgICAgICAgPC9Db250ZW50c0JveD5cbiAgICAgICAgPFVwbG9hZEJveD5cbiAgICAgICAgICA8VXBsb2FkVGV4dD5cbiAgICAgICAgICAgIOyCrOynhCDrk7HroZ1cbiAgICAgICAgICA8L1VwbG9hZFRleHQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogXCIxMDBweFwiXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cbiAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1VwbG9hZEJveD5cbiAgICAgIDwvTmV3UG9zdEJveD5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJhY2tBcnJvd0JveCIsIkJvYXJkVGl0bGUiLCJDb250ZW50c0JveCIsIkNvbnRlbnRzSW5wdXQiLCJOZXdQb3N0Qm94IiwiTmV3UG9zdFRleHQiLCJVcGxvYWRCb3giLCJVcGxvYWRUZXh0IiwiU2VsZWN0IiwibWVzc2FnZSIsIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsIk5ld1Bvc3QiLCJlbmFibGVkIiwic2V0RW5hYmxlZCIsImFuaW1hdGlvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwib25EcmFnRW5kIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRHJvcCIsImZpbGVMaXN0Iiwic3VjY2VzcyIsIm1lbnVOYW1lIiwidGl0bGUiLCJjb250ZW50cyIsInVwbG9hZHMiLCJwb3N0Rm9ybSIsInNldFBvc3RGb3JtIiwiaGFuZGxlTWVudSIsInZhbHVlIiwicHJldlN0YXRlIiwidXBsb2FkQnV0dG9uIiwibWFyZ2luVG9wIiwid2lkdGgiLCJsZWZ0IiwidG9wIiwibGFiZWwiLCJwb3NpdGlvbiIsInByb3ZpZGVkIiwiaW5uZXJSZWYiLCJkcm9wcGFibGVQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Community/NewPost.tsx\n"));

/***/ })

});