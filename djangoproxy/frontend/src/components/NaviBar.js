import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import EnterKeyModal from './EnterKeyModal';

export default class NaviBar extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
            user_id: "Loading",
            user_flag: " "
        };
      }

    componentDidMount() {
        fetch("https://api.ipdata.co/?api-key=5e9d8bb1d3f2b9314eeb8686fe75a6d33c0b80c1d561c5027b51fe41")
        .then(response => {
            return response.json();
        }, "jsonp")
        .then(res => {
            this.setState({
                user_id: res.ip,
                user_flag: res.flag
            })
        })
        .catch(err => this.setState({
            user_id: err
        }))
      };
      
    render() {
        const{user_id, user_flag} = this.state;
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
                .flag{
                    margin-top: 5px;
                    margin-left: 5px;
                }

                `}
            </style>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <div className="container">
                <Navbar.Brand className="logo">PROXYMAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="w-100 text-center">
                        <Nav.Item className="col ip"><p>your IP: {user_id}</p> </Nav.Item>
                        <Nav.Item className="flag"> <img src={user_flag} /> </Nav.Item>
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
