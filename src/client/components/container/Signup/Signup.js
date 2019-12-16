import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../../actions/authActions';
import Pancake from '../../../../assets/blur-breakfast-close-up-dairy-product-376464.jpg';
import '../../../materialize.css';
import './styles.css';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <div className="flex flex-wrap row yellow lighten-5 vh-100">
        <div className="container flex center-align align-items-center justify-content-center  signup-form">
          <form className="container column" onSubmit={this.handleSubmit}>
            <div className="title-div">
              <img src={Pancake} alt="Logo" />
              <h3>Sign Up</h3>
            </div>
            <div className="input-field field-color">
              <input
                type="text"
                id="firstName"
                className="validate"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field field-color">
              <input
                type="text"
                id="lastName"
                className="validate"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="input-field field-color">
              <input
                type="email"
                id="email"
                className="validate"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field field-color">
              <input
                type="password"
                id="password"
                className="validate"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
            <span>
              <Link
                className="flex column blue-text justify-content-center"
                to="/"
              >
                Don't have an account? Sign In
              </Link>
            </span>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
