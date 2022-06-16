import React from 'react';
import { Outlet } from 'react-router-dom';
import Controllers from './Controllers';
import Main_Content from './Main_Content';

function Home() {
  return (
    <React.Fragment>
      <div id="search_input_wrapper">
        <select></select>
        <input type="text" />
        <button>Keyboard</button>
      </div>
      <div id="content_wrapper">
        <div id="filters_tags_wrapper">
          <h1>tags</h1>
        </div>
        <div id="main_wrapper">
          <Controllers />
          <Main_Content />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
// <Outlet />
