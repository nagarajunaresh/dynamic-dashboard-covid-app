import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
  color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;

const Header = () => (
  <HeaderContainer>
    <Title>COVID-19 Dashboard</Title>
    <Description>Visualizing global COVID-19 data</Description>
  </HeaderContainer>
);

export default Header;
