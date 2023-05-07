import { MagazineTab, YoutubeTab } from '@/components/community/TabBox';
import { FirstContent } from '@/components/community/TabSpan';
import { useEffect, useState } from 'react';
import { Youtubes } from '../../../../NoticeDummy';
import Youtube from './Youtube/Youtube';
import Magazine from './Magazine/Magazine';
import Image from 'next/image';
import { SearchContainer, SearchIcon, SearchInput } from '@/components/community/SearchInput';

type Props = {
  tabClicked: number;
  setTabClicked: React.Dispatch<React.SetStateAction<number>>;
};

export default function Contents({ tabClicked, setTabClicked }: Props) {
  const [innerTab, setInnerTab] = useState<number>(0);

  const [post, setPost] = useState<any>([]);
  const [posts, setPosts] = useState(Youtubes);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = (posts: any) => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  //  API 생성시 수정
  useEffect(() => {
    const fetchData = () => {
      setPost(currentPosts(posts));
    };
    fetchData();
  }, [currentPage]);

  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <FirstContent tabClicked={tabClicked} onClick={() => setTabClicked(0)}>
        공톡 컨텐츠
      </FirstContent>
      {tabClicked === 0 ? (
        <>
          <YoutubeTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
            공톡 유튜브
          </YoutubeTab>
          <MagazineTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
            공톡 매거진
          </MagazineTab>
          <SearchContainer>
            <SearchIcon
              className='fa fa-search'
              onClick={handleSearchClick}
              style={{
                position: "absolute",
                left: "750px",
                top: "95px",
                cursor: "pointer"
              }}
            >
              <Image 
                src={'/SearchIcon.png'}
                alt='SearchIcon'
                width={20}
                height={20}
              />
            </SearchIcon>
            <SearchInput
              type='text'
              placeholder='검색어를 입력하세요...'
              show={showSearch}
            />
          </SearchContainer>
          {
            innerTab === 0 ? 
            (
              <Youtube post={post} posts={posts} setCurrentPage={setCurrentPage} />
            )
            :
            (
              <Magazine />
            )
          }
        </>
      ) : null}
    </>
  );
}
