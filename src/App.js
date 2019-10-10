import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './comps/header/Header';
import ArrowBox from './comps/arrow-box/ArrowBox';
import ImageItem from './comps/image-item/ImageItem';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ArrowBox />
      <ImageItem />
    </Provider>
  );
}

export default App;
