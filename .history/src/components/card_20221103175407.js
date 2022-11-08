import React from 'react'
import { Text } from 'react-native'

export function CardTitle({ children }) {
  return (
    <Text fontSize={18} style={{ fontWeight: 'bold' }}>
      {children}
    </Text>
  )
}

export default function CardSummary({ children }) {
  return <Text fontSize={14}>{children}</Text>
}
