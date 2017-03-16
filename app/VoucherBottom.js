/**
 * Created by wangxichao on 07/03/2017.
 */

import React , { Component } from 'react';

import style from './VoucherBottom.css';

class VoucherBottom extends Component {

    render () {
        var buttonClassName = [
            ( this.props.isValid ? style.buttonActive : '' )
        ];

        return (
            <div className={ style.bottom }>
                <div
                    className={ style.bottomLeft }
                    data-zdrid={ this.props.zdr.id }>
                    制单人： { this.props.zdr.name }
                </div>
                <div className={ style.bottomRight}>
                    <button
                        className={ buttonClassName }
                        onClick={ this.props._bottomSave.bind(this, 1) }
                    >保存</button>
                    <button
                        className={ buttonClassName }
                        onClick={ this.props._bottomSave.bind(this, 2) }
                    >保存并新增</button>
                </div>
            </div>
        )
    }
}

export default VoucherBottom