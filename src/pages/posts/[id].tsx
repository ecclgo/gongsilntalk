import { Megazine } from "@/pages/types/Megazine";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
  megazine: Megazine;
}

const MegazineDetail: NextPage<Props> = ({ megazine }) => {
  return (
    <>
      <div>
        <p>{megazine.title}</p>
        <p>{megazine.content}</p>
      </div>
    </>
  )
};

export default MegazineDetail;


export const getStaticPaths: GetStaticPaths = async() => {
  const megazines = (await import('../../../MegazineDummy.json')).default;
  const paths = megazines.map((megazine: any) => ({params: { id: megazine.id}}));

  return { paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const megazines = (await import('../../../MegazineDummy.json')).default;
  const megazine = megazines.find((megazine: any) => megazine.id === params?.id);
  return { props: { megazine } };
}