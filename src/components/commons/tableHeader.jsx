// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export const TableHeader = ({ columns }) => {
  return (
    <tr key={`${_.random(1000)}`}>
      {columns.map((item) => (
        <th className="font-weight-normal" key={item.label}>
          {item.label}
        </th>
      ))}
    </tr>
  );
};

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.func,
      id: PropTypes.string,
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};
export default TableHeader;
