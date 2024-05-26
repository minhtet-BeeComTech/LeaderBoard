import styled from '@emotion/native';
import {View, TouchableOpacity} from 'react-native';
import {TextCom} from 'components';

interface IStyledTabBarsHeaderItem {
  theme: any;
  active?: boolean;
}

interface IStyledTabBarsHeaderItemText {
  theme: any;
  active?: boolean;
}

export const StyledTabBarsContainer = styled(View)(() => ({
  flex: 1,
  overflow: 'hidden',
}));

export const StyledTabBarsHeaderContainer = styled(View)(() => ({
  flexDirection: 'row',
  marginBottom: 4,
}));

export const StyledTabBarsHeaderItem = styled(
  TouchableOpacity,
)<IStyledTabBarsHeaderItem>((props: any) => ({
  marginRight: 11,
  paddingVertical: 8,
  alignItems: 'center',
  borderBottomWidth: 3,
  borderBottomColor: props.active
    ? props.theme.color.typo.primary0
    : 'transparent',
}));

export const StyledTabBarsHeaderItemText = styled(
  TextCom,
)<IStyledTabBarsHeaderItemText>((props: any) => ({
  fontSize: props.theme.fontSize.md,
  fontWeight: props.theme.fontWeight.lg,
  color: props.active
    ? props.theme.color.typo.primary0
    : props.theme.color.typo.gray20,
}));

export const StyledTabBarsContentContainer = styled(View)((props: any) => ({
  marginTop: 4,
  overflow: 'hidden',
}));

export const StyledTabBarsContentItemContainer = styled(View)``;
