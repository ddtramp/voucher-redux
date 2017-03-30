/**
 * Created by wangxichao on 28/03/2017.
 */
import React, { Component } from 'react';

import style from './Middle.css';

export default class Del extends Component {

    render() {
        let actionAddClassName = [
            (this.props.ad ? '' : style.hidden ),

        ];
        return (
            <td className={ style.delStyle }>
                <div
                    className={ style.delArea }
                >
                        <span
                            className={ actionAddClassName.join(' ') }
                            onClick={ this.props._onDelClick }
                        >x</span>
                </div>
            </td>
        )

    }
}