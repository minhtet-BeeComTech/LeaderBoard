import styled from '@emotion/native';
import {View} from 'react-native';

export const StyledRow = styled(View)(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
}));
// margin-top: 5px;
// margin-bottom: 16px;
// justify-content: ${props => props.content || 'flex-start'};
// align-items: ${props => props.align || 'flex-start'};

export const StyledCol = styled(View)((props: any) => ({
  marginLeft: 5,
  marginRight: 5,
  marginBottom: props.bottom || 0,
}));
