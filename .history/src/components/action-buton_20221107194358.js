import React from 'react'
import Button from './button'

function ActionButton({ children }) {
  return (
    <Button bg="red" borderRadius="full" minWidth={48}>
      {children}
    </Button>
  )
}

export default ActionButton
