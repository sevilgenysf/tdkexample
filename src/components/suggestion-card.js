import React from 'react'
import { ActivityIndicator } from 'react-native'

import CardContainer, { CardSummary, CardTitle } from './card'
import Box from './box'
import Text from './text'

function SuggestionCard({ title, onPress, data, ...props }) {
  return (
    <Box {...props}>
      <Text color="textLight">{title}</Text>

      <CardContainer mt={10} onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </CardContainer>
    </Box>
  )
}

export default SuggestionCard
