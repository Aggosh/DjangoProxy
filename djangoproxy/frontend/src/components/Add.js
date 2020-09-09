import React, { Component } from 'react'

export default class Add extends Component {
    render() {
        return (
            <>
            <style type="text/css">
                {`
                    .add {
                        color: #575555;
                        background-color: #1F1C1C;
                        font-family: 'Druk';
                        min-height: 100px;
                        font-size: 2em;
                    }
                }`
                }
            </style>
            <div className="add text-center">
                <p className="w-100">REKLAMA</p>
            </div>
            </>
        )
    }
}
