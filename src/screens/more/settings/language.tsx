import React from 'react';

import {ContainerCom, TextCom} from 'components';

interface LanguageProps {}
export const Language: React.FC<LanguageProps> = props => {
  return (
    <ContainerCom
      text="Language"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}
      backIconProps={{color: 'text'}}
      back
      {...props}>
      <TextCom>Language</TextCom>
    </ContainerCom>
  );
};
