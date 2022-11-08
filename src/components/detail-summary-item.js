import React from 'react'
import theme from '../utils/theme'

import Box from './box'
import Text from './text'

export function DetailSummaryItemContainer({ children, border, ...props }) {
  return (
    <Box position="relative" bg="white" px={26} py={20} {...props}>
      {border && (
        <Box
          position="absolute"
          height={1}
          left={12}
          right={12}
          top={0}
          bg="light"
        />
      )}
      <Box flexDirection="row">
        <Text color="textLight" ml={-14} mr={8}>
          1
        </Text>
        <Text color="red">İsim</Text>
      </Box>
      <Box mt={8}>{children}</Box>
    </Box>
  )
}

export function DetailSummaryItemTitle({ children, ...props }) {
  return <Text fontWeight="bold">{children}</Text>
}

export function DetailSummaryItemSummary({ children, ...props }) {
  return (
    <Text ml={12} mt={10} fontWeight="500" color={theme.colors.textLight}>
      {children}
    </Text>
  )
}
