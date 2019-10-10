import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBanner } from '../../actions/userActions';
import { FlexBox, FlexItem, ImgOne, ImgTwo } from './imageItemStyles';
import Spinner from '../spinner/Spinner';

const ImageItem = ({ user, getBanner }) => {
  const { position, loading, banner } = user;

  useEffect(() => {
    getBanner();
    // eslint-disable-next-line
  }, []);

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
  { getBanner }
)(ImageItem);
