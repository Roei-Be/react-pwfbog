import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import '../style/index.css';
import '../style/header.css';
import '../style/main.css';
import '../style/login_signup.css';

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </React.Fragment>
  );
}
