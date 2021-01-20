import React, { Component } from 'react';
import {render} from 'react-dom';

export default class ProxyCounter extends Component {
  constructor(props) {
    super(props)

    this.state ={
        error: false,
        isLoaded: false,
        items: [],
        isLoaded: true,
        };
  }

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 5000);
  };

  getData = () => {
    fetch("/api/proxy/count/")
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                count: result.proxy_count,
                count_http: result.proxy_http,
                count_https: result.proxy_https,
                count_socks: result.proxy_socks,
                count_socks5: result.proxy_socks5,

            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: true
            })
        }
    )
    this.props.parentCallback(this.state);
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