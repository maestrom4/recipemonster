import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';

import { Table } from './commons/table';

class IngredientsTable extends Component {
  columns = [
    {
      id: '5ba21ca3',
      path: 'name',
      label: 'Name',
      content: (data) => (
        <>
          <tr>
            <td>
              <i className="fa fa-check text-info mr-2" /> {data.name}
            </td>
          </tr>
          <tr className={data.ingredient.length !== 0 ? '' : 'd-none'}>
            <td className="d-block ml-4 d-block">
              <small>Title: {data.ingredient.title} </small>
              <small>
                <b>(Special)</b>
              </small>
              <small className="d-block">Type {data.ingredient.type} </small>
              <small className="d-block">Description: {data.ingredient.text} </small>
            </td>
          </tr>
        </>
      ),
    },
    { id: 'dfsca3', path: 'amount', label: 'Amount' },
    { id: '5df3sdfs', path: 'measurement', label: 'Measurement' },
  ];

  render() {
    const { data } = this.props;
    return <Table columns={this.columns} data={data} />;
  }
}

IngredientsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      instructions: PropTypes.string,
      options: PropTypes.string,
    })
  ).isRequired,
};

export default IngredientsTable;
