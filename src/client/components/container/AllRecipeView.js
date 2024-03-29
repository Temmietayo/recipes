import React, { Component } from 'react';
import AllRecipeList from './allRecipeList/AllRecipeList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import '../../materialize.css';

class AllRecipeView extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="dashboard container">
        <div className=" row">
          <div className="col s12 m6">
            <AllRecipeList recipes={recipes} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    recipes: state.firestore.ordered.recipes,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'recipes', orderBy: ['createdAt', 'desc'] }]),
)(AllRecipeView);
