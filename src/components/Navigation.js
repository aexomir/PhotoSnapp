import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/Mountain">Mountain</NavLink>
        </li>
        <li>
          <NavLink to="/beach">Beach</NavLink>
        </li>
        <li>
          <NavLink to="/bird">Bird</NavLink>
        </li>
        <li>
          <NavLink to="/food">Food</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
