/**
 * Created by wangxichao on 23/03/2017.
 */

import React, { Component } from 'react';
import { createSelector } from 'reselect'
import { connect } from 'react-redux';
import { NoFocus, NoBlur, NoChange, DateChange, AccessoryFocus, AccessoryBlur, AccessoryChange } from '../../actions/Top/index';

import No from '../../components/Top/No';
import Date from '../../components/Top/Date';
import Accessory from '../../components/Top/Accessory';

import style from '../../components/Top/Top.css';

class Top extends Component {


    render () {
        const { dispatch, TopApp } = this.props;

        return (
            <div className={ style.top }>
                <No
                    data = { TopApp.no }
                    NoFocus = { () => dispatch(NoFocus()) }
                    NoBlur = { () => dispatch(NoBlur()) }
                    NoChange = { (text) => dispatch(NoChange(text)) }

                />
                <Date
                    data = { TopApp.date }
                    DateChange = { (text) => dispatch(DateChange(text)) }

                />
                <Accessory
                    data = { TopApp.accessory }
                    AccessoryFocus = { () => dispatch(AccessoryFocus()) }
                    AccessoryBlur = { () => dispatch(AccessoryBlur()) }
                    AccessoryChange = { (text) => dispatch(AccessoryChange(text)) }

                />
            </div>
        )
    }
}

// const select = createSelector(
//     [TopApp]
// );
function select (state) {
    return {
        TopApp: state.TopApp
    }
}

export default connect(select)(Top);