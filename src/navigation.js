import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DetailView from './views/detail'
import SearchView from './views/search'
import HistoryView from './views/history'
import FavoriteView from './views/favorite'

import TabBar from './components/tab-bar'
import { Lefticon, Righticon, Moreicon } from './components/icons'

import theme from './utils/theme'
import Button from './components/button'

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

function SearchStack({ route }) {
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
            title: route?.params?.keyword,
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: 'none',
              height: '100%',
              padding: 0
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Button px={20} onPress={() => navigation.navigate('Search')}>
                <Lefticon color={theme.colors.textDark} height={24} />
              </Button>
            ),
            headerRight: () => (
              <Button onPress={() => navigation.navigate('Search')}>
                <Moreicon color={theme.colors.textDark} height={24} />
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

const Navigation = () => {
  return (
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
  )
}

export default Navigation
