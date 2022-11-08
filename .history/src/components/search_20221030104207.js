import React from 'react'
import { Keyboard } from 'react-native'

import Text from '../components/text'
import Box from './box'
import Input from './input'
import { Search, Close } from './icons'
import theme from '../utils/theme'
import Button from './button'

const SearchBox = () => {
  const [value, setValue] = React.useState('')
  const [isFocus, setFocus] = React.useState(false)

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
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
          value={value}
          bg="white"
          color="textDark"
          height={52}
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          borderRadius={8}
          pl={52}
          onFocus={() => setFocus(true)}
          onChangeText={(e) => setValue(e.text)}
        />
        <Button onPress={onClear} position="absolute" right={16} top={14}>
          <Close color={theme.colors.textDark} />
        </Button>
        <Button position="absolute" left={16} top={14}>
          <Search color={theme.colors.textMedium} />
        </Button>
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
