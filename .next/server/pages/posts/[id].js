"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646,848,751,821];
exports.modules = {

/***/ 9187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/DetailContents.tsx

const DetailBox = external_styled_components_default().div.withConfig({
    componentId: "sc-904ced3-0"
})`
  position: absolute;
  width: 740px;
  height: 1600px;
  background-color: #FFFFFF;
  left: 21%;
  right: 40%;
  margin-top: 3.8%;

  border: 1px solid #333333;
`;

;// CONCATENATED MODULE: ./src/components/community/Icon.tsx

const BackArrow = external_styled_components_default().div.withConfig({
    componentId: "sc-438f4084-0"
})`
  position: absolute;
  width: 9px;
  height: 16px;
  top: 32px;
  left: 40px;

  cursor: pointer;
`;
const GongtalkBox = external_styled_components_default().div.withConfig({
    componentId: "sc-438f4084-1"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  gap: 10px;

  position: absolute;
  width: 82px;
  height: 30px;
  left: 38px;
  top: 76px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  letter-spacing: -0.03em;

  background: rgba(241, 99, 65, 0.1);
  border-radius: 6px;

  color: #F16341;

  cursor: pointer;
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/pages/posts/[id].tsx




const MegazineDetail = ({ megazine  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailBox, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(BackArrow, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/BackArrow.png",
                        alt: "BackArrow",
                        width: 9,
                        height: 16
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GongtalkBox, {
                    children: "공톡 매거진"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: megazine.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: megazine.content
                })
            ]
        })
    });
};
/* harmony default export */ const _id_ = (MegazineDetail);
const getStaticPaths = async ()=>{
    const megazines = (await __webpack_require__.e(/* import() */ 723).then(__webpack_require__.t.bind(__webpack_require__, 5723, 19))).default;
    const paths = megazines.map((megazine)=>({
            params: {
                id: megazine.id
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const megazines = (await __webpack_require__.e(/* import() */ 723).then(__webpack_require__.t.bind(__webpack_require__, 5723, 19))).default;
    const megazine = megazines.find((megazine)=>megazine.id === params?.id);
    return {
        props: {
            megazine
        }
    };
};


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [373,636,675], () => (__webpack_exec__(9187)));
module.exports = __webpack_exports__;

})();