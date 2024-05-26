import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import {Pressable, TouchableOpacity} from 'react-native';

export const PressableButtonStyled = styled(Pressable)((props: any) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: props.theme.buttonVariable.borderRadius,
  minHeight: props.btnHeight || props.theme.buttonVariable.btnHeight,
}));

export const ButtonGradientStyled = styled(LinearGradient)((props: any) => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: props.theme.buttonVariable.borderRadius,
  minHeight: props.btnHeight || props.theme.buttonVariable.btnHeight,
}));

export const ButtonStyled = styled(TouchableOpacity)((props: any) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: props?.bdRadius || props.theme.buttonVariable.borderRadius,
  minHeight: props.btnHeight || props.theme.buttonVariable.btnHeight,
  backgroundColor:
    props?.appearance !== 'outline' &&
    props?.appearance !== 'clear' &&
    props?.disabled
      ? props.theme.color.button[props?.disabledBgColor] ||
        props.disabledBgColor ||
        props.theme.color.button.gray50
      : props.theme.color.button[props?.bgColor] || props.bgColor,
  borderColor: props?.disabled
    ? props.theme.color.button[props?.disabledBorderColor] ||
      props.disabledBorderColor ||
      props.theme.color.button.gray60
    : props.theme.color.button[props?.borderColor] ||
      props?.borderColor ||
      props.theme.color.button.gray60,
  borderWidth: props?.appearance === 'outline' ? 0 : props?.bdWidth || 1,
}));
