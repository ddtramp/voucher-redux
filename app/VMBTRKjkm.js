/**
 * Created by wangxichao on 08/03/2017.
 */
import React, { Component }  from 'react';

import style from './VoucherMiddle.css';

class VMBTRKjkm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            textareaValue: ''  // textarea value
        };
        this.textAreaInput = null;

    }
    componentWillReceiveProps() {
        this.setState({
            textareaValue: '',
        });
    }


    render () {
        let kjkmTextClassName = [
             style.kjkmText,
            ( this.props.subject.subjectTextareaShow ? style.hidden : '' )
        ];
        return (
            <td className={ style.bodyKjkm }>
                <div>
                    <div className={ kjkmTextClassName.join(' ') }
                         onClickCapture={ this.props._kjkmTextClick }
                         data-currentindex={ this.props.currentIndex }
                    >
                        { (this.props.subject.subject) ? ( this.props.subject.subject + ' ' + this.props.subject.name) : '' }
                    </div>
                </div>
            </td>
        )
    }
}

export default VMBTRKjkm;