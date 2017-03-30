/**
 * Created by wangxichao on 29/03/2017.
 */

import { DROPDOWN_SHOW, DROPDOWN_HIDE } from '../../actions/DropDown/index';
const initDropDown = {
    index: '',
    status: false,
    position: {
        top: 0,
        left: 0
    }
};

export const dropDown =  (d = initDropDown, action) => {
    switch (action.type) {
        case DROPDOWN_SHOW:
            return Object.assign({}, initDropDown, { index: action.index, status: true, position: action.position });
        case DROPDOWN_HIDE:
            return Object.assign({}, initDropDown, { index: '', status: false });
        default:
            return d;
    }
};