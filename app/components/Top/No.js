/**
 * Created by wangxichao on 24/03/2017.
 */
import React, { Component } from 'react';

import style from './Top.css';

class No extends Component {

    _onChange (e) {
        var v = e.target.value;
        var reg = /^\d{0,3}$/;
        reg.test(v) ? this.props.NoChange(v) : '';
    }
    render () {


        var className  = [
            style.inputStyle,
            this.props.data.focus ? style.inputStyleFocused : ''
        ];

        return (
            <div className={ style.number }>
                记字第&nbsp;
                <div className={ className.join(' ') }>
                    <input
                        type="text"
                        value={ this.props.data.text }
                        onFocus={ this.props.NoFocus }
                        onBlur={ this.props.NoBlur }
                        onChange= { this._onChange.bind(this) }
                    />
                </div>
                &nbsp;号
            </div>
        )
    }
}

export default No;