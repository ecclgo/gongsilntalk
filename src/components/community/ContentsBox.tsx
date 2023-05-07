import styled from 'styled-components';

export const ContentsBox = styled.div`
  position: absolute;
  width: 770px;
  height: 1000px;
  left: 38px;
  top: 380px;
  border: none;
`;

export const Ytitle = styled.div`
  width: 532px;
  height: 25px;
  cursor: pointer;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  letter-spacing: -0.03em;

  color: #000000;
`;

export const YContents = styled.div`
  width: 520px;
  height: 44px;

  margin-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: '-webkit-box';
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex-direction: row;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.03em;

  color: #666666;
`;

export const YFooter = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: -0.02em;

  color: #9b9b9b;
  margin-left: 1px;
  margin-top: 16px;
  margin-bottom: 22px;
`;

export const YUsername = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-left: 8px;
  margin-top: 10px;
  align-items: center;
  letter-spacing: -0.03em;

  color: #282828;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 22px;
`;

export const Line = styled.div`
  width: 702px;
  height: 0px;

  opacity: 0.6;

  border: 1px solid #d5d5d5;

  flex: none;
  order: 1;
  flex-grow: 0;
`;


export const MovingBox = styled.div`
  position: fixed;
  width: 379px;
  height: 319px;
  left: 70%;
  top: 40%;

  background-color: #FFFFFF;
  border-radius: 10px;
`;