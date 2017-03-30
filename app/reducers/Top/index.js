/**
 * Created by wangxichao on 23/03/2017.
 */

import { combineReducers } from 'redux';
import { NO_FOCUS, NO_BLUR, NO_CHANGE, DATE_CHANGE, ACCESSORY_FOCUS, ACCESSORY_BLUR, ACCESSORY_CHANGE } from '../../actions/Top/index'
import moment from 'moment';

const initNoState = {
        text: '',
        focus: false
};

function no (state = initNoState , action) {
    switch (action.type) {
        case NO_FOCUS:
            return {
                text: state.text,
                focus: true
            };
        case NO_BLUR:
            return {
                text: state.text,
                focus: false
            };
        case NO_CHANGE:
            return {
                text: action.text,
                focus: true
            };
        default:
            return state
    }
}

const initDateState = {
    text: moment().valueOf()
};

function date (state = initDateState , action) {
    switch (action.type) {
        case DATE_CHANGE:
            return {
                text: action.text
            };
        default:
            return state
    }
}

const initAccessoryState = {
    text: '',
    focus: false
};

function accessory (state = initAccessoryState , action) {
    switch (action.type) {
        case ACCESSORY_FOCUS:
            return {
                text: state.text,
                focus: true
            };
        case ACCESSORY_BLUR:
            return {
                text: state.text,
                focus: false
            };
        case ACCESSORY_CHANGE:
            return {
                text: action.text,
                focus: true
            };
        default:
            return state
    }
}

const TopApp = combineReducers({
        no,
        date,
        accessory
    });

export default TopApp;