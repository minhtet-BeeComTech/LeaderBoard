import styled from '@emotion/native';
import {Pressable, TouchableOpacity} from 'react-native';

type StyledPressableCardProps = {
  isPressed: boolean;
  isShadow: boolean;
  activeOpacity: number;
  bgColor: string;
};

export const StyledPressableCard = styled(Pressable)<StyledPressableCardProps>(
  (props: any) => ({
    border: `1px solid ${
      props.isPressed
        ? props.theme.color.typo.primary
        : props.theme.color.card.borderColor
    }`,
    borderRadius: props.theme.cardVariable.borderRadius,
    opacity: props.isPressed ? 0.5 : 1,
    padding: 10,
    backgroundColor:
      props.theme.color.card[props.bgColor] ||
      props.bgColor ||
      props.theme.color.card.bgColor,
    ...(props.isShadow && {
      shadowColor: '#00000029',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.22,
      elevation: 3,
    }),
  }),
);

export const StyledCard = styled(TouchableOpacity)((props: any) => ({
  borderWidth: 0.8,
  borderColor:
    props.theme.color.card[props?.bdColor] ||
    props.bdColor ||
    props.theme.color.card.white,
  borderRadius: props.theme.cardVariable.borderRadius,
  padding: 10,
  backgroundColor:
    props.theme.color.card[props.bgColor] || props.theme.color.card.white,
  ...(props.isShadow && {
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  }),
}));
