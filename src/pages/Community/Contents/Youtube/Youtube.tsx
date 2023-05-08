import { EmptyBox, Line, NoticeBox } from "@/components/community/NoticeBox";
import { NoticeData } from "../../../../../NoticeDummy";
import { NoticeTag, NoticeTitle } from "@/components/community/Notice";
import { ContentsBox, MovingBox, ProfileBox, YContents, YFooter, YUsername, Ytitle } from "@/components/community/ContentsBox";
import Image from "next/image";
import Paging from "../../Paging";
import { OrderBox, Updated, Recommend, Repl, ClickedOrder } from "@/components/community/OrderBy";
import { useState } from "react";
import { MovingSpan } from "@/components/community/TabSpan";

type Props = {
  post: any,
  posts: any,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Youtube({ post, posts, setCurrentPage }: Props) {
  const [clickedOrder, setClickedOrder] = useState<number>(0);

  const handleClick = (number: number) => {
    setClickedOrder(number);
  };

  return (
    <>
      <NoticeBox>
        {NoticeData?.map((a, i) => {
          return (
            <div key={i}>
              <NoticeTag>공지</NoticeTag>
              <NoticeTitle>
                {a.title}
                {' - ' + a.date}
              </NoticeTitle>
            </div>
          );
        })}
      </NoticeBox>
      <EmptyBox />
      <OrderBox>
          <Updated clickedOrder={clickedOrder === 0} onClick={() => {handleClick(0)}}>
            <ClickedOrder clickedOrder={clickedOrder === 0} onClick={() => {handleClick(0)}} />
            최신순
          </Updated>
          <Recommend clickedOrder={clickedOrder === 1} onClick={() => {handleClick(1)}}>
            <ClickedOrder clickedOrder={clickedOrder === 1} onClick={() => {handleClick(1)}} />
            추천순
          </Recommend>
          <Repl clickedOrder={clickedOrder === 2} onClick={() => {handleClick(2)}}>
            <ClickedOrder clickedOrder={clickedOrder === 2} onClick={() => {handleClick(2)}} />
            댓글순
          </Repl>
      </OrderBox>
      <ContentsBox>
        {post?.map((a: any, i: any) => {
          return (
            <div key={i}>
              <ProfileBox>
                <Image
                  src={'/ProPic.png'}
                  alt="ProPic"
                  width={30}
                  height={30}
                  style={{
                    marginBottom: '16px',
                  }}
                />
                <YUsername>공실앤톡</YUsername>
              </ProfileBox>
              <div>
                <Image
                  src={'/YImage.png'}
                  alt="YImage"
                  width={154}
                  height={108}
                  style={{
                    position: 'absolute',
                    left: '600px',
                    marginTop: '-20px',
                  }}
                />
              </div>
              <Ytitle>{a.title}</Ytitle>
              <YContents>{a.contents}</YContents>
              <YFooter>
                {a.date + ' '} {'추천 ' + a.reco + ' '} {'댓글 ' + a.repl}
              </YFooter>
              <Line />
            </div>
          );
        })}
        <Paging totalPosts={posts?.length} paginate={setCurrentPage}/>
      </ContentsBox>
      <MovingBox>
        <MovingSpan>
          공톡 유튜브 추천글
        </MovingSpan>
      </MovingBox>
    </>
  )
}