import React from 'react'
import { Text } from 'react-native'
import Box from './box'
import Button from './button'

export default function SimpleCardContainer({ children, ...props }) {
  return (
    <Button borderRadius="normal" py={16} px={12} bg="softRed" {...props}>
      <Box borderLeftWidth={3} borderLeftColor="light" pl={12} flex={1}>
        {children}
      </Box>
    </Button>
  )
}

export function CardTitle({ children }) {
  return (
    <Text fontSize={18} style={{ fontWeight: 'bold', fontSize: 16 }}>
      {children}
    </Text>
  )
}
