import { SecondContent } from '@/components/community/TabSpan';

type Props = {
  tabClicked: number;
  setTabClicked: React.Dispatch<React.SetStateAction<number>>;
};

export default function Board({ tabClicked, setTabClicked }: Props) {
  return (
    <>
      <SecondContent tabClicked={tabClicked} onClick={() => setTabClicked(1)}>
        커뮤니티
      </SecondContent>
    </>
  );
}
