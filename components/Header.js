import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div id="navbar_wrapper">
        <ul>
          <li><Link to="/" className="navbar_link">Home</Link></li>
          <li>
            <select>
              <option value="en">English</option>
              <option value="he">Hebrew</option>
              <option value="ar">Arabic</option>
              <option value="de">German</option>
            </select>
          </li>
          <li><Link to="/Signup" className="navbar_link">Signup</Link></li>
          <li><Link to="/Login" className="navbar_link">Login</Link></li>
          <li><Link to="/User_Page" className="navbar_link">User_Page</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header;