import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Pancake from '../../../../assets/blur-breakfast-close-up-dairy-product-376464.jpg';
import './styles.css';

const RecipeSummary = ({ recipe, auth }) => {
  if (recipe.authorId === auth.uid) {
    return (
      <div>
        <div className="card horizontal z-depth-0 recipe-summary">
          <div className="card-image">
            <img src={Pancake} alt="recipe" className="recipe-img" />
          </div>
          <div className="card-stacked">
            <div className="card-content grey-text text-darken-3">
              <span className="card-title">{recipe.dname}</span>
              <p>{recipe.ingredient}</p>
              <p>{recipe.author}</p>
              <div className="card-action">
                <Link to="/">
                  <i class="material-icons">thumb_up</i>
                </Link>
                <a href="#openModal02">
                  <i class="material-icons">thumb_down</i>
                </a>
                <Link class="review" to={'/user/add_review/' + recipe.id}>
                  <i class="material-icons">comment</i>
                </Link>
              </div>
            </div>
          </div>
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
