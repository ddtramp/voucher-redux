/**
 * Created by wangxichao on 23/03/2017.
 */
export const NO_FOCUS = 'NO_FOCUS';
export const NO_BLUR = 'NO_BLUR';
export const NO_CHANGE = 'NO_CHANGE';

export const DATE_CHANGE = 'DATE_CHANGE';

export const ACCESSORY_FOCUS = 'ACCESSORY_FOCUS';
export const ACCESSORY_BLUR = 'ACCESSORY_BLUR';
export const ACCESSORY_CHANGE = 'ACCESSORY_CHANGE';

export const NoFocus  = () => {
    return {
        type: NO_FOCUS
    }
};
export const NoBlur = () => {
    return {
        type: NO_BLUR
    }
};
export const NoChange = (text) => {
    return {
        type: NO_CHANGE,
        text
    }
};


export const DateChange = (text) => {
  return {
      type: DATE_CHANGE,
      text
  }
};


export const AccessoryFocus = () => {
    return {
        type: ACCESSORY_FOCUS
    }
};
export const AccessoryBlur = () => {
    return {
        type: ACCESSORY_BLUR
    }
};
export const AccessoryChange = (text) => {
    return {
        type: ACCESSORY_CHANGE,
        text
    }
};