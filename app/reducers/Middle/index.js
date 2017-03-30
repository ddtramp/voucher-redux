/**
 * Created by wangxichao on 27/03/2017.
 */

import { ADD_TR, DEL_TR, SET_TR } from '../../actions/Middle/Tr.js';
import { TR_SUMMARY_SHOW, TR_SUMMARY_HIDE, TR_SUMMARY_CHANGE } from '../../actions/Middle/TrSummary';
import { TR_SUBJECT_CHANGE } from '../../actions/Middle/TrSubject';
import { TR_JFJE_SHOW, TR_JFJE_HIDE, TR_JFJE_CHANGE } from '../../actions/Middle/TrJfje';
import { TR_DFJE_SHOW, TR_DFJE_HIDE, TR_DFJE_CHANGE } from '../../actions/Middle/TrDfje';

const initData = {
    summary: '',
    subject: '',
    subjectID: '',
    subjectName: '',
    type: '',
    companyName: '',
    companyID: '',
    jfje: '',
    dfje: ''

};

const initStatus = {
    summary: false,     // show or hide
    subject: false,
    jfje: false,
    dfje: false,
    jeFocus: false   // focus or not
};

export const data = (data = [], action) => {
    let d = [...data];

    switch (action.type) {
        case ADD_TR:
            d.splice(action.index, 0, Object.assign({}, initData, action.tr));
            return d;
        case DEL_TR:
            d.splice(action.index, 1);
            d.length < 4 ? d.push(initData) : '';
            return d;
        case SET_TR:
            if (action.data.length < 4) {
                let len = 4 - action.data.length;
                for (let i = 0; i < len; i++) {
                    action.data.push(initData);
                }
            }
            return action.data;

        case TR_SUMMARY_CHANGE:
            return [
                ...data.slice(0, action.index),
                Object.assign({}, data[action.index], { summary: action.text }),
                ...data.slice(action.index + 1)
            ];
        case TR_SUBJECT_CHANGE:
            return [
                ...data.slice(0, action.index),
                Object.assign({}, data[action.index], {
                    subject: action.subject.subject,
                    subjectID: action.subject.id,
                    subjectName: action.subject.name
                }),
                ...data.slice(action.index + 1)
            ];
        case TR_JFJE_CHANGE:
            return [
                ...data.slice(0, action.index),
                Object.assign({}, data[action.index], { jfje: action.text, dfje: '' }),
                ...data.slice(action.index + 1)
            ];
        case TR_DFJE_CHANGE:
            return [
                ...data.slice(0, action.index),
                Object.assign({}, data[action.index], { jfje: '', dfje: action.text }),
                ...data.slice(action.index + 1)
            ];

        default:
            return data;
    }
};

export const status = (status = [], action) => {
    let s = [...status];

    switch (action.type) {
        case ADD_TR:
            s.splice(action.index, 0, initStatus);
            return s;
        case DEL_TR:
            s.splice(action.index, 1);
            s.length < 4 ? s.push(initStatus) : '';

            return s;
        case TR_SUMMARY_SHOW:
            return [
                ...status.slice(0, action.index),
                Object.assign({}, initStatus, { summary: true }),
                ...status.slice(action.index + 1)
            ];
        case TR_SUMMARY_HIDE:
            return [
                ...status.slice(0, action.index),
                Object.assign({}, initStatus),
                ...status.slice(action.index + 1)
            ];
        case TR_JFJE_SHOW:
            return [
                ...status.slice(0, action.index),
                Object.assign({}, initStatus, {  jfje: true, jeFocus: true }),
                ...status.slice(action.index + 1)
            ];
        case TR_JFJE_HIDE:
            return [
                ...status.slice(0, action.index),
                Object.assign({}, initStatus),
                ...status.slice(action.index + 1)
            ];
        case TR_DFJE_SHOW:
            return [
                ...status.slice(0, action.index),
                Object.assign({}, initStatus, {  dfje: true, jeFocus: true }),
                ...status.slice(action.index + 1)
            ];
        case TR_DFJE_HIDE:
            return [
                ...status.slice(0, action.index),
                Object.assign({}, initStatus),
                ...status.slice(action.index + 1)
            ];
        default:
            return status;
    }

};
