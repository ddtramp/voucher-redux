/**
 * Created by wangxichao on 28/03/2017.
 */
import React, { Component } from 'react';

import style from './Middle.css';

export default class Add extends Component {

    render () {
        let actionAddClassName = [
            (this.props.ad ? '' : style.hidden ),

        ];
        return (
            <td className={ style.addStyle }>
                <div
                    className={ style.addArea }
                >
                    <span
                        className={ actionAddClassName.join(' ') }
                        onClick={ this.props._onAddClick }
                    >+</span>
                </div>
            </td>
            )

    }
}