import { TabBox } from '@/components/community/TabBox';
import { useState } from 'react';
import Contents from './Contents';
import Board from './Board';

export default function Community() {
  const [tabClicked, setTabClicked] = useState<number>(0);

  return (
    <>
      <TabBox>
        <Contents tabClicked={tabClicked} setTabClicked={setTabClicked} />
        <Board tabClicked={tabClicked} setTabClicked={setTabClicked} />
      </TabBox>
    </>
  );
}
