import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthLoadingScreen, SignInScreen } from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AuthLoading" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
