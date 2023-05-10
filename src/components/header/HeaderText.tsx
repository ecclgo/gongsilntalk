import styled from "styled-components";

export const HomeText = styled.span`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 10px;
    height: 13px;
    left: 37px;
    top: 28px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.03em;

    color: #C1C1C1;
  }
  display: none;
`;

export const Recommend = styled(HomeText)`
  left: 93px;
  width: 41px;
`;

export const Map = styled(HomeText)`
  left: 172px;
  width: 35px;
`;

export const HeaderCommu = styled(HomeText)`
  left: 231px;
  width: 41px;
`;

export const HeaderMyInfo = styled(HomeText)`
  left: 303.5px;
  width: 37px;
`;