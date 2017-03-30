/**
 * Created by wangxichao on 28/03/2017.
 */
import React, { Component } from 'react';

import style from './Middle.css';

export default class Subject extends Component {

    render () {
        return (
            <td
                className={ style.bodyKjkm }
            >
                <div
                className={ style.kjkmText }
                onClick={ (e) => this.props._onSubjectClick(e) }
                >
                    { ( this.props.data.subject + ' ' + this.props.data.subjectName)  }
                </div>
            </td>
        )
    }

}