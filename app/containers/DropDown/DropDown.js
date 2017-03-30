/**
 * Created by wangxichao on 21/03/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { DropDownHide } from '../../actions/DropDown';
import { TrJfjeShow } from '../../actions/Middle/TrJfje';
import { TrSubjectChange } from '../../actions/Middle/TrSubject';

import style from './DropDown.css';//导入


class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNext: false,
            filter: '',
            liCurrent: 0,
            subjectList: []
        };

        this.filterData = [];  // cache filter data


    }

    componentDidMount() {
        // get subjects data
        fetch(`./static/data/subjects.json`)
            .then(response => response.json())
            .then(json => this.setState({subjectList: json})
            )
    }

    componentDidUpdate () {
        if (this.props.dropDown.status) {
            this.textAreaInput.focus();
        }

    }
    _onTextAreaChange (e) {
        this.setState({ filter: e.target.value });
    }
    _onTextAreaBlur () {

        if (!this.state.isNext) {
            this.wrapper.scrollTop = 0;
            this.props.dispatch(DropDownHide());
            this.setState({
                filter: '',
                liCurrent: 0
            });

        } else {
            this.setState( {isNext: false });
        }
    }
    _onTextAreaKeyDown (e) {
        // tap
        if ( e.keyCode === 9  ) {
            e.preventDefault();
            e.stopPropagation();
            this._onTextAreaBlur();
            this.setState( {isNext: true });

            this.props.dispatch(TrJfjeShow(this.props.dropDown.index)); // next
            return
        }

        // enter
        if ( e.keyCode === 13  ) {
            e.stopPropagation();
            e.preventDefault();
            this._onTextAreaBlur();
            this.setState( {isNext: true });

            this.props.dispatch(TrSubjectChange(this.props.dropDown.index, this.filterData[this.state.liCurrent]));
            this.props.dispatch(TrJfjeShow(this.props.dropDown.index)); // next
        }

        // up
        if (e.keyCode === 38) {
            if (this.state.liCurrent > 0) {
                this.setState({liCurrent: this.state.liCurrent - 1});

                this.wrapper.scrollTop = (this.state.liCurrent > 3) ? (this.state.liCurrent - 3) * 30 : 0;

            }
        }

        // down
        if (e.keyCode === 40) {

            if (this.state.liCurrent < (this.filterData.length - 1)) {
                this.setState({liCurrent: this.state.liCurrent + 1});
            }

            this.wrapper.scrollTop = (this.state.liCurrent > 3) ? (this.state.liCurrent - 3) * 30 : 0;

        }

    }
    _onLiMouseDown (e, v) {
        e.preventDefault();
        e.stopPropagation();
        this._onTextAreaBlur();
        this.setState( {isNext: true });

        this.props.dispatch(TrSubjectChange(this.props.dropDown.index, v));

        this.props.dispatch(TrJfjeShow(this.props.dropDown.index)); // next

    }

    _newSubjectClick (e) {
        console.log(' 新增科目 click ')
    }
    filter () {
        let filter = this.state.filter;
        let liData =[];
        let reg = new RegExp(filter, 'g');
        if (!filter) {
            liData = this.state.subjectList;
        } else {
            // this.subjects.map(function (v) {
            //     if (v.all.search(reg) !== -1 ) {
            //         liData.push(v);
            //     }
            // })
            liData = this.state.subjectList.filter(function (val) {
                return reg.test(val.all)
            });
        }
        this.filterData = liData;   // cache filter data
        return liData;

    }
    render () {
        const { dispatch, dropDown } = this.props;

        let dropDownClass = [
            style.kjkmEdit,
            dropDown.status ? '' : style.hidden
        ];

        let liData = this.filter();


        return (

            <div
                className={ dropDownClass.join(' ') }
                style={ {top: dropDown.position.top, left: dropDown.position.left} }
            >
                <textarea
                    ref={(textAreaInput) => { this.textAreaInput = textAreaInput; }}
                    value={ this.state.filter }
                    onChange={ this._onTextAreaChange.bind(this) }
                    onBlur={ this._onTextAreaBlur.bind(this) }
                    onKeyDown= { this._onTextAreaKeyDown.bind(this) }
                />
                <div  className={ style.dropdown }  >
                    <ul
                        ref={(wrapper) => { this.wrapper = wrapper; }}
                    >
                        {   (this.state.filter && !liData.length ) ?
                            '没有匹配的数据'
                            :
                            liData.map((v, i)=> <li
                                key={ i }
                                className= { (i === this.state.liCurrent) ? style.dropDownCurrent : ''}
                                onMouseDown={ (e) => this._onLiMouseDown(e, v) }
                            >{ v.all }</li>)
                        }
                    </ul>
                    <div
                        className={ style.newSubject }
                        onClick={ this._newSubjectClick.bind(this) }
                    >
                        <span>+</span> 新增科目
                    </div>
                </div>
            </div>
        )
    }
}
const select = (state) => {
    return {
        dropDown: state.dropDown
    }
}

export default  connect(select)(DropDown);