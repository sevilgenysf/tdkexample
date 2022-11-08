import React from 'react'
import Button from './button'
import Text from './text'

function ActionButton({ children }) {
  return (
    <Button
      bg="red"
      borderRadius="full"
      minWidth="actionButton"
      height="actionButton"
    >
      {children}
    </Button>
  )
}

export function ActionButtonTitle({ children }) {
  return <Text>{children}</Text>
}

export default ActionButton
