import React from 'react'
import { FlatList } from 'react-native'

import SimpleCardContainer, { SimpleCardTitle } from './simple-card'
import Box from './box'
import Text from './text'

const SearchHistoryList = ({ data }) => {
  return (
    <FlatList
      style={{ padding: 16 }}
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Box py={6}>
          <SimpleCardContainer>
            <SimpleCardTitle>{item.title}</SimpleCardTitle>
          </SimpleCardContainer>
        </Box>
      )}
      ListHeaderComponent={
        <Text color="textLight" style={{ marginBottom: 10 }}>
          Son aramalar
        </Text>
      }
    />
  )
}

export default SearchHistoryList
