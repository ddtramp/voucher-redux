/**
 * Created by wangxichao on 21/03/2017.
 */
import React, { Component } from 'react';

import style from './UnderWrapper.css';

class UnderWrapper extends Component {

    render () {
        let className = [
            style.wrapper,
            ( this.props.underWrapper ?  '' : style.hidden )
        ];

        return (
            <div
                className={ className.join(' ') }
                onClick= { this.props._underWrapperClick }
            >
                hello
            </div>
        )
    }


}

export default UnderWrapper;