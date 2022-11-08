import React from 'react'

import Text from '../components/text'
import Box from './box'
import Input from './input'
import { Search } from './icons'

const SearchMain = () => {
  return (
    <Box>
      <Search />
      <Input
        placeholder="Türkçe Sözlük' te Ara."
        placeholderTextColor="textMedium"
        bg="white"
        height={52}
        borderRadius={8}
        pl={52}
      />
      <Text mt={20}>Mehabaasdasd</Text>
    </Box>
  )
}

export default SearchMain
