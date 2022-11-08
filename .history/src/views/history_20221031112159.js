import React from 'react'
import { StatusBar, Text, View } from 'react-native'

function HistoryView() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle="light-content" backgroundColor="#E11E3C" />
      <Text>Search history!!</Text>
    </View>
  )
}

export default HistoryView
