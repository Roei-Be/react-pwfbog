import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import Search_Results from './main_content/Search_Results.js';
import Add_Problem from './main_content/Add_Problem.js';
import Home from './Home.js';
//import Signup from './Signup.js';
//import Login from './Login.js';
//import User_Page from './User_Page.js';

function Main_Content() {
  return (
    <Routes>
        <Route path="main_content/Search_Results" element={<Search_Results />} />
        <Route path="main_content/Add_Problem" element={<Add_Problem />} />
        <Route path="/" element={<Navigate to="main_content/Search_Results" replace />} />
    </Routes>
  );
}
export default Main_Content;

// Use a default route (the 3rd one) in case there is no match (when website is loaded).
// (not used atm) Used index to make the first route the default route.
//path="main_content/Search_Results"
