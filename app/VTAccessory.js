/**
 * Created by wangxichao on 07/03/2017.
 */
import React, { Component } from 'react';
import VTAInput from './VTAInput';
import style from './VoucherTop.css';

class VTAccessory extends Component {

    render() {

        return (
            <div className={style.accessory}>
                附单据 &nbsp;
                <VTAInput></VTAInput>
                &nbsp;张
            </div>
        )
    }
}

export default VTAccessory