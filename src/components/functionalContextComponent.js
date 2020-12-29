import { ToastContainer } from 'react-toastify';
// eslint-disable-next-line no-unused-vars
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import Recipe from './recipe';
import SideBar from './sideBar';
import NavBar from './commons/navbar';
import RecipeDetails from './recipeDetails';
import Page404 from './page404';
import { RecipeContext } from './context/recipeContext';
// @flow
// type Props = {};
export const FunctionalContextComponent = () => {
  const recipeContext = useContext(RecipeContext);
  const { search, setSearch } = recipeContext;

  const history = useHistory();
  if (search.length !== 0) history.push('/');

  return (
    <>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <div className="row my-0 my-md-4">
          <div className="col-md-12">
            <div className="row">
              <SideBar />
              <div className="col-md-9">
                <div className="row bg-white">
                  <Switch>
                    {/* {search.length !== 0 && <Redirect from="/" exact to="/" />} */}
                    <Route
                      path="/recipes/:id"
                      exact
                      render={(props) => <RecipeDetails {...props} />}
                    />
                    <Route
                      path="/recipes"
                      exact
                      render={(props) => (
                        <Recipe {...props} search={search} setSearch={setSearch} />
                      )}
                    />
                    <Route path="/page404" exact component={Page404} />
                    <Redirect from="/" exact to="/recipes" />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FunctionalContextComponent;
