import React from 'react'
import Button from './button'
import Text from './text'

function ActionButton({ children }) {
  return (
    <Button
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
      }}
      bg="white"
      borderRadius="full"
      minWidth="actionButton"
      height="actionButton"
    >
      {children}
    </Button>
  )
}

export function ActionButtonTitle({ children }) {
  return <Text color="textLight">{children}</Text>
}

export default ActionButton
