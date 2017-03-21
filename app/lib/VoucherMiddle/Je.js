/**
 * Created by wangxichao on 10/03/2017.
 */


import React, { Component } from 'react';

import style from './VoucherMiddle.css';

class Je extends Component {
    constructor(props) {
        super(props);

    }
    // componentDidUpdate () {
    //     if (this.props.isJeInputShow ) {
            // this.textInput.focus();
            // this.textInput.select();
        // }
    // }

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
     * 数字前面补0
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
            ( this.props.isJeInputShow ? style.hidden : '' )
        ];


        let jeTextareaClassName = [
            style.jeEdit,
            ( this.props.isJeInputShow ? '' : style.hidden )
        ];

        var je = this.handleJe(this.props.je);

        return (this.props.editAble ?
            <div>
                <ul
                    className={ ulClassName.join(' ') }
                    direction={ this.props.direction }
                    onClick={ this.props._jeUlClick }
                    data-currentindex = { this.props.currentIndex }
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
                    <li>{  this.props.je ? je[9] : '' }</li>
                    <li>{  this.props.je ? je[10] : ''}</li>
                </ul>
                <div className={ jeTextareaClassName.join(' ') } >
                    <input
                        direction={ this.props.direction }
                        data-currentindex = { this.props.currentIndex }
                        ref={ (textInput) => { this.textInput = textInput; } }
                        value={ this.props.je }
                        onBlur={ this.props._jeInputOnBlur }
                        onChange={ this.props._jeInputChange }
                        onKeyDown={ this.props._jeInputKeyDown }

                    />
                </div>

            </div>
                :
            <div>
                <ul className={ ulClassName.join(' ') } >
                    <li>{ (je[0] !== 'x' ) ? je[0] : '' }</li>
                    <li>{ (je[1] !== 'x' ) ? je[1] : '' }</li>
                    <li className={ style.blue }>{ (je[2] !== 'x' ) ? je[2] : '' }</li>
                    <li>{ (je[3] !== 'x' ) ? je[3] : '' }</li>
                    <li>{ (je[4] !== 'x' ) ? je[4] : '' }</li>
                    <li className={ style.blue }>{ ( je[5] !== 'x' ) ? je[5] : '' }</li>
                    <li>{ ( je[6] !== 'x' ) ? je[6] : '' }</li>
                    <li>{ ( je[7] !== 'x' ) ? je[7] : '' }</li>
                    <li className={ style.red }>{ ( je[8] !== 'x' ) ? je[8] : '' }</li>
                    <li>{  this.props.je ? je[9] : '' }</li>
                    <li>{  this.props.je ? je[10] : ''}</li>
                </ul>
            </div>
        )
    }
}

export default Je;