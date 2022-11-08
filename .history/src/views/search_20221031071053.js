import React from 'react'

import { Button, ImageBackground, StatusBar } from 'react-native'
import { Logo } from '../components/icons'

import Search from '../components/search'
import Box from '../components/box'

import bg from '../assets/bg.jpg'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

function SearchView({ navigation }) {
  return (
    <Box as={SafeAreaView} bg="red">
      <StatusBar barStyle="light-content" backgroundColor="#E11E3C" />

      <Box>
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: 200 }}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Logo color="white" width={100} />
        </Box>
        <Box p={16} mb={-42}>
          <Search />
        </Box>
      </Box>
    </Box>
  )
}

export default SearchView
