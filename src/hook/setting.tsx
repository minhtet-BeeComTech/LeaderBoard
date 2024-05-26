import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@emotion/react';

import {setting} from 'store/actions';

export const useSettings = () => {
  const settings = useSelector((state: any) => state.setting);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleTheme = (data?: string) => {
    dispatch(setting.setTheme(data));
  };

  return {
    ...settings,
    theme,
    handleTheme,
  };
};
