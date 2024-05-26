import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

declare global {
  namespace Navigation {
    type RootNavigationList = {
      Auth: undefined;
      App: undefined;
    };

    type AuthNavigationList = {
      Login: undefined;
      Register: undefined;
    };

    type AppNavigationList = {};

    type StaffNavigationList = {};

    type BottomTabNavigationList = {
      HomeTab: undefined;
      LeaderBoardTab: undefined;
      RewardsTab: undefined;
      MoreTab: undefined;
    };

    type AuthNavigationProp = NativeStackNavigationProp<AuthNavigationList>;

    type AppNavigationProp = NativeStackNavigationProp<AppNavigationList>;

    type HomeScreenNavProps = CompositeScreenProps<
      BottomTabScreenProps<BottomTabNavigationList, 'HomeTab'>,
      NativeStackScreenProps<AppNavigationList>
    >;
  }
}
