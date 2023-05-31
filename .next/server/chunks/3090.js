"use strict";
exports.id = 3090;
exports.ids = [3090];
exports.modules = {

/***/ 3090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoanCal)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/myPage/LoanProfit.tsx

const InfoText = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__InfoText",
  componentId: "sc-iy6ilq-0"
})(["position:absolute;width:533px;height:44px;left:473px;top:245px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:400;font-size:16px;line-height:22px;letter-spacing:-0.03em;color:#9d9999;"]);
const SubTabBox = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__SubTabBox",
  componentId: "sc-iy6ilq-1"
})(["display:flex;flex-direction:row;align-items:flex-start;padding:0px;position:absolute;width:348px;height:40px;left:472px;top:317px;"]);
const SubTab1 = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__SubTab1",
  componentId: "sc-iy6ilq-2"
})(["box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 14px;gap:10px;width:116px;height:40px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;background-color:", ";;border:", ";color:", ";cursor:pointer;"], props => `${props.SubTabNum === 0 ? '#FFFFFF' : '#f0f0f0'}`, props => `${props.SubTabNum === 0 ? '1px solid #9d9999' : '1px solid #d5d4d4'}`, props => `${props.SubTabNum === 0 ? '#2a2828' : '#9d9999'}`);
const SubTab2 = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__SubTab2",
  componentId: "sc-iy6ilq-3"
})(["box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 14px;gap:10px;width:116px;height:40px;border-width:1px 0px;border-style:solid;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;background-color:", ";;border:", ";color:", ";cursor:pointer;"], props => `${props.SubTabNum === 1 ? '#FFFFFF' : '#f0f0f0'}`, props => `${props.SubTabNum === 1 ? '1px solid #9d9999' : '1px solid #d5d4d4'}`, props => `${props.SubTabNum === 1 ? '#2a2828' : '#9d9999'}`);
const SubTab3 = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__SubTab3",
  componentId: "sc-iy6ilq-4"
})(["box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 14px;gap:10px;width:116px;height:40px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;background-color:", ";;border:", ";color:", ";cursor:pointer;"], props => `${props.SubTabNum === 2 ? '#FFFFFF' : '#f0f0f0'}`, props => `${props.SubTabNum === 2 ? '1px solid #9d9999' : '1px solid #d5d4d4'}`, props => `${props.SubTabNum === 2 ? '#2a2828' : '#9d9999'}`);
const CheckBoxContainer = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__CheckBoxContainer",
  componentId: "sc-iy6ilq-5"
})(["display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:14px;position:absolute;width:219px;height:18px;left:472px;top:379px;"]);
const CheckBox1 = external_styled_components_default().input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "LoanProfit__CheckBox1",
  componentId: "sc-iy6ilq-6"
})(["appearance:none;height:16px;width:16px;border:1px solid #ccc;border-radius:3px;position:absolute;left:-10px;margin-top:5px;margin-left:10px;&:checked{&::before{content:'\\2713';display:block;height:16px;width:16px;background-color:#f16341;border-radius:3px;text-align:center;line-height:1rem;font-size:1rem;color:white;}}"]);
const CheckboxName1 = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__CheckboxName1",
  componentId: "sc-iy6ilq-7"
})(["position:absolute;left:25px;top:5px;width:51px;height:18px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const CheckBox2 = external_styled_components_default()(CheckBox1).withConfig({
  displayName: "LoanProfit__CheckBox2",
  componentId: "sc-iy6ilq-8"
})(["position:absolute;left:80px;"]);
const CheckboxName2 = external_styled_components_default()(CheckboxName1).withConfig({
  displayName: "LoanProfit__CheckboxName2",
  componentId: "sc-iy6ilq-9"
})(["position:absolute;left:115px;width:300px;"]);
const LoanPriceBox = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__LoanPriceBox",
  componentId: "sc-iy6ilq-10"
})(["position:absolute;display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:22px;width:678px;height:70px;left:472px;top:415px;"]);
const LoanPriceText = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__LoanPriceText",
  componentId: "sc-iy6ilq-11"
})(["position:absolute;left:0px;top:0px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const LoanPeriodText = external_styled_components_default()(LoanPriceText).withConfig({
  displayName: "LoanProfit__LoanPeriodText",
  componentId: "sc-iy6ilq-12"
})(["left:350px;"]);
const LoanPriceInput = external_styled_components_default().input.withConfig({
  displayName: "LoanProfit__LoanPriceInput",
  componentId: "sc-iy6ilq-13"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;position:absolute;top:30px;width:291px;height:44px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;"]);
const WonText = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__WonText",
  componentId: "sc-iy6ilq-14"
})(["position:absolute;left:300px;top:40px;width:29px;height:20px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:16px;line-height:20px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#686564;"]);
const PeriodText = external_styled_components_default()(WonText).withConfig({
  displayName: "LoanProfit__PeriodText",
  componentId: "sc-iy6ilq-15"
})(["left:650px;top:40px;"]);
const PeriodInput = external_styled_components_default()(LoanPriceInput).withConfig({
  displayName: "LoanProfit__PeriodInput",
  componentId: "sc-iy6ilq-16"
})(["left:350px;"]);
const InterestBox = external_styled_components_default()(LoanPriceBox).withConfig({
  displayName: "LoanProfit__InterestBox",
  componentId: "sc-iy6ilq-17"
})(["position:absolute;top:500px;"]);
const InterestRateText = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__InterestRateText",
  componentId: "sc-iy6ilq-18"
})(["font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const InterestRateInput = external_styled_components_default().input.withConfig({
  displayName: "LoanProfit__InterestRateInput",
  componentId: "sc-iy6ilq-19"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;width:291px;height:44px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;position:absolute;top:25px;"]);
const InterestPercent = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__InterestPercent",
  componentId: "sc-iy6ilq-20"
})(["position:absolute;left:300px;top:40px;width:29px;height:20px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:16px;line-height:20px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#686564;"]);
const NotPayingText = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__NotPayingText",
  componentId: "sc-iy6ilq-21"
})(["position:absolute;width:51px;height:18px;left:350px;top:0px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const NotPayingInput = external_styled_components_default().input.withConfig({
  displayName: "LoanProfit__NotPayingInput",
  componentId: "sc-iy6ilq-22"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;position:absolute;left:350px;top:25px;width:291px;height:44px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;"]);
const Underline = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__Underline",
  componentId: "sc-iy6ilq-23"
})(["position:absolute;width:976px;height:0px;left:calc(50% - 976px / 2);top:591px;border:1px solid #f0f0f0;"]);
const CalcBtnBox = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__CalcBtnBox",
  componentId: "sc-iy6ilq-24"
})(["display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:10px;position:absolute;width:328px;height:44px;left:472px;top:609px;"]);
const AddPaying = external_styled_components_default().button.withConfig({
  displayName: "LoanProfit__AddPaying",
  componentId: "sc-iy6ilq-25"
})(["box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;width:159px;height:44px;background:#ffffff;border:1px solid #f16341;border-radius:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:15px;line-height:19px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#f16341;cursor:pointer;:hover{background-color:#f16341;color:#ffffff;}"]);
const AddInterest = external_styled_components_default().button.withConfig({
  displayName: "LoanProfit__AddInterest",
  componentId: "sc-iy6ilq-26"
})(["box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;width:159px;height:44px;background:#ffffff;border:1px solid #f16341;border-radius:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:15px;line-height:19px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#f16341;:hover{background-color:#f16341;color:#ffffff;}"]);
const PayingRow = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__PayingRow",
  componentId: "sc-iy6ilq-27"
})(["position:relative;left:472px;top:720px;width:1450px;height:70px;background-color:#FFFFFF;"]);
const PayingNumText = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__PayingNumText",
  componentId: "sc-iy6ilq-28"
})(["position:absolute;width:26px;height:18px;left:0px;top:-40px;margin-top:20px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#686564;"]);
const PayingNumber = external_styled_components_default().input.withConfig({
  displayName: "LoanProfit__PayingNumber",
  componentId: "sc-iy6ilq-29"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 14px;width:48px;height:44px;background:#FFFFFF;border:1px solid #D5D4D4;border-radius:5px;"]);
const PayingPrice = external_styled_components_default().input.withConfig({
  displayName: "LoanProfit__PayingPrice",
  componentId: "sc-iy6ilq-30"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 14px;position:absolute;left:80px;top:0px;width:171px;height:44px;background:#FFFFFF;border:1px solid #D5D4D4;border-radius:5px;"]);
const PayingPriceText = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__PayingPriceText",
  componentId: "sc-iy6ilq-31"
})(["position:absolute;width:53px;height:18px;left:80px;top:-20px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#686564;"]);
const SlashText = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__SlashText",
  componentId: "sc-iy6ilq-32"
})(["position:absolute;left:60px;top:10px;width:6px;height:19px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:15px;line-height:19px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#686564;"]);
const WonInputText = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__WonInputText",
  componentId: "sc-iy6ilq-33"
})(["position:absolute;left:260px;top:15px;width:15px;height:20px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:16px;line-height:20px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#686564;"]);
const DeleteBtn = external_styled_components_default().button.withConfig({
  displayName: "LoanProfit__DeleteBtn",
  componentId: "sc-iy6ilq-34"
})(["box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:12px;position:absolute;width:50px;height:44px;left:300px;top:0px;background:#FFFFFF;border:1px solid #686564;border-radius:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;letter-spacing:-0.03em;color:#000000;"]);
const CalcBtn = external_styled_components_default().button.withConfig({
  displayName: "LoanProfit__CalcBtn",
  componentId: "sc-iy6ilq-35"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;position:relative;width:976px;height:50px;left:calc(50% - 976px/2);top:850px;background:#F16341;border-radius:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:15px;line-height:19px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#FFFFFF;"]);
const Underline2 = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__Underline2",
  componentId: "sc-iy6ilq-36"
})(["position:relative;display:flex;width:976px;height:0px;left:472px;top:700px;border:1px solid #F0F0F0;"]);
const InterestChangeBox = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__InterestChangeBox",
  componentId: "sc-iy6ilq-37"
})(["position:relative;width:328px;height:98px;left:472px;top:670px;"]);
const InterestChangeText = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__InterestChangeText",
  componentId: "sc-iy6ilq-38"
})(["position:relative;width:51px;height:18px;left:472px;top:710px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2A2828;"]);
const PayingLabel = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__PayingLabel",
  componentId: "sc-iy6ilq-39"
})(["position:absolute;width:51px;height:18px;left:472px;top:675px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;"]);
const RateChangeBox = external_styled_components_default().div.withConfig({
  displayName: "LoanProfit__RateChangeBox",
  componentId: "sc-iy6ilq-40"
})(["display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:14px;position:relative;width:328px;height:70px;left:0px;top:50px;"]);
const RateNumber = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__RateNumber",
  componentId: "sc-iy6ilq-41"
})(["position:relative;width:26px;height:18px;left:0px;top:-40px;margin-top:40px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#686564;"]);
const ChangedRateNum = external_styled_components_default().span.withConfig({
  displayName: "LoanProfit__ChangedRateNum",
  componentId: "sc-iy6ilq-42"
})(["position:relative;width:53px;height:18px;left:80px;top:0px;margin-top:-75px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#686564;"]);
const RateNumberInput = external_styled_components_default().input.withConfig({
  displayName: "LoanProfit__RateNumberInput",
  componentId: "sc-iy6ilq-43"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 14px;position:absolute;top:10px;margin-top:10px;width:48px;height:44px;background:#FFFFFF;border:1px solid #D5D4D4;border-radius:5px;"]);
const RateChangeInput = external_styled_components_default().input.withConfig({
  displayName: "LoanProfit__RateChangeInput",
  componentId: "sc-iy6ilq-44"
})(["display:flex;flex-direction:row;align-items:center;padding:12px 14px;position:relative;left:80px;margin-top:-10px;width:171px;height:44px;background:#FFFFFF;border:1px solid #D5D4D4;border-radius:5px;"]);
const RateDeleteBtn = external_styled_components_default().button.withConfig({
  displayName: "LoanProfit__RateDeleteBtn",
  componentId: "sc-iy6ilq-45"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:12px;position:absolute;width:50px;height:44px;left:300px;margin-top:20px;background:#FFFFFF;border:1px solid #686564;border-radius:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;letter-spacing:-0.03em;color:#000000;"]);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Profit/LoanCal/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function LoanCal() {
  const {
    0: SubTabNum,
    1: setSubTabNum
  } = (0,external_react_.useState)(0);
  const {
    0: paying,
    1: setPaying
  } = (0,external_react_.useState)([]);
  const {
    0: rateChange,
    1: setRateChange
  } = (0,external_react_.useState)([]);

  const handleRowChange = (num, price) => {
    const updateRow = paying.map(input => {
      if (input.num === num) {
        return _objectSpread(_objectSpread({}, input), {}, {
          price
        });
      }

      return input;
    });
    setPaying(updateRow);
  };

  const handleRateChange = (num, changedRate) => {
    const updateRow = rateChange.map(input => {
      if (input.num === num) {
        return _objectSpread(_objectSpread({}, input), {}, {
          changedRate
        });
      }

      return input;
    });
    setRateChange(updateRow);
  };

  const handleAddRow = () => {
    const newRow = {
      num: paying.length + 1,
      price: ''
    };
    setPaying([...paying, newRow]);
  };

  const handleRateRow = () => {
    const newRow = {
      num: rateChange.length + 1,
      changedRate: ''
    };
    setRateChange([...rateChange, newRow]);
  };

  const handleDeleteRow = num => {
    const updatedPaying = paying.filter(input => input.num !== num);
    setPaying(updatedPaying);
  };

  const handleDeleteRateRow = num => {
    const updatedPaying = rateChange.filter(input => input.num !== num);
    setRateChange(updatedPaying);
  };

  console.log(rateChange);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoText, {
      children: ["\uB300\uCD9C \uC2DC \uB0A9\uBD80\uD574\uC57C\uD560 \uC774\uC790\uB97C \uACC4\uC0B0\uD569\uB2C8\uB2E4.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\uC0C1\uD658\uBC29\uBC95, \uB300\uCD9C\uAE30\uAC04, \uC774\uC728\uC5D0 \uB530\uB978 \uC6D4\uBCC4 \uC0C1\uD658 \uD14C\uC774\uBE14, \uCD1D \uB0A9\uBD80 \uC774\uC790\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SubTabBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SubTab1, {
        SubTabNum: SubTabNum,
        onClick: () => setSubTabNum(0),
        children: "\uC6D0\uAE08\uADE0\uB4F1\uBD84\uD560"
      }), /*#__PURE__*/jsx_runtime_.jsx(SubTab2, {
        SubTabNum: SubTabNum,
        onClick: () => setSubTabNum(1),
        children: "\uC6D0\uB9AC\uAE08\uADE0\uB4F1\uBD84\uD560"
      }), /*#__PURE__*/jsx_runtime_.jsx(SubTab3, {
        SubTabNum: SubTabNum,
        onClick: () => setSubTabNum(2),
        children: "\uB9CC\uAE30\uC77C\uC2DC"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CheckBoxContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CheckBox1, {}), /*#__PURE__*/jsx_runtime_.jsx(CheckboxName1, {
        children: "\uAC70\uCE58\uAE30\uAC04"
      }), /*#__PURE__*/jsx_runtime_.jsx(CheckBox2, {}), /*#__PURE__*/jsx_runtime_.jsx(CheckboxName2, {
        children: "\uC911\uB3C4\uC0C1\uD658/\uAE08\uB9AC\uBCC0\uB3D9"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LoanPriceBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(LoanPriceText, {
        children: "\uB300\uCD9C\uC6D0\uAE08"
      }), /*#__PURE__*/jsx_runtime_.jsx(LoanPriceInput, {}), /*#__PURE__*/jsx_runtime_.jsx(WonText, {
        children: "\uB9CC\uC6D0"
      }), /*#__PURE__*/jsx_runtime_.jsx(LoanPeriodText, {
        children: "\uB300\uCD9C\uAE30\uAC04"
      }), /*#__PURE__*/jsx_runtime_.jsx(PeriodInput, {}), /*#__PURE__*/jsx_runtime_.jsx(PeriodText, {
        children: "\uAC1C\uC6D4"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InterestBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(InterestRateText, {
        children: "\uC774\uC790\uC728"
      }), /*#__PURE__*/jsx_runtime_.jsx(InterestRateInput, {}), /*#__PURE__*/jsx_runtime_.jsx(InterestPercent, {
        children: "%"
      }), /*#__PURE__*/jsx_runtime_.jsx(NotPayingText, {
        children: "\uAC70\uCE58\uAE30\uAC04"
      }), /*#__PURE__*/jsx_runtime_.jsx(NotPayingInput, {}), /*#__PURE__*/jsx_runtime_.jsx(PeriodText, {
        children: "\uAC1C\uC6D4"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Underline, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CalcBtnBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(AddPaying, {
        onClick: handleAddRow,
        children: "\uC911\uB3C4\uC0C1\uD658 \uCD94\uAC00"
      }), /*#__PURE__*/jsx_runtime_.jsx(AddInterest, {
        onClick: handleRateRow,
        children: "\uAE08\uB9AC\uBCC0\uB3D9 \uCD94\uAC00"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(PayingLabel, {
      children: "\uC911\uB3C4\uC0C1\uD658"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: paying?.map(input => /*#__PURE__*/(0,jsx_runtime_.jsxs)(PayingRow, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PayingNumText, {
          children: "\uD68C\uCC28"
        }), /*#__PURE__*/jsx_runtime_.jsx(PayingNumber, {
          type: "text",
          onChange: e => handleRowChange(input.num, e.target.value)
        }), /*#__PURE__*/jsx_runtime_.jsx(SlashText, {
          children: "/"
        }), /*#__PURE__*/jsx_runtime_.jsx(PayingPriceText, {
          children: "\uC0C1\uD658\uAE08\uC561"
        }), /*#__PURE__*/jsx_runtime_.jsx(PayingPrice, {
          type: "text",
          onChange: e => handleRowChange(input.num, e.target.value)
        }), /*#__PURE__*/jsx_runtime_.jsx(WonInputText, {
          children: "\uC6D0"
        }), /*#__PURE__*/jsx_runtime_.jsx(DeleteBtn, {
          onClick: () => {
            handleDeleteRow(input.num);
          },
          children: "\uC0AD\uC81C"
        })]
      }, input.num))
    }), /*#__PURE__*/jsx_runtime_.jsx(Underline2, {}), /*#__PURE__*/jsx_runtime_.jsx(InterestChangeText, {
      children: "\uAE08\uB9AC\uBCC0\uB3D9"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: rateChange?.map(input => /*#__PURE__*/jsx_runtime_.jsx(InterestChangeBox, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(RateChangeBox, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(RateNumber, {
            children: "\uD68C\uCC28"
          }), /*#__PURE__*/jsx_runtime_.jsx(RateNumberInput, {
            type: "text",
            onChange: e => {
              handleRateChange(input.num, e.target.value);
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(SlashText, {
            style: {
              marginTop: "20px"
            },
            children: "/"
          }), /*#__PURE__*/jsx_runtime_.jsx(ChangedRateNum, {
            children: "\uBCC0\uB3D9\uAE08\uB9AC"
          }), /*#__PURE__*/jsx_runtime_.jsx(RateChangeInput, {
            type: "text",
            onChange: e => {
              handleRateChange(input.num, e.target.value);
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(WonInputText, {
            style: {
              marginTop: "20px"
            },
            children: "%"
          }), /*#__PURE__*/jsx_runtime_.jsx(RateDeleteBtn, {
            onClick: () => {
              handleDeleteRateRow(input.num);
            },
            children: "\uC0AD\uC81C"
          })]
        })
      }, input.num))
    }), /*#__PURE__*/jsx_runtime_.jsx(CalcBtn, {
      children: "\uB300\uCD9C\uC774\uC790 \uACC4\uC0B0\uD558\uAE30"
    })]
  });
}

/***/ })

};
;