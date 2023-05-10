import { FreeBoardTab, KnowHowTab, QnABoxTab, ReviewTab } from '@/components/community/CommunityBox';
import { SecondContent } from '@/components/community/TabSpan';
import { useState } from 'react';
import QnA from './QnA';
import FreeBoard from './FreeBoard';
import KnowHow from './KnowHow';
import Review from './Review';

type Props = {
  tabClicked: number;
  setTabClicked: React.Dispatch<React.SetStateAction<number>>;
};

export default function Board({ tabClicked, setTabClicked }: Props) {
  const [innerTab, setInnerTab] = useState<number>(0);

  return (
    <>
      <SecondContent tabClicked={tabClicked} onClick={() => setTabClicked(1)}>
        커뮤니티
      </SecondContent>
      {
        tabClicked == 1 ? (
          <>
            <QnABoxTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
              질문/답변
            </QnABoxTab>
            <FreeBoardTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
              자유글
            </FreeBoardTab>
            <KnowHowTab innerTab={innerTab} onClick={() => setInnerTab(2)}>
              노하우
            </KnowHowTab>
            <ReviewTab innerTab={innerTab} onClick={() => setInnerTab(3)}>
              후기
            </ReviewTab>
            {
              innerTab === 0 ? 
              (
                <QnA />
              )
              : innerTab === 1 ?
              (
                <FreeBoard />
              )
              : innerTab === 2 ?
              (
                <KnowHow />
              )
              : 
              (
                <Review />
              )
            }
          </>
        )
        :
        null
      }
    </>
  );
}
