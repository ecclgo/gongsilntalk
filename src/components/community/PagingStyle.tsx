import styled from "styled-components";

type Props = {
  activeBtn: boolean
}

export const PageUl = styled.ul`
  position: absolute;
  
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;
  
  top: 1030px;
  left: 330px;
`;

export const PageLi = styled.li`
  display: inline-block;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  letter-spacing: -0.03em;

  color: #9B9B9B;
`;

export const PageSpan = styled.button<Props>`
  width: 25px;
  border-radius: 5px;
  cursor: pointer;
  
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: ${(props) => `${props.activeBtn ? 700 : 500}`};
  font-size: 16px;
  line-height: 22px;

  letter-spacing: -0.03em;

  color: ${(props) => `${props.activeBtn ? '#000000' : '#9B9B9B'}`};
  
`;