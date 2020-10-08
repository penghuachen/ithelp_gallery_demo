import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import GalleryList from './components/GalleryList';
import Footer from './components/Footer';

const AppDiv = styled.div`
  min-width: 1200px;
`;

function App() {
  return (
    <AppDiv>
      <Header />
      <GalleryList />
      <Footer />
    </AppDiv>
  );
}

export default App;
