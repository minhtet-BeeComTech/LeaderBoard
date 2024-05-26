import React, {memo, useState} from 'react';
import {StyleSheet} from 'react-native';

import {StyledCard, StyledPressableCard} from 'theme';
import {TextCom} from '../typo';

export const CardCom: React.FC<CommonComponents.CardCom> = memo(
  ({
    pressable = false,
    isShadow = false,
    activeOpacity = 0.7,
    bgColor = 'bgColor',
    children,
    ...props
  }) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const onPressIn = () => setIsPressed(true);
    const onPressOut = () => setIsPressed(false);

    return pressable ? (
      <StyledPressableCard
        isPressed={isPressed}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={!props.onPress}
        isShadow={isShadow}
        activeOpacity={activeOpacity}
        bgColor={bgColor}
        {...props}>
        {children ? (
          children
        ) : (
          <TextCom color="desc" style={styles.txtStyle}>
            Card children is required!
          </TextCom>
        )}
      </StyledPressableCard>
    ) : (
      <StyledCard
        delayPressIn={0}
        disabled={!props.onPress}
        isShadow={isShadow}
        activeOpacity={activeOpacity}
        bgColor={bgColor}
        bdColor="bdColor"
        {...props}>
        {children ? (
          children
        ) : (
          <TextCom color="desc" style={styles.txtStyle}>
            Card children is required!
          </TextCom>
        )}
      </StyledCard>
    );
  },
);

const styles = StyleSheet.create({
  txtStyle: {textAlign: 'center'},
});
