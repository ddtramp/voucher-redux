/**
 * Created by wangxichao on 30/03/2017.
 */

import { SET_ZDR } from '../../actions/Bottom';

const initD = {
    id: '',
    name: ''
};
export const zdr = (d = initD, action) => {
    switch (action.type) {
        case SET_ZDR:
            return Object.assign({}, initD, action.d);

        default:
            return d;
    }

};