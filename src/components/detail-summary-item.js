import React from 'react'
import theme from '../utils/theme'

import Box from './box'
import Text from './text'

export default function DetailSummaryItemContainer({
  children,
  border,
  data,
  ...props
}) {
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
      {/* Body */}
      {data ? (
        <Box>
          <Box flexDirection="row">
            <Text color="textLight" ml={-14} mr={8}>
              {data.anlam_sira}
            </Text>
            <Text color="red">İsim</Text>
          </Box>
          <Box mt={8}>
            <Text fontWeight="bold">{data.anlam}</Text>
            {data.orneklerListe &&
              data.orneklerListe.map((item) => (
                <Box key={item.ornek_id}>
                  <Text
                    ml={12}
                    mt={10}
                    fontWeight="500"
                    color={theme.colors.textLight}
                  >
                    {item.ornek}
                    {'  '}
                    <Text fontWeight="bold" color={theme.colors.textLight}>
                      {item.yazar_id !== '0' && `- ${item.yazar[0].tam_adi}`}
                    </Text>
                  </Text>
                </Box>
              ))}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  )
}
