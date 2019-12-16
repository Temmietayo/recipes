import React, { Component } from 'react';
import { signIn } from '../../../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Pancake from '../../../../assets/blur-breakfast-close-up-dairy-product-376464.jpg';
import '../../../materialize.css';
import './styles.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <div className="flex flex-wrap row yellow lighten-5 vh-100">
        <div className="container flex center-align align-items-center justify-content-center  signin-form">
          <form className="container column" onSubmit={this.handleSubmit}>
            <div className="title-div">
              <img src={Pancake} alt="Logo" />
              <h3>Sign In</h3>
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
              <span
                className="helper-text"
                data-error="Incorrect format"
                data-success="Correct format"
              ></span>
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
            <button type="submit">Sign In</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
