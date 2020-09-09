import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
            <style type="text/css">
                {`
                    footer {
                        background-color: #1F1C1C;
                        height: 70px;
                    }

                    footer p{
                        text-align: center;
                        font-size: 12px;
                        color: #676767;
                        line-height: 55px;
                        font-family: 'Roboto';
                    }
                }`
                }
            </style>
            <footer className="mt-auto w-100">
                <p>Copyright © 2020 - WhiteHats</p>
            </footer>
            </>
        )
    }
}
