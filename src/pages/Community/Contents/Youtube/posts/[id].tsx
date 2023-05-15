import {
  DetailBox,
  DetailContent,
  DetailLine,
  DetailProBox,
  DetailTopBox,
  EndLine,
  ImgBox,
  Repl,
  TopLine,
  UserInfoBox,
} from '@/components/community/DetailContents';
import { Megazine, Youtube } from '../../../../../types/Megazine';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BackArrow, GongtalkBox, MBackArrow } from '@/components/community/Icon';
import Image from 'next/image';
import {
  MRegiCount,
  RegiDate,
  TitleText,
  UserName,
} from '@/components/community/DetailText';
import moment from 'moment';
import { MainRepleBox, MainRepleUsername, RepleBox, RepleContents, RepleProfileBox, RepleUsername } from '@/components/community/ReplBox';

interface Props {
  megazine: Megazine;
  youtube: Youtube | undefined;
}

const YoutubeDetail: NextPage<Props> = ({ youtube }) => {
  return (
    <>
      <DetailTopBox>
        <MBackArrow>
          <Image src={'/BackArrow.png'} alt="BackArrow" width={9} height={16} />
        </MBackArrow>
      </DetailTopBox>
      <DetailBox>
        <BackArrow>
          <Image src={'/BackArrow.png'} alt="BackArrow" width={9} height={16} />
        </BackArrow>
        <TopLine />
        <GongtalkBox>공톡 유튜브</GongtalkBox>
        <TitleText>{youtube?.title}</TitleText>
        <UserInfoBox>
          <DetailProBox>
            <Image src={'/ProPic.png'} alt="ProPic" width={40} height={40} />
          </DetailProBox>
          <UserName>공실앤톡</UserName>
          <RegiDate>
            {moment(youtube?.date).format('YYYY.MM.DD HH:mm')}
          </RegiDate>
        </UserInfoBox>
        <DetailLine />
        <DetailContent>{youtube?.contents}</DetailContent>
        <ImgBox>
          <Image src={'/YImage'} alt="YImage" width={324} height={182} />
        </ImgBox>
        <EndLine />
        <MRegiCount>
          {'댓글 ' + youtube?.repl}
        </MRegiCount>
        <MainRepleBox>
          <MainRepleUsername>
            user123
          </MainRepleUsername>
        </MainRepleBox>
        <Repl placeholder="댓글을 입력해보세요" />
      </DetailBox>
      <RepleBox>
        <RepleUsername>
          user123
        </RepleUsername>
        <RepleProfileBox />
        <RepleContents>
          유용한 정보네요!
        </RepleContents>
      </RepleBox>
    </>
  );
};

export default YoutubeDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const youtubes = (await import('../../../../../../YoutubeDummy.json'))
    .default;

  const paths = youtubes.map((youtubes: Youtube) => ({
    params: { id: youtubes.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const youtubes = (await import('../../../../../../YoutubeDummy.json'))
    .default;
  const youtube = youtubes.find(
    (youtubes: Youtube) => youtubes.id === params?.id
  );
  return { props: { youtube } };
};