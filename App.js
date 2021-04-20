import * as React from 'react';
import { disableFontScaling } from './config';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

disableFontScaling();
const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>hola weon</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
