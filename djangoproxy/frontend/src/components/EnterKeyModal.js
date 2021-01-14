import React, { Component } from 'react';
import {render} from 'react-dom';
import { Modal, Button} from 'react-bootstrap';

class Example extends React.Component {
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

                    .modal-key-input {
                        width: 100%;
                        margin-bottom: 50px;
                        border: 2px solid #F8C25C;
                        border-radius: 2px;
                        height: 35px;
                        text-align:center;
                    }

                    .hidden-checkbox{
                        visibility: hidden;
                    }

                    `}
                </style>
				<Button className="col-auto align-self-center" variant="gold" onClick={this.handleShow}>Login</Button>

				<Modal className="modal" show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
					<Modal.Header closeButton>
						<Modal.Title>
                            <span className="modal-head-first">PROXYMAN </span>
                            <div className="vl" />
                            <span className="modal-head-second"> Login</span>
                        </Modal.Title>
					</Modal.Header>
                    <form action="api/get_proxy/">
                        <Modal.Body>
                            <p className="modal-body-text-first" align="center">Your Premium Key</p>
                            <input className="modal-key-input" name="key"/>
                            <p className="modal-body-text-second" align="center">Write or paste your Premium Key from the clipboard<br />
                            and press the "Login" (or Enter) button to log in</p>
                            <input className="hidden-checkbox" type="checkbox" name="https" defaultChecked />
                            <input className="hidden-checkbox" type="checkbox" name="http" defaultChecked />
                            <input className="hidden-checkbox" type="checkbox" name="socks" defaultChecked />
                            <input className="hidden-checkbox" type="checkbox" name="socks5" defaultChecked />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="cancel" onClick={this.handleClose}>Cancel</Button>
                            <Button variant="gold" type="submit">login</Button> 
					    </Modal.Footer>
                    </form>
				</Modal>
			</>
		);
	}
}

export default () => (<div><Example /></div>)