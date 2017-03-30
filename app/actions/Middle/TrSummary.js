/**
 * Created by wangxichao on 27/03/2017.
 */

export const TR_SUMMARY_SHOW = 'TR_SUMMARY_SHOW';
export const TR_SUMMARY_HIDE = 'TR_SUMMARY_HIDE';
export const TR_SUMMARY_CHANGE = 'TR_SUMMARY_CHANGE';

export const TrSummaryShow = (index) => {
    return {
        type: TR_SUMMARY_SHOW,
        index: index
    }
};

export const TrSummaryHide = (index) => {
    return {
        type: TR_SUMMARY_HIDE,
        index: index
    }
};

export const TrSummaryChange = (index, text) => {
    return {
        type: TR_SUMMARY_CHANGE,
        index: index,
        text: text
    }
};
