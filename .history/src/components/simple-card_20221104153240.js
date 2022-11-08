import React from 'react'
import { Text } from 'react-native'
import Box from './box'
import Button from './button'

export default function SimpleCardContainer({ children, ...props }) {
  return (
    <Button borderRadius="normal" p={16} bg="softRed" {...props}>
      {children}
    </Button>
  )
}

export function SimpleCardTitle({ children }) {
  return <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{children}</Text>
}
