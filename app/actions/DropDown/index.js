/**
 * Created by wangxichao on 29/03/2017.
 */
export const DROPDOWN_SHOW = 'DROPDOWN_SHOW';
export const DROPDOWN_HIDE = 'DROPDOWN_HIDE';


export const DropDownShow = (index, position) => {
    return {
        type: DROPDOWN_SHOW,
        index,
        position
    }
};

export const DropDownHide = () => {
    return {
        type: DROPDOWN_HIDE
    }
};