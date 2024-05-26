import React, {memo, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useTheme} from '@emotion/react';

import {ButtonStyled, ButtonGradientStyled, PressableButtonStyled} from 'theme';
import {TextCom} from '../typo';

export const ButtonCom: React.FC<CommonComponents.ButtonCom> = memo(
  ({
    children,
    text,
    btnLeftRender,
    btnRightRender,
    btnLoadingRender,
    btnContentRender,
    textStyle,
    isLoading,
    indicatorProps,
    onPress,
    activityIndicatorColor = '#070707',
    isPressable = false,
    bgColor = 'primary0',
    appearance = 'full',
    // activeOpacity = 0.7,
    gradientProps = {
      start: {x: 0, y: 0},
      end: {x: 0, y: 1},
    },
    ...props
  }) => {
    const theme: any = useTheme();
    const [active, setActive] = useState<boolean>(false);

    const handlePressEffect = () => setActive(prev => !prev);

    const Button = isLoading ? (
      <>
        {btnLoadingRender ? (
          btnLoadingRender
        ) : (
          <View style={styles.indicatorWrap}>
            <ActivityIndicator
              color={
                theme.color.button[activityIndicatorColor] ||
                activityIndicatorColor
              }
              {...indicatorProps}
            />
          </View>
        )}
      </>
    ) : (
      <>
        {btnLeftRender}
        {btnContentRender ? (
          btnContentRender
        ) : (
          <TextCom
            style={{
              textAlign: 'center',
              marginLeft: btnLeftRender ? 8 : 0,
              marginRight: btnRightRender ? 8 : 0,
              ...textStyle,
            }}
            color="white"
            {...props}>
            {text || 'Empty'}
          </TextCom>
        )}
        {btnRightRender}
      </>
    );

    const InnerContent =
      appearance === 'gradient' ? (
        <ButtonGradientStyled
          colors={
            active
              ? theme?.color?.button?.primaryPressed
              : theme?.color?.button?.primaryGradient
          }
          {...gradientProps}
          {...props}>
          {children || Button}
        </ButtonGradientStyled>
      ) : (
        children || Button
      );

    if (isPressable) {
      return (
        <PressableButtonStyled
          onPress={onPress}
          onPressIn={handlePressEffect}
          onPressOut={handlePressEffect}
          {...{
            ...props,
            bgColor: appearance === 'gradient' ? 'transparent' : bgColor,
          }}>
          {InnerContent}
        </PressableButtonStyled>
      );
    }

    return (
      <ButtonStyled
        onPress={onPress}
        {...{
          ...props,
          bgColor: appearance === 'gradient' ? 'transparent' : bgColor,
        }}>
        {InnerContent}
      </ButtonStyled>
    );
  },
);

const styles = StyleSheet.create({
  indicatorWrap: {
    flex: 1,
    alignSelf: 'center',
  },
});
