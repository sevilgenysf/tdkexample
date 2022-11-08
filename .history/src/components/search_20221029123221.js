import React from 'react'

import Text from '../components/text'
import Box from './box'
import Input from './input'
import { Search } from './icons'
import theme from '../utils/theme'

const SearchBox = () => {
  return (
    <Box position="relative">
      <Box position="absolute" zIndex={1} left={10} top={10}>
        <Search color={theme.colors.textMedium} />
      </Box>
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

export default SearchBox
