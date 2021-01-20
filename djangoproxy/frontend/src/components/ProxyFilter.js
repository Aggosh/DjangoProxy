import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import ProxyFilterCounter from './ProxyFilterCounter';

export default class ProxyFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.proxyData,
            https_checked: false,
            http_checked: false,
            socks_checked: false,
            socks5_checked: false,
            selectedProxy: 0,
            count: 0,
            count_http: 0,
            count_https: 0,
            count_socks: 0,
            count_socks5: 0,
        }
        this.handleCheckHTTPS = this.handleCheckHTTPS.bind(this);
        this.handleCheckHTTP = this.handleCheckHTTP.bind(this);
        this.handleCheckSOCKS = this.handleCheckSOCKS.bind(this);
        this.handleCheckSOCKS5 = this.handleCheckSOCKS5.bind(this);
    }

    componentDidMount() {
        setInterval(this.getData, 5000);
      };


    getData = () => {
           this.setState({
            data: this.props.proxyData});
     }

    handleCheckHTTPS(event) {
        this.setState({https_checked: !this.state.https_checked});
        var countProxy = this.state.data.count_https
        var selProxy = this.state.selectedProxy
        if (countProxy == undefined){
            return
        }
        var newSelProxy = 0
        if (this.state.https_checked == false){
            newSelProxy = countProxy + selProxy
        }
        else{
            newSelProxy = selProxy - countProxy
        }
        if (newSelProxy < 0){
            newSelProxy = 0;
        }
        this.setState({selectedProxy: newSelProxy})
    }

    handleCheckHTTP(event){
        this.setState({http_checked: !this.state.http_checked});
        var countProxy = this.state.data.count_http
        var selProxy = this.state.selectedProxy
        if (countProxy == undefined){
            return
        }
        var newSelProxy = 0
        if (this.state.http_checked == false){
            newSelProxy = countProxy + selProxy
        }
        else{
            newSelProxy = selProxy - countProxy
        }
        if (newSelProxy < 0){
            newSelProxy = 0;
        }
        this.setState({selectedProxy: newSelProxy})
    }

    handleCheckSOCKS(event){
        this.setState({socks_checked: !this.state.socks_checked});
        var countProxy = this.state.data.count_socks
        var selProxy = this.state.selectedProxy
        if (countProxy == undefined){
            return
        }
        var newSelProxy = 0
        if (this.state.socks_checked == false){
            newSelProxy = countProxy + selProxy
        }
        else{
            newSelProxy = selProxy - countProxy
        }
        if (newSelProxy < 0){
            newSelProxy = 0;
        }
        this.setState({selectedProxy: newSelProxy})
    }

    handleCheckSOCKS5(event){
        this.setState({socks5_checked: !this.state.socks5_checked});
        var countProxy = this.state.data.count_socks5
        var selProxy = this.state.selectedProxy
        if (countProxy == undefined){
            return
        }
        var newSelProxy = 0
        if (this.state.socks5_checked == false){
            newSelProxy = countProxy + selProxy
        }
        else{
            newSelProxy = selProxy - countProxy
        }
        if (newSelProxy < 0){
            newSelProxy = 0;
        }
        this.setState({selectedProxy: newSelProxy})
    }

    
    render() {
        const {selectedProxy} = this.state;
        return (
            <>
            <style type="text/css">
                {`
                    .proxy-filter {
                        color: #575555;
                        background-color: #1F1C1C;
                        font-family: 'Proxima Nova';
                        min-height: 100px;
                        font-size: 14px;
                    }

                    .filter-btn{
                        max-width: none;
                        margin-left: auto;
                        margin-right: auto;
                    }
                }`
                }
            </style>
            <form className="proxy-filter row" action="api/get_proxy/">
                <div className="col-lg-3 mt-4">
                    <input type="checkbox" onChange={this.handleCheckHTTPS} defaultChecked={this.state.https_checked} name="https"/> HTTPS<br />
                    <input type="checkbox" onChange={this.handleCheckHTTP} defaultChecked={this.state.http_checked} name="http"/> HTTP<br />
                    <input type="checkbox" onChange={this.handleCheckSOCKS} defaultChecked={this.state.socks_checked} name="socks"/> SOCKS<br />
                    <input type="checkbox" onChange={this.handleCheckSOCKS5} defaultChecked={this.state.socks5_checked} name="socks5"/> SOCKS5<br />
                </div>

                <div className="col-lg-3  mt-4">
                    <p className="modal-body-text-first" align="center">Your Premium Key</p>
                    <input className="modal-key-input" name="key"/>
                </div>

                <div className="col-lg-3 offset-lg-3 my-4">
                    <div className="row">
                        <div className="d-flex justify-content-center"><p>Selected: <ProxyFilterCounter selectedProxy={selectedProxy} /> proxies</p> </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <Button className="filter-btn" variant="gold" type="submit">Link</Button>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <Button className="filter-btn" variant="gold" type="submit">Download</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </>
        )
    }
}
