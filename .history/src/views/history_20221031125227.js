import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Box from '../components/box'

function HistoryView() {
  return (
    <Box as={SafeAreaView} flex={1}>
      <StatusBar barStyle="light-content" backgroundColor="#ecf0f1" />
      <Text>Search history!!</Text>
    </Box>
  )
}

export default HistoryView
