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
import { Lefticon, Moreicon, Righticon } from './components/icons'

import theme from './utils/theme'
import Button from './components/button'

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
      <HomeStack.Screen
        options={({ route, navigation }) => {
          return {
            title: (route.params && route.params.title) || 'boş',
            headerStyle: {
              backgroundColor: theme.colors.softRed
            },
            headerTintColor: theme.colors.red,
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerLeft: () => (
              <Button>
                <Moreicon />
              </Button>
            )
          }
        }}
        name="Detail"
        component={DetailView}
      />
    </HomeStack.Navigator>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={(props) => <TabBar {...props} />}
          >
            <Tab.Screen
              options={{
                headerShown: false
              }}
              name="History"
              component={HistoryView}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Search"
              component={SearchStack}
            />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
