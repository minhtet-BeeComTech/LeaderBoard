import React, {useRef, useMemo, useCallback} from 'react';
import {
  StatusBar,
  ScrollView,
  RefreshControl,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {useTheme} from '@emotion/react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

import {StyledSafeContainer, StyledContainer} from 'theme';
import {NetInfoCom, CommingSoonCom} from '../result';
import {LoaderCom} from './Loader';
import {HeaderCom} from './Header';

export const ContainerCom: React.FC<CommonComponents.ContainerCom> = ({
  children,
  loadingBgColor = 'transparent',
  loadingProps,
  isCommingSoon = false,
  commingSoonProps,
  netInfoProps,
  isFooter = true,
  isStatusBarHide = false,
  isTranslucent = false,
  isScroll = true,
  statusBgColor,
  statusBarStyle,
  bottomSafeStyle,
  isLoading = false,
  refreshing = false,
  full = false,
  edges = ['top', 'left', 'right'],
  onRefresh,
  ...props
}) => {
  const theme: any = useTheme();
  const netInfo = useNetInfo();
  const listRef: any = useRef(null);

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(
          theme.color.header[statusBgColor] || statusBgColor || 'transparent',
        );
      }
      StatusBar.setHidden(isStatusBarHide);
      StatusBar.setBarStyle(
        statusBarStyle || theme?.color?.mode === 'dark'
          ? 'light-content'
          : 'dark-content',
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme.color.mode, isFooter, isTranslucent]),
  );

  const handleViewProps = useMemo(() => {
    if (loadingBgColor !== 'transparent' && isLoading) {
      return null;
    }
    return netInfo?.isConnected
      ? children
      : netInfo?.details && <NetInfoCom {...netInfoProps} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [netInfo?.isConnected, loadingBgColor, isLoading, children]);

  return (
    <>
      <StatusBar showHideTransition="slide" translucent animated />
      <StyledSafeContainer edges={edges} {...props}>
        <HeaderCom {...props} />
        <StyledContainer {...props}>
          {isCommingSoon ? (
            <CommingSoonCom {...commingSoonProps} />
          ) : (
            <>
              {isScroll ? (
                <ScrollView
                  style={[
                    styles.scrollView,
                    {marginTop: props?.SH && -props.SH},
                  ]}
                  contentContainerStyle={styles.scrollViewContent}
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
                  // onScroll={event => {}}
                  scrollEventThrottle={0}
                  nestedScrollEnabled={true}>
                  <View style={[styles.contentView, {padding: full ? 0 : 16}]}>
                    {handleViewProps}
                  </View>
                </ScrollView>
              ) : (
                <View
                  style={[
                    styles.contentView,
                    {
                      padding: full ? 0 : 16,
                      paddingBottom: edges?.includes('button')
                        ? full
                          ? 0
                          : 16
                        : 0,
                      marginTop: props?.SH && -props.SH,
                    },
                  ]}>
                  {handleViewProps}
                </View>
              )}
              <LoaderCom
                loadingBgColor={loadingBgColor}
                isLoading={isLoading}
                {...loadingProps}
              />
            </>
          )}
        </StyledContainer>
      </StyledSafeContainer>
      {bottomSafeStyle && (
        <SafeAreaView
          edges={['bottom']}
          style={[styles.bottomSafe, bottomSafeStyle]}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentView: {
    flexGrow: 1,
  },
  chatIcon: {
    position: 'absolute',
    right: 10,
  },
  scrollicon_wrap: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 16,
  },
  bottomSafe: {
    flex: 0,
  },
});
