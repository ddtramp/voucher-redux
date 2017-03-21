/**
 * Created by wangxichao on 07/03/2017.
 */
import React, { Component } from 'react';
import { DateField, DatePicker, MonthView } from 'react-date-picker'


import style from './VoucherTop.css';
require('react-date-picker/index.css') ;
require('./../../reset.css');

class VTDate extends Component {

    renderDay (v, i) {

        // customer day
        // children
        // className

        if (v.children) {
            console.log('Render Day');
        }
    }
    render() {

        return (
            <div className={ style.date }>
                 日期：
                <DateField
                    ref="date"
                    dateFormat="YYYY-MM-DD"
                    forceValidDate={true}
                    updateOnDateClick={true}
                    collapseOnDateClick={true}
                    defaultValue={ this.props.v }
                    showClock={false}
                    onChange = { this.props._topDateChange }

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

export default VTDate
//
// <DatePicker
// navigation={true}
// locale="en"
// forceValidDate={true}
// highlightWeekends={true}
// highlightToday={true}
// weekNumbers={true}
// weekStartDay={0}
//     />