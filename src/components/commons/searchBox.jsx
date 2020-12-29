// @flow
import React, { useContext } from 'react';
import { RecipeContext } from '../context/recipeContext';

export const searchBox = () => {
  const recipeContext = useContext(RecipeContext);
  const { search, setSearch } = recipeContext;

  return (
    <input
      type="text"
      className="form-control rounded-input-left bg-white border-right-0 rounded-left"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.currentTarget.value)}
    />
  );
};

export default searchBox;
