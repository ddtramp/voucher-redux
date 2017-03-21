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
                <VTNumber
                    v = { this.props.voucherInfo.No }
                    focus = { this.props.voucherInfo.NoFocus }
                    _topNoFocus = { this.props._topNoFocus }
                    _topNoBlur = { this.props._topNoBlur }
                    _topNoChange = { this.props._topNoChange }

                ></VTNumber>
                <VTDate
                    ref="vtDate"
                    v = { this.props.voucherInfo.date }
                    _topDateChange = { this.props._topDateChange }

                ></VTDate>
                <VTAccessory
                    v = { this.props.voucherInfo.accessory }
                    focus = { this.props.voucherInfo.accessoryFocus }
                    _topAccessoryFocus = { this.props._topAccessoryFocus }
                    _topAccessoryBlur = { this.props._topAccessoryBlur }
                    _topAccessoryChange = { this.props._topAccessoryChange }

                ></VTAccessory>
            </div>
        )
    }

}

export  default VoucherTop