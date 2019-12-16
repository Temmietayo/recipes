import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../actions/authActions';
import '../../../materialize.css';

const AuthTopNavigation = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/recipe_view">
          <i className="material-icons">restaurant_menu</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/user/add_recipe">
          <i className="material-icons">restaurant</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="btn btn-floating grey lighten-1">
          {props.profile.initals}
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i class="material-icons">notifications</i>
        </NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>
          <i className="material-icons">vpn_key</i>
        </a>
      </li>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(AuthTopNavigation);
