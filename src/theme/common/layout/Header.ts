import {View, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';

export const StyledHeaderContainer = styled.View((props: any) => ({
  borderBottomWidth: 0,
  width: '100%',
  zIndex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 15,
  backgroundColor:
    props.theme.color.header[props?.headerBgColor] ||
    props?.headerBgColor ||
    props.theme.color.header.primary0,
  borderBottomColor:
    props.theme.color.header[props.borderColor] ||
    props.borderColor ||
    props.theme.color.header.primary0,
  height: props.theme.headerVariable.height || 60,
}));

export const StyledLeftContainer = styled(View)((props: any) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

export const StyledCenterContainer = styled(View)((props: any) => ({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}));

export const StyledRightContainer = styled(View)((props: any) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

export const StyledlanguageSwitchBtn = styled(TouchableOpacity)(
  (props: any) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  }),
);
