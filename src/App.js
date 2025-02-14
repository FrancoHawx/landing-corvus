import React, { Component } from 'react';
import './App.css';

import Navegacion from './components/Navegacion/Navegacion';
import Header from './components/Header/Header';
import Galeria from './components/Galeria/Galeria';
import Integrantes from './components/Integrantes/Integrantes';
import RedesSociales from './components/RedesSociales/RedesSociales';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navegacion />
        <Header />
        <Galeria />
        <Integrantes />
        <RedesSociales />
        <Footer />
      </div>
    );
  }
}

export default App;
