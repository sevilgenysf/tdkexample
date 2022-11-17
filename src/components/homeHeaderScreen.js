import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

import Bg from './bg'
import Box from './box'
import Search from './search'
import { Logo } from './icons'

const HERO_HEIGHT = 230

const HomeHeaderScreeen = ({ isSearchFocus, onSearchFocus }) => {
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
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
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
        <Search onChangeFocus={(status) => onSearchFocus(status)} />
      </Box>
    </Box>
  )
}

export default HomeHeaderScreeen
