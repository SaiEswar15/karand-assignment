import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import store from '../store/store';
import DupSearchComponent from './DupSearchComponent';

export const componentHtml = renderToString(
  <Provider store={store}>
    <DupSearchComponent />
  </Provider>
);