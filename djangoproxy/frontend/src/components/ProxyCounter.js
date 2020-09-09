import React, { Component } from 'react';
import {render} from 'react-dom';

export default class ProxyCounter extends Component {
  constructor(props) {
    super(props)

    this.state ={
        error: false,
        isLoaded: false,
        items: []
    };
  }

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 5000);
  };

  getData = () => {
    fetch("api/proxy/?format=json")
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                count: result.count,
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: true
            })
        }
    )
  }

  render() {
    const{error, isLoaded, count} = this.state;
    if (error) {
        return <>Error {error.message}</>
    } else if (!isLoaded){
        return <>Loading</>
    } else {
        return(<>{count}</>)
    }
  }
}