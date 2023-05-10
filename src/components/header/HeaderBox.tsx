import styled from "styled-components";

type Props = {
  activeBtn: string,
}

export const HeaderBox = styled.header`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 48px;
    left: 0px;
    top: 800px;
    background: #FFFFFF;
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
    color: #333333;
  }

  position: absolute;
  width: 1920px;
  height: 60px;
  left: 0px;
  top: 0px;

  background-color: #FFFFFF;
  border-bottom: 1px solid #D5D5D5;
`;

export const HeaderLogo = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  top: 15px;
  left: 40px;
`;

export const HeaderHome = styled.div`
  @media (max-width: 700px) {
    display: flex;
    position: absolute;
    left: 33.5px;
    top: 9px;
  }
  display: none;
`;

export const FHeaderProduct = styled.div`
  @media screen and (max-width: 768px) {    
    display: flex;
    position: absolute;
    left: 103px;
    top: 11px;
  }
  display: none;
`;

export const SHeaderProduct = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 110.89px;
    top: 9.11px;
  }
  display: none;
`;

export const HeaderMap = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 174.29px;
    top: 9.5px;
  }
  display: none;
`;

export const HeaderCommunity = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 241.29px;
    top: 9.55px;
  }
  display: none;
`;

export const HeaderMyInfoBox = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 312.58px;
    top: 9.55px;
  }
  display: none;
`;

export const HeaderRecoBox = styled.div<Props>`
  @media screen and (max-width: 768px) {
    display: none;
  }

  position: absolute;
  width: 101px;
  height: 23px;
  left: 637px;
  top: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  cursor: pointer;
  color: ${(props) => `${props.activeBtn === '/Recommend' ? '#F16341' : '#343232' }`};
`;

export const HeaderMapBox = styled(HeaderRecoBox)`
  left: 824px;
  width: 120px;
  color: ${(props) => `${props.activeBtn === '/Buildingmap' ? '#F16341' : '#343232' }`};
`;

export const HeaderMyProduct = styled(HeaderRecoBox)`
  left: 1027px;
  color: ${(props) => `${props.activeBtn === '/Mybuilding' ? '#F16341' : '#343232' }`};
`;

export const HeaderCommunityBox = styled(HeaderRecoBox)`
  left: 1198px;
  color: ${(props) => `${props.activeBtn === '/Community' ? '#F16341' : '#343232' }`};
`;

export const HeaderLogin = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  left: 1600px;
  top: 20px;

  width: 44px;
  height: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #848484;
  cursor: pointer;
`;

export const HeaderRegister = styled(HeaderLogin)`
  left: 1670px;
  width: 60px;
`;

export const Bar = styled.div`
  @media screen and (max-width: 768px) {
      display: none;
  }
  position: absolute;
  left: 1650px;
  top: 26px;
  width: 12px;
  height: 0px;

  border: 1px solid #CECECE;
  transform: rotate(90deg);
`;

export const JonggaeBox = styled.div`
  @media screen and (max-width: 768px) {
        display: none;
  }
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 10px;
  left: 1732px;
  top: 16px;

  width: 95px;
  height: 28px;

  background: #D5D5D5;
  border-radius: 50px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #3A3A3A;
  cursor: pointer;
`;

export const Submenu = styled.div`
  @media screen and (max-width: 768px) {
          display: none;
    }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 32px;
  height: 32px;
  left: 1855px;
  top: calc(50% - 32px/2);
`;