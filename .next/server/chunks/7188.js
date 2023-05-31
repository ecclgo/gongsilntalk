"use strict";
exports.id = 7188;
exports.ids = [7188];
exports.modules = {

/***/ 7188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/map/Header.tsx


const ModeBox = external_styled_components_default().div.withConfig({
  displayName: "Header__ModeBox",
  componentId: "sc-11b7647-0"
})(["box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 22px;gap:6px;position:absolute;top:59px;left:0px;width:152px;height:58px;background:#FFFFFF;border-width:1px 1px 1px 0px;border-style:solid;border-color:#D5D4D4;"]);
const SelectBtn = external_styled_components_default().select.withConfig({
  displayName: "Header__SelectBtn",
  componentId: "sc-11b7647-1"
})(["padding:8px;font-size:16px;border-radius:4px;border:none;outline:none;"]);
const Option = external_styled_components_default().option.withConfig({
  displayName: "Header__Option",
  componentId: "sc-11b7647-2"
})(["position:absolute;top:100px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:18px;line-height:23px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#000000;"]);
const Select = ({
  options,
  value,
  onChange
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SelectBtn, {
    value: value,
    onChange: onChange,
    children: options.map(option => /*#__PURE__*/jsx_runtime_.jsx(Option, {
      value: option.value,
      children: option.label
    }, option.value))
  });
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/Map/Header.tsx




function Header() {
  const {
    0: selectOption,
    1: setSelectOption
  } = (0,external_react_.useState)('');

  const handleSelectChange = event => {
    setSelectOption(event.target.value);
  };

  const options = [{
    value: 'Map1',
    label: '실거래가 지도'
  }, {
    value: 'Map2',
    label: '매물지도'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ModeBox, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Select, {
        options: options,
        value: selectOption,
        onChange: handleSelectChange
      })
    })
  });
}

/***/ })

};
;