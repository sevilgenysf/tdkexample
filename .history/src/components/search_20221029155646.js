import React from 'react'
import { Keyboard } from 'react-native'

import Text from '../components/text'
import Box from './box'
import Input from './input'
import { Search, Close } from './icons'
import theme from '../utils/theme'
import Button from './button'

const SearchBox = () => {
  const [isFocus, setFocus] = React.useState(false)

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Box position="absolute" zIndex={1} left={16} top={14}>
          <Search color={theme.colors.textMedium} />
        </Box>
        <Input
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
          placeholder="Türkçe Sözlük' te Ara."
          placeholderTextColor="textMedium"
          bg="white"
          color="textDark"
          height={52}
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          borderRadius={8}
          pl={52}
          onFocus={() => setFocus(true)}
        />
        <Box position="absolute" zIndex={1} right={16} top={14}>
          <Close color="red" />
        </Box>
      </Box>
      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default SearchBox
