/**
 * Created by wangxichao on 21/03/2017.
 */
import React, { Component } from 'react';

import style from './DropDown.css';//导入


class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: null
        };

        this._newSubjectClick = this._newSubjectClick.bind(this);
    }


    componentWillMount() {

    }

    componentDidUpdate () {
        if (this.props.DropDownShow.all) {
            this.textAreaInput.focus();
        }

    }

    _newSubjectClick (e) {
        console.log(' 新增科目 click ')
    }

    render () {

        let filter = this.props.dropDownTextareaValue;
        let liData =[];
        let reg = new RegExp(filter, 'g');
        if (!filter) {
            liData = this.props.subjectList;
        } else {
            // this.subjects.map(function (v) {
            //     if (v.all.search(reg) !== -1 ) {
            //         liData.push(v);
            //     }
            // })
            liData = this.props.subjectList.filter(function (val) {
                return reg.test(val.all)
            });
        }

        return (
            <div
                className={ style.kjkmEdit  + ' '+  ( this.props.DropDownShow.all ? '' : style.hidden ) }
                style={ this.props.KjkmPositionStyles }
            >
                <textarea
                    data-currentindex={ this.props.currentIndex }
                    ref={(textAreaInput) => { this.textAreaInput = textAreaInput; }}
                    value={this.props.dropDownTextareaValue}
                    onBlur={ this.props._kjkmEditTextareaBlur }
                    onChange={ this.props._kjkmEditTextareaChange}
                    onKeyDown = { this.props._kjkmEditTextareaKeydown }


                />
                <div  className={ style.dropdown }  >
                    <ul
                        ref={(wrapper) => { this.wrapper = wrapper; }}
                    >
                        {   (filter && !liData.length ) ?
                            '没有匹配的数据'
                            :
                            liData.map((v, i)=> <li
                                key={ v.id }
                                data-subjectindex = {i}
                                data-subject={ v.subject }
                                data-subjectname = { v.name }
                                onMouseDown={this.props._liOnMouseDown}
                                className= { (i === this.props.dropDownCurrentIndex) ? style.dropDownCurrent : ''}
                            >{ v.all }</li>)
                        }
                    </ul>
                    <div className={ style.newSubject } onMouseDown={ this._newSubjectClick } >
                        <span>+</span> 新增科目
                    </div>
                </div>
            </div>
        )
    }
}


export default  DropDown;