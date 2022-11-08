import React from 'react'

import Text from '../components/text'
import Box from './box'
import Input from './input'

const Search = () => {
  return (
    <Box>
      <Input
        placeholder="Merhaba nasılsın?"
        placeholderTextColor="white"
        bg="red"
      />
      <Text mt={20}>Mehabaasdasd</Text>
    </Box>
  )
}

export default Search
