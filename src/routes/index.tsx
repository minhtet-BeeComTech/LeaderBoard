import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@emotion/react';

import {useSettings} from 'hook';
import * as theme from 'theme/attributes';
import RootNavigator from './RootNavigation';

export const navigationRef = createNavigationContainerRef();

export default (props: any) => {
  const {currentTheme, langCode} = useSettings();

  const deepLinking = {
    prefixes: ['http://leaderboard.com', 'leaderboard://'],
    config: {
      screens: {
        Auth: {},
        App: {},
      },
    },
  };

  const handleTheme = () => {
    let darkTheme = {...theme, langCode, color: theme.darkColor};
    let lightTheme = {...theme, langCode, color: theme.lightColor};
    if (currentTheme === 'light') {
      return lightTheme;
    } else {
      return darkTheme;
    }
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={handleTheme}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.avoidViewStyle}>
          <NavigationContainer
            ref={navigationRef}
            linking={deepLinking}
            fallback={null}
            theme={currentTheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator {...props} />
          </NavigationContainer>
        </KeyboardAvoidingView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  avoidViewStyle: {
    flex: 1,
  },
});
