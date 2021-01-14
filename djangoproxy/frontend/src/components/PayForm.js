import React, { Component } from 'react';

import md5 from 'md5';

export default class PayForm extends Component {
    render() {

        function load_form() {
            var form = new FK();
            form.loadWidget({
            merchant_id: '225155',
            amount: '10',
            order_id: '1',
            email: 'bkmzilia@gmail.com',
            phone: '+30507399724',
            sign: md5('225155.00mlzf7s'),
            us_user: 1,
            us_desc: 'Test',
            });
        }


        return (
            <a href="#" onClick={load_form}>Оплатить</a>
        )
    }
}
