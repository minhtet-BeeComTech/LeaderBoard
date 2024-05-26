import styled from '@emotion/native';
import {View} from 'react-native';

type StyledToastProps = {};
export const StyledToast = styled(View)<StyledToastProps>((props: any) => ({
  backgroundColor:
    props.theme.color.toast[props?.bgColor] ||
    props.bgColor ||
    props.theme.color.toast.bgColor,
  width: props.theme.toastVariable.width || 60,
  minHeight: props.theme.toastVariable.minHeight,
  borderRadius: props.theme.cardVariable.borderRadius || 5,
  padding: 10,
}));
