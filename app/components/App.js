/**
 * Created by wangxichao on 23/03/2017.
 */

import React, { Component } from 'react';
import Top from '../containers/Top/Top';
import Middle from './Middle/Middle';
import Bottom from '../containers/Bottom/Bottom'
import DropDown from '../containers/DropDown/DropDown';

import style from './App.css';


/**
 * main Component
 * props:
 *      data: { Array } voucher tr data;
 *      url: { String } async get data
 */
class App extends Component {


    render () {


        return (
            <div className={ style.voucher }>
                <Top/>
                <Middle
                    data = { this.props.data }
                    url = { this.props.url }

                />
                <Bottom />
                <DropDown/>
            </div>
        )
    }


}

export default  App;