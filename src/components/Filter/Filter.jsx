import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filterValue }) => {
  return (
    <label>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Filter;
