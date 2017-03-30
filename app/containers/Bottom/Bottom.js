/**
 * Created by wangxichao on 07/03/2017.
 */

import React , { Component } from 'react';
import { connect } from 'react-redux';
import style from './Bottom.css';

class Bottom extends Component {
    /**
     * 测试是否相等
     * @returns {boolean}
     */
    testEqual () {
        let jfje = 0,
            dfje = 0;
        this.props.data.forEach((v, i) => {
            jfje = jfje + parseFloat(v.jfje ? v.jfje : 0);
            dfje = dfje + parseFloat(v.dfje ? v.dfje : 0);
        });

        return dfje !== 0 && dfje === jfje ? true : false;
    }

    _onSave (type) {
        console.log('Save Type: ' + type);
    }

    render () {
        const { data, zdr } = this.props;
        let isValid = this.testEqual();
        let buttonClassName = [
            ( isValid ? style.buttonActive : '' )
        ];



        return (
            <div className={ style.bottom }>
                <div
                    className={ style.bottomLeft }
                >
                    制单人： { zdr.name }
                </div>
                <div className={ style.bottomRight}>
                    <button
                        className={ buttonClassName }
                        onClick={ this._onSave.bind(this, 1) }
                    >保存</button>
                    <button
                        className={ buttonClassName }
                        onClick={ this._onSave.bind(this, 2) }
                    >保存并新增</button>
                </div>
            </div>
        )
    }
}

const select = (state) => {
    return {
        data: state.data,
        zdr: state.zdr
    }
}
export default connect(select)(Bottom);