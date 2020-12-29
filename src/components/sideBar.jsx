// @flow
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';

const sideBar = () => {
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push('/');
  }

  return (
    <div className="col-md-3 mt-md-0 my-sm-4 px-0 mb-3 px-md-2">
      <div className="card">
        <img
          src="/assets/images/blank_user_img.jpg"
          className="card-img-top rounded-circle my-4 mx-auto max-width-50-percent"
          alt="..."
        />
        <h5 className="user-name text-center"> Welcome, Dan</h5>
        <div className="card-body">
          <span className="card-text">
            <ul className="recipe-home-menu p-0 text-center">
              <li className="m-3 rm-selected-item">
                <Link onClick={handleClick} className="text-white" to="/">
                  Favorites
                </Link>
              </li>
              <li className="m-3">Browse</li>
              <li className="m-3">Settings</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
