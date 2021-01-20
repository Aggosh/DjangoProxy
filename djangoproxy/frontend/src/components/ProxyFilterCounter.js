import React, { Component } from 'react';
import {render} from 'react-dom';

export default class ProxyFilterCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
        selectedProxy: this.props.selectedProxy
    }
  }

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 1000);
  };

  getData = () => {
    this.setState({
        isLoaded: true,
        selectedProxy: this.props.selectedProxy})
  }

  render() {
    const{error, isLoaded, selectedProxy} = this.state;
    if (error) {
        return <>Error {error.message}</>
    } else if (!isLoaded){
        return <>Loading</>
    } else {
        return(<>{selectedProxy}</>)
    }
  }
}