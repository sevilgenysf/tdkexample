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
    <Text fontSize={18} style={{ fontWeight: 'bold' }}>
      {children}
    </Text>
  )
}

export function CardSummary({ children }) {
  return <Text fontSize={14}>{children}</Text>
}
