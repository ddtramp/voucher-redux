/**
 * Created by wangxichao on 29/03/2017.
 */
import React, { Component } from 'react';
import Je from './Je';

import  style from './Middle.css';

export default class Dfje extends Component {

    render () {

        return (
            <td className={ style.je }>
                <Je
                    ref="je"
                    text = { this.props.data.dfje }
                    status = { this.props.status.dfje  }
                    jeFocus = { this.props.status.jeFocus }

                    jeShow = { this.props._onDfjeShow }
                    jeHide = { this.props._onDfjeHide }
                    jeChange = { this.props._onDfjeChange }

                />
            </td>
        )
    }
}