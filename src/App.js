import React from 'react';

// eslint-disable-next-line import/no-named-as-default
import GetRecipeContext from './components/context/recipeContext';
// eslint-disable-next-line import/no-named-as-default
import FunctionalContextComponent from './components/functionalContextComponent';
// import getRecipes from './services/recipeServices';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './resource/main.css';

function App() {
  return (
    <>
      <GetRecipeContext>
        <FunctionalContextComponent />
      </GetRecipeContext>
    </>
  );
}

export default App;
