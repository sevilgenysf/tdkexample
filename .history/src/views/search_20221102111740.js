import React, { useEffect, useRef } from 'react'

import {
  Animated,
  Button,
  ImageBackground,
  StatusBar,
  Text
} from 'react-native'
import { Logo } from '../components/icons'

import Search from '../components/search'
import Box from '../components/box'
import { useIsFocused } from '@react-navigation/native'

import bg from '../assets/bg.jpg'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const isFocused = useIsFocused()

  const fadeAnim = useRef(new Animated.Value(285)).current // Initial value for opacity: 0

  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000
      }).start()
    }
  }, [fadeAnim, isSearchFocus])

  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      {isFocused && (
        <StatusBar barStyle="light-content" backgroundColor="#E11E3C" />
      )}
      {/* Header */}
      <Box position="relative" zIndex={1} height={isSearchFocus ? 100 : 285}>
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
            <Search onChangeFocus={(status) => setSearchFocus(status)} />
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
