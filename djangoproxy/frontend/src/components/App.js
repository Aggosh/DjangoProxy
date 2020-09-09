import React, { Component } from 'react';
import {render} from 'react-dom';

import NaviBar from './NaviBar';
import ProxyOnline from './ProxyOnline';
import Add from './Add';
import Cards from './Cards';
import About from './About';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
        return(
          <>
          <style type="text/css">
            {`

            }`
            }
          </style>
            <NaviBar />
            <main className="container">
              <ProxyOnline />
              <Add />
              <Cards />
              <Add />
              <About />
            </main>
            <Footer />
            </>
        )
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);