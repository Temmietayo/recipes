import React from 'react';
import { Link } from 'react-router-dom';
import Pancake from '../../../../assets/blur-breakfast-close-up-dairy-product-376464.jpg';
import Fish from '../../../../assets/brown-fish-fillet-on-white-ceramic-plate-46239.jpg';
import Rice from '../../../../assets/plate-of-rice-and-cooked-meat-1624487.jpg';
import './styles.css';

const View = () => (
  <div className="flex nowrap column">
    <section className="flex row jumbotron">
      <div className="flex column right-side align-items-center justify-content-center">
        <p>All-Recipes</p>
        <p>Get your juices flowing,</p>
        <p>
          By satisfying your tastebuds with the mix of the perfect ingredient to
          get a perfect texture and feeling.!!!
        </p>
      </div>
    </section>
    <section className="flex row search">
      <div className="flex column first-half">
        <p>Recipes</p>
      </div>
      <div className="flex column second-half">
        <p>
          <i className="material-icons">search</i>
          <input type="text" placeholder="Search recipes and more" />
        </p>
      </div>
      <div className="flex column third-half">
        <p>
          sort by:
          <select>
            <option value="volvo">Tradition</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </p>
      </div>
    </section>
    <section className="flex row recipe">
      <div className="flex column one-half">
        <p>Filter by:</p>
        <p>Featured</p>
        <p>Test Kitchen Approved</p>
        <p>Meal</p>
        <p>Dish Type</p>
      </div>
      <div className="flex row two-half">
        <Link to="/">
          <div className="recipe-div">
            <img src={Pancake} alt="Pancake" className="recipe-img" />

            <p>Raspberry-Raspberry Pancakes</p>
          </div>
        </Link>
        <Link to="/">
          <div className="recipe-div">
            <img src={Fish} alt="Fish" className="recipe-img" />

            <p>Brown Fish and Soy Sauce</p>
          </div>
        </Link>
        <Link to="/">
          <div className="recipe-div">
            <img src={Rice} alt="Rice" className="recipe-img" />

            <p>Basmati Rice and Seasoned Chicken</p>
          </div>
        </Link>
      </div>
    </section>
  </div>
);

export default View;
