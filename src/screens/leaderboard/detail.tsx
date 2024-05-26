import React from 'react';
import {View} from 'react-native';

import {ContainerCom, TextCom} from 'components';

interface LeaderBoardProps {
  route: any;
}
export const LeaderBoard: React.FC<LeaderBoardProps> = ({route, ...props}) => {
  const tmpArr = [
    {
      label: 'Name',
      value: 'name',
    },
    {
      label: 'Rank',
      value: 'stars',
    },
    {
      label: 'Bananas',
      value: 'bananas',
    },
  ];
  return (
    <ContainerCom
      text="Leader Detail"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}
      backIconProps={{color: 'text'}}
      back
      {...props}>
      {tmpArr.length > 0 &&
        tmpArr.map((item: any, i: number) => (
          <View key={i}>
            <TextCom>
              {item.label} : {route.params.item[item.value]}
            </TextCom>
          </View>
        ))}
    </ContainerCom>
  );
};
