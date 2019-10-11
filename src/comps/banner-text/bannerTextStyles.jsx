import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.span`
  position: absolute;
  z-index: 2;
  width: 1080px;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

export const TextInput = styled.h1`
  font-size: ${props => props.fontSize};
  padding-top: 1rem;
`;
