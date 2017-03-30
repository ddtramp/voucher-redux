/**
 * Created by wangxichao on 24/03/2017.
 */

import React, { Component } from 'react';

import style from './Top.css';

class Accessory extends Component {

    _onChange (e) {
        var v = e.target.value;
        var reg = /^\d{0,4}$/;
        reg.test(v) ? this.props.AccessoryChange(v) : '';
    }
    render () {
        var className  = [
            style.inputStyle,
            this.props.data.focus ? style.inputStyleFocused : ''
        ];
        return (
            <div className={style.accessory}>
                附单据 &nbsp;
                <div className={ className.join(' ') }>
                    <input
                        type="text"
                        value={ this.props.data.text }
                        onFocus={ this.props.AccessoryFocus }
                        onBlur={ this.props.AccessoryBlur }
                        onChange ={ this._onChange.bind(this) }
                    />
                </div>
                &nbsp;张
            </div>
        )
    }
}

export default  Accessory;