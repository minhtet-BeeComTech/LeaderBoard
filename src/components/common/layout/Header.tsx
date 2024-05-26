import React, {memo} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {useTheme} from '@emotion/react';

import {TextCom} from '../typo';
import {IconCom} from '../icon';
import {
  StyledHeaderContainer,
  StyledLeftContainer,
  StyledCenterContainer,
  StyledRightContainer,
} from 'theme';

export const HeaderCom: React.FC<CommonComponents.HeaderCom> = memo(
  ({
    headerChild,
    headerLeftRender,
    headerCenterRender,
    headerRightRender,
    headerRender,
    isHeader = true,
    isCenter = true,
    headerTextProps,
    backIconProps,
    ...props
  }) => {
    const {navigation, text, back, menu, handleCustomBack, isCustomBack} =
      props;
    const theme: any = useTheme();

    const titleRouteChange = (type?: any) => () => {
      if (type === 'menu') {
        navigation?.toggleDrawer();
      } else {
        isCustomBack ? handleCustomBack() : navigation?.goBack();
      }
    };

    const child = () => (
      <>
        <StyledHeaderContainer
          // style={props.headerStyle}
          {...props}>
          <StyledLeftContainer>
            {headerLeftRender ? (
              headerLeftRender
            ) : (
              <View
                style={{
                  minWidth:
                    isCenter && (menu || back || headerLeftRender) ? 30 : 0,
                }}>
                {menu && (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={titleRouteChange('menu')}
                    style={styles.menuIcoWrap}>
                    <IconCom
                      name="menu-outline"
                      type="Ionicons"
                      iconSize="xxxl"
                      color={
                        props.bgColor === 'transparent'
                          ? theme.color.icon.gray500
                          : theme.color.icon.white
                      }
                    />
                  </TouchableOpacity>
                )}
                {back && (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={titleRouteChange('back')}
                    style={styles.backIcoWrap}>
                    <IconCom
                      name="chevron-thin-left"
                      type="Entypo"
                      iconSize={21}
                      color={
                        props.bgColor === 'transparent'
                          ? theme.color.icon.gray500
                          : theme.color.icon.white
                      }
                      style={{left: -3}}
                      {...backIconProps}
                    />
                  </TouchableOpacity>
                )}
              </View>
            )}
          </StyledLeftContainer>
          <StyledCenterContainer>
            {headerCenterRender ? (
              headerCenterRender
            ) : (
              <View style={{flex: 1}}>
                <TextCom
                  numberOfLines={1}
                  style={{textAlign: isCenter ? 'center' : 'left'}}
                  size="lg"
                  weight="xl"
                  color="white"
                  {...headerTextProps}>
                  {text}
                </TextCom>
              </View>
            )}
          </StyledCenterContainer>
          <StyledRightContainer>
            <View
              style={{
                minWidth:
                  isCenter && (menu || back || headerLeftRender) ? 30 : 0,
              }}>
              {headerRightRender}
            </View>
          </StyledRightContainer>
        </StyledHeaderContainer>
        {headerChild}
      </>
    );

    if (!isHeader) {
      return null;
    }

    return headerRender ? headerRender : child();
  },
);

const styles = StyleSheet.create({
  menuIcoWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backIcoWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
