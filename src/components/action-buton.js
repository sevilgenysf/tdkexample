import React from 'react'
import Button from './button'
import Text from './text'

function ActionButton({ children, ...props }) {
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
      px={8}
      {...props}
    >
      {children}
    </Button>
  )
}

export function ActionButtonTitle({ children, ...props }) {
  return (
    <Text color="textLight" fontWeight="bold" mr={8} ml={8} {...props}>
      {children}
    </Text>
  )
}

export default ActionButton
