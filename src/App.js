import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBanner } from './actions/userActions';

import Header from './comps/header/Header';
import BannerText from './comps/banner-text/BannerText';
import ArrowBox from './comps/arrow-box/ArrowBox';
import ImageSlider from './comps/image-slider/ImageSlider';

import './App.css';

function App({ getBanner }) {
  useEffect(() => {
    getBanner();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <BannerText />
      <ArrowBox />
      <ImageSlider />
    </div>
  );
}

export default connect(
  null,
  { getBanner }
)(App);
