import React, { useEffect, useRef } from 'react'

import {
  Animated,
  Button,
  ImageBackground,
  StatusBar,
  Text,
  FlatList
} from 'react-native'
import { Logo } from '../components/icons'

import Search from '../components/search'
import Box from '../components/box'
import { useIsFocused } from '@react-navigation/native'
import Bg from '../components/bg'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CardContainer, {
  CardTitle,
  CardSummary,
  CardBody
} from '../components/card'

function SearchView({ navigation }) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item'
    }
  ]

  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const isFocused = useIsFocused()

  const bgOpacity = useRef(new Animated.Value(1)).current // Initial value for opacity: 0
  const heroHeight = useRef(new Animated.Value(285)).current // Initial value for opacity: 0

  useEffect(() => {
    if (isSearchFocus) {
      // hero-height
      Animated.timing(bgOpacity, {
        toValue: 52 + 32,
        duration: 230,
        useNativeDriver: false
      }).start()
      // hero-height
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
      <Box flex={1} bg="white" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>History</Text>
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <Box>
              <Text color="textLight">Bir Deyim</Text>

              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Detail')}
              >
                <CardTitle>on para</CardTitle>
                <CardSummary>çok az (para).</CardSummary>
              </CardContainer>
            </Box>

            <Box mt={30}>
              <Text color="textLight">Bir Deyim - Atasözü</Text>

              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Detail')}
              >
                <CardTitle>siyem siyem ağlamak</CardTitle>
                <CardSummary>
                  hafif hafif, ince ince, durmadan gözyaşı dökmek.
                </CardSummary>
              </CardContainer>
            </Box>
            {/* <FlatList
              data={DATA}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Box py={5}>
                  <CardContainer>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSummary>çok az (para).</CardSummary>
                  </CardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            /> */}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
