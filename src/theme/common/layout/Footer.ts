import styled from '@emotion/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';

export const StyledFooterFix = styled(SafeAreaView)((props: any) => ({
  position: 'relative',
  width: '100%',
  borderWidth: 0,
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderColor: props.theme.color.card.line4,
  backgroundColor:
    props.theme.color.footer[props.bgColor] ||
    props.bgColor ||
    props.theme.color.card.white,
}));

export const StyledCustomFooter = styled(View)((props: any) => ({
  backgroundColor: props.theme.color.card.bgColor,
  borderColor: props.theme.color.card.borderColor,
  borderWidth: 1,
  flexDirection: 'row',
  width: '100%',
  shadowColor: '#00000029',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2.22,
  elevation: 3,
  minHeight: 50,
}));
