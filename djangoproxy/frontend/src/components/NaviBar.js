import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import EnterKeyModal from './EnterKeyModal';

export default class NaviBar extends Component {
    render() {
        return (
            <>
            <style type="text/css">
                {`
                .navbar-dark, .nav-link{
                background-color: #1F1C1C;
                color: white!important;
                font-family: 'Proxima Nova';
                font-size: 14px;
                }

                .logo {
                    font-family: 'Druk';
                    font-size: 23px;
                    color: #F8C25C!important;
                }

                .ip {
                    background-color: #242121;
                    border-radius: 4px;
                    padding: 10px;
                    position: relative;
                }
                .ip p {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-right: -50%;
                    transform: translate(-50%, -50%);
                }

                `}
            </style>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <div className="container">
                <Navbar.Brand className="logo">PROXYMAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="w-100 text-center">
                        <Nav.Item className="col ip"><p>your IP: 127.0.0.1</p></Nav.Item>
                        <Nav.Link className="col">Free</Nav.Link>
                        <EnterKeyModal />
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
            </>
        )
    }
}
