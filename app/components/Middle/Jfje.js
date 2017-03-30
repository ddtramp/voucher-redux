/**
 * Created by wangxichao on 29/03/2017.
 */
import React, { Component } from 'react';
import Je from './Je';

import style from './Middle.css';

export default class Jfje extends Component {


    render () {

        return (
            <td className={ style.je }>
                <Je
                    text = { this.props.data.jfje }
                    status = { this.props.status.jfje  }
                    jeFocus = { this.props.status.jeFocus }

                    jeShow = { this.props._onJfjeShow }
                    jeHide = { this.props._onJfjeHide }
                    jeChange = { this.props._onJfjeChange }

                    next = { this.props.next }

                />
            </td>
        )
    }

}