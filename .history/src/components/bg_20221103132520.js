import React, { useEffect, useRef } from 'react'

import { ImageBackground } from 'react-native'
import Box from '../components/box'
import bg from '../assets/bg.jpg'

function Bg({ children }) {
  return (
    <Box
      as={ImageBackground}
      source={bg}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </Box>
  )
}

export default Bg
