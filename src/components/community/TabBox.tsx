import styled from 'styled-components';

type Props = {
  innerTab: number;
};

export const TabBox = styled.div`
  width: 778px;
  height: 100px;

  position: absolute;
  left: 371px;
  top: 72px;

  background-color: #ffffff;
`;

export const YoutubeTab = styled.span<Props>`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;

  position: absolute;
  width: 105px;
  height: 40px;
  left: 38px;
  top: 80px;
  right: 635px;
  bottom: 895px;

  background-color: ${(props) =>
    `${props.innerTab === 0 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};

  border: ${(props) =>
    `${props.innerTab === 0 ? '1px solid #F16431' : '1px solid #D5D5D5'}`};
  border-radius: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: ${(props) => `${props.innerTab === 0 ? '#F16341' : '#9B9B9B'}`};
  cursor: pointer;
`;

export const MagazineTab = styled(YoutubeTab)<Props>`
  left: 153px;
  color: ${(props) => `${props.innerTab === 1 ? '#F16341' : '#9B9B9B'}`};
  background-color: ${(props) =>
    `${props.innerTab === 1 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${props.innerTab === 1 ? '1px solid #F16431' : '1px solid #D5D5D5'}`};
`;
