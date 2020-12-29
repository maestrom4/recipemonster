/* eslint-disable react/no-unused-state */
// @flow
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import { Tabs, Tab } from 'react-bootstrap';
import { apiUri } from '../config.json';
import { getRecipe } from '../services/recipeServices';
import { mergeWithSameKey } from '../utilities/common-utils';
import IngredientsTable from './ingredientsTable';
import DirectionTable from './directionTable';
import getSpecials from '../services/specialsService';

class RecipeDetails extends Component {
  state = {
    selectedRecipe: {},
    headerImage: '',
    specialRecipe: [],
  };

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    const { selectedRecipe } = this.state;
    selectedRecipe.ingredients = [];
    this.setState({ selectedRecipe });
  }

  async componentDidMount() {
    const { match } = this.props;
    const { data } = await getRecipe(match.params.id);
    const { data: specialRecipe } = await getSpecials();

    this.setState({
      selectedRecipe: data,
      headerImage: data.images.full,
      specialRecipe,
    });
  }

  // eslint-disable-next-line consistent-return
  customizer = (objValue, srcValue) => {
    if (objValue.uuid === srcValue.ingredientId) {
      const srcValueTemp = { ...srcValue };
      delete srcValueTemp.uuid;
      return { ...objValue, ...srcValueTemp };
    }
  };

  render() {
    const { selectedRecipe, headerImage, specialRecipe } = this.state;
    const { ingredients, directions } = selectedRecipe;
    if (!selectedRecipe || !directions) return null;
    const mergeData = mergeWithSameKey(ingredients, specialRecipe);

    const numberedDirections = directions.map((item, index) => ({ ...item, number: index + 1 }));
    return (
      <>
        <div className="col-md-12 px-0">
          <div className="m-0 mb-3 border-0 recipe-img-container">
            <img
              className="card-img-top detailed-recipe-img"
              src={apiUri + headerImage}
              alt="Card img"
            />
          </div>
        </div>
        <div className="col-md-12">
          <span className="mx-0 my-2">
            <h5 className="mb-0">Recipe Details</h5>
            <p className="mb-0 mb-md-3">{selectedRecipe.description}</p>
          </span>
          <div className="tab-wrapper">
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col-sm-12">
                  <Tabs defaultActiveKey="recipe">
                    <Tab eventKey="recipe" title="Recipe">
                      <div className="tab-item-wrapper">
                        <IngredientsTable data={mergeData} />
                      </div>
                    </Tab>

                    <Tab eventKey="direction" title="Direction">
                      <div className="tab-item-wrapper">
                        <DirectionTable data={numberedDirections} />
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecipeDetails;
