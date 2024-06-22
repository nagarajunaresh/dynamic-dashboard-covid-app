import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Filters = ({ onChange }) => (
  <FilterContainer>
    <Input type="text" placeholder="Filter by Country" onChange={(e) => onChange(e.target.value)} />
  </FilterContainer>
);

export default Filters;
