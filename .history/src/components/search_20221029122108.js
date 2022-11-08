import React from 'react'

import Text from '../components/text'
import Box from './box'
import Input from './input'

const Search = () => {
  return (
    <Box>
      <Input
        placeholder="Türkçe Sözlük' te Ara."
        placeholderTextColor="white"
        bg="atasozleriMedium"
        height={52}
      />
      <Text mt={20}>Mehabaasdasd</Text>
    </Box>
  )
}

export default Search
