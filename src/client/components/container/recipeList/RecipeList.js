import React from 'react';
import RecipeSummary from '../recipeSummary/RecipeSummary';
import { Link } from 'react-router-dom';
import './styles.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list section">
      <div>
        {recipes &&
          recipes.map(recipe => {
            return (
              <Link to={'/recipe/' + recipe.id}>
                <RecipeSummary recipe={recipe} key={recipe.id} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default RecipeList;
