import React from 'react';
import { connect } from 'react-redux';
import { ArrowContainer } from './arrowBoxStyles';
import { updateImage } from '../../actions/userActions';

const ArrowBox = ({ user, updateImage }) => {
  const { position } = user;

  const clickRight = () => {
    if (position === 0) {
      updateImage(1);
    }
    if (position === 1) {
      updateImage(2);
    }
    if (position === 2) {
      updateImage(0);
    }
  };

  const clickLeft = () => {
    if (position === 0) {
      updateImage(2);
    }
    if (position === 1) {
      updateImage(0);
    }
    if (position === 2) {
      updateImage(1);
    }
  };

  return (
    <ArrowContainer>
      <i onClick={clickLeft} className='fas fa-arrow-left'></i>
      <i onClick={clickRight} className='fas fa-arrow-right'></i>
    </ArrowContainer>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { updateImage }
)(ArrowBox);
