import React from 'react'

import { Button } from 'react-native'
import { Logo } from '../components/icons'

import Search from '../components/search'
import Box from '../components/box'

function SearchView({ navigation }) {
  return (
    <Box bg="atasozleriLight">
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />

      <Box py={20}>
        <Logo color="blue" width={100} />
      </Box>

      <Box>
        <Search />
      </Box>
    </Box>
  )
}

export default SearchView
