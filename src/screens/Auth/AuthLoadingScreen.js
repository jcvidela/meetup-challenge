import * as React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import { getFromStorage } from '../../helpers';
import { useLoggedIn } from '../../hooks/useLogged';

const AuthLoadingScreen = ({ navigation }) => {
  const { verifySession } = useLoggedIn();
  // return to previous view
  useFocusEffect(onVerifyUser);

  function onVerifyUser() {
    verifySession();
    getFromStorage('session')
      .then((response) => navigation.navigate(response ? 'RootStackNavigator' : 'SignInScreen'))
      .catch(() => navigation.navigate('SignInScreen'));
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#6C16B9" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default AuthLoadingScreen;
