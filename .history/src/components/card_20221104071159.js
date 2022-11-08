import React from 'react'
import { Text } from 'react-native'
import Box from './box'

export default function CardContainer({ children }) {
  return (
    <Box borderRadius="normal" py={16} px={12} bg="softRed">
	  <Box borderLeftWidth={3} borderLeftColor="light">
      {children}
    </Box>
    </Box>
  )
}

export function CardBody({ children }) {
  return (
    
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
