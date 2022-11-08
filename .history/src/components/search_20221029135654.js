import React from 'react'
import { TouchableOpacity } from 'react-native'

import Text from '../components/text'
import Box from './box'
import Input from './input'
import { Search } from './icons'
import theme from '../utils/theme'
import Button from './button'

const SearchBox = () => {
  const [isFocus, setFocus] = React.useState(false)

  const onFocus = () => {
    setFocus(true)
  }

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
        onFocus={onFocus}
      />
      <Button px={15} height={52}>
        <Text>Vazgeç</Text>
      </Button>
    </Box>
  )
}

export default SearchBox
