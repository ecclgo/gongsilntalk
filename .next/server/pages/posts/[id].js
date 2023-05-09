"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646,910,848,751,821];
exports.modules = {

/***/ 3721:
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
    componentId: "sc-e2abab73-0"
})`
  position: absolute;
  width: 778px;
  height: 1600px;
  background-color: #FFFFFF;
  left: 21%;
  right: 40%;
  margin-top: 3.8%;

  border: 1px solid #333333;
`;
const UserInfoBox = external_styled_components_default().div.withConfig({
    componentId: "sc-e2abab73-1"
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 220px;
  height: 40px;
  left: 38px;
  top: 173px;
`;
const DetailProBox = external_styled_components_default().div.withConfig({
    componentId: "sc-e2abab73-2"
})`
  position: absolute;
  width: 40px;
  height: 40px;
`;
const DetailLine = external_styled_components_default().div.withConfig({
    componentId: "sc-e2abab73-3"
})`
  position: absolute;
  top: 243px;
  left: 38px;

  width: 702px;
  border: 1px solid #F0F0F0;
`;
const DetailContent = external_styled_components_default().div.withConfig({
    componentId: "sc-e2abab73-4"
})`
  position: absolute;
  top: 262px;
  width: 702px;
  left: 38px;
`;
const ImgBox = external_styled_components_default().div.withConfig({
    componentId: "sc-e2abab73-5"
})`
  position: absolute;
  width: 702px;
  height: 394px;
  top: 436px;
  left: 38px;
`;
const EndLine = external_styled_components_default().div.withConfig({
    componentId: "sc-e2abab73-6"
})`
  position: absolute;
  top: 1100px;
  left: 38px;

  width: 702px;
  border: 1px solid #F0F0F0;
`;
const Repl = external_styled_components_default().div.withConfig({
    componentId: "sc-e2abab73-7"
})`
  position: absolute;
  left: 52px;
  bottom: 46px;
  width: 674px;
  background-color: #FFFFFF;
  border: 1px solid #F0F0F0;
  height: 80px;

  color: #333333;
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
;// CONCATENATED MODULE: ./src/components/community/DetailText.tsx

const TitleText = external_styled_components_default().span.withConfig({
    componentId: "sc-c9cfbc5f-0"
})`
  position: absolute;
  top: 124px;
  left: 38px;

  width: 302px;
  height: 21px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #000000;
`;
const UserName = external_styled_components_default().span.withConfig({
    componentId: "sc-c9cfbc5f-1"
})`
  position: absolute;
  left: 52px;
  bottom: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #282828;
`;
const RegiDate = external_styled_components_default().span.withConfig({
    componentId: "sc-c9cfbc5f-2"
})`
  position: absolute;
  left: 52px;
  top: 20px;

  width: 166px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #9B9B9B;
`;

;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: ./src/pages/Community/Contents/Carousel.tsx
var Carousel = __webpack_require__(2322);
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
                /*#__PURE__*/ jsx_runtime_.jsx(TitleText, {
                    children: megazine.title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserInfoBox, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(DetailProBox, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/ProPic.png",
                                alt: "ProPic",
                                width: 40,
                                height: 40
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(UserName, {
                            children: "공실앤톡"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RegiDate, {
                            children: external_moment_default()(megazine.date).format("YYYY.MM.DD HH:mm")
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(DetailLine, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(DetailContent, {
                    children: megazine.content
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ImgBox, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Carousel["default"], {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(EndLine, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Repl, {
                    children: "댓글을 작성해보세요."
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

/***/ 4508:
/***/ ((module) => {

module.exports = require("react-responsive-carousel");

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
var __webpack_exports__ = __webpack_require__.X(0, [373,636,675,322], () => (__webpack_exec__(3721)));
module.exports = __webpack_exports__;

})();