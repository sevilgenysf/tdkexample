import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Box from '../components/box'
import Text from '../components/text'
import { Moreicon } from '../components/icons'
import ActionButton from '../components/action-buton'

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
      <Box>
        <ActionButton></ActionButton>
      </Box>
    </Box>
  )
}

export default DetailView
