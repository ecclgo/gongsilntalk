import styled from 'styled-components';

export const NoticeTag = styled.span`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    gap: 10px;
    left: 18px;
    width: 40px;
    height: 25px;
    
    padding: 5px 8px;
    background-color: #F0F0F0;
    border-radius: 6px;

    color: #666666;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  gap: 10px;

  position: absolute;
  width: 42px;
  height: 25px;

  background: #666666;
  border-radius: 6px;

  color: #ffffff;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
`;

export const NoticeTitle = styled.span`
  @media screen and (max-width: 768px) {
    display: flex;
    width: 274px;
    height: 18px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    padding: 2px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: -0.03em;

    color: #343232;

  }
  width: 646px;
  height: 18px;
  margin-left: 56px;
  top: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;


  letter-spacing: -0.03em;
  cursor: pointer;
`;
