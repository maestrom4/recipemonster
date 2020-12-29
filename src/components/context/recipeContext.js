// import React, { useContext, useState } from 'react';
import React, { useState } from 'react';

export const RecipeContext = React.createContext();
RecipeContext.displayName = 'RecipeContext';

export function GetRecipeContext({ children }) {
  const [search, setSearch] = useState('');
  return <RecipeContext.Provider value={{ search, setSearch }}>{children}</RecipeContext.Provider>;
}

export default GetRecipeContext;
