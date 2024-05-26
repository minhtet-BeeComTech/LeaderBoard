import {View} from 'react-native';
import styled from '@emotion/native';

//* start Modal
export const StyledModalContainer = styled(View)``;

export const StyledModalContent = styled(View)((props: any) => ({
  backgroundColor:
    props.theme.color.modal[props.modalBgColor] ||
    props.modalBgColor ||
    props.theme.color.modal.modalBgColor,
  borderRadius: props.theme.modalVariable.borderRadius,
}));
//* end Modal
