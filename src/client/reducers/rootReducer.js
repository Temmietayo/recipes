import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import reviewReducer from './reviewReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
  review: reviewReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
