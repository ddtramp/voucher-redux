/**
 * Created by wangxichao on 07/03/2017.
 */
import React, { Component } from 'react';
import VTNInput from './VTNInput';

import style from './VoucherTop.css';

class VTNumber extends Component {

    render() {

        return (
            <div className={ style.number }>
                记字第&nbsp;
                <VTNInput></VTNInput>
                &nbsp;号
            </div>
        )
    }
}

export default VTNumber
