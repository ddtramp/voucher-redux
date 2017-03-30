/**
 * Created by wangxichao on 27/03/2017.
 */
export const TR_DFJE_SHOW = 'TR_DFJE_SHOW';
export const TR_DFJE_HIDE = 'TR_DFJE_HIDE';
export const TR_DFJE_CHANGE = 'TR_DFJE_CHANGE';

export const TrDfjeShow = (index) => {
    return {
        type: TR_DFJE_SHOW,
        index
    }
};

export const TrDfjeHide = (index) => {
    return {
        type: TR_DFJE_HIDE,
        index
    }
};

export const TrDfjeChange = (index, text) => {
    return {
        type: TR_DFJE_CHANGE,
        index,
        text
    }
};


