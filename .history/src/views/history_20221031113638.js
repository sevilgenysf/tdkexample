import React from 'react'
import { StatusBar, Text, View, SafeAreaView } from 'react-native'

function HistoryView() {
  return (
    <Box flex={1}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Search history!!</Text>
    </Box>
  )
}

export default HistoryView
