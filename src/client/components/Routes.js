import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './container/Signup/Signup';
import Signin from './container/Signin/SignIn';
import Profile from './container/profile/Profile';
import CreateRecipe from './container/addRecipe/CreateRecipe';
import Home from './container/Home/View';
import Dashboard from './container/Dashboard';
import AllRecipeView from './container/AllRecipeView';
import AllRecipeDetail from './container/allRecipeDetail/AllRecipeDetail';
import DashboardReview from './container/DashboardReview';
import CreateReview from './container/addReview/CreateReview';
import SimpleTabs from './common/SimpleTabs/SimpleTabs';
import RecipeDetail from './container/recipeDetail/RecipeDetail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users/signup" component={Signup} />
    <Route exact path="/users/login" component={Signin} />
    <Route exact path="/user/add_recipe" component={CreateRecipe} />
    <Route exact path="/user/add_review/:id" component={CreateReview} />
    <Route exact path="/user/profile" component={Profile} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/recipe_view" component={AllRecipeView} />
    <Route exact path="/dashboard_review" component={DashboardReview} />
    <Route exact path="/tabs" component={SimpleTabs} />
    <Route exact path="/recipe/:id" component={RecipeDetail} />
    <Route exact path="/each_recipe/:id" component={AllRecipeDetail} />
  </Switch>
);

export default Routes;
