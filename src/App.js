import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import GalleryList from './components/GalleryList';

const AppDiv = styled.div`
  min-width: 1200px;
`;

function App() {
  return (
    <AppDiv>
      <Header />
      <GalleryList />
    </AppDiv>
  );
}

export default App;
