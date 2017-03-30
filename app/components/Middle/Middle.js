/**
 * Created by wangxichao on 27/03/2017.
 */
import React, { Component } from 'react';
import MHeader from './MHeader';
import MBody from '../../containers/Middle/MBody';
import MFooter from './MFooter';

import style from './Middle.css';

class Middle extends Component {


    render () {

        return (
            <div className={ style.voucher }>
                <MHeader/>
                <MBody
                    data = { this.props.data }
                    url = { this.props.url }
                />
                <MFooter/>
            </div>
        )
    }
}

export default Middle;