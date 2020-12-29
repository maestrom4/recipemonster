import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { RecipeContext } from '../context/recipeContext';
import SearchBox from './searchBox';

export const navbar = () => {
  const recipeContext = useContext(RecipeContext);
  const { search, setSearch } = recipeContext;
  // const [search, setSearch] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setSearch('');
  }

  return (
    <nav data-testid="navbar" className="navbar navbar-expand-md bg-dark text-light py-3">
      <div className="container">
        <h4 className="ml-md-auto">
          <Link
            data-testid="navbar-title"
            to="/"
            className="font-weight-bold text-white px-2 px-md-0"
          >
            RecipeMonster
          </Link>
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto nav-fill w-100">
            <li className="nav-item active mx-5 px-lg-5">
              <InputGroup>
                <SearchBox />
                <InputGroupAddon className="input-group-append" addonType="append">
                  <Button
                    type="button"
                    color="secondary"
                    onClick={handleClick}
                    id="search"
                    className="input-group-text rounded-input-right bg-white border-left-0 search"
                  >
                    <i
                      data-testid="navbar-search-icon"
                      className={search.length === 0 ? 'fa fa-search' : 'fa fa-times'}
                    />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </li>
            <li data-testid="navbar-user-icon" className="nav-item active text-right">
              <i className="fa fa-user-circle fa-2x mx-1" />
              <i className="fa fa-angle-down fa-2x mx-1" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
