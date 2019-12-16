import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../materialize.css';

const RegularTopNavigation = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/recipe_view">
          <i className="material-icons">restaurant_menu</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i className="material-icons">call</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/users/signup">
          <i className="material-icons">person_add</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/users/login">
          <i className="material-icons">person</i>
        </NavLink>
      </li>
    </ul>
  );
};

export default RegularTopNavigation;
