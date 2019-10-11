import React from 'react';

import { CustomBtnContainer, StyledLink } from './customBtnStyles';

const CustomBtn = ({ children, ...props }) => (
  <CustomBtnContainer {...props}>
    <StyledLink>{children}</StyledLink>
  </CustomBtnContainer>
);

export default CustomBtn;
