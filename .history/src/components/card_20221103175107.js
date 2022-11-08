import React from 'react'
import { Text } from 'react-native'

export default function CardTitle({ children }) {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  )
}
