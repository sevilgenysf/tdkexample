import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Box from '../components/box'
import { useIsFocused } from '@react-navigation/native'

function HistoryView() {
  const isFocused = useIsFocused()
  return (
    <Box as={SafeAreaView} flex={1}>
      {isFocused && (
        <StatusBar backgroundColor="#74ADA2" barStyle="dark-content" />
      )}
      <Text>Search history!!</Text>
    </Box>
  )
}

export default HistoryView
