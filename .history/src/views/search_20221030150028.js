import React from 'react'

import { Button, ImageBackground } from 'react-native'
import { Logo } from '../components/icons'

import Search from '../components/search'
import Box from '../components/box'

import bg from '../assets/bg.jpg'

function SearchView({ navigation }) {
  return (
    <Box bg="atasozleriLight">
      <Box as={ImageBackground} source={bg} width="100%">
        <Box py={20}>
          <Logo color="white" width={100} />
        </Box>
      </Box>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />

      <Box p={10}>
        <Search />
      </Box>
    </Box>
  )
}

export default SearchView