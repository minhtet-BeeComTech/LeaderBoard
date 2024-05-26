import React, {useState, useRef, memo} from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@emotion/react';

import {TextCom} from '../typo';
import {IconCom} from '../icon';

let tmp: any = null;
let timeout: number = 300;
export const FlatListCom: React.FC<CommonComponents.FlatListCom> = memo(
  ({
    flatRef,
    refreshing = false,
    onRefresh,
    emptytext = 'no_data_available',
    isLoading,
    isScrollToTop = true,
    scrollToTopBottom = 15,
    data = [],
    ...props
  }) => {
    const theme: any = useTheme();
    const flatListRef: any = useRef(null);
    const scrollYRef: any = useRef(0);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const content_offset = 300;

    const emptyComponent = () => (
      <View style={styles.emptyCon}>
        <IconCom
          name="inbox"
          type="Octicons"
          color="text"
          iconSize={50}
          style={styles.ico}
        />
        <TextCom>{emptytext}</TextCom>
      </View>
    );

    const footerComponent = () =>
      isLoading &&
      data?.length > 10 && (
        <ActivityIndicator
          size="small"
          color={theme.color.refresh.primary0}
          style={styles.footerCon}
        />
      );

    return (
      <View style={{flex: 1}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
            onRefresh && (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={-1}
                tintColor={theme.color.refresh.primary0}
              />
            )
          }
          contentContainerStyle={styles.container}
          ListEmptyComponent={emptyComponent}
          ListFooterComponent={footerComponent}
          ref={flatRef || flatListRef}
          onScroll={event => {
            scrollYRef.current = event.nativeEvent.contentOffset.y;
            clearTimeout(tmp);
            tmp = setTimeout(() => {
              setContentVerticalOffset(scrollYRef.current);
            }, timeout);
          }}
          data={data}
          {...props}
        />
        {contentVerticalOffset > content_offset && isScrollToTop && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              flatListRef?.current?.scrollToOffset({
                animated: true,
                offset: 0,
              });
            }}
            style={[
              styles.scrollicon_wrap,
              {
                bottom: scrollToTopBottom,
                backgroundColor: theme?.color?.container?.gray100,
              },
            ]}>
            <IconCom name="arrowup" type="AntDesign" color="white" />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  scrollicon_wrap: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
  },
  emptyCon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  ico: {marginBottom: 15},
  footerCon: {marginVertical: 10, marginBottom: 40},
  container: {flexGrow: 1},
});
