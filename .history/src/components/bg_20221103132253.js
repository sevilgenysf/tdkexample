import React from 'react'

function Bg() {
  return (
    <Box
      as={ImageBackground}
      source={bg}
      style={{ width: '100%', height: '100%' }}
    >
      {/* logo */}
      <Box flex={1} alignItems="center" justifyContent="center">
        <Logo color="white" width={100} />
      </Box>
    </Box>
  )
}

export default Bg
