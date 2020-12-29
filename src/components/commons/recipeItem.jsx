// @flow
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { apiUri } from '../../config.json';
import getRndInteger from '../../utilities/common-utils';
import Ratings from './ratings';

export const RecipeItem = (props) => {
  const { item, colors, ratings } = props;
  const { uuid, images, title, cookTime, ingredients } = item;
  const colorNumber = getRndInteger(0, 4);
  const colorGenerator = colors[colorNumber];
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push(`/recipes/${uuid}/`);
  }

  return (
    <div key={uuid + title + _.random(1000)} className="card m-1 mx-md-2 mx-sm-1 recipe-item">
      <div className="card-header recipe-list-container p-0">
        <img className="img-fluid img-recipe-list" src={`${apiUri}${images.medium}`} alt="" />
      </div>
      <div
        className="card-body px-3 pt-md-2 pb-5 pb-md-3 text-white text-left text-sm-center position-relative"
        style={{ backgroundColor: colorGenerator }}
      >
        <span className="recipe-rating p-1 text-center" style={{ backgroundColor: colorGenerator }}>
          Rate <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </span>
        <div className="card-recipe-title">{title}</div>
        <small className="sub-description mb-2">
          <i className="fa fa-clock-o align-self-center" aria-hidden="true" />
          <span className="ml-1 align-self-center">{cookTime}</span>
          <span className="mx-1 align-self-center">|</span>
          <span className="ml-1 align-self-center">Ingredients {ingredients.length}</span>
          <span className="mx-1 align-self-center">|</span>
          <span className="ml-1 align-self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              fill="#fff"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
          </span>
          <NavLink
            to={`/recipes/${uuid}/`}
            onClick={handleClick}
            type="button"
            className="mx-1 text-white"
          >
            View
          </NavLink>
          <Ratings ratings={ratings} />
        </small>
      </div>
    </div>
  );
};

RecipeItem.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.shape({
    cookTime: PropTypes.number,
    description: PropTypes.string,
    directions: PropTypes.arrayOf({
      instructions: PropTypes.string,
      options: PropTypes.string,
    }),
    editDate: PropTypes.string,
    images: PropTypes.shape({
      full: PropTypes.string,
      medium: PropTypes.string,
      small: PropTypes.string,
    }),
    ingredient: PropTypes.shape({
      uuid: PropTypes.string,
      ingredientId: PropTypes.string,
      type: PropTypes.string,
      title: PropTypes.string,
      geo: PropTypes.string,
    }),
    postDate: PropTypes.string,
    servings: PropTypes.number,
    title: PropTypes.string,
    uuid: PropTypes.string,
  }).isRequired,
};

export default RecipeItem;
