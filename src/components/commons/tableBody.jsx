// @flow
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const columnItem = (item, column) => {
  if (column.content) return column.content(item);
  return _.get(item, column.path);
};

export const TableBody = ({ data, columns }) => {
  return (
    <tbody className="tableBody">
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((column) => (
            <td key={item.id + column.path}>{columnItem(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      ingredient: PropTypes.shape({
        uuid: PropTypes.string,
        ingredientId: PropTypes.string,
        type: PropTypes.string,
        title: PropTypes.string,
        geo: PropTypes.string,
      }),
    })
  ).isRequired,

  columns: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.func,
      id: PropTypes.string,
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};

export default TableBody;
