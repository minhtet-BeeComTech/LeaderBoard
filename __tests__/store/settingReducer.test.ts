import settingReducer from 'store/reducer/setting.reducer';
import {actionTypes} from '@store/actions/setting.action';

describe('settingReducer', () => {
  it('should return the initial state', () => {
    expect(settingReducer(undefined, {})).toEqual({
      currentTheme: 'light',
      langCode: 'en',
    });
  });

  it('should handle SWITCH_THEME action', () => {
    const action = {
      type: actionTypes.SWITCH_THEME,
      payload: 'light',
    };

    const newState = settingReducer(undefined, action);

    expect(newState).toEqual({
      currentTheme: 'light',
      langCode: 'en',
    });
  });

  it('should return the current state for unknown action', () => {
    const currentState = {
      currentTheme: 'light',
      langCode: 'en',
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: 'some value',
    };

    const newState = settingReducer(currentState, action);

    expect(newState).toEqual(currentState);
  });
});
