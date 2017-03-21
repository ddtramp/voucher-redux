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
                <VTAInput
                    v = { this.props.v }
                    focus = { this.props.focus }
                    _topAccessoryFocus = { this.props._topAccessoryFocus }
                    _topAccessoryBlur = { this.props._topAccessoryBlur }
                    _topAccessoryChange = { this.props._topAccessoryChange }

                ></VTAInput>
                &nbsp;张
            </div>
        )
    }
}

export default VTAccessory