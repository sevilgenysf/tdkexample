import React from 'react'
import { Text } from 'react-native'
import Box from './box'

export default function CardContainer({ children, ...props }) {
  return (
    <Box borderRadius="normal" py={16} px={12} bg="softRed" {...props}>
      <Box borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Box>
  )
}

export function CardTitle({ children }) {
  return (
    <Text fontSize={28} style={{ fontWeight: 'bold' }}>
      {children}
    </Text>
  )
}

export function CardSummary({ children }) {
  return (
    <Text style={{ fontSize: 14, color: '#485158', marginTop: 8 }}>
      {children}
    </Text>
  )
}
