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
  return <Box p={20}>{children}</Box>
}

export function CardSummary({ children }) {
  return <Text fontSize={14}>{children}</Text>
}
