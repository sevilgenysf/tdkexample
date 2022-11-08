import React from 'react'
import { StatusBar, Text, View, SafeAreaView } from 'react-native'

function HistoryView() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Search history!!</Text>
    </SafeAreaView>
  )
}

export default HistoryView
