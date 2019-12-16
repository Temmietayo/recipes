export const createReview = (review, ownProps) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const id = ownProps.match.params.id;
    console.log(id)
    const firestoreDb = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestoreDb
      .collection('reviews')
      .add({
        ...review,
        recipeId: id,
        author: profile.firstName + ' ' + profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_REVIEW', review });
        console.log('Document successfully submitted!');
      })
      .catch(err => {
        dispatch({ type: 'CREATE_REVIEW_ERROR', err });
        console.log('Document unsucessfull');
      });
  };
};
