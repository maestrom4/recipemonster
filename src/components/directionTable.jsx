import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { PropTypes } from 'prop-types';
import { Table } from './commons/table';

class directionTable extends Component {
  columns = [
    {
      id: '5ba21c8',
      path: 'instructions',
      label: 'instructions',
      content: (data) => (
        <tr className="border-0">
          <td className="border-0">
            <small className="numbered mr-1">{data.number}</small>
          </td>
          <td className="border-0"> {data.instructions}</td>
        </tr>
      ),
    },
    { id: '5ba21ca3', path: 'optional', label: 'optional' },
  ];

  render() {
    const { data } = this.props;
    if (!data) return null;
    return <Table columns={this.columns} data={data} />;
  }
}

directionTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      instructions: PropTypes.string,
      options: PropTypes.string,
    })
  ).isRequired,
};

export default directionTable;
