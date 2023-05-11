import { MTabContents, MegazineTab, YoutubeTab } from "@/components/community/TabBox";
import Notice from "./Notice";

export default function MTabContentsComponent() {
  return (
    <>
      <MTabContents>
        <YoutubeTab>
          공톡 유튜브
        </YoutubeTab>
        <MegazineTab>
          공톡 매거진
        </MegazineTab>
      </MTabContents>
      <Notice />
    </>
  )
};