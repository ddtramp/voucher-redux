//Greeter,js
import React, {Component} from 'react';
import VoucherTop from './VoucherTop';
import VoucherMiddle from './VoucherMiddle';
import VoucherBottom from './VoucherBottom';

import style from './Voucher.css';//导入

class Voucher extends Component{
    constructor(props) {
        super(props);


        this.defaultSubject =  {
            summary: 'lalala...add',      // 摘要
            subject: null,      // 科目代码
            name: '',
            type: null,
            jfje: '',    // 借方金额
            dfje: '',    // 贷方金额

            zyTextareaShow: false,       // 摘要是否处于编辑状态
            isJfInputShow: false,       // 是否处于编辑状态
            isDfInputShow: false,       // { String | Number }
        };

        var state = {
            subjects: [ ],
            zdr: {
                id: '123321',
                name: 'jack wang'
            },
            total: {
                jfje: null,
                dfje: null,
                capital: null
            },
            currentEdit: {
                index: this.props.currentEdit
            },

            isDropDownShow: false,  // DropDown hide or show
            dropDownTextareaValue: '',  // DropDown textarea value
            KjkmPositionStyles: {},  // DropDown position
            dropDownLength: null,   // 总条目
            dropDownCurrentIndex: 0, // 当前条目
            isValid: false,          // 是否平衡; when Je Component input change
            event: null              // { String } keyDown、 click、 change； for je focus and select

        };
        state.total = this.countTotal(state.subjects);
        this.state = state;

        this._voucherBodyScroll = this._voucherBodyScroll.bind(this);
        this._addTr = this._addTr.bind(this);
        this._delTr = this._delTr.bind(this);

        this._zyEditTextareaChange = this._zyEditTextareaChange.bind(this);
        this._zyTextClick = this._zyTextClick.bind(this);
        this._zyEditTextareaBlur = this._zyEditTextareaBlur.bind(this);
        this._zyEditTextareaKeyDown = this._zyEditTextareaKeyDown.bind(this);

        this._kjkmTextClick = this._kjkmTextClick.bind(this);
        this._kjkmEditTextareaChange = this._kjkmEditTextareaChange.bind(this);
        this._kjkmEditTextareaBlur = this._kjkmEditTextareaBlur.bind(this);
        this._kjkmEditTextareaKeydown = this._kjkmEditTextareaKeydown.bind(this);
        this._liOnMouseDown = this._liOnMouseDown.bind(this);

        this._jeInputChange = this._jeInputChange.bind(this);
        this._jeInputOnBlur = this._jeInputOnBlur.bind(this);
        this._jeUlClick = this._jeUlClick.bind(this);
        this._jeInputKeyDown = this._jeInputKeyDown.bind(this);

        this._bottomSave = this._bottomSave.bind(this);

    }

    componentWillMount() {
        // TODO get subject data async

        this.subjects = [
            { id: 1, subject: '1001', name: '库存现金', all: '1001 库存现金', type: 0},
            { id: 2, subject: '100201', name: '工商银行', all: '100201 工商银行', type: 0},
            { id: 3, subject: '100202', name: '招商银行', all: '100202 招商银行', type: 0},
            { id: 4, subject: '100203', name: '上海银行', all: '100203 上海银行', type: 0},
            { id: 5, subject: '100204', name: '浦发银行', all: '100204 浦发银行', type: 0},
            { id: 6, subject: '1012', name: '其他货币基金', all: '1012 其他货币基金', type: 0},
            { id: 7, subject: '110101', name: '短期投资_股票', all: '110101 短期投资_股票', type: 0},
            { id: 8, subject: '110102', name: '短期投资_债券', all: '110102 短期投资_债券', type: 0},
            { id: 9, subject: '110103', name: '短期投资_基金', all: '110103 短期投资_基金', type: 0},
            { id: 10, subject: '1121', name: '应收股票', all: '1121 应收股票', type: 0},
            { id: 11, subject: '1122', name: '应收账款', all: '1122 应收账款', type: 0},
            { id: 12, subject: '1123', name: '预付账款', all: '1123 预付账款', type: 0},
            { id: 13, subject: '1131', name: '应收股利', all: '1131 应收股利', type: 0},
            { id: 14, subject: '1132', name: '应收利息', all: '1132 应收利息', type: 0},
            { id: 15, subject: '1121', name: '其他应收款', all: '1121 其他应收款', type: 0},
            { id: 16, subject: '1401', name: '材料采购', all: '1401 材料采购', type: 0}

        ];

        var defauleSubjects = [];
        var firstRow = Object.assign({}, this.defaultSubject);
        firstRow.zyTextareaShow = true;
        defauleSubjects.push(firstRow);
        defauleSubjects.push(Object.assign({}, this.defaultSubject));
        defauleSubjects.push(Object.assign({}, this.defaultSubject));
        defauleSubjects.push(Object.assign({}, this.defaultSubject));

        this.setState({
            subjects:  defauleSubjects,
            dropDownLength: this.subjects.length
        });
    }
    _voucherBodyScroll (e) {
        var index = this.state.currentEdit.index,
            scrollDiv = this.refs.VoucherMiddle.refs.VMBody.refs.scrollDiv;

        if ( this.state.isDropDownShow && this.state.currentEdit.index ) {
            var distance = (parseInt(this.state.currentEdit.index ) * 61);

            if (scrollDiv.scrollTop > distance || (scrollDiv.scrollTop < (parseInt(index) + 1 - 4) * 61 ) ) {
                this.setState(function (prevState, props) {
                    let subjects = prevState.subjects.slice(0);

                    subjects[index].zyTextareaShow = false;
                    subjects[index].subjectTextareaShow = false;

                    return {
                        subjects: subjects ,
                        currentEdit: { index: null },
                        isDropDownShow: false,
                        KjkmPositionStyles: {}
                    }
                });
            } else {
                this.setState(function (prevState, props) {
                    return {
                        KjkmPositionStyles: {
                            left: prevState.KjkmPositionStyles.left,
                            top: (scrollDiv.offsetTop + distance - scrollDiv.scrollTop)
                        }
                    }
                });
            }
        }

    }

    _zyTextClick (e) {
        var index = e.target.getAttribute('data-currentindex');
        this.setState(function (prevState, props) {
            let subjects = prevState.subjects.slice(0);

            subjects[index].zyTextareaShow = true;
            return {
                subjects: subjects ,
                currentEdit: { index: index }
            }
        });

    }
    _zyEditTextareaChange (e) {
        var value =  this.state.summary = e.target.value;
        var index = e.target.getAttribute('data-currentindex');
        this.setState(function (prevState, props) {
            let subjects = prevState.subjects.slice(0);
            subjects[index].summary = value;

            return { subjects: subjects }
        });
    }
    _zyEditTextareaKeyDown (e) {
        if ( e.keyCode === 9 || e.keyCode === 13 ) {
            e.stopPropagation();
            e.preventDefault();
            var index = e.target.getAttribute('data-currentindex');
            var offsetTop = e.target.offsetTop,
                offsetLeft = e.target.offsetLeft;
            var scrollDiv = this.refs.VoucherMiddle.refs.VMBody.refs.scrollDiv;

            this.setState(function (prevState, props) {
                return {
                    isDropDownShow: true,
                    KjkmPositionStyles: {
                        top: offsetTop - scrollDiv.scrollTop,
                        left: (offsetLeft + 200)
                    }
                }
            });
            return false;
        }

    }
    _zyEditTextareaBlur (e) {
        var index = e.target.getAttribute('data-currentindex');
        this.setState(function (prevState, props) {
            let subjects = prevState.subjects.slice(0);
            subjects[index].zyTextareaShow = false;
            return {
                subjects: subjects
            }
        });

    }

    _kjkmTextClick (e) {
        var _this = this;
        var index = e.target.getAttribute('data-currentindex');
        var scrollDiv = this.refs.VoucherMiddle.refs.VMBody.refs.scrollDiv;

        var offsetTop = e.target.offsetTop,
            offsetLeft = e.target.offsetLeft;
        _this.setState(function (prevState, props) {
            return {
                isDropDownShow: true,
                currentEdit: { index: index },
                KjkmPositionStyles: {
                    top: offsetTop - scrollDiv.scrollTop,
                    left: offsetLeft
                }

            }
        });
    }
    _kjkmEditTextareaChange (e) {
        console.log('textarea value change: ' + e.target.value);
        this.setState({
            dropDownTextareaValue: e.target.value
        });

    }
    _kjkmEditTextareaBlur (e) {
        var index = e.target.getAttribute('data-currentindex');
        this.refs.DropDown.wrapper.scrollTop = 0;   // set to top
        this.setState(function (prevState, props) {
            return {
                isDropDownShow: false,
                dropDownTextareaValue: '',
                dropDownCurrentIndex: 0
        }
        });
    }
    _kjkmEditTextareaKeydown (e) {
        if ( e.keyCode === 9  ) {
            e.stopPropagation();
            e.preventDefault();
            var index = e.target.getAttribute('data-currentindex');
            this.setState(function (prevState, props) {
                let subjects = prevState.subjects.slice(0);
                subjects[index].isJfInputShow = true;
                subjects[index].isDfInputShow = false;

                return {
                    subjects: subjects,
                    isDropDownShow: false,
                    event: 'keyDown'
                }
            });
            return false;
        }
        if ( e.keyCode === 13  ) {
            e.stopPropagation();
            e.preventDefault();
            var _this = this;
            var index = e.target.getAttribute('data-currentindex');
            this.setState(function (prevState, props) {
                let subjects = prevState.subjects.slice(0);
                subjects[index].isJfInputShow = true;
                subjects[index].isDfInputShow = false;
                subjects[index].subject = _this.subjects[_this.state.dropDownCurrentIndex].subject;
                subjects[index].name = _this.subjects[_this.state.dropDownCurrentIndex].name;;

                return {
                    subjects: subjects,
                    isDropDownShow: false,
                    event: 'keyDown'
                }
            });
            return false;
        }

        if (e.keyCode === 38) {
            var wrapper = this.refs.DropDown.wrapper;

            if ( this.state.dropDownCurrentIndex === 0 ) {
                return false;
            }
            wrapper.scrollTop = (this.state.dropDownCurrentIndex - 1 ) * 30;

            this.setState(function (prevState, props) {

                return {
                    dropDownCurrentIndex: prevState.dropDownCurrentIndex - 1
                }
            });
        }

        if (e.keyCode === 40) {
            var wrapper = this.refs.DropDown.wrapper;

            if ( this.state.dropDownCurrentIndex === (this.state.dropDownLength - 1)) {
                return false;
            }
            if ( (this.state.dropDownLength - this.state.dropDownCurrentIndex ) > 4 ) {
                wrapper.scrollTop = (this.state.dropDownCurrentIndex + 1 ) * 30;
            }

            this.setState(function (prevState, props) {
                return {
                    dropDownCurrentIndex: prevState.dropDownCurrentIndex + 1
                }
            });

        }
    }
    _liOnMouseDown (e) {

        var index = this.state.currentEdit.index;   // 当前的 tr index
        var subject = e.target.getAttribute('data-subject');
        var name = e.target.getAttribute('data-subjectname');
        this.refs.DropDown.wrapper.scrollTop = 0;   // set to top

        this.setState(function (prevState, props) {
            let subjects = prevState.subjects.slice(0);
            subjects[index].subject = subject;
            subjects[index].name = name;
            subjects[index].isJfInputShow = true;
            subjects[index].isDfInputShow = false;
            return {
                subjects: subjects,
                isDropDownShow: false,
                event: 'keyDown'
            }
        });
    }

    /**
     * 金额转大写
     * @param num {number}
     * @returns {string}
     */
    DX (num) {
        var strOutput = "";
        var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
        num += "00";
        var intPos = num.indexOf('.');
        if (intPos >= 0)
            num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
        strUnit = strUnit.substr(strUnit.length - num.length);
        for (var i=0; i < num.length; i++)
            strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1);
        return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
    }

    /**
     * 如果平衡，转换大写
     * @param total { Object }
     * @returns { Object }
     */
    toCapital (total) {
        if ((total.jfje) && (total.jfje === total.dfje)) {
            total.capital = this.DX(total.jfje);
        } else {
            total.capital = '';
        }

        return total;
    }
    countTotal (subjects) {
        var total = {
            jfje: 0,
            dfje: 0,
            capital: null
        };

        for (let [index, subject] of subjects.entries()) {
            total.jfje = total.jfje + (parseFloat(subject.jfje) ? parseFloat(subject.jfje) : 0);
            total.dfje = total.dfje + (parseFloat(subject.dfje) ? parseFloat(subject.dfje) : 0);
        }
        return this.toCapital(total);
    }

    _jeUlClick (e) {
        var _this = this;
        var direction = e.currentTarget.getAttribute('direction'),
            index = e.currentTarget.getAttribute('data-currentindex');

        if ( direction - 0) { // 贷方
            this.setState(function (prevState, props) {
                let subjects = prevState.subjects.slice(0);
                subjects[index].isJfInputShow = false;
                subjects[index].isDfInputShow = true;
                return {
                    subjects: subjects,
                    currentEdit: { index: index },
                    event: 'click'

                }
            });
            // setTimeout(function (){
            //     _this.refs.VMBTRDfje.refs.je.textInput.focus()
            //     _this.refs.VMBTRDfje.refs.je.textInput.select()
            // }, 0)
        } else {    // 借方
            this.setState(function (prevState, props) {
                let subjects = prevState.subjects.slice(0);
                subjects[index].isJfInputShow = true;
                subjects[index].isDfInputShow = false;

                return {
                    subjects: subjects,
                    currentEdit: { index: index },
                    event: 'click'
                }
            });
            // setTimeout(function () {
            //     _this.refs.VMBTRJfje.refs.je.textInput.focus()
            //     _this.refs.VMBTRJfje.refs.je.textInput.select()
            // }, 0)

        }
    }
    _jeInputChange (e) {
        var v = e.target.value;
        var direction = e.target.getAttribute('direction');
        var regNumber = /^\d{0,9}(\.\d{0,2})?$/g;   // 验证{0-9}.{0-2}数字
        var index = e.target.getAttribute('data-currentindex');
        var _this = this;
        this.setState(function (prevState, props) {

            let subjects = prevState.subjects.slice(0);

            if (regNumber.test(v)) {
                if ( direction - 0) {
                    subjects[index].jfje = '';
                    subjects[index].dfje = v;
                } else {
                    subjects[index].jfje = v;
                    subjects[index].dfje = '';
                }
            }
            let total = _this.countTotal(subjects);
            return {
                subjects: subjects,
                total: total,
                isValid: total.capital ? true : false,
                event: 'change'
            }

        });
    }
    /**
     * 控制金额 component 是否可编辑
     * @param e
     * @private
     */
    _jeInputOnBlur (e) {

        var direction = e.currentTarget.getAttribute('direction'),
            index = e.currentTarget.getAttribute('data-currentindex');
        if ( direction - 0) { // 贷方
            this.setState(function (prevState, props) {
                let subjects = prevState.subjects.slice(0);
                subjects[index].isDfInputShow = false;
                return {
                    subjects: subjects
                }
            });
        } else { // 借方
            this.setState(function (prevState, props) {
                let subjects = prevState.subjects.slice(0);
                subjects[index].isJfInputShow = false;
                return {
                    subjects: subjects
                }
            });
        }
    }
    _jeInputKeyDown (e) {
        if ( e.keyCode === 9 || e.keyCode === 13 ) {
            e.stopPropagation();
            e.preventDefault();
            var index = e.target.getAttribute('data-currentindex'),
                direction = e.target.getAttribute('direction');
            if ( direction === '1') {
               if ( (this.state.subjects.length - 1) === parseInt(index)) {
                   return false;
               }

                this.setState(function (prevState, props) {
                    let subjects = prevState.subjects.slice(0);
                    subjects[index].isJfInputShow = false;
                    subjects[index].isDfInputShow = false;

                    subjects[(parseInt(index) + 1)].zyTextareaShow = true;
                    return {
                        subjects: subjects ,
                        currentEdit: { index: (parseInt(index) + 1) },
                        event: 'keyDown'
                    }
                });

            } else {
                this.setState(function (prevState, props) {
                    let subjects = prevState.subjects.slice(0);
                    subjects[index].isJfInputShow = false;
                    subjects[index].isDfInputShow = true;

                    return {
                        subjects: subjects,
                        isDropDownShow: false,
                        event: 'keyDown'
                    }
                });
            }

            return false;
        }
    }
    _addTr (e) {
        var index = e.target.getAttribute('data-currentindex'),
            _this = this;

        this.setState(function (prevState, props) {
            let subjects = prevState.subjects.slice(0);
            let newSubject = Object.assign({}, _this.defaultSubject);
            newSubject.zyTextareaShow = true;
            subjects.splice(index, 0, newSubject);

            return {
                subjects: subjects,
                currentEdit: { index: index }
            }
        });
    }
    _delTr (e) {
        var index = e.target.getAttribute('data-currentindex'),
            _this = this;
        this.setState(function (prevState, props) {
            let subjects = prevState.subjects.slice(0);
            subjects.splice(index, 1);
            // 不允许小于4条
            if (subjects.length < 4) {
                subjects.push(Object.assign({}, _this.defaultSubject));
            }
            let total = _this.countTotal(subjects);
            return {
                subjects: subjects,
                total: total
            }
        });
    }
    /**
     * save data to save
     * @param n {Number} 1: save; 2: save and new voucher
     * @private
     */
    _bottomSave (n, e) {
        // todo
        if ( this.state.isValid) {
            if ( n === 1) {
                console.log(n);

            } else {
                console.log(n);

            }
        }
    }
    render() {
        return (
            <div className={style.voucher}>
                <VoucherTop/>
                <VoucherMiddle
                    ref="VoucherMiddle"
                    subjects={ this.state.subjects }
                    total = { this.state.total }
                    event = { this.state.event }

                    _addTr={ this._addTr }
                    _delTr = { this._delTr }

                    _voucherBodyScroll = { this._voucherBodyScroll }
                    _zyEditTextareaChange={ this._zyEditTextareaChange }
                    _zyTextClick = { this._zyTextClick }
                    _zyEditTextareaBlur = { this._zyEditTextareaBlur }
                    _zyEditTextareaKeyDown = { this._zyEditTextareaKeyDown }

                    _kjkmTextClick = { this._kjkmTextClick }

                    _jeInputChange={ this._jeInputChange }
                    _jeInputOnBlur = { this._jeInputOnBlur }
                    _jeUlClick={this._jeUlClick}
                    _jeInputKeyDown={ this._jeInputKeyDown }

                />
                <VoucherBottom
                    zdr = { this.state.zdr }
                    isValid = { this.state.isValid }
                    _bottomSave={ this._bottomSave }
                />

                <DropDown
                    ref="DropDown"
                    subjects = { this.subjects }
                    currentIndex= { this.state.currentEdit.index }
                    isDropDownShow={ this.state.isDropDownShow }
                    dropDownCurrentIndex = { this.state.dropDownCurrentIndex }

                    dropDownTextareaValue={ this.state.dropDownTextareaValue }
                    _kjkmEditTextareaBlur={this._kjkmEditTextareaBlur}
                    _kjkmEditTextareaChange={ this._kjkmEditTextareaChange }
                    _kjkmEditTextareaKeydown = { this._kjkmEditTextareaKeydown }
                    _liOnMouseDown = { this._liOnMouseDown }
                    KjkmPositionStyles = { this.state.KjkmPositionStyles }
                ></DropDown>
            </div>
        )
    }
}

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: null
        };

        this._newSubjectClick = this._newSubjectClick.bind(this);

    }

    componentWillMount() {
        this.subjects = this.props.subjects;
    }

    componentDidUpdate () {
        if (this.props.isDropDownShow) {
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
            liData = this.subjects;
        } else {
            this.subjects.map(function (v) {
                if (v.all.search(reg) !== -1 ) {
                    liData.push(v);
                }
            })
        }

        return (
            <div
                className={ style.kjkmEdit  + ' '+  ( this.props.isDropDownShow ? '' : style.hidden ) }
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

export default Voucher