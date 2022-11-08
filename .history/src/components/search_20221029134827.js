import React from 'react'
import { Button, TouchableOpacity } from 'react-native'

import Text from '../components/text'
import Box from './box'
import Input from './input'
import { Search } from './icons'
import theme from '../utils/theme'

const SearchBox = () => {
  return (
    <Box position="relative" flexDirection="row" alignItems="center">
      <Box position="absolute" zIndex={1} left={16} top={14}>
        <Search color={theme.colors.textMedium} />
      </Box>
      <Input
        flex={1}
        placeholder="Türkçe Sözlük' te Ara."
        placeholderTextColor="textMedium"
        bg="white"
        color="textDark"
        height={52}
        borderRadius={8}
        pl={52}
      />
      <Button title="Press Me" />
      <TouchableOpacity>
        <Text>Merhaba</Text>
      </TouchableOpacity>
    </Box>
  )
}

export default SearchBox
