/**
 * Created by wangxichao on 07/03/2017.
 */

import React , { Component } from 'react';
import VMHeader from './VMHeader';
import VMBody from './VMBody';
import VMFooter from './VMFooter';


import style from './VoucherMiddle.css';

class VoucherMiddle extends Component {

    render() {

        return (
            <div className={style.voucher}>
                <VMHeader></VMHeader>
                <VMBody
                    ref="VMBody"
                    subjects={ this.props.subjects }
                    event = { this.props.event }

                    _addTr = { this.props._addTr }
                    _delTr = { this.props._delTr }

                    _voucherBodyScroll = { this.props._voucherBodyScroll }

                    _zyEditTextareaChange={ this.props._zyEditTextareaChange }
                    _zyTextClick = { this.props._zyTextClick }
                    _zyEditTextareaBlur = { this.props._zyEditTextareaBlur }
                    _zyEditTextareaKeyDown={ this.props._zyEditTextareaKeyDown }

                    _kjkmTextClick = { this.props._kjkmTextClick }

                    _jeInputChange = { this.props._jeInputChange }
                    _jeInputOnBlur = { this.props._jeInputOnBlur }
                    _jeUlClick={this.props._jeUlClick}
                    _jeInputKeyDown={ this.props._jeInputKeyDown }

                ></VMBody>
                <VMFooter
                    total = { this.props.total }
                ></VMFooter>
            </div>
        )
    }

}

export default VoucherMiddle