import styled from "styled-components";

export const RepleBox = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 324px;
    height: 54px;
    left: 18px;
    top: 560px;
    background-color: #FFFFFF;
  }
`;

export const RepleUsername = styled.span`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 50px;
    height: 16px;
    left: 56px;
  
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
  
    color: #666666;
  }
  display: flex;
  position: absolute;
  left: 200px;
`;

export const RepleProfileBox = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 30px;
    height: 30px;
    left: 18px;
    background: #F0F0F0;
    border: 1px solid #9B9B9B;
    box-sizing: border-box;
    border-radius: 15px;
  }
  display: none;
`;

export const RepleContents = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    left: 56px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    margin-top: 18px;

    display: flex;
    align-items: center;
    letter-spacing: -0.03em;

    color: #282828;
  }
  display: none;
`;

export const MainRepleBox = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  width: 702px;
  left: 38px;
  top: 1180px;
  background-color: #ffffff;
`;

export const MainRepleUsername = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  position: absolute;
  margin-bottom: 12px;
  left: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #666666;
`;