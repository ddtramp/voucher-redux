/**
 * Created by wangxichao on 29/03/2017.
 */
export const TR_SUBJECT_CHANGE = 'TR_SUBJECT_CHANGE';

export const TrSubjectChange = (index, subject) => {
    return {
        type: TR_SUBJECT_CHANGE,
        index,
        subject
    }
};