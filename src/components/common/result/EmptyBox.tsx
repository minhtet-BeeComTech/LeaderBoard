import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

import {IconCom} from '../icon';
import {TextCom} from '../typo';

export const EmptyBoxCom = memo(
  ({
    title = 'No Data Available!',
    desc,
    iconProps,
    children,
    ...props
  }: any) => {
    return (
      <View style={styles.container} {...props}>
        {children ? (
          children
        ) : (
          <View style={styles.wrap}>
            <IconCom
              name="cloud"
              type="MaterialCommunityIcons"
              color="text"
              iconSize={70}
              {...iconProps}
            />
            <TextCom weight="lg">{title}</TextCom>
            {desc && <TextCom>{desc}</TextCom>}
          </View>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {flex: 1, opacity: 0.5},
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
