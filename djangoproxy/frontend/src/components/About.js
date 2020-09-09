import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>
            <style type="text/css">
                {`
                    .first-text {
                        color: #C2C1C1!important;
                        font-size: 14px;
                        font-weight: 600;
                        font-family: 'Proxima Nova';
                    }

                    .second-text {
                        color: #5B5858!important;
                        font-size: 14px;
                        font-family: 'Proxima Nova';
                    }
                }`
                }
            </style>
            <div className="py-4">
                <p className="first-text">More about our public proxy list  page</p>
                <p className="second-text">This page provides a free proxy list with public proxies scraped from many different sources. We scrape thousands of free proxies from all over the internet and check them 24/7 to make sure you only get the freshest proxies possible. Every proxy gets checked multiple times every minute and gets removed if it doesn't work anymore. Our proxy backend with over nine proxy checkers and three proxy scrapes updates the proxies every second to make sure you get the best free proxy list. This free proxy list provides free socks4, socks5 and HTTP proxies and can be downloaded in a text file format (.txt) or can be directly accessed via our proxy API.</p>
            </div>
            </>
        )
    }
}
