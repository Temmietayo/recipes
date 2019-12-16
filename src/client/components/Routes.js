import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './container/Signup/Signup';
import Signin from './container/Signin/SignIn';
import CreateRecipe from './container/addRecipe/CreateRecipe';
import Home from './container/Home/View';
import Dashboard from './container/Dashboard';
import AllRecipeView from './container/AllRecipeView';
import AllRecipeDetail from './container/allRecipeDetail/AllRecipeDetail';
import DashboardReview from './container/DashboardReview';
import CardView from './container/CardView';
import CreateReview from './container/addReview/CreateReview';
import Modal from './common/Modal/Modal';
import RecipeDetail from './container/recipeDetail/RecipeDetail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users/signup" component={Signup} />
    <Route exact path="/users/login" component={Signin} />
    <Route exact path="/user/add_recipe" component={CreateRecipe} />
    <Route exact path="/user/add_review/:id" component={CreateReview} />
    <Route exact path="/cardview" component={CardView} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/recipe_view" component={AllRecipeView} />
    <Route exact path="/dashboard_review" component={DashboardReview} />
    <Route exact path="/modal" component={Modal} />
    <Route exact path="/recipe/:id" component={RecipeDetail} />
    <Route exact path="/each_recipe/:id" component={AllRecipeDetail} />
  </Switch>
);

export default Routes;
