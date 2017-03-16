/**
 * Created by wangxichao on 08/03/2017.
 */
import React, { Component } from 'react';

import style from './VoucherMiddle.css';

class VMBTRZy extends Component {
    constructor(props) {
        super(props);

        this.textAreaInput = null;

    }
    componentDidUpdate () {
        if (this.props.subject.zyTextareaShow) {
            this.textAreaInput.focus();
        }

    }

    render () {

        return (
            <td className={ style.zy  + ' ' + style.bodyZy}>
                <div>
                    <ZyText
                        summary={this.props.subject.summary}
                        className={ this.props.subject.zyTextareaShow ? style.hidden : '' }
                        currentIndex= { this.props.currentIndex }
                        _zyTextClick = { this.props._zyTextClick }

                    ></ZyText>
                    <div  className={ style.zyEdit  + ' '+  ( this.props.subject.zyTextareaShow ? '' : style.hidden ) }>
                        <textarea
                            data-currentIndex= { this.props.currentIndex }
                            ref={(textAreaInput) => { this.textAreaInput = textAreaInput; }}
                            value={ this.props.subject.summary }
                            onKeyDown={ this.props._zyEditTextareaKeyDown }
                            onChange={ this.props._zyEditTextareaChange }
                            onBlur={ this.props._zyEditTextareaBlur }
                        />
                    </div>
                </div>
            </td>
        )
    }

}
/**
 * 摘要显示
 */
class ZyText extends Component {

    render () {

        return (
            <div
                className={ style.zyText + ' ' + this.props.className }
                onClick={this.props._zyTextClick}
                data-currentIndex= { this.props.currentIndex }

            >
                { this.props.summary }
            </div>
        )
    }
}

export default VMBTRZy
