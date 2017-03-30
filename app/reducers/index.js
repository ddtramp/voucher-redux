/**
 * Created by wangxichao on 23/03/2017.
 */

import { combineReducers } from 'redux';

import TopApp from './Top/index';
import { data, status } from './Middle';
import { zdr } from './Bottom';
import { dropDown } from './DropDown';
import postVoucher from './Async/data';



const voucherApp = combineReducers({
        TopApp,
        data,
        status,
        zdr,
        dropDown,

        postVoucher
    });

export default voucherApp;