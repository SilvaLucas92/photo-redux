// import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import { PhotoList } from './components/PhotoList';
import {Favorites} from './components/Favorites';
import {useGlobalContext} from './components/context'
import { Loading } from './components/Loading.js'
import Footer from './components/Footer';
function App() {
  
  const {img, isLoading, showFav} = useGlobalContext();
  return (
    <div>
      <Navbar />
      {isLoading && <Loading />}
      {!isLoading && !showFav && img && <PhotoList />}
      {!isLoading && showFav && <Favorites /> }
      {/* <Footer /> */}
    </div>
  );
}

export default App;
