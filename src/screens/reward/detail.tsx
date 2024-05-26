import React from 'react';

import {ContainerCom, TextCom} from 'components';

interface RewardProps {}
export const Reward: React.FC<RewardProps> = () => {
  return (
    <ContainerCom
      text="Reward"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}>
      <TextCom>Reward</TextCom>
    </ContainerCom>
  );
};
