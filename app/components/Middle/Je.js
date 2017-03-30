/**
 * Created by wangxichao on 10/03/2017.
 */


import React, { Component } from 'react';

import style from './Middle.css';

class Je extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNext: false,
            change: false   // cache change status
        };

    }
    componentDidUpdate() {
        if (this.props.jeFocus && !this.state.change ) {
                this.Input.focus();
                this.Input.select();
        }
    }
    _onKeyDown (e) {
        if (e.keyCode === 9 || e.keyCode === 13) {
            e.stopPropagation();
            e.preventDefault();
             if (this.props.next ) {
                 this.setState({ isNext: true });
                 this.props.next();
             } else {
                 this.props.jeHide();
             }

        }
    }
    _onClick (e) {
        this.props.jeShow();
        setTimeout(() => {
            this.Input.focus();
            this.Input.select();
        }, 0);
    }
    _onBlur (e) {
        if (this.state.isNext) {
            this.setState({ isNext: false, change: false });
        } else {
            this.props.jeHide();
            this.setState({ change: false })
        }
    }
    _onInputChange (e) {
        var regNumber = /^\d{0,9}(\.\d{0,2})?$/g,
            v = e.target.value;
        // todo

        this.setState({ change: true });
        (regNumber.test(v)) ? this.props.jeChange(v) : '';
    }

    /**
     * 强制保留两位小数
     * @param x
     * @returns {*}
     */
    ToDecimal2 (x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return false;
        }
        var f = Math.round(x*100)/100;
        var s = f.toString();
        var rs = s.indexOf('.');
        if (rs < 0) {
            rs = s.length;
            s += '.';
        }
        while (s.length <= rs + 2) {
            s += '0';
        }
        return s;
    }

    /**
     * 数字前面补X
     * @param num {String|number}
     * @param length {Number}
     * @returns {Blob|ArrayBuffer|Array.<T>|Buffer|*|string}
     * @constructor
     */
    PrefixInteger (num, length) {
        return (Array(length).join('x') + num).slice(-length);
    }

    /**
     * 格式化金额
     * @param v {String}
     * @returns {Array}
     */
    handleJe (v) {
        if (!v) {

            return ['', '', '', '', '', '', '', '', '', '', '' ];
        }
        var value = this.ToDecimal2(Number.parseFloat(v)).toString().split('.');

        var interger = this.PrefixInteger(value[0], 9);
        var decima = value[1];

        return interger.split('').concat(decima.split(''));
    }
    render () {
        let ulClassName = [
            style.jeul,
            ( this.props.status ? style.hidden : '' )
        ];


        let jeTextareaClassName = [
            style.jeEdit,
            ( this.props.status ? '' : style.hidden )
        ];

        let je = this.handleJe(this.props.text);

        return (
            <div>
                <ul
                    className={ ulClassName.join(' ') }
                    onClick = { () => this.props.jeShow && this._onClick() }
                >
                    <li>{ (je[0] !== 'x' ) ? je[0] : '' }</li>
                    <li>{ (je[1] !== 'x' ) ? je[1] : '' }</li>
                    <li className={ style.blue }>{ (je[2] !== 'x' ) ? je[2] : '' }</li>
                    <li>{ (je[3] !== 'x' ) ? je[3] : '' }</li>
                    <li>{ (je[4] !== 'x' ) ? je[4] : '' }</li>
                    <li className={ style.blue }>{ ( je[5] !== 'x' ) ? je[5] : '' }</li>
                    <li>{ ( je[6] !== 'x' ) ? je[6] : '' }</li>
                    <li>{ ( je[7] !== 'x' ) ? je[7] : '' }</li>
                    <li className={ style.red }>{ ( je[8] !== 'x' ) ? je[8] : '' }</li>
                    <li>{  this.props.text ? je[9] : '' }</li>
                    <li>{  this.props.text ? je[10] : ''}</li>
                </ul>
                <div
                    className={ jeTextareaClassName.join(' ') }

                >
                    <input
                        ref={ (Input) => this.Input = Input }
                        value = { this.props.text }
                        onChange = { this._onInputChange.bind(this) }
                        onBlur = { this._onBlur.bind(this) }
                        onKeyDown= { this._onKeyDown.bind(this) }

                    />
                </div>

            </div>

        )
    }
}

export default Je;