import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

import {TextCom} from '../../typo';
import {IconCom} from '../../icon';

export const InlineLabelCom = ({inlineLabelConProps, ...props}: any) => {
  return (
    <View style={styles.inLabelCon} {...inlineLabelConProps}>
      <View style={styles.inLabelWrap}>
        <TextCom color="gray30" weight="lg">
          {props?.label}
        </TextCom>
      </View>
      <View style={styles.valueCon}>
        <TextCom weight="lg">{props?.value}</TextCom>
        {props?.isCopy && (
          <TouchableOpacity style={styles.icoCon}>
            <IconCom name="ios-copy-outline" type="Ionicons" iconSize={24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inLabelCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inLabelWrap: {flex: 1},
  valueCon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icoCon: {marginLeft: 4},
});
