import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {IconCom, FooterCom} from 'components';
import Icon from 'assets/icons';
import {Home} from 'screens/home';
import {LeaderBoards, LeaderBoard} from 'screens/leaderboard';
import {Rewards, Reward} from 'screens/reward';
import {More, MoreDetail, Language} from '@screens/more';
import {Dialog} from 'screens/result';

const Stack: any = createStackNavigator<Navigation.AppNavigationList>();
const Tab: any = createBottomTabNavigator<Navigation.BottomTabNavigationList>();

const handleTabBarIcon = (route: any, color: string, size: number) => {
  const icons: any = {
    HomeTab: 'home',
    Settings: 'account',
  };

  return (
    <IconCom
      name={icons[route.name]}
      type="MaterialCommunityIcons"
      color={color}
      iconSize={size}
    />
  );
};

const handleFooter = (props: any) => {
  return <FooterCom {...props} />;
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}: any) => ({
        tabBarIcon: ({color, size}: any) =>
          handleTabBarIcon(route, color, size),
        headerShown: false,
      })}
      tabBar={(props: any) => handleFooter(props)}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: <Icon.HomeSvg />,
          tabBarActiveIcon: <Icon.ActiveHomeSvg />,
        }}
      />
      <Tab.Screen
        name="LeaderBoardTab"
        component={LeaderBoards}
        options={{
          tabBarLabel: 'Board',
          tabBarIcon: <Icon.WalletSvg />,
          tabBarActiveIcon: <Icon.ActiveWalletSvg />,
        }}
      />
      <Tab.Screen
        name="RewardsTab"
        component={Rewards}
        options={{
          tabBarLabel: 'Rewards',
          tabBarIcon: <Icon.RewardSvg />,
          tabBarActiveIcon: <Icon.ActiveRewardSvg />,
        }}
      />
      <Tab.Screen
        name="MoreTab"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: <Icon.UserSvg width={23} height={23} />,
          tabBarActiveIcon: <Icon.ActiveUserSvg width={23} height={23} />,
        }}
      />
    </Tab.Navigator>
  );
};

const AppScreens = {
  BottomTab,
  Home,
  LeaderBoards,
  LeaderBoard,
  Rewards,
  Reward,
  More,
  MoreDetail,
  Language,
};

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group
        screenOptions={{
          cardStyleInterpolators:
            CardStyleInterpolators.forModalPresentationIOS,
        }}>
        {Object.entries({
          ...AppScreens,
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

export default () => AppStackNavigator();
