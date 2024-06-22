import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  background-color: #f2f2f2;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const DataTable = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <Th>Country</Th>
        <Th>Total Confirmed</Th>
        <Th>Total Deaths</Th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <Tr key={item.Country}>
          <Td>{item.Country}</Td>
          <Td>{item.TotalConfirmed}</Td>
          <Td>{item.TotalDeaths}</Td>
        </Tr>
      ))}
    </tbody>
  </Table>
);

export default DataTable;
