import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';

import {
  ContainerCom,
  TextCom,
  LottieAnimateCom,
  ButtonCom,
  IconCom,
} from 'components';

interface HomeProps {
  navigation: any;
}
export const Home: React.FC<HomeProps> = ({navigation, ...props}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshing]);

  const handleRouteChange = (route: string, params?: any) => {
    navigation.navigate(route, params);
  };

  return (
    <ContainerCom
      text="Home"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}
      refreshing={refreshing}
      onRefresh={onRefresh}
      full
      {...props}>
      <LottieAnimateCom
        style={styles.animation}
        source={require('@assets/animations/Welcome.json')}
        loop
        autoPlay
      />
      <View style={styles.contentCon}>
        <TextCom size="lg" weight="xl" style={styles.textStyle}>
          Hello, Welcome to my new applicaion.
        </TextCom>
        <TextCom style={styles.contenttxt}>
          You can check our leaders in the board of this app!
        </TextCom>
        <View style={styles.btnCon}>
          <ButtonCom
            text="Go To Board"
            btnRightRender={
              <IconCom
                color="white"
                name="arrow-right"
                type="Feather"
                iconSize="lg"
                style={styles.btnIco}
              />
            }
            style={styles.btnWrap}
            onPress={() => handleRouteChange('LeaderBoardTab')}
          />
        </View>
      </View>
    </ContainerCom>
  );
};

const styles = StyleSheet.create({
  animation: {width: '100%', height: '50%'},
  textStyle: {
    textAlign: 'center',
    paddingVertical: 20,
  },
  contentCon: {
    paddingHorizontal: 20,
  },
  contenttxt: {textAlign: 'center'},
  btnCon: {marginHorizontal: 40, marginVertical: 25},
  btnWrap: {borderWidth: 0},
  btnIco: {marginLeft: 15},
});
