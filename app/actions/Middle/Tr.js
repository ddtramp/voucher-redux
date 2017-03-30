/**
 * Created by wangxichao on 27/03/2017.
 */

export const ADD_TR = 'ADD_TR';
export const DEL_TR = 'DEL_TR';
export const SET_TR = 'SET_TR';

export const AddTr = (index, tr) => {
    return {
        type: ADD_TR,
        index: index,
        tr: tr
    }
};
export const DelTr = (index) => {
    return {
        type: DEL_TR,
        index: index
    }
};

export const SetTrs = (data) => {
    return {
        type: SET_TR,
        data
    }
};


