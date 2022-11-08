import React from 'react'
import Button from './button'

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

function Title({ children }) {
  return <Text>{children}</Text>
}

export default ActionButton
