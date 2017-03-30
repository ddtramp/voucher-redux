/**
 * Created by wangxichao on 28/03/2017.
 */

import React, { Component } from 'react';

import style from './Middle.css';

export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNext: false       // cache status
        }
    }
    componentDidUpdate() {
        this.props.status.summary ? this.textArea.focus() : '';

    }

    _onTextAreaChange (e) {
        this.props._onSummaryTextChange(e.target.value);
    }
    _onBlur (e) {
        if (this.state.isNext) {
            this.setState({ isNext: false });
        } else {
            this.props._onSummaryBlur()
        }
    }
    _onKeyDown (e) {
        if (e.keyCode === 9 || e.keyCode === 13) {
            e.stopPropagation();
            e.preventDefault();
            this.setState({ isNext: true });
            this.props._onSummaryKeyDown(e);
        }
    }
    render () {
        let textClass = [
            style.zyText,
            this.props.status.summary ? style.hidden : ''
        ];
        let textAreaClass = [
            style.zyEdit,
            this.props.status.summary ? '' : style.hidden

        ];

        return (

            <td className={ style.zy  + ' ' + style.bodyZy}>
                <div>
                    <div
                        className={ textClass.join(' ') }
                        onClick={ this.props._onSummaryClick }

                    >
                        { this.props.data.summary}
                    </div>
                    <div  className={ textAreaClass.join(' ') }>
                        <textarea
                            ref={(textArea) => this.textArea = textArea }
                            value={ this.props.data.summary}
                            onChange={ this._onTextAreaChange.bind(this) }
                            onBlur={ this._onBlur.bind(this) }
                            onKeyDown={ this._onKeyDown.bind(this) }
                        />
                    </div>
                </div>
            </td>

        )

    }
}