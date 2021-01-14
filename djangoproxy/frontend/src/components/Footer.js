import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
            <style type="text/css">
                {`
                    footer {
                        background-color: #1F1C1C;
                        height: 90px;
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
                <div className="row mx-0">
                    <p className="my-3 col-9">Copyright © 2020 - WhiteHats</p>
                    <a className="my-3 col" href="//freekassa.ru/"><img src="//www.free-kassa.ru/img/fk_btn/31.png" title="Приём оплаты на сайте картами" /></a>
                </div>
            </footer>
            </>
        )
    }
}
