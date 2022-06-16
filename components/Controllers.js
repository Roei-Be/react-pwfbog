import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Controllers extends Component {
  render() {
    return (
      <div id="contollers_wrapper">
        <ul>
          <li><Link to="/main_content/Search_Results" className="controllers_link">Back</Link></li>
          <li><Link to="/main_content/Add_Problem" className="controllers_link">Add problem</Link></li>
        </ul>
      </div>
    )
  }
}

export default Controllers;

/*
          <li><Link to="/main_content/Search_Results">Back</Link></li>
          <li><Link to="/main_content/Add_Problem">Add problem</Link></li>
*/