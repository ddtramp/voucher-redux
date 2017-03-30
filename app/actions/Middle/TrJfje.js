/**
 * Created by wangxichao on 27/03/2017.
 */
export const TR_JFJE_SHOW = 'TR_JFJE_SHOW';
export const TR_JFJE_HIDE = 'TR_JFJE_HIDE';
export const TR_JFJE_CHANGE = 'TR_JFJE_CHANGE';

export const TrJfjeShow = (index) => {
    return {
        type: TR_JFJE_SHOW,
        index
    }
};

export const TrJfjeHide = (index) => {
    return {
        type: TR_JFJE_HIDE,
        index
    }
};

export const TrJfjeChange = (index, text) => {
    return {
        type: TR_JFJE_CHANGE,
        index,
        text
    }
};


