import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import SimpleTabs from '../../common/SimpleTabs/SimpleTabs';
import Image from '../../../../assets/portrait-photo-of-woman-in-black-top-posing-2505337.jpg';
import './styles.css';

class Profile extends Component {
  render() {
    const { recipes, auth, notifications } = this.props;
    console.log(recipes);
    if (!auth.uid) return <Redirect to="/users/login" />;
    return (
      <div className="flex row flex-wrap vh-100 main-body justify-content-center">
        <div className="flex column col-lg-size personal-details">
          <div className="profile-img flex column">
            <img src={Image} alt="Profile-img" className="user-img" />
          </div>
          <div className="contact-details flex column">
            <span>Temitayo Ayeoyenikan</span>
            <span>Lagos, Nigeria</span>
            <span>teshytemmy@gmail.com</span>
          </div>
          <div className="help-details flex column">
            <span>Contact</span>
            <span>Chat with us</span>
          </div>
        </div>
        <SimpleTabs recipes={recipes} notifications={notifications} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
  ]),
)(Profile);
