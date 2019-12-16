import React from 'react';
import ReviewSummary from '../reviewSummary/ReviewSummary';
import { Link } from 'react-router-dom';
import './styles.css';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews &&
        reviews.map(review => {
          return (
            <Link to={'/review/' + review.id}>
              <ReviewSummary review={review} key={review.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ReviewList;
