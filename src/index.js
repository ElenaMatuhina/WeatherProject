import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Global/>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);
