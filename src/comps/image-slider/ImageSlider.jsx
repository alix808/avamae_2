import React from 'react';
import { connect } from 'react-redux';
import { FlexBox, FlexItem, ImgOne, ImgTwo } from './imageSliderStyles';
import Spinner from '../spinner/Spinner';

const ImageSlider = ({ user }) => {
  const { position, loading, banner } = user;

  if (loading) return <Spinner />;

  return (
    <FlexBox>
      <FlexItem>
        {position === 0 ? <ImgOne background={banner[0].ImageUrl} /> : null}
        {position === 1 ? <ImgTwo background={banner[1].ImageUrl} /> : null}
        {position === 2 ? <ImgOne background={banner[2].ImageUrl} /> : null}
      </FlexItem>
    </FlexBox>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(ImageSlider);
