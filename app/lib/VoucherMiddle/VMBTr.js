/**
 * Created by wangxichao on 08/03/2017.
 */
import React, { Component } from 'react';
import VMBTRZy from './VMBTRZy';
import VMBTRKjkm from './VMBTRKjkm';
import VMBTRJfje from './VMBTRJfje';
import VMBTRDfje from './VMBTRDfje';

import style from './VoucherMiddle.css';

class VMBTr extends Component {
    constructor(props) {
        super(props)

        var _state = {
            direction: null,

            isActionShow: false    // 摘要 area 是否显示 添加； 贷方金额是否显示 删除
        };
        this.state = _state; // set state


        this._trMouseEnter = this._trMouseEnter.bind(this);
        this._trMouseLeave = this._trMouseLeave.bind(this);

    }

    componentDidUpdate () {
        var _this = this;
        if (this.props.event === 'change') {
          return;
        }

        if (this.props.subject.isJfInputShow) {
            setTimeout(function () {
                _this.refs.VMBTRJfje.refs.je.textInput.focus()
                _this.refs.VMBTRJfje.refs.je.textInput.select()
            }, 0)
        }
        if (this.props.subject.isDfInputShow) {
            setTimeout(function () {
                _this.refs.VMBTRDfje.refs.je.textInput.focus()
                _this.refs.VMBTRDfje.refs.je.textInput.select()
            }, 0)
        }
    }
    _trMouseEnter () {
        this.setState({ isActionShow: true });
    }
    _trMouseLeave () {
        this.setState({ isActionShow: false });
    }

    render() {

        var actionAddClassName = [
            (this.state.isActionShow ? '' : style.hidden ),

        ];

        return (
            <tr onMouseEnter={this._trMouseEnter} onMouseLeave={this._trMouseLeave}>
                <td className={ style.addStyle }>
                    <div
                        className={ style.addArea }
                    >
                        <span
                            data-currentIndex= { this.props.currentIndex }
                            className={ actionAddClassName.join(' ') }
                            onClick={ this.props._addTr }
                        >+</span>
                    </div>
                </td>
                <VMBTRZy
                    subject={ this.props.subject }
                    currentIndex= { this.props.currentIndex }
                    editAble = { this.props.editAble }

                    _zyEditTextareaChange={ this.props._zyEditTextareaChange }
                    _zyTextClick = { this.props._zyTextClick }
                    _zyEditTextareaBlur = { this.props._zyEditTextareaBlur }
                    _zyEditTextareaKeyDown={ this.props._zyEditTextareaKeyDown }

                ></VMBTRZy>
                <VMBTRKjkm
                    ref="VMBTRKjkm"
                    currentIndex= { this.props.currentIndex }
                    editAble = { this.props.editAble }

                    _liOnMouseDown = { this.props._liOnMouseDown }
                    _kjkmTextClick = { this.props._kjkmTextClick }
                    _kjkmEditTextareaBlur = { this.props._kjkmEditTextareaBlur }
                    _kjkmEditTextareaKeydown = { this.props._kjkmEditTextareaKeydown }

                    subject = { this.props.subject }
                    KjkmPositionStyles = { this.props.KjkmPositionStyles }
                ></VMBTRKjkm>
                <VMBTRJfje
                    isJeInputShow={this.props.subject.isJfInputShow }
                    currentIndex= { this.props.currentIndex }
                    editAble = { this.props.editAble }

                    ref="VMBTRJfje"
                    je={ this.props.subject.jfje }
                    direction="0"
                    _jeInputOnBlur={this.props._jeInputOnBlur}
                    _jeInputChange={ this.props._jeInputChange }
                    _jeUlClick={this.props._jeUlClick}
                    _jeInputKeyDown={ this.props._jeInputKeyDown }

                ></VMBTRJfje>
                <VMBTRDfje
                    isJeInputShow={this.props.subject.isDfInputShow }
                    currentIndex= { this.props.currentIndex }
                    editAble = { this.props.editAble }

                    ref="VMBTRDfje"
                    je={ this.props.subject.dfje }
                    direction="1"
                    _jeInputOnBlur={this.props._jeInputOnBlur}
                    _jeInputChange={ this.props._jeInputChange }
                    _jeUlClick={this.props._jeUlClick}
                    _jeInputKeyDown={ this.props._jeInputKeyDown }

                ></VMBTRDfje>
                <td className={ style.delStyle } >
                    <div
                        className={ style.delArea }
                    >
                        <span
                            data-currentIndex= { this.props.currentIndex }
                            className={ actionAddClassName.join(' ') }
                            onClick={ this.props._delTr }
                        >x</span>
                    </div>
                </td>
            </tr>
        )
    }

}

export default VMBTr;
