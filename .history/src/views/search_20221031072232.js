import React from 'react'

import { Button, ImageBackground, StatusBar, Text } from 'react-native'
import { Logo } from '../components/icons'

import Search from '../components/search'
import Box from '../components/box'

import bg from '../assets/bg.jpg'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

function SearchView({ navigation }) {
  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      <StatusBar barStyle="light-content" backgroundColor="#E11E3C" />
      {/* Header */}
      <Box position="relative" zIndex={1} height={285}>
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: '100%' }}
        >
          {/* logo */}
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo color="white" width={100} />
          </Box>
          {/* search */}
          <Box p={16} mb={-42} width="100%">
            <Search />
          </Box>
        </Box>
      </Box>
      {/* Content */}
      <Box flex={1} bg="white" pt={26}>
        <Box p={30} flex={1}>
          <Text>Mehaba</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchView
