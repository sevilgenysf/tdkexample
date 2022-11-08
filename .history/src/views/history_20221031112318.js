import React from 'react'
import { StatusBar, Text, View } from 'react-native'

function HistoryView() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Search history!!</Text>
    </View>
  )
}

export default HistoryView
