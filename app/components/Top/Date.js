/**
 * Created by wangxichao on 24/03/2017.
 */

import React, { Component } from 'react';
import { DateField, MonthView } from 'react-date-picker'
require('react-date-picker/index.css') ;
require('./../../reset.css');

import style from './Top.css';

class Date extends Component {

    _onChange (d, o) {
        this.props.DateChange(o.dateMoment.valueOf());
    }
    render () {

        return (
            <div className={ style.date }>
                日期：
                <DateField
                    ref="date"
                    dateFormat="YYYY-MM-DD"
                    forceValidDate={true}
                    updateOnDateClick={true}
                    collapseOnDateClick={true}
                    defaultValue={ this.props.data.text }
                    showClock={false}
                    onChange = { this._onChange.bind(this) }

                >
                    <MonthView
                        renderDay = { this.renderDay }
                    >

                    </MonthView>

                </DateField>
            </div>
        )
    }
}

export default  Date;