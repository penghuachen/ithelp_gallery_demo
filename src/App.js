import React, { Suspense } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import GalleryList from './containers/GalleryList';
import Info from './containers/Info';
import Footer from './components/Footer';

const AppDiv = styled.div`
  min-width: 1200px;
`;

function App() {
  return (
    <Suspense fallback={ <div></div> }>
      <AppDiv>
        <Header />
        <Switch>
          <Route path="/info/:id" component={() => (<Info />) } />
          <Route path="/gallerylist" component={() => (<GalleryList />) } />
          <Redirect to="/gallerylist" />
        </Switch>
        <Footer />
      </AppDiv>
    </Suspense>
  );
}

export default App;
