import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'firebase/firestore';
import { Redirect } from 'react-router-dom';
import { createReview } from '../../../actions/reviewActions';
import Pancake from '../../../../assets/blur-breakfast-close-up-dairy-product-376464.jpg';
import '../../../materialize.css';
import './styles.css';

class CreateReview extends Component {
  constructor() {
    super();
    this.state = {
      review: '',
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
    this.props.createReview(this.state);
    this.props.history.push('/dashboard');
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/users/login" />;
    return (
      <div className="flex flex-wrap row yellow lighten-5 ">
        <div className="container flex center-align align-items-center justify-content-center">
          <form
            className="container column review-form"
            onSubmit={this.handleSubmit}
          >
            <div className="review-div">
              <img src={Pancake} alt="Logo" />
              <h3>Review</h3>
            </div>
            <div className="input-field field-color">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
                id="review"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label htmlFor="review">Comment</label>
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReview: review => dispatch(createReview(review, ownProps)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
