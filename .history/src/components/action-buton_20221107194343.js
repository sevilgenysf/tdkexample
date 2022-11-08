import React from 'react'
import Button from './button'

function ActionButton({ children }) {
  return (
    <Button bg="red" borderRadius="full">
      {children}
    </Button>
  )
}

export default ActionButton
