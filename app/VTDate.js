/**
 * Created by wangxichao on 07/03/2017.
 */
import React, { Component } from 'react';
import { DateField, DatePicker } from 'react-date-picker'


import style from './VoucherTop.css';
require('react-date-picker/index.css') ;

class VTDate extends Component {

    render() {

        const onChange = (dateString, { dateMoment, timestamp }) => {
            console.log(dateString)
        }

        let date = '2017-04-24'

        return (
            <div className={style.date}>
                 日期：
                <DateField
                    dateFormat="YYYY-MM-DD"
                    forceValidDate={true}
                    updateOnDateClick={true}
                    collapseOnDateClick={true}
                    defaultValue={1488937133884}
                    showClock={false}
                >
                    <DatePicker
                        navigation={true}
                        locale="en"
                        forceValidDate={true}
                        highlightWeekends={true}
                        highlightToday={true}
                        weekNumbers={true}
                        weekStartDay={0}
                    />
                </DateField>
            </div>
        )
    }
}

export default VTDate