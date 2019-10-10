import React from 'react';
import { FlexBox } from './centerStyles';

const Center = props => {
  return <FlexBox>{props.children}</FlexBox>;
};

export default Center;
