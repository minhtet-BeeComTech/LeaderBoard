import React, {useEffect} from 'react';

import {useSettings} from 'hook';
import Navigate from 'routes';

export default () => {
  const {handleTheme, currentTheme} = useSettings();

  useEffect(() => {
    handleTheme(currentTheme);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);

  return <Navigate initialRouteName="App" />;
};
