import React from 'react';
import moment from 'moment';
import './styles.css';

const ReviewSummary = ({ review }) => {
  return (
    <div className="card horizontal z-depth-0">
      <div className="card-stacked">
        <div className="card-content grey-text text-darken-3">
          <p>Posted by {review.author}</p>
          <p>{review.review}</p>
          <p>{moment(review.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
