/**
 * Created by wangxichao on 07/03/2017.
 */

import React , { Component } from 'react';
import { connect } from 'react-redux';
import MBTrs from '../../components/Middle/MBTrs';

import { TrSummaryShow, TrSummaryHide, TrSummaryChange} from '../../actions/Middle/TrSummary';
import { TrJfjeShow, TrJfjeHide, TrJfjeChange } from '../../actions/Middle/TrJfje';
import { TrDfjeShow, TrDfjeHide, TrDfjeChange } from '../../actions/Middle/TrDfje';
import { AddTr, DelTr, SetTrs } from '../../actions/Middle/Tr.js';

import { DropDownShow, DropDownHide} from '../../actions/DropDown';

import { fetchPostsIfNeeded , fetchPosts} from '../../actions/Async/data';

import style from '../../components/Middle/Middle.css';

class MBody extends Component {
    componentDidMount() {
        let data = this.props.data;
        let url = this.props.url;
        if (data && data.length !== 0) {
            this.props.dispatch(SetTrs(data));
            return ;
        }
        if (url) {
            this.props.dispatch(fetchPostsIfNeeded(url));
            return;
        }

    }

    _onScroll (e) {
        let index = this.props.dropDown.index,
            scrollDiv = this.refs.scrollDiv;

        if ( this.props.dropDown.status) {
            let distance = (parseInt(index) * 61);

            if (scrollDiv.scrollTop > distance || (scrollDiv.scrollTop < (parseInt(index) + 1 - 4) * 61 ) ) {
             // hide
                this.props.dispatch(DropDownHide());
            } else {
               this.props.dispatch( DropDownShow(index, {
                       left: this.props.dropDown.position.left,
                       top: (scrollDiv.offsetTop + distance - scrollDiv.scrollTop)
                   }));
            }
        }
    }
    _onSummaryClick ( index) {
        this.refs.scrollDiv.scrollTop = (index - 3) * 61;
        this.props.dispatch(TrSummaryShow(index));
    }
    _onSubjectClick (e, index) {
        let target = e.target;
        this.refs.scrollDiv.scrollTop = (index - 3) * 61;
        this.props.dispatch(DropDownShow(index, {left: target.offsetLeft, top: (target.offsetTop - this.refs.scrollDiv.scrollTop)}));
    }
    _onSummaryKeyDown (e, index) {
        let target = e.target;

        this.props.dispatch(TrSummaryHide(index));

        this.props.dispatch(DropDownShow(index, {left: e.target.offsetLeft + 200, top: (target.offsetTop - this.refs.scrollDiv.scrollTop)}));

    }
    render() {
        const { dispatch, data, status } = this.props;

        return (
            <div
                ref="scrollDiv"
                className={ style.body }
                onScroll={ this._onScroll.bind(this) }
            >
                <table>
                    <MBTrs
                        data= { data }
                        status={ status }
                        _onSummaryClick={(index) => { this._onSummaryClick(index) }}
                        _onSummaryTextChange = {(index, text) => dispatch(TrSummaryChange(index, text))}
                        _onSummaryBlur = { (index) => dispatch(TrSummaryHide(index))}
                        _onSummaryKeyDown = { (e, index) => this._onSummaryKeyDown(e, index) }

                        _onSubjectClick = { (e, index) => this._onSubjectClick(e, index) }

                        _onJfjeShow = { (index) => dispatch(TrJfjeShow(index)) }
                        _onJfjeHide = { (index) => dispatch(TrJfjeHide(index)) }
                        _onJfjeChange = { (index, text) => dispatch(TrJfjeChange(index, text))}

                        _onDfjeShow = { (index) => dispatch(TrDfjeShow(index)) }
                        _onDfjeHide = { (index) => dispatch(TrDfjeHide(index)) }
                        _onDfjeChange = { (index, text) => dispatch(TrDfjeChange(index, text)) }

                        _onAdd= {(index, tr) => dispatch(AddTr(index, tr))}
                        _onDel= {(index) => dispatch(DelTr(index))}
                    />
                </table>
            </div>
        )
    }

}
function select (state) {
    return {
        data: state.data,
        status: state.status,
        dropDown: state.dropDown
    }
}


export default connect(select)(MBody);