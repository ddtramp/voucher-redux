/**
 * Created by wangxichao on 27/03/2017.
 */

import React, { Component } from 'react';
import MBTr from "./MBTr";

import style from './Middle.css';

class MBTrs extends Component {
    constructor(props) {
        super(props);



    }

    componentWillMount() {
        // init default tr data
        this.props._onAdd(0, {});
        this.props._onAdd(1, {});
        this.props._onAdd(2, {});
        this.props._onAdd(3, {});
    }
    componentDidMount() {

    }

    render () {

        return (
            <tbody>
                {
                    this.props.data.map((d, index) =>
                        <MBTr
                            key={ index }
                            data={ d }
                            status={ this.props.status[index]}

                            _onSummaryClick={ () => this.props._onSummaryClick(index) }
                            _onSummaryTextChange={(text) => this.props._onSummaryTextChange(index, text)}
                            _onSummaryBlur = { () => this.props._onSummaryBlur(index) }
                            _onSummaryKeyDown = { (e) => this.props._onSummaryKeyDown(e, index) }

                            _onSubjectClick = { (e) => this.props._onSubjectClick(e, index) }

                            _onJfjeShow = { () => this.props._onJfjeShow(index) }
                            _onJfjeHide = { () => this.props._onJfjeHide(index) }
                            _onJfjeChange = { (text) => this.props._onJfjeChange(index, text) }

                            _onDfjeShow = { () => this.props._onDfjeShow(index) }
                            _onDfjeHide = { () => this.props._onDfjeHide(index) }
                            _onDfjeChange = { (text) => this.props._onDfjeChange(index, text) }

                            _onAddClick={ () => this.props._onAdd(index, {}) }
                            _onDelClick={ () => this.props._onDel(index) }
                        />
                    )
                }
            </tbody>



        )
    }
}

export default MBTrs;