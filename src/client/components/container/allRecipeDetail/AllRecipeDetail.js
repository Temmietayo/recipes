import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Redirect } from 'react-router-dom';
import Pancake from '../../../../assets/blur-breakfast-close-up-dairy-product-376464.jpg';
import './styles.css';

class AllRecipeDetail extends Component {
  handleFavorite = event => {
    event.preventDefault();
    const { id } = this.props;
    const db = firebase.firestore();
    db.collection('favorites').add({
      recipeId: id,
    });
  };

  render() {
    const { recipe, auth } = this.props;
    if (!auth.uid) return <Redirect to="/users/login" />;
    if (recipe) {
      return (
        <div className="flex column container justify-content-center card-view">
          <section className="flex column image-section img-section">
            <img src={Pancake} alt="Meal-img" />
          </section>
          <section className="flex column align-items-center name-section">
            <span>
              <p>{recipe.dname}</p>
            </span>
          </section>
          <section className="flex column ing-section">
            <span className="strong">Ingredients</span>
            <p>{recipe.ingredient}</p>
          </section>
          <section className="flex row button-section">
            <button onClick={this.handleFavorite}>
              <i class="material-icons">bookmark</i>
            </button>
          </section>
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading project</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null;
  return {
    recipe: recipe,
    auth: state.firebase.auth,
    id: id,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'recipes' }]),
)(AllRecipeDetail);
