"use strict";
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 2006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeBoard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function FreeBoard() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "자유글"
    });
}


/***/ }),

/***/ 1224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KnowHow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function KnowHow() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "노하우"
    });
}


/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QnA)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contents_Notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2502);


function QnA() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Contents_Notice__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    });
}


/***/ }),

/***/ 3060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Review)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Review() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "후기"
    });
}


/***/ }),

/***/ 3753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Board)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/CommunityBox.tsx

const QnABoxTab = external_styled_components_default().div.withConfig({
    componentId: "sc-b38c14b8-0"
})`
  position: absolute;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;

  width: 100px;
  height: 40px;
  top: 86px;
  left: 38px;

  background: ${(props)=>`${props.innerTab == 0 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};
  color: ${(props)=>`${props.innerTab == 0 ? "#F16341" : "#9B9B9B"}`};
  border: ${(props)=>`${props.innerTab == 0 ? "1px solid #F16341" : "1px solid #D5D5D5"}`};
  border-radius: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  cursor: pointer;
  text-align: center;
  padding: 18px;
`;
const FreeBoardTab = external_styled_components_default()(QnABoxTab).withConfig({
    componentId: "sc-b38c14b8-1"
})`
  width: 74px;
  height: 40px;
  left: 150px;
  padding: 15px;

  background: ${(props)=>`${props.innerTab == 1 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};
  color: ${(props)=>`${props.innerTab == 1 ? "#F16341" : "#9B9B9B"}`};
  border: ${(props)=>`${props.innerTab == 1 ? "1px solid #F16341" : "1px solid #D5D5D5"}`};
  
  `;
const KnowHowTab = external_styled_components_default()(QnABoxTab).withConfig({
    componentId: "sc-b38c14b8-2"
})`
  width: 74px;
  height: 40px;
  background: ${(props)=>`${props.innerTab == 2 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};
  color: ${(props)=>`${props.innerTab == 2 ? "#F16341" : "#9B9B9B"}`};
  border: ${(props)=>`${props.innerTab == 2 ? "1px solid #F16341" : "1px solid #D5D5D5"}`};
  padding: 15px;

  left: 235px;
`;
const ReviewTab = external_styled_components_default()(QnABoxTab).withConfig({
    componentId: "sc-b38c14b8-3"
})`
  left: 320px;
  width: 59px;
  height: 40px;
  padding: 15px;

  background: ${(props)=>`${props.innerTab == 3 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};
  color: ${(props)=>`${props.innerTab == 3 ? "#F16341" : "#9B9B9B"}`};
  border: ${(props)=>`${props.innerTab == 3 ? "1px solid #F16341" : "1px solid #D5D5D5"}`};
`;

// EXTERNAL MODULE: ./src/components/community/TabSpan.tsx
var TabSpan = __webpack_require__(6381);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/pages/Community/Board/QnA/index.tsx
var QnA = __webpack_require__(144);
// EXTERNAL MODULE: ./src/pages/Community/Board/FreeBoard/index.tsx
var FreeBoard = __webpack_require__(2006);
// EXTERNAL MODULE: ./src/pages/Community/Board/KnowHow/index.tsx
var KnowHow = __webpack_require__(1224);
// EXTERNAL MODULE: ./src/pages/Community/Board/Review/index.tsx
var Review = __webpack_require__(3060);
;// CONCATENATED MODULE: ./src/pages/Community/Board/index.tsx








function Board({ tabClicked , setTabClicked  }) {
    const [innerTab, setInnerTab] = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TabSpan/* SecondContent */.j_, {
                tabClicked: tabClicked,
                onClick: ()=>setTabClicked(1),
                children: "커뮤니티"
            }),
            tabClicked == 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(QnABoxTab, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(0),
                        children: "질문/답변"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FreeBoardTab, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(1),
                        children: "자유글"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(KnowHowTab, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(2),
                        children: "노하우"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ReviewTab, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(3),
                        children: "후기"
                    }),
                    innerTab === 0 ? /*#__PURE__*/ jsx_runtime_.jsx(QnA["default"], {}) : innerTab === 1 ? /*#__PURE__*/ jsx_runtime_.jsx(FreeBoard["default"], {}) : innerTab === 2 ? /*#__PURE__*/ jsx_runtime_.jsx(KnowHow["default"], {}) : /*#__PURE__*/ jsx_runtime_.jsx(Review["default"], {})
                ]
            }) : null
        ]
    });
}


/***/ })

};
;