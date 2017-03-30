/**
 * Created by wangxichao on 28/03/2017.
 */

import React, { Component } from 'react';
import Add from './Add';
import Del from './Del';
import Summary from './Summary';
import Subject from './Subject';
import Jfje from './Jfje';
import Dfje from './Dfje';

import style from './Middle.css';


class MBTr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ad: false
        }
    }

    _onMouseEnter () {
        this.setState({
            ad: true
        });
    }
    _onMouseLeave () {
        this.setState({
            ad: false
        })
    }
    summaryNext () {

    }
    subjectNext () {

    }
    jfjeNext () {

        this.props._onDfjeShow();
        setTimeout(() => {
            let ref = this.refs.dfje.refs.je.Input;
            ref.focus();
            ref.select();
        }, 0 );
    }
    dfjeNext () {
        // todo

    }
    render () {

        return (
            <tr
                onMouseEnter={ this._onMouseEnter.bind(this) }
                onMouseLeave={ this._onMouseLeave.bind(this) }
            >
                <Add
                    ad = { this.state.ad }
                    _onAddClick = { this.props._onAddClick }
                />
                <Summary
                    data={ this.props.data }
                    status={ this.props.status }
                    _onSummaryClick = { this.props._onSummaryClick }
                    _onSummaryTextChange = { this.props._onSummaryTextChange }
                    _onSummaryBlur = { this.props._onSummaryBlur }
                    _onSummaryKeyDown = { this.props._onSummaryKeyDown }

                    _onSubjectShow = { this.props._onSubjectShow }

                />
                <Subject
                    data={ this.props.data }
                    status={ this.props.status }
                    _onSubjectClick = { this.props._onSubjectClick }

                />
                <Jfje
                    data = { this.props.data }
                    status = { this.props.status }

                    _onJfjeShow = { this.props._onJfjeShow }
                    _onJfjeHide = { this.props._onJfjeHide }
                    _onJfjeChange = { this.props._onJfjeChange }

                    next = { this.jfjeNext.bind(this) }

                />

                <Dfje
                    ref='dfje'
                    data = { this.props.data }
                    status = { this.props.status }

                    _onDfjeShow = { this.props._onDfjeShow }
                    _onDfjeHide = { this.props._onDfjeHide }
                    _onDfjeChange = { this.props._onDfjeChange }
                />
                <Del
                    ad = { this.state.ad }
                    _onDelClick = { this.props._onDelClick }
                />
            </tr>
        )
    }
}

export default MBTr;