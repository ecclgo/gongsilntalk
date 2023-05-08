import { DetailBox } from "@/components/community/DetailContents";
import { Megazine } from "../../types/Megazine";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BackArrow, GongtalkBox } from "@/components/community/Icon";
import Image from "next/image";

interface Props {
  megazine: Megazine;
}

const MegazineDetail: NextPage<Props> = ({ megazine }) => {
  return (
    <>
      <DetailBox>
        <BackArrow>
          <Image
            src={'/BackArrow.png'}
            alt="BackArrow"
            width={9}
            height={16}
          />
        </BackArrow>
        <GongtalkBox>
          공톡 매거진
        </GongtalkBox>
        <p>{megazine.title}</p>
        <p>{megazine.content}</p>
      </DetailBox>
    </>
  )
};

export default MegazineDetail;


export const getStaticPaths: GetStaticPaths = async() => {
  const megazines = (await import('../../../MegazineDummy.json')).default;
  const paths = megazines.map((megazine: Megazine) => ({ params: { id: megazine.id } }));

  return { paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const megazines = (await import('../../../MegazineDummy.json')).default;
  const megazine = megazines.find((megazine: Megazine) => megazine.id === params?.id);
  return { props: { megazine } };
}