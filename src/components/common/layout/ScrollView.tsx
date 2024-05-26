import React, {useRef} from 'react';
import {RefreshControl, View, StyleSheet} from 'react-native';
import {useTheme} from '@emotion/react';

import {StyleScrollView} from 'theme';

export const ScrollViewCom = ({children, ...props}: any) => {
  const {refreshing, onRefresh, full} = props;
  const theme: any = useTheme();
  const listRef: any = useRef(null);

  return (
    <StyleScrollView
      style={styles.scrollCon}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      refreshControl={
        onRefresh && (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={-1}
            tintColor={theme.color.refresh.primary0 || '#C00F27'}
          />
        )
      }
      ref={listRef}
      scrollEventThrottle={0}
      {...props}>
      <View style={{padding: full ? 0 : 16, flexGrow: 1}}>{children}</View>
    </StyleScrollView>
  );
};

const styles = StyleSheet.create({
  scrollCon: {flex: 1},
  container: {flexGrow: 1},
});
