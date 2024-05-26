import {actionTypes} from '../actions/setting.action';

export interface SettingState {
  currentTheme: string;
  langCode: string;
}

const initialState: SettingState = {
  currentTheme: 'light',
  langCode: 'en',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes?.SWITCH_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    default:
      return state;
  }
};
