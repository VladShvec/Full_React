import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";
import {BrowserRouter} from "react-router-dom";
const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
ReactDOM.render(
    <>
        <BrowserRouter>
            <Global />
            <App />
        </BrowserRouter>

 </>,
  document.getElementById('root')
);

