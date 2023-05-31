import styled from "styled-components";

export const ModeBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22px;
  gap: 6px;

  position: absolute;
  top: 59px;
  left: 0px;
  width: 152px;
  height: 58px;

  background: #FFFFFF;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: #D5D4D4;
`;

export const SelectBtn = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const Option = styled.option`
  position: absolute;
  top: 100px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export const Select = ({ options, value, onChange }: any) => {
  return (
    <SelectBtn value={value} onChange={onChange}>
      {options.map((option: any) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </SelectBtn>
  )
};
