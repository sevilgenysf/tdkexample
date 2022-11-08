import React from 'react'
import { Text } from 'react-native'
import Box from './box'

export function CardTitle({ children }) {
  return (
    <Text fontSize={18} style={{ fontWeight: 'bold' }}>
      {children}
    </Text>
  )
}

export function CardContainer({ children }) {
  return (
    <Box borderRadius="normal" py={16} px={12} bg="red">
      {children}
    </Box>
  )
}

export function CardSummary({ children }) {
  return <Text fontSize={14}>{children}</Text>
}
