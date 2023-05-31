import { ModeBox, Select, SelectBtn } from "@/components/map/Header";
import { useState } from "react";

export default function Header() {
  const [selectOption, setSelectOption] = useState('');

  const handleSelectChange = (event: any) => {
    setSelectOption(event.target.value);
  };

  const options = [
    { value: 'Map1', label: '실거래가 지도' },
    { value: 'Map2', label: '매물지도' },
  ];

  return (
    <>
      <ModeBox>
        <Select 
          options={options}
          value={selectOption}
          onChange={handleSelectChange}
        />
      </ModeBox>
    </>
  )
}