import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filter = ({ value, onChange }) => {
  return (
    <StyledLable>
      find contacts by name:
      <StyledInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </StyledLable>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const StyledLable = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  font-size: 30px;
`;

const StyledInput = styled.input`
  width: 180px;
  height: 30px;
  margin-left: 10px;
  font-size: 20px;
`;
export default Filter;
