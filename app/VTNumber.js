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
                <VTNInput
                    v = { this.props.v }
                    focus = { this.props.focus }
                    _topNoFocus = { this.props._topNoFocus }
                    _topNoBlur = { this.props._topNoBlur }
                    _topNoChange = { this.props._topNoChange }

                ></VTNInput>
                &nbsp;号
            </div>
        )
    }
}

export default VTNumber
