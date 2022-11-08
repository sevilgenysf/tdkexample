import React from 'react'
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

function Bg() {
  return (
    <Box
      as={ImageBackground}
      source={bg}
      style={{ width: '100%', height: '100%' }}
    >
      {/* logo */}
      <Box flex={1} alignItems="center" justifyContent="center">
        <Logo color="white" width={100} />
      </Box>
    </Box>
  )
}

export default Bg
