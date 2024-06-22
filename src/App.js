import React, { useState, useEffect } from 'react';
import fetchData from './services/api';
import Header from './components/Header';
import Chart from './components/Chart';
import DataTable from './components/DataTable';
import Filters from './components/Filters';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result.Countries);
        setFilteredData(result.Countries);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, []);

  const handleFilterChange = (filter) => {
    const filtered = data.filter((item) =>
      item.Country.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <AppContainer>
      <Header />
      {error ? (
        <p>There was an error fetching the data. Please try again later.</p>
      ) : (
        <>
          <Filters onChange={handleFilterChange} />
          <Chart data={filteredData} />
          <DataTable data={filteredData} />
        </>
      )}
    </AppContainer>
  );
};

export default App;
