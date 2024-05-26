import React from 'react';

import {ContainerCom, TextCom} from 'components';

interface LoginProps {}
export const Login: React.FC<LoginProps> = () => {
  return (
    <ContainerCom
      text="Login"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}>
      <TextCom>Login</TextCom>
    </ContainerCom>
  );
};
