import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator, RootStackNavigator } from '.';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthNavigator" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="RootStackNavigator" component={RootStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;