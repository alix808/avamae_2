import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexItem = styled.div`
  flex: 1;
`;

export const ImgOne = styled.div`
  background: ${props => `url(${props.background}) no-repeat 50% 25% / cover`};
  height: 440px;
`;

export const ImgTwo = styled.div`
  background: ${props => `url(${props.background}) no-repeat 50% 50% / cover`};
  height: 440px;
`;
