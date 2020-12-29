// @flow
import React, { Component } from 'react';
import { compact } from 'lodash';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

class Ratings extends Component {
  starFull = (ratings, index) => {
    return (
      <svg
        key={index + Math.random(20)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={ratings.precision.color}
        width={ratings.precision.size}
        height={ratings.precision.size}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  };

  starHalf = (ratings, index) => {
    return (
      <svg
        key={index + Math.random(20)}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        fill={ratings.precision.color}
        width={ratings.precision.size}
        height={ratings.precision.size}
      >
        <g>
          <rect fill="none" height="24" width="24" x="0" />
        </g>
        <g>
          <g>
            <g>
              <path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z" />
            </g>
          </g>
        </g>
      </svg>
    );
  };

  rateGenerator = (rate, perItemAllocation, ratingItemCount) => {
    const withRemainder = rate % ratingItemCount;

    let tempData = rate;
    const displayRateIcon = [];

    while (tempData >= perItemAllocation) {
      displayRateIcon.push('full');
      tempData -= perItemAllocation;
    }

    if (withRemainder) {
      displayRateIcon.push('half');
      return displayRateIcon;
    }
    return displayRateIcon;
  };

  render() {
    const { ratings } = this.props;
    compact(ratings);
    if (!ratings) return null;
    const { rate, perItemAllocation, ratingItemCount } = ratings;

    return (
      <>
        {this.rateGenerator(rate, perItemAllocation, ratingItemCount).map((item, index) =>
          item === 'full' ? this.starFull(ratings, index) : this.starHalf(ratings, index)
        )}
      </>
    );
  }
}

Ratings.propTypes = {
  perItemAllocation: PropTypes.number.isRequired,
  precision: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
  rate: PropTypes.number.isRequired,
  ratingItemCount: PropTypes.number.isRequired,
};

export default Ratings;
