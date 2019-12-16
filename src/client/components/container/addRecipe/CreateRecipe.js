import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../../../actions/recipeActions';
import { Redirect } from 'react-router-dom';
import Pancake from '../../../../assets/blur-breakfast-close-up-dairy-product-376464.jpg';
import '../../../materialize.css';
import './styles.css';

class CreateRecipe extends Component {
  constructor() {
    super();
    this.state = {
      dname: '',
      image: null,
      steps: [],
      ingredient: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.state);
    this.props.createRecipe(this.state);
    this.props.history.push('/dashboard');
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/users/login" />;
    return (
      <div className="flex flex-wrap row yellow lighten-5 ">
        <div className="container flex center-align align-items-center justify-content-center  addrecipe-form">
          <form className="container column" onSubmit={this.handleSubmit}>
            <div className="title-div">
              <img src={Pancake} alt="Logo" />
              <h3>Add Recipe</h3>
            </div>
            <div className="input-field field-color">
              <input
                type="text"
                id="dname"
                className="validate"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="dname">Name of Dish</label>
            </div>
            <div className="file-field input-field field-color">
              <div className="btn">
                <span>Choose Image</span>
                <input type="file" multiple />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Upload Image of Dish"
                  id="image"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="input-field field-color">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
                id="ingredient"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label htmlFor="ingredient">Ingredients</label>
              <span className="helper-text">
                Each Ingredients should be written on a new line and each line
                should begin with a hyphen
              </span>
            </div>
            <div className="input-field field-color">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
                id="steps"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label htmlFor="steps">Steps to Prepare</label>
              <span className="helper-text">
                Each Step should be written on a new line and each line should
                begin with a hyphen
              </span>
            </div>
            <button type="submit">Add Recipe</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: recipe => dispatch(createRecipe(recipe)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);
