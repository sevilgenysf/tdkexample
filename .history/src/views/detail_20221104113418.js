import React from 'react'
import { Text, View, SafeAreaView, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Box from '../components/box'

function DetailView() {
  const isFocused = useIsFocused()
  return (
    <Box as={SafeAreaView} flex={1}>
      {isFocused && (
        <StatusBar
          barStyle={isSearchFocus ? 'dark-content' : 'light-content'}
          backgroundColor={isSearchFocus ? '#F8F8F8' : '#E11E3C'}
        />
      )}
      <Text>Search detail!!</Text>
    </Box>
  )
}

export default DetailView
