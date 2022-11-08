import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Box from '../components/box'
import Text from '../components/text'

function DetailView() {
  const isFocused = useIsFocused()
  return (
    <Box as={SafeAreaView} flex={1} p={16}>
      {isFocused && (
        <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />
      )}
      <Text fontSize={32} fontWeight="bold">
        Detay
      </Text>
      <Text color="textLight">Arapça kalem</Text>
    </Box>
  )
}

export default DetailView
