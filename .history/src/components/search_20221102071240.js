import React, { useEffect } from 'react'
import { Keyboard } from 'react-native'

import Text from '../components/text'
import Box from './box'
import Input from './input'
import { Search, Close } from './icons'
import theme from '../utils/theme'
import Button from './button'

const SearchBox = ({ onChangeFocus }) => {
  const [value, setValue] = React.useState('')
  const [isFocus, setFocus] = React.useState(false)

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', keyboardDidHide)
  })

  const keyboardDidShow = () => {
    onChangeFocus(true)
  }

  const keyboardDidHide = () => {
    onChangeFocus(false)
  }

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
            fontWeight: 'bold',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 20,
            elevation: 10
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
          onChangeText={(text) => setValue(text)}
        />
        {value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <Close color={theme.colors.textDark} />
          </Button>
        )}
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
