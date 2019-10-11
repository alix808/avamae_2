import React from 'react';
import { connect } from 'react-redux';
import { TextContainer, FlexBox, TextInput } from './bannerTextStyles';
import CustomBtn from '../custom-btn/CustomBtn';

const BannerText = ({ user }) => {
  const { loading, banner } = user;

  if (loading) {
    return null;
  }
  return (
    <FlexBox>
      <TextContainer>
        <TextInput fontSize={'34px'}>{banner[0].Title}</TextInput>
        <TextInput fontSize={'16px'}>{banner[0].Subtitle}</TextInput>
        <CustomBtn> Contact Us</CustomBtn>
      </TextContainer>
    </FlexBox>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(BannerText);
