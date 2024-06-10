import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeContainer from '../container/HomeContainer';
import {ScreenName} from '../utilis/Constants';
import TabBar from './TabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchContainer from '../container/SearchContainer';
import FavoriteContainer from '../container/FavoriteContainer';
import ProfileContainer from '../container/ProfileContainer';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = (props: any) => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={ScreenName.HOME_TAB}
        component={HomeContainer}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ScreenName.SEARCH}
        component={SearchContainer}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ScreenName.FAVORITE}
        component={FavoriteContainer}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ScreenName.PROFILE}
        component={ProfileContainer}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
