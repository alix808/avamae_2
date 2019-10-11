import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  height: 60px;
  width: 1080px;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 4rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 200px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 12px;
`;
