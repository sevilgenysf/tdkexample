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
import SimpleCardContainer, { SimpleCardTitle } from '../components/simple-card'

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

  const HERO_HEIGHT = 230

  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const isFocused = useIsFocused()

  const bgOpacity = useRef(new Animated.Value(1)).current // Initial value for opacity: 0
  const heroHeight = useRef(new Animated.Value(HERO_HEIGHT)).current // Initial value for opacity: 0

  useEffect(() => {
    if (isSearchFocus) {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
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
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230,
        useNativeDriver: false
      }).start()

      //hero-height
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 230,
        useNativeDriver: false
      }).start()
    }
  }, [bgOpacity, heroHeight, isSearchFocus])

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
        <Box as={Animated.View} opacity={bgOpacity} mt={-120}>
          <Bg pt={60} pb={26}>
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo color="white" width={100} />
            </Box>
          </Bg>
        </Box>
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
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Box py={5}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              ListHeaderComponent={<Text>Son arananlar</Text>}
            />
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
                <CardSummary>??ok az (para).</CardSummary>
              </CardContainer>
            </Box>

            <Box mt={30}>
              <Text color="textLight">Bir Deyim - Atas??z??</Text>

              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Detail')}
              >
                <CardTitle>siyem siyem a??lamak</CardTitle>
                <CardSummary>
                  hafif hafif, ince ince, durmadan g??zya???? d??kmek.
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
                    <CardSummary>??ok az (para).</CardSummary>
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
