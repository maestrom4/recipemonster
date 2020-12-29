// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { TableHeader } from './tableHeader';
import { TableBody } from './tableBody';

export const Table = ({ data, columns }) => {
  if (!data) return null;
  return (
    <div className="table-responsive-sm">
      <table className="table">
        <thead className="thead-dark">
          <TableHeader columns={columns} />
        </thead>
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

Table.propTypes = {
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

export default Table;
