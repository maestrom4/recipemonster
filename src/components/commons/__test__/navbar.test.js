import React from 'react';
// import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
// import renderer from 'react-test-renderer';
import NavBar from '../navbar';
// import App from '../../../App';
import { GetRecipeContext } from '../../context/recipeContext';

const renderWithContext = (component) => {
  return {
    ...render(
      <BrowserRouter>
        <GetRecipeContext>{component}</GetRecipeContext>
      </BrowserRouter>
    ),
  };
};

afterEach(cleanup);

describe('Testing Navbar aesthetics', () => {
  it('dispaly navbar without crashing', () => {
    const { getByTestId } = renderWithContext(<NavBar />);
    expect(getByTestId('navbar')).toBeVisible();
  });

  it('dispaly navbar title', () => {
    const { getByTestId } = renderWithContext(<NavBar />);
    expect(getByTestId('navbar-title')).toBeVisible();
  });

  it('Search icon visibility on start', () => {
    const { getByTestId } = renderWithContext(<NavBar />);
    expect(getByTestId('navbar-search-icon')).toBeVisible();
  });

  it('To have search icon displayed on start', () => {
    const { getByTestId } = renderWithContext(<NavBar />);
    expect(getByTestId('navbar-search-icon')).toHaveClass('fa fa-search');
  });

  it('The x icon must not be displayed on start', () => {
    const { getByTestId } = renderWithContext(<NavBar />);
    expect(getByTestId('navbar-search-icon')).not.toHaveClass('fa fa-times');
  });

  it('Display user icon with dropdown', () => {
    const { getByTestId } = renderWithContext(<NavBar />);
    expect(getByTestId('navbar-user-icon')).toBeVisible();
  });
});
