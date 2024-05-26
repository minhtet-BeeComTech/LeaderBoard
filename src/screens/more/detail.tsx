import React from 'react';

import {ContainerCom, TextCom} from 'components';

interface MoreDetailProps {}
export const MoreDetail: React.FC<MoreDetailProps> = () => {
  return (
    <ContainerCom
      text="MoreDetail"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}>
      <TextCom>MoreDetail</TextCom>
    </ContainerCom>
  );
};
