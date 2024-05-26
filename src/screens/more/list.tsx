import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {ContainerCom, TextCom, CardCom, SwitchCom, IconCom} from 'components';
import {useSettings} from 'hook';
import Icon from 'assets/icons';

interface MoreProps {
  navigation: any;
}
export const More: React.FC<MoreProps> = ({navigation}) => {
  const {theme, currentTheme, handleTheme} = useSettings();

  const handleRouteChange = (routeName: string, params?: any) => {
    if (routeName === 'pop') {
      navigation.pop();
    } else if (routeName === 'goBack') {
      navigation.goBack();
    } else {
      navigation.navigate(routeName, params);
    }
  };

  const handleOnPress = (item: any) => {
    if (item?.onPress) {
      item.onPress();
    } else {
      handleRouteChange(item.routeName, item.params);
    }
  };

  let listData = [
    {
      text: 'Section 1',
      sectionTitle: 'Setting & Preference',
      children: [
        {
          text: 'Dark Mode',
          icon:
            currentTheme === 'dark' ? (
              <Icon.MoonDark width={25} height={25} />
            ) : (
              <Icon.MoonLight width={25} height={25} />
            ),
          switchIcon: true,
          switchValue: currentTheme === 'dark',
          onSwitchValueChange: (value: boolean) =>
            handleTheme(value ? 'dark' : 'light'),
        },
        {
          text: 'Language',
          icon:
            currentTheme === 'dark' ? (
              <Icon.GlobeHemisphereWestDark width={25} height={25} />
            ) : (
              <Icon.GlobeHemisphereWestLight width={25} height={25} />
            ),
          routeName: 'Language',
        },
      ],
    },
  ];

  return (
    <ContainerCom
      text="More"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}>
      {listData.map((x: any, i: any) => {
        return (
          <View key={i} style={styles.itemCon}>
            {x?.sectionTitle && (
              <TextCom weight="lg" style={styles.sectionTitleTxt}>
                {x.sectionTitle}
              </TextCom>
            )}
            <CardCom style={styles.cardCon}>
              {x.children.map((y: any, i: any) => {
                return (
                  <TouchableOpacity
                    disabled={!y?.onPress && !y?.routeName}
                    key={i}
                    onPress={() => handleOnPress(y)}
                    style={styles.secItemCon}>
                    <View style={styles.iconWrap}>{y.icon}</View>
                    <View
                      style={[
                        styles.secItemWrap,
                        {
                          borderBottomWidth:
                            x.children?.length - 1 === i ? 0 : 1,
                          borderBottomColor: theme.color.card.bottomBdColor,
                        },
                      ]}>
                      <View>
                        <TextCom>{y.text}</TextCom>
                      </View>
                      {y?.switchIcon ? (
                        <SwitchCom
                          value={y?.switchValue}
                          onValueChange={y?.onSwitchValueChange}
                        />
                      ) : (
                        <View>
                          <IconCom
                            name="arrow-right"
                            type="SimpleLineIcons"
                            iconSize="sm"
                            color="text"
                          />
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </CardCom>
          </View>
        );
      })}
    </ContainerCom>
  );
};

const styles = StyleSheet.create({
  itemCon: {marginBottom: 15},
  sectionTitleTxt: {marginBottom: 10},
  cardCon: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  secItemCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 15,
  },
  iconWrap: {paddingRight: 10},
  secItemWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
    marginTop: 12,
  },
});
