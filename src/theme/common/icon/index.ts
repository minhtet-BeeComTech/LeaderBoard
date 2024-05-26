import styled from '@emotion/native';
import Icon from 'react-native-dynamic-vector-icons';

type StyledIconProps = {
  iconSize?: any;
  color?: any;
  type?: string | undefined;
  theme?: any;
};
export const StyledIcon = styled(Icon)<StyledIconProps>(props => ({
  fontSize:
    props.theme.fontSize[props?.iconSize] ||
    props.iconSize ||
    props.theme.fontSize.md,
  color:
    props.theme.color.icon[props?.color] ||
    props?.color ||
    props.theme.color.icon.gray500,
}));
