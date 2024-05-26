export const actionTypes = {
  SWITCH_THEME: 'SWITCH_THEME',
};

interface setThemeAction<T> {
  type: string;
  payload: T;
}

export const setTheme = <T>(payload: T): setThemeAction<T> => {
  return {
    type: actionTypes.SWITCH_THEME,
    payload,
  };
};

export default {
  setTheme,
};
