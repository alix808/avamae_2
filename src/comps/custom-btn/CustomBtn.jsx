import React from 'react';
import PropTypes from 'prop-types';
import { BtnContainer, StyledLink } from './customBtnStyles';

const CustomBtn = ({ name }) => {
  return (
    <BtnContainer>
      <StyledLink>{name}</StyledLink>
    </BtnContainer>
  );
};

CustomBtn.propTypes = {
  name: PropTypes.string.isRequired
};

export default CustomBtn;
