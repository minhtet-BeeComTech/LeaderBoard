import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

import {StyledNetInfoContainer} from 'theme';
import {IconCom} from '../icon';
import {TextCom} from '../typo';

export const NetInfoCom = memo(({children, ...props}: any) => {
  return (
    <StyledNetInfoContainer {...props}>
      {children ? (
        children
      ) : (
        <>
          <View style={styles.icoWrap}>
            <IconCom
              name="connection"
              type="MaterialCommunityIcons"
              color="text"
              iconSize={70}
            />
          </View>
          <TextCom weight="xl" style={styles.titleTxt}>
            No Internet Connection
          </TextCom>
          <TextCom size="sm" style={styles.descTxt}>
            Please check your connection and try again!
          </TextCom>
        </>
      )}
    </StyledNetInfoContainer>
  );
});

const styles = StyleSheet.create({
  icoWrap: {marginBottom: 20},
  titleTxt: {marginBottom: 10},
  descTxt: {marginBottom: 30},
});
