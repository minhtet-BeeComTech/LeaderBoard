import React from 'react';

import {ContainerCom, TextCom} from 'components';

interface RegisterProps {}
export const Register: React.FC<RegisterProps> = () => {
  return (
    <ContainerCom
      text="Register"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}>
      <TextCom>Register</TextCom>
    </ContainerCom>
  );
};
