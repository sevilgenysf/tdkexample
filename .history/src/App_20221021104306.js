import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchView from './views/search';
import HistoryView from './views/history';
import FavoriteView from './views/favorite';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={SearchView} />
        <Tab.Screen name="Settings" component={HistoryView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
