import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Merhaba Nasılsın?</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
