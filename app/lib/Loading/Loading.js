/**
 * Created by wangxichao on 21/03/2017.
 */

import React, { Component } from 'react';

import style from './Loading.css';

class Loading extends Component {

    render () {
        let className = [
                style.loading,
                (this.props.loading ? '' : style.hidden )
            ];

        return (
            <div className= { className.join(' ') }>
                <div className={ style.content }>
                    <img src="static/img/loading.gif" alt="loading"/>
                </div>
            </div>
        )
    }
}


export default Loading;