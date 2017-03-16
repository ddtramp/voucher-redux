/**
 * Created by wangxichao on 07/03/2017.
 */
import React, { Component } from 'react';

import VTNumber from './VTNumber';
import VTDate from './VTDate';
import VTAccessory from './VTAccessory';

import style from './VoucherTop.css';

class VoucherTop extends Component {

    render() {

        return (
            <div className={style.outside}>
                <VTNumber></VTNumber>
                <VTDate></VTDate>
                <VTAccessory></VTAccessory>
            </div>
        )
    }

}

export  default VoucherTop