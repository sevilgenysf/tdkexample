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
import Bg from '../components/bg'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CardContainer, { CardTitle, CardSummary } from '../components/card'
import theme from '../utils/theme'

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const isFocused = useIsFocused()

  const heroHeight = useRef(new Animated.Value(285)).current // Initial value for opacity: 0

  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 230,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(heroHeight, {
        toValue: 280,
        duration: 230,
        useNativeDriver: false
      }).start()
    }
  }, [heroHeight, isSearchFocus])

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {isFocused && (
        <StatusBar
          barStyle={isSearchFocus ? 'dark-content' : 'light-content'}
          backgroundColor={isSearchFocus ? '#F8F8F8' : '#E11E3C'}
        />
      )}
      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        {!isSearchFocus && (
          <Bg>
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo color="white" width={100} />
            </Box>
          </Bg>
        )}
        {/* search */}
        <Box
          position="absolute"
          left={0}
          bottom={isSearchFocus ? 0 : -42}
          p={16}
          width="100%"
        >
          <Search onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>
      {/* Content */}
      <Box flex={1} bg="blue" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>History</Text>
          </Box>
        ) : (
          <Box p={30} flex={1}>
            <CardContainer>
              <CardTitle>On para</CardTitle>
              <CardSummary>çok az (para).</CardSummary>
            </CardContainer>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
