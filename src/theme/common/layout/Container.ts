import styled from '@emotion/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, View} from 'react-native';
import {ScrollView as GestureScrollView} from 'react-native-gesture-handler';

type StyledSafeContainerProps = {
  safeAreaBgColor?: any;
};
export const StyledSafeContainer = styled(
  SafeAreaView,
)<StyledSafeContainerProps>((props: any) => ({
  flex: 1,
  backgroundColor:
    props.theme.color.container[props.safeAreaBgColor] ||
    props.safeAreaBgColor ||
    props.theme.color.container.screenBg,
}));

type StyledSafeBottomContainerProps = {
  safeAreaBgColor?: any;
};
export const StyledSafeBottomContainer = styled(
  SafeAreaView,
)<StyledSafeBottomContainerProps>((props: any) => ({
  flex: 0,
  backgroundColor:
    props.theme.color.container[props.safeAreaBgColor] ||
    props.safeAreaBgColor ||
    props.theme.color.container.screenBg,
}));

type StyledContainerProps = {
  containerBgColor?: any;
};
export const StyledContainer = styled(View)<StyledContainerProps>(
  (props: any) => ({
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor:
      props.theme.color.container[props.containerBgColor] ||
      props.containerBgColor ||
      props.theme.color.container.screenBg,
  }),
);

type StyledScrollViewProps = {
  bgColor?: any;
};
export const StyleScrollView = styled(ScrollView)<StyledScrollViewProps>(
  (props: any) => ({
    backgroundColor:
      props.theme.color.container[props.bgColor] ||
      props.bgColor ||
      props.theme.color.container.screenBg,
  }),
);

type GestureScrollViewProps = {
  bgColor?: any;
};
export const StyleGestureScrollView = styled(
  GestureScrollView,
)<GestureScrollViewProps>((props: any) => ({
  backgroundColor:
    props.theme.color.container[props.bgColor] ||
    props.bgColor ||
    props.theme.color.container.screenBg,
}));
