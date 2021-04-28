import * as React from 'react';
import { MeetupsScreen } from '../screens';
import { HeaderRight } from '../components';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const navigatorConfig = {
  headerLeft: () => null,
  headerTitle: 'meetApp',
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#6C16B9' },
  headerRight: () => <HeaderRight />
};

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Meetups" screenOptions={navigatorConfig}>
      <Stack.Screen name="Meetups" component={MeetupsScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
