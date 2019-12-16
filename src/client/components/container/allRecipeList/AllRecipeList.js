import React from 'react';
import AllRecipeSummary from '../allRecipeSummary/AllRecipeSummary';
import { Link } from 'react-router-dom';
import './styles.css';

const AllRecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list section">
      <div>
        {recipes &&
          recipes.map(recipe => {
            return (
              <Link to={'/each_recipe/' + recipe.id}>
                <AllRecipeSummary recipe={recipe} key={recipe.id} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default AllRecipeList;
