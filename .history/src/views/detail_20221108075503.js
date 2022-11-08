import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Box from '../components/box'
import Text from '../components/text'
import ActionButton, { ActionButtonTitle } from '../components/action-buton'
import { Fav, Sound, Hand } from '../components/icons'
import theme from '../utils/theme'

function DetailView() {
  const isFocused = useIsFocused()
  return (
    <Box as={SafeAreaView} flex={1} p={16}>
      {isFocused && (
        <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />
      )}
      <Box>
        <Text fontSize={32} fontWeight="bold">
          Detay
        </Text>
        <Text color="textLight" mt={6}>
          Arapça kalem
        </Text>
      </Box>
      <Box flexDirection="row">
        <ActionButton>
          <Fav width={14} height={14} color={theme.colors.textLight} />
        </ActionButton>
        <ActionButton>
          <Sound width={24} height={24} color={theme.colors.textLight} />
        </ActionButton>
        <ActionButton ml="auto">
          <Hand width={24} height={24} color={theme.colors.textLight} />
          <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
        </ActionButton>
      </Box>
    </Box>
  )
}

export default DetailView
