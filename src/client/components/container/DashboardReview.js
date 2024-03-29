import React, { Component } from 'react';
import ReviewList from './reviewList/ReviewList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import '../../materialize.css';

class DashboardReview extends Component {
  render() {
    const { reviews, auth } = this.props;
    if (!auth.uid) return <Redirect to="/users/login" />;
    return (
      <div className="dashboard container">
        <div className=" row">
          <div className="col s12 m6">
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'reviews', orderBy: ['createdAt', 'desc'] }]),
)(DashboardReview);
