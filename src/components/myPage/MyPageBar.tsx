import styled from "styled-components";

export const MyPage = styled.div`
@media screen and (max-width: 768px) {
  display: none;
}
  position: absolute;
  display: flex;
  width: 361px;
  
  left: 1560px;
  top: 9px;
  background-color: #F0F0F0;
  height: 100%;
  transition: all .35s;
`;

export const TopBar = styled.div`
  position: absolute;
  width: 360px;
  height: 50px;
  left: 0px;
  top: 0px;
  background-color: #ffffff;
`;

export const TopBarText = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 50px;
  height: 18px;
  left: calc(50% - 47px/2 - 0px);
  top: calc(50% - 18px/2);

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
`;

export const CloseBtn = styled.div`
  position: absolute;
  display: flex;
  left: 20px;
  top: 30%;
  cursor: pointer;
`;

export const MyInfoBox = styled.div`
  position: absolute;
  width: 360px;
  height: 154px;
  left: 0px;
  top: 51px;
  background-color: #ffffff;
`;

export const LoginInfo = styled.span`
  position: absolute;
  width: 184px;
  height: 38px;
  left: 68px;
  top: 31px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #343232;
`;

export const LoginBtn = styled.button`
  position: absolute;
  width: 155px;
  height: 44px;
  left: 20px;
  bottom: 28px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  background-color: #F16341;
  border-radius: 5px;
  color: #FFFFFF;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
`;

export const RegiBtn = styled.button`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 155px;
  height: 44px;
  left: 185px;
  bottom: 28px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.03em;
  color: #F16341;
  border: 1px solid #F16341;
  border-radius: 5px;
`;

export const SubBox = styled.div`
  position: absolute;
  width: 360px;
  height: 866px;
  left: 0px;
  top: 214px;
  background-color: #ffffff;
`;

export const CenterCallBtn = styled.button`
  position: absolute;
  display: flex;
  bottom: 38px;
  left: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 0px 0px;
  gap: 6px;

  width: 328px;
  height: 50px;

  border: 1px solid #F16341;
  border-radius: 5px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #F16341;
`;

export const PhoneLogo = styled.div`
  width: 14.07px;
  height: 14px;
  position: absolute;
  left: 70px;
  top: 15px;
`;