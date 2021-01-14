import React, { Component } from 'react';
import {render} from 'react-dom';
import { Modal, Button} from 'react-bootstrap';

export default class BuyModal extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            input: "",
            show: false,
        };

		this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
    }
    
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            input: this.state.input,
        })
        this.props.history.push('/login');
    }
    render() {
        return (
            <>
            <style type="text/css">
                {`
                .btn-gold {
                    background-color: #F8C25C;
                    color: #242121;
                    border-radius: 0;
                    max-width: 80px;
                    font-size: 14px;
                    font-family: 'Proxima Nova';
                    border: 2px solid #F8C25C;
                }

                .btn-cancel, .btn-cancel:hover {
                    background-color: #242121;
                    color: #F8C25C;
                    border-radius: 0;
                    max-width: 80px;
                    font-size: 14px;
                    font-family: 'Proxima Nova';
                    border: 2px solid #F8C25C;
                }
                
                .modal-content {
                    border-radius: 0;
                    background-color: #242121;
                }

                .close {
                    color: #000000; 
                    opacity: 1;
                }

                .modal-header {
                    background-color: #F8C25C;
                    border-radius: 0;
                    border-bottom: none;
                }

                .vl {
                    height: 23px;
                    border-left: 2px solid #242121;
                    float: left;
                    margin-left: 5px;
                    margin-right: 7px;
                }

                .modal-head-first {
                    font-family: 'Druk';
                    font-size: 16px;
                    color: #000000!important;
                    float: left;
                }

                .modal-head-second {
                    font-family: 'Proxima Nova';
                    font-size: 14px;
                    color: #000000!important;
                    float: left;
                }

                .modal-footer {
                    border-top: none;
                }

                .modal-body-text-first {
                    font-family: 'Proxima Nova';
                    font-size: 14px;
                    color: #F8C25C!important;
                }

                .modal-body-text-second {
                    font-family: 'Proxima Nova';
                    font-size: 14px;
                    color: #FFFFFF!important;
                }

                .modal-pay-input {
                    width: 100%;
                    border: 2px solid #F8C25C;
                    border-radius: 2px;
                    height: 35px;
                }

                .hidden-checkbox{
                    visibility: hidden;
                }

                .my-btn{
                    color: #242121;
                    font-size: 14px;
                    font-family: 'Proxima Nova';
                    text-align: center;
                    font-weight: 600;
                }

                `}
            </style>
            <Button className="col-auto align-self-center center my-btn py-3" variant="gold" onClick={this.handleShow}>BUY</Button>

            <Modal className="modal" show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="modal-head-first">PROXYMAN </span>
                        <div className="vl" />
                        <span className="modal-head-second"> Buy Key</span>
                    </Modal.Title>
                </Modal.Header>
                <form action="api/get_proxy/">
                    <Modal.Body>
                        <input className="modal-pay-input mt-5" name="email" placeholder="E-mail" type="email"/>
                        <input className="modal-pay-input mt-2" name="phone" placeholder="Phone" type="phone"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="gold center align-self-center modal-pay-input" type="submit">Pay</Button> 
                    </Modal.Footer>
                </form>
            </Modal>
            </>
        )
    }
}
