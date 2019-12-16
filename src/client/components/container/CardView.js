import React from 'react';
import { Link } from 'react-router-dom';
import '../../materialize.css';
import Pancake from '../../../assets/blur-breakfast-close-up-dairy-product-376464.jpg';

const CardView = () => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={Pancake} alt="pancake" />
            <span className="card-title">Card Title</span>
            <Link
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </Link>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
