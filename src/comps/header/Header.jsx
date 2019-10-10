import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './headerStyles';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import CustomBtn from '../custom-btn/CustomBtn';
import Center from '../center/Center';

const Header = () => {
  return (
    <Center>
      <HeaderContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/'>HOME</OptionLink>
          <OptionLink to='/about'>ABOUT US</OptionLink>
          <OptionLink to='/contact'>CONTACT US</OptionLink>
          <CustomBtn name='Log in' />
        </OptionsContainer>
      </HeaderContainer>
    </Center>
  );
};

export default Header;
