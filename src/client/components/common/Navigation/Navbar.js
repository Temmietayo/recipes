import React from 'react';
import { Link } from 'react-router-dom';
import RegularTopNavigation from './RegularTopNavigation';
import AuthTopNavigation from './AuthTopNavigation';
import { connect } from 'react-redux';

const Navbar = props => {
  const { auth, profile } = props;
  //console.log(auth);
  const links = auth.uid ? (
    <AuthTopNavigation profile={profile} />
  ) : (
    <RegularTopNavigation />
  );
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          All-Recipes
        </Link>
        {links}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
