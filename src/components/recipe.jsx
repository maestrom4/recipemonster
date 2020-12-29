import React, { Component } from 'react';
import { compact } from 'lodash';
import PropTypes from 'prop-types';
import getRecipes from '../services/recipeServices';
import { RecipeItem } from './commons/recipeItem';
import Ratings from './commons/ratings';

class Recipe extends Component {
  state = {
    recipes: [],
    colors: [],
    ratings: {
      ratingItemCount: 0,
      rate: 0,
      precision: {
        color: '',
        size: '',
      },
      perItemAllocation: 0,
    },
  };

  async componentDidMount() {
    const { ratings } = this.state;

    ratings.ratingItemCount = 5;
    ratings.rate = 9;
    ratings.precision.color = '#d54215';
    ratings.precision.size = '14px';
    ratings.perItemAllocation = 2;
    const { data } = await getRecipes();
    const colors = ['#EB5757', '#27AE60', '#2F80ED', '#2D9CDB', '#F2994A'];
    this.setState({ recipes: data, colors, ratings });
  }

  cardItem = (item) => {
    const { colors } = this.state;
    return <RecipeItem {...this.props} item={item} colors={colors} />;
  };

  searchItem = (key) => {
    const { recipes } = this.state;
    return recipes.filter((item) => item.title.toLowerCase().startsWith(key));
  };

  render() {
    const { search } = this.props;
    const { recipes, ratings } = this.state;
    const filtered = search.length === 0 ? recipes : this.searchItem(search);
    // if (!ratings) return null;

    return (
      <div className="recipe px-0 px-md-3">
        <h5 className="mx-3 mt-3 mb-0 page-title">My Secret Recipe</h5>
        <small className="d-block d-md-inline mx-3 page-sub-title">
          Shared with {15} people Overall Rating score
          <Ratings ratings={compact(ratings)} />
        </small>
        <div className="row d-flex mx-0 mx-md-2 mb-md-4 pt-2">
          {filtered.map((itemRecipe) => this.cardItem(itemRecipe))}
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

Recipe.defaultTypes = {
  search: [],
  setSearch: () => {},
};

export default Recipe;
