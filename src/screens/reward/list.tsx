import React from 'react';

import {ContainerCom, TextCom} from 'components';

interface RewardsProps {}
export const Rewards: React.FC<RewardsProps> = () => {
  return (
    <ContainerCom
      text="Rewards"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}>
      <TextCom>Rewards</TextCom>
    </ContainerCom>
  );
};
