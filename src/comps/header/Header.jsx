import React from 'react';
import {
  FlexBox,
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './headerStyles';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import CustomBtn from '../custom-btn/CustomBtn';

const Header = () => {
  return (
    <FlexBox>
      <HeaderContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/'>HOME</OptionLink>
          <OptionLink to='/about'>ABOUT US</OptionLink>
          <OptionLink to='/contact'>CONTACT US</OptionLink>
          <CustomBtn isLogIn> Log In</CustomBtn>
        </OptionsContainer>
      </HeaderContainer>
    </FlexBox>
  );
};

export default Header;
