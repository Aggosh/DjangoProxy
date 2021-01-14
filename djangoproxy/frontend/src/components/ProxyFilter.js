import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class ProxyFilter extends Component {
    render() {
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
                    <input type="checkbox" name="https"/> HTTPS<br />
                    <input type="checkbox" name="http"/> HTTP<br />
                    <input type="checkbox" name="socks"/> SOCKS<br />
                    <input type="checkbox" name="socks5"/> SOCKS5<br />
                </div>

                <div className="col-lg-3  mt-4">
                    <p className="modal-body-text-first" align="center">Your Premium Key</p>
                    <input className="modal-key-input" name="key"/>
                </div>

                <div className="col-lg-3 offset-lg-3 my-4">
                    <div className="row">
                        <div className="d-flex justify-content-center"><p>Selected: 1488 proxies</p> </div>
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
