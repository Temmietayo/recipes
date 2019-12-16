const initState = {
  reviews: [],
};

const reviewReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_REVIEW':
      console.log('submitted review sucessfully', action.review);
      return state;
    case 'CREATE_REVIEW_ERROR':
      console.log('submit error', action.err);
      return state;
    default:
      return state;
  }
};

export default reviewReducer;
