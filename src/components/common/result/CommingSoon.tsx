import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

import {StyledCommingSoonContainer} from 'theme';
import {IconCom} from '../icon';
import {TextCom} from '../typo';

export const CommingSoonCom = memo(({children, props}: any) => {
  return (
    <StyledCommingSoonContainer {...props}>
      {children ? (
        children
      ) : (
        <>
          <View style={styles.icoWrap}>
            <IconCom
              name="cloud"
              type="MaterialCommunityIcons"
              color="text"
              iconSize={70}
            />
          </View>
          <TextCom weight="xl" style={styles.titleTxt}>
            Comming Soon
          </TextCom>
          <TextCom size="sm" style={styles.descTxt}>
            It will be available soon!
          </TextCom>
        </>
      )}
    </StyledCommingSoonContainer>
  );
});

const styles = StyleSheet.create({
  icoWrap: {marginBottom: 20},
  titleTxt: {marginBottom: 10},
  descTxt: {marginBottom: 30},
});
