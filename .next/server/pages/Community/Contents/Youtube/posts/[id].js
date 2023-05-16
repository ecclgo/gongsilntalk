"use strict";
(() => {
var exports = {};
exports.id = 1087;
exports.ids = [1087,4962,1918,5192,4821];
exports.modules = {

/***/ 8237:
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
// EXTERNAL MODULE: ./src/components/community/DetailContents.tsx
var DetailContents = __webpack_require__(1972);
// EXTERNAL MODULE: ./src/components/community/Icon.tsx
var Icon = __webpack_require__(1424);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/community/DetailText.tsx
var DetailText = __webpack_require__(7955);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/ReplBox.tsx

const RepleBox = external_styled_components_default().div.withConfig({
    componentId: "sc-cd0b81a-0"
})`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 324px;
    height: 54px;
    left: 18px;
    top: 560px;
    background-color: #ffffff;
  }
`;
const RepleUsername = external_styled_components_default().span.withConfig({
    componentId: "sc-cd0b81a-1"
})`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 50px;
    height: 16px;
    left: 56px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    align-items: center;
    letter-spacing: -0.03em;

    color: #666666;
  }
  display: none;
`;
const RepleProfileBox = external_styled_components_default().div.withConfig({
    componentId: "sc-cd0b81a-2"
})`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 30px;
    height: 30px;
    left: 18px;
    background: #f0f0f0;
    border: 1px solid #9b9b9b;
    box-sizing: border-box;
    border-radius: 15px;
  }
  display: none;
`;
const RepleContents = external_styled_components_default().div.withConfig({
    componentId: "sc-cd0b81a-3"
})`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    left: 56px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    margin-top: 18px;

    display: flex;
    align-items: center;
    letter-spacing: -0.03em;

    color: #282828;
  }
  display: none;
`;
const RepleFooter = external_styled_components_default().div.withConfig({
    componentId: "sc-cd0b81a-4"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    width: 111px;
    height: 16px;
    left: 56px;
    margin-top: 45px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;

    color: #9b9b9b;
  }
  display: none;
`;
const RepleBtn = external_styled_components_default().button.withConfig({
    componentId: "sc-cd0b81a-5"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;

    left: 175px;
    margin-top: 45px;
    width: 50px;
    height: 16px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;

    color: #666666;
  }
  display: none;
`;
const MainRepleBox = external_styled_components_default().div.withConfig({
    componentId: "sc-cd0b81a-6"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  width: 702px;
  left: 38px;
  top: 1180px;
  background-color: #ffffff;
`;
const MainRepleUsername = external_styled_components_default().span.withConfig({
    componentId: "sc-cd0b81a-7"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  position: absolute;
  margin-bottom: 12px;
  left: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #666666;
`;
const MainRepleProfileBox = external_styled_components_default().div.withConfig({
    componentId: "sc-cd0b81a-8"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  position: absolute;
  left: 0px;
  margin-top: 21px;
  width: 36px;
  height: 36px;
  margin-top: 0px;

  background-color: #f0f0f0;
  border-radius: 1px solid #9b9b9b;
  border-radius: 15px;
`;
const MainRepleContents = external_styled_components_default().div.withConfig({
    componentId: "sc-cd0b81a-9"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  position: absolute;
  width: 616px;
  left: 50px;
  top: 24px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.03em;
  color: #282828;
`;
const MainRepleFooter = external_styled_components_default().div.withConfig({
    componentId: "sc-cd0b81a-10"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;

  width: 111px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.02em;
  left: 50px;
  margin-top: 50px;

  color: #9b9b9b;
`;
const MainRepleBtn = external_styled_components_default().button.withConfig({
    componentId: "sc-cd0b81a-11"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  width: 50px;
  height: 16px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.02em;
  left: 165px;
  margin-top: 50px;

  color: #666666;
`;

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/pages/Community/Contents/Youtube/posts/[id].tsx








const YoutubeDetail = ({ youtube  })=>{
    const router = (0,router_.useRouter)();
    const handleGoBack = ()=>{
        router.back();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DetailContents/* DetailTopBox */.wX, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* MBackArrow */.ZY, {
                    onClick: handleGoBack,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/BackArrow.png",
                        alt: "BackArrow",
                        width: 9,
                        height: 16
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailContents/* DetailBox */.td, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon/* BackArrow */.D1, {
                        onClick: handleGoBack,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/BackArrow.png",
                            alt: "BackArrow",
                            width: 9,
                            height: 16
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailContents/* TopLine */.q0, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon/* GongtalkBox */.N7, {
                        children: "공톡 유튜브"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailText/* TitleText */.eN, {
                        children: youtube?.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailContents/* UserInfoBox */.ot, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DetailContents/* DetailProBox */.RA, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/ProPic.png",
                                    alt: "ProPic",
                                    width: 40,
                                    height: 40
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DetailText/* UserName */.vx, {
                                children: "공실앤톡"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DetailText/* RegiDate */.Vp, {
                                children: external_moment_default()(youtube?.date).format("YYYY.MM.DD HH:mm")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailContents/* DetailLine */.nS, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailContents/* DetailContent */.s7, {
                        children: youtube?.contents
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailContents/* ImgBox */.tG, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/YImage",
                            alt: "YImage",
                            width: 324,
                            height: 182
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailContents/* EndLine */.y9, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailText/* MRegiCount */.sb, {
                        children: "댓글 " + youtube?.repl
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainRepleBox, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MainRepleProfileBox, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(MainRepleUsername, {
                                children: "user123"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MainRepleContents, {
                                children: "유용한 정보네요~"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MainRepleFooter, {
                                children: "2023.04.02 - 16:23"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MainRepleBtn, {
                                children: "답글쓰기"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailContents/* Repl */.wE, {
                        placeholder: "댓글을 입력해보세요"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RepleBox, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(RepleUsername, {
                        children: "user123"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RepleProfileBox, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(RepleContents, {
                        children: "유용한 정보네요!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RepleFooter, {
                        children: "2023.04.02 - 16:23"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RepleBtn, {
                        children: "답글쓰기"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _id_ = (YoutubeDetail);
const getStaticPaths = async ()=>{
    const youtubes = (await __webpack_require__.e(/* import() */ 9357).then(__webpack_require__.t.bind(__webpack_require__, 9357, 19))).default;
    const paths = youtubes.map((youtubes)=>({
            params: {
                id: youtubes.id
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const youtubes = (await __webpack_require__.e(/* import() */ 9357).then(__webpack_require__.t.bind(__webpack_require__, 9357, 19))).default;
    const youtube = youtubes.find((youtubes)=>youtubes.id === params?.id);
    return {
        props: {
            youtube
        }
    };
};


/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,4178], () => (__webpack_exec__(8237)));
module.exports = __webpack_exports__;

})();