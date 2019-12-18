import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Pancake from '../../../../assets/blur-breakfast-close-up-dairy-product-376464.jpg';
import './styles.css';

const RecipeSummary = ({ recipe, auth }) => {
  if (recipe.authorId === auth.uid) {
    return (
      <div>
        <div className="flex align-items-center nowrap recipez-summary">
          <img src={Pancake} alt="recipe" className="recipezz-img" />
          <span className="recipe-name">{recipe.dname}</span>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const mapStateToProps = state => {
  const auth = state.firebase.auth;
  return {
    auth: auth,
  };
};

export default connect(mapStateToProps)(RecipeSummary);
