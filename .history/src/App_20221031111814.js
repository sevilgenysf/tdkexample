import React from 'react'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DetailView from './views/detail'
import SearchView from './views/search'
import HistoryView from './views/history'
import FavoriteView from './views/favorite'

import TabBar from './components/tab-bar'
import Box from './components/box'

import theme from './utils/theme'

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerShown: false
        }}
        name="Search"
        component={SearchView}
      />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Search"
          tabBar={(props) => <TabBar {...props} />}
        >
          <Tab.Screen name="History" component={HistoryView} />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Search"
            component={SearchStack}
          />
          <Tab.Screen name="Favorite" component={FavoriteView} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
