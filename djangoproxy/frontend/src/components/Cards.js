import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        return (
            <>
            <style type="text/css">
                {`

                .card-header {
                    font-family: 'Druk';
                    color: #B7B6B6;
                    font-size: 14px;
                }

                .card {
                    background-color: #1F1C1C!important;
                    padding-left: 0px!important;
                    padding-right: 0px!important;
                }

                .card-header{
                    background-color: transparent!important;
                }

                .my-btn {
                    background-color: #F8C25C;
                    width: 100%;
                }

                .my-btn p{
                    color: #242121;
                    font-size: 14px;
                    font-family: 'Proxima Nova';
                    text-align: center;
                    padding-top: 15px;
                    font-weight: 600;
                }

                .card-text {
                    color: #C0BFBF;
                    font-family: 'Druk';
                    font-size: 3em;
                    text-align: center;
                    vertical-align: middle;
                    min-height: 200px;
                    line-height: 200px; 
                }

                @media only screen and (min-width: 992px) {
                    .first-card {
                        padding-left: 0!important;
                    }

                    .last-card {
                        padding-right: 0!important;
                    }

                    .card {
                        max-width: 250px;
                    }

                    .inside-card-middle{
                        margin: auto;
                    }

                    .inside-card-last{
                        margin-left: auto;
                        margin-right: 0;
                    }
                }


                @media only screen and (max-width: 992px) {
                    .first-card, .middle-card, .last-card {
                        padding-left: 0!important;
                        padding-right: 0!important;
                    }

                }`
                }
            </style>
            <div className="row px-3 my-4">
                <div className="col-lg-4 first-card">
                    <div className="card text-white bg-dark mb-3 col-lg-12">
                        <div className="card-header">7 DAYS PREMIUM</div>
                        <div className="card-body">
                            <p className="card-text">3$</p>
                        </div>
                        <div className="my-btn">
                            <p>BUY</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 middle-card">
                    <div className="card text-white bg-dark mb-3 col-lg-12 inside-card-middle">
                        <div className="card-header">30 DAYS PREMIUM</div>
                        <div className="card-body">
                            <p className="card-text">5$</p>
                        </div>
                        <div className="my-btn">
                            <p>BUY</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 last-card">
                    <div className="card text-white bg-dark mb-3 col-lg-12 inside-card-last">
                        <div className="card-header">90 DAYS PREMIUM</div>
                        <div className="card-body">
                            <p className="card-text">12$</p>
                        </div>
                        <div className="my-btn">
                            <p>BUY</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
