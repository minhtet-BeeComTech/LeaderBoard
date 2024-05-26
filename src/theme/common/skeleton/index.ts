import styled from '@emotion/native';
import {View} from 'react-native';

//* this styled is demo stage

interface IStyledSkeletonContainer {
  theme?: any;
  borderRadius?: number;
  width?: number;
  height?: number;
  marginBottom?: number;
  style?: any;
}

export const StyledSkeletonContainer = styled(View)<IStyledSkeletonContainer>(
  (props: any) => ({
    backgroundColor:
      props.theme.color.card[props?.bgColor] ||
      props.bgColor ||
      props.theme.color.card.white,
    borderRadius:
      props?.borderRadius || props.theme.skeletonVariable?.borderRadius,
    width: props?.width || props.theme.skeletonVariable.width,
    height: props?.height || props.theme.skeletonVariable.height,
    marginBottom:
      props.marginBottom || props.theme.skeletonVariable.marginBottom,
    overflow: 'hidden',
  }),
);
