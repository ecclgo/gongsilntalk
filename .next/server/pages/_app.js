"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,4846,4962,436,1751,6587,3844,1918,5192,4821];
exports.modules = {

/***/ 4733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/header/HeaderBox.tsx


const HeaderBox = external_styled_components_default().header.withConfig({
    componentId: "sc-5a488150-0"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
    width: 360px;
    height: 48px;
    left: 0px;
    top: 622px;
    background: #ffffff;
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
    color: #333333;
    z-index: 99999;
  }

  position: absolute;
  width: 1920px;
  height: 60px;
  left: 0px;
  top: 0px;

  background-color: #ffffff;
  border-bottom: 1px solid #d5d5d5;
`;
const HeaderLogo = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-1"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  top: 15px;
  left: 40px;
`;
const HeaderHome = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-2"
})`
  @media (max-width: 700px) {
    display: flex;
    position: absolute;
    left: 33.5px;
    top: 9px;
  }
  display: none;
`;
const FHeaderProduct = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-3"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 103px;
    top: 11px;
  }
  display: none;
`;
const SHeaderProduct = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-4"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 110.89px;
    top: 9.11px;
  }
  display: none;
`;
const HeaderMap = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-5"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 174.29px;
    top: 9.5px;
  }
  display: none;
`;
const HeaderCommunity = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-6"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 241.29px;
    top: 9.55px;
  }
  display: none;
`;
const HeaderMyInfoBox = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-7"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 312.58px;
    top: 9.55px;
  }
  display: none;
`;
const HeaderRecoBox = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-8"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }

  position: absolute;
  width: 101px;
  height: 23px;
  left: 637px;
  top: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  cursor: pointer;
  color: ${(props)=>`${props.activeBtn === "/Recommend" ? "#F16341" : "#343232"}`};
`;
const HeaderMapBox = external_styled_components_default()(HeaderRecoBox).withConfig({
    componentId: "sc-5a488150-9"
})`
  left: 824px;
  width: 120px;
  color: ${(props)=>`${props.activeBtn === "/Buildingmap" ? "#F16341" : "#343232"}`};
`;
const HeaderMyProduct = external_styled_components_default()(HeaderRecoBox).withConfig({
    componentId: "sc-5a488150-10"
})`
  left: 1027px;
  color: ${(props)=>`${props.activeBtn === "/Mybuilding" ? "#F16341" : "#343232"}`};
`;
const pattern = /^\/Community/;
const HeaderCommunityBox = external_styled_components_default()(HeaderRecoBox).withConfig({
    componentId: "sc-5a488150-11"
})`
  left: 1198px;
  color: ${(props)=>`${pattern.test(props.activeBtn) ? "#F16341" : "#343232"}`};
`;
const HeaderLogin = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-12"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  left: 1600px;
  top: 20px;

  width: 44px;
  height: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #848484;
  cursor: pointer;
`;
const HeaderRegister = external_styled_components_default()(HeaderLogin).withConfig({
    componentId: "sc-5a488150-13"
})`
  left: 1670px;
  width: 60px;
`;
const Bar = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-14"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  left: 1650px;
  top: 26px;
  width: 12px;
  height: 0px;

  border: 1px solid #cecece;
  transform: rotate(90deg);
`;
const JonggaeBox = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-15"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 10px;
  left: 1732px;
  top: 16px;

  width: 95px;
  height: 28px;

  background: #d5d5d5;
  border-radius: 50px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #3a3a3a;
  cursor: pointer;
`;
const NavLink = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-5a488150-16"
})`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  position: absolute;
  right: 10px;
`;
const MenuIcon = external_styled_components_default().div.withConfig({
    componentId: "sc-5a488150-17"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  position: absolute;
  left: 1855px;
  top: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
const NavMenu = external_styled_components_default().ul.withConfig({
    componentId: "sc-5a488150-18"
})`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen  })=>isOpen ? "flex" : "none"};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #fff;
    opacity: 0.95;
    transition: all 0.3s ease-in-out;
  }
`;
const NavItem = external_styled_components_default().li.withConfig({
    componentId: "sc-5a488150-19"
})`
  height: 80px;
`;

;// CONCATENATED MODULE: ./src/components/header/HeaderText.tsx

const HomeText = external_styled_components_default().span.withConfig({
    componentId: "sc-96a3ae84-0"
})`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 10px;
    height: 13px;
    left: 37px;
    top: 28px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.03em;

    color: ${(props)=>`${props.clicked === 0 ? "#F16341" : "#C1C1C1"}`};
  }
  display: none;
`;
const Recommend = external_styled_components_default()(HomeText).withConfig({
    componentId: "sc-96a3ae84-1"
})`
  left: 93px;
  width: 41px;
  color: ${(props)=>`${props.clicked === 1 ? "#F16341" : "#C1C1C1"}`};
`;
const Map = external_styled_components_default()(HomeText).withConfig({
    componentId: "sc-96a3ae84-2"
})`
  left: 172px;
  width: 35px;
  color: ${(props)=>`${props.clicked === 2 ? "#F16341" : "#C1C1C1"}`};
`;
const HeaderCommu = external_styled_components_default()(HomeText).withConfig({
    componentId: "sc-96a3ae84-3"
})`
  left: 231px;
  width: 41px;
  color: ${(props)=>`${props.clicked === 3 ? "#F16341" : "#C1C1C1"}`};
`;
const HeaderMyInfo = external_styled_components_default()(HomeText).withConfig({
    componentId: "sc-96a3ae84-4"
})`
  left: 303.5px;
  width: 37px;
  color: ${(props)=>`${props.clicked === 4 ? "#F16341" : "#C1C1C1"}`};
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/components/myPage/MyPageBar.tsx

const MyPage = external_styled_components_default().div.withConfig({
    componentId: "sc-919b2d64-0"
})`
@media screen and (max-width: 768px) {
  display: none;
}
  position: absolute;
  display: flex;
  width: 361px;
  
  left: 1560px;
  top: 9px;
  background-color: #F0F0F0;
  height: 100%;
  transition: all .35s;
`;
const TopBar = external_styled_components_default().div.withConfig({
    componentId: "sc-919b2d64-1"
})`
  position: absolute;
  width: 360px;
  height: 50px;
  left: 0px;
  top: 0px;
  background-color: #ffffff;
`;
const TopBarText = external_styled_components_default().span.withConfig({
    componentId: "sc-919b2d64-2"
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 50px;
  height: 18px;
  left: calc(50% - 47px/2 - 0px);
  top: calc(50% - 18px/2);

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
`;
const CloseBtn = external_styled_components_default().div.withConfig({
    componentId: "sc-919b2d64-3"
})`
  position: absolute;
  display: flex;
  left: 20px;
  top: 30%;
  cursor: pointer;
`;
const MyInfoBox = external_styled_components_default().div.withConfig({
    componentId: "sc-919b2d64-4"
})`
  position: absolute;
  width: 360px;
  height: 154px;
  left: 0px;
  top: 51px;
  background-color: #ffffff;
`;
const LoginInfo = external_styled_components_default().span.withConfig({
    componentId: "sc-919b2d64-5"
})`
  position: absolute;
  width: 184px;
  height: 38px;
  left: 68px;
  top: 31px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #343232;
`;
const LoginBtn = external_styled_components_default().button.withConfig({
    componentId: "sc-919b2d64-6"
})`
  position: absolute;
  width: 155px;
  height: 44px;
  left: 20px;
  bottom: 28px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  background-color: #F16341;
  border-radius: 5px;
  color: #FFFFFF;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
`;
const RegiBtn = external_styled_components_default().button.withConfig({
    componentId: "sc-919b2d64-7"
})`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 155px;
  height: 44px;
  left: 185px;
  bottom: 28px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.03em;
  color: #F16341;
  border: 1px solid #F16341;
  border-radius: 5px;
`;
const SubBox = external_styled_components_default().div.withConfig({
    componentId: "sc-919b2d64-8"
})`
  position: absolute;
  width: 360px;
  height: 866px;
  left: 0px;
  top: 214px;
  background-color: #ffffff;
`;
const CenterCallBtn = external_styled_components_default().button.withConfig({
    componentId: "sc-919b2d64-9"
})`
  position: absolute;
  display: flex;
  bottom: 38px;
  left: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 0px 0px;
  gap: 6px;

  width: 328px;
  height: 50px;

  border: 1px solid #F16341;
  border-radius: 5px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #F16341;
`;
const PhoneLogo = external_styled_components_default().div.withConfig({
    componentId: "sc-919b2d64-10"
})`
  width: 14.07px;
  height: 14px;
  position: absolute;
  left: 70px;
  top: 15px;
`;

;// CONCATENATED MODULE: ./src/components/MyPageBar.tsx





function MyPageBar({ activeMyPage , setActiveMyPage  }) {
    const [login, setLogin] = (0,external_react_.useState)(false);
    const handleCloseBtn = ()=>{
        setActiveMyPage(!activeMyPage);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MyPage, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TopBar, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CloseBtn, {
                            onClick: handleCloseBtn,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M13.295 2.115C13.6844 1.72564 13.6844 1.09436 13.295 0.705C12.9056 0.315639 12.2744 0.315639 11.885 0.705L7 5.59L2.115 0.705C1.72564 0.315639 1.09436 0.315639 0.705 0.705C0.315639 1.09436 0.315639 1.72564 0.705 2.115L5.59 7L0.705 11.885C0.315639 12.2744 0.315639 12.9056 0.705 13.295C1.09436 13.6844 1.72564 13.6844 2.115 13.295L7 8.41L11.885 13.295C12.2744 13.6844 12.9056 13.6844 13.295 13.295C13.6844 12.9056 13.6844 12.2744 13.295 11.885L8.41 7L13.295 2.115Z",
                                    fill: "#9B9B9B"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TopBarText, {
                            children: "My 메뉴"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MyInfoBox, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/LoginPic.png",
                                    alt: "LoginPic",
                                    width: 38,
                                    height: 38,
                                    style: {
                                        marginTop: "30px",
                                        marginLeft: "20px"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/Sign-in",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LoginBtn, {
                                        onClick: handleCloseBtn,
                                        children: "로그인"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/Sign-up",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(RegiBtn, {
                                        onClick: handleCloseBtn,
                                        children: "회원가입"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(LoginInfo, {
                                    children: login ? "님 환영합니다." : "로그인이 필요합니다."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SubBox, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CenterCallBtn, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(PhoneLogo, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    width: "16",
                                    height: "14",
                                    viewBox: "0 0 16 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M4.84096 5.75333C5.31385 6.60636 5.85887 7.42504 6.56649 8.17159C7.27639 8.92271 8.15919 9.60628 9.30191 10.1902C9.38664 10.2315 9.46679 10.2315 9.53893 10.2028C9.6477 10.1616 9.75877 10.0712 9.86754 9.96238C9.95227 9.87765 10.0576 9.74254 10.1675 9.59483C10.6072 9.0166 11.1511 8.29868 11.9194 8.65822C11.9366 8.66623 11.9492 8.67539 11.9663 8.68226L14.5289 10.1559C14.5369 10.1605 14.546 10.1685 14.5529 10.1731C14.8907 10.4055 15.0304 10.7639 15.0338 11.1704C15.0338 11.5837 14.8815 12.0486 14.6583 12.4413C14.3628 12.96 13.9277 13.3035 13.4262 13.5302C12.9488 13.7501 12.4175 13.868 11.9068 13.9436C11.1053 14.0615 10.3542 13.9859 9.58587 13.7501C8.83475 13.5176 8.0779 13.134 7.2512 12.6234L7.19052 12.5844C6.81152 12.3474 6.40161 12.0944 5.99971 11.7955C4.52952 10.6849 3.03071 9.08072 2.05401 7.31512C1.23533 5.83348 0.788782 4.23391 1.03267 2.7099C1.16778 1.87405 1.52617 1.11376 2.15134 0.612252C2.69636 0.172569 3.43031 -0.0678826 4.38067 0.0168479C4.48944 0.0248629 4.58677 0.0878383 4.6383 0.181729L6.28138 2.95952C6.52183 3.27096 6.5516 3.58011 6.41993 3.88926C6.31115 4.14231 6.09131 4.37589 5.79132 4.59344C5.70315 4.66901 5.59781 4.74573 5.48675 4.82588C5.1192 5.09266 4.70127 5.40067 4.8444 5.76249L4.84096 5.75333Z",
                                        fill: "#F16341"
                                    })
                                })
                            }),
                            "공실앤톡 고객센터 문의"
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Header.tsx









function Header() {
    const router = (0,router_.useRouter)();
    const [activeBtn, setActiveBtn] = (0,external_react_.useState)("");
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [activeMyPage, setActiveMyPage] = (0,external_react_.useState)(false);
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
    };
    const [clicked, setClicked] = (0,external_react_.useState)(0);
    const handleMyPage = ()=>{
        setActiveMyPage(!activeMyPage);
    };
    (0,external_react_.useEffect)(()=>{
        setActiveBtn(router.pathname);
    }, [
        activeBtn
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderBox, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderLogo, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/Logo.png",
                            alt: "Logo",
                            width: 100,
                            height: 30
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderHome, {
                    onClick: ()=>setClicked(0),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            width: "18",
                            height: "16",
                            viewBox: "0 0 18 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M7.2 16V10.3529H10.8V16H15.3V8.47059H18L9 0L0 8.47059H2.7V16H7.2Z",
                                fill: clicked === 0 ? "#F16341" : "#C1C1C1"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FHeaderProduct, {
                    onClick: ()=>setClicked(1),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "13",
                        height: "14",
                        viewBox: "0 0 13 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M6.28679 0.476562L0 4.66776V13.8919H4.38409V6.87734H7.89137V13.8919H12.2755V4.46609L6.28679 0.476562Z",
                            fill: clicked === 1 ? "#F16341" : "#C1C1C1"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SHeaderProduct, {
                    onClick: ()=>setClicked(1),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "13",
                        height: "16",
                        viewBox: "0 0 13 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0.890625 0.109375V1.43337L2.64426 2.59954L4.16116 3.61665H5.27472V4.36195L7.02836 5.53688V7.12393H8.782V8.87756H7.02836V10.6312H8.782V12.3848H7.02836V15.8921H12.2893V0.109375H0.890625ZM8.782 5.37029H7.02836V3.61665H8.782V5.37029Z",
                            fill: clicked === 1 ? "#F16341" : "#C1C1C1"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderMap, {
                    onClick: ()=>setClicked(2),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M14.8724 0.5L14.7391 0.525L10.2891 2.25L5.28906 0.5L0.589062 2.08333C0.414062 2.14167 0.289062 2.29167 0.289062 2.48333V15.0833C0.289062 15.3167 0.472396 15.5 0.705729 15.5L0.839063 15.475L5.28906 13.75L10.2891 15.5L14.9891 13.9167C15.1641 13.8583 15.2891 13.7083 15.2891 13.5167V0.916667C15.2891 0.683333 15.1057 0.5 14.8724 0.5ZM10.2891 13.8333L5.28906 12.075V2.16667L10.2891 3.925V13.8333Z",
                            fill: clicked === 2 ? "#F16341" : "#C1C1C1"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCommunity, {
                    onClick: ()=>setClicked(3),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Community",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M14.7566 0.546875C13.0468 0.546875 11.2055 0.897603 9.93407 1.8621C8.66268 0.897603 6.82136 0.546875 5.11157 0.546875C3.40177 0.546875 1.56045 0.897603 0.289062 1.8621V14.7075C0.289062 15.2774 0.92914 15.1021 0.946677 15.1021C2.13038 14.5321 3.84018 14.1376 5.11157 14.1376C6.82136 14.1376 8.66268 14.4883 9.93407 15.4528C11.1178 14.7075 13.266 14.1376 14.7566 14.1376C16.2033 14.1376 17.6939 14.4006 18.9215 15.0582C19.281 15.2424 19.5791 14.8916 19.5791 14.6637V1.8621C18.2726 0.880066 16.3962 0.546875 14.7566 0.546875ZM17.8254 12.8223C16.8609 12.5155 15.8088 12.3839 14.7566 12.3839C13.266 12.3839 11.1178 12.9539 9.93407 13.6992V3.61574C11.1178 2.87045 13.266 2.30051 14.7566 2.30051C15.8088 2.30051 16.8609 2.43204 17.8254 2.73892V12.8223Z",
                                fill: clicked === 3 ? "#F16341" : "#C1C1C1"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderMyInfoBox, {
                    onClick: ()=>setClicked(4),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "17",
                        height: "16",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M8.57812 1.9C9.73812 1.9 10.6781 2.84 10.6781 4C10.6781 5.16 9.73812 6.1 8.57812 6.1C7.41813 6.1 6.47812 5.16 6.47812 4C6.47812 2.84 7.41813 1.9 8.57812 1.9ZM8.57812 10.9C11.5481 10.9 14.6781 12.36 14.6781 13V14.1H2.47813V13C2.47813 12.36 5.60812 10.9 8.57812 10.9ZM8.57812 0C6.36812 0 4.57812 1.79 4.57812 4C4.57812 6.21 6.36812 8 8.57812 8C10.7881 8 12.5781 6.21 12.5781 4C12.5781 1.79 10.7881 0 8.57812 0ZM8.57812 9C5.90812 9 0.578125 10.34 0.578125 13V16H16.5781V13C16.5781 10.34 11.2481 9 8.57812 9Z",
                            fill: clicked === 4 ? "#F16341" : "#C1C1C1"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HomeText, {
                    clicked: clicked,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "홈"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Recommend, {
                    clicked: clicked,
                    children: "추천분양"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Map, {
                    clicked: clicked,
                    children: "지도"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCommu, {
                    clicked: clicked,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Community",
                        children: "커뮤니티"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderMyInfo, {
                    clicked: clicked,
                    children: "My메뉴"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderRecoBox, {
                    activeBtn: router.pathname,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Recommend",
                        onClick: ()=>{
                            setActiveBtn(router.pathname);
                        },
                        children: "추천 분양현장"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderMapBox, {
                    activeBtn: router.pathname,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Buildingmap",
                        onClick: ()=>{
                            setActiveBtn(router.pathname);
                        },
                        children: "실시간 매물지도"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderMyProduct, {
                    activeBtn: router.pathname,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Mybuilding",
                        onClick: ()=>{
                            setActiveBtn(router.pathname);
                        },
                        children: "내 매물관리"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCommunityBox, {
                    activeBtn: router.pathname,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Community",
                        onClick: ()=>{
                            setActiveBtn(router.pathname);
                        },
                        children: "커뮤니티"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderLogin, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Sign-in",
                        children: "로그인"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Bar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderRegister, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Sign-up",
                        children: "회원가입"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(JonggaeBox, {
                    children: "중개사 가입"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MenuIcon, {
                    onClick: ()=>{
                        handleToggle();
                        handleMyPage();
                    },
                    children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaBars, {}) : /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaBars, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavMenu, {
                    isOpen: isOpen,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {})
                }),
                activeMyPage === true ? /*#__PURE__*/ jsx_runtime_.jsx(MyPageBar, {
                    activeMyPage: activeMyPage,
                    setActiveMyPage: setActiveMyPage
                }) : null
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Layout.tsx



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4733);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle`
  background-color: #F5F5F5;
`;
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.extendTheme)({
    styles: {
        global: {
            body: {
                bg: "#F7F7F7"
            }
        }
    }
});
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalStyle, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,1664], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();