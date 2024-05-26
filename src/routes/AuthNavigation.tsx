import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {Login, Register} from 'screens/auth';
import {Dialog} from 'screens/result';

const Stack: any = createStackNavigator<Navigation.AppNavigationList>();

const AuthScreens = {
  Login,
  Register,
};

export default (props: any) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
      {...props}>
      <Stack.Group
        screenOptions={{
          cardStyleInterpolators:
            CardStyleInterpolators.forModalPresentationIOS,
        }}>
        {Object.entries({
          ...AuthScreens,
        }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={() => ({
              title: name,
            })}
          />
        ))}
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          presentation: 'transparentModal',
        }}>
        <Stack.Screen name="Dialog" component={Dialog} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
