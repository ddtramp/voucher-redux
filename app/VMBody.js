/**
 * Created by wangxichao on 07/03/2017.
 */

import React , { Component } from 'react';
import VMBTr from './VMBTr';
import style from './VoucherMiddle.css';

class VMBody extends Component {



    render() {
        var tem = [];

        for (let i = 0; i < this.props.subjects.length; i++) {
            tem.push(<VMBTr
                key={i}
                currentIndex={ i }
                subject={ this.props.subjects[i] }
                event = { this.props.event }
                editAble = { this.props.editAble }

                _addTr={ this.props._addTr }
                _delTr = { this.props._delTr }

                _zyEditTextareaChange={ this.props._zyEditTextareaChange }
                _zyTextClick = { this.props._zyTextClick }
                _zyEditTextareaBlur = { this.props._zyEditTextareaBlur }
                _zyEditTextareaKeyDown={ this.props._zyEditTextareaKeyDown }

                _kjkmTextClick = { this.props._kjkmTextClick }

                _jeInputChange = { this.props._jeInputChange }
                _jeInputOnBlur = { this.props._jeInputOnBlur }
                _jeUlClick={this.props._jeUlClick}
                _jeInputKeyDown={ this.props._jeInputKeyDown }

            ></VMBTr>);
        }

        return (
            <div
                ref="scrollDiv"
                className={ style.body }
                onScroll={ this.props._voucherBodyScroll }
            >
                <table>
                    <tbody>
                    {tem}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default VMBody