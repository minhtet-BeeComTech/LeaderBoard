import {Animated} from 'react-native';
import styled from '@emotion/native';

export const StyledLoader = styled(Animated.View)((props: any) => ({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  elevation: 0,
  backgroundColor:
    props.loadingBgColor === 'transparent'
      ? props.theme.color.mode === 'light'
        ? 'rgba(253, 253, 253, .5)'
        : 'rgba(7, 7, 7, .3)'
      : props.theme.color.loading[props.loadingBgColor] ||
        props.loadingBgColor ||
        props.theme.color.loading.white,
}));
