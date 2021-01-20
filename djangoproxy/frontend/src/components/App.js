import React, { Component } from 'react';
import {render} from 'react-dom';

import NaviBar from './NaviBar';
import ProxyOnline from './ProxyOnline';
import ProxyFilter from './ProxyFilter';
import Card from './Card';
import About from './About';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: 'Loading'
    }

}

  handleCallback = (proxyData) =>{
    this.setState({data: proxyData})
}

  render() {
    const {data} = this.state;
        return(
          <>
          <style type="text/css">
            {`

            }`
            }
          </style>
            <NaviBar />
            <main className="container">
              <ProxyOnline parentCallback = {this.handleCallback} />
              <Card />
              <ProxyFilter proxyData={data} />
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