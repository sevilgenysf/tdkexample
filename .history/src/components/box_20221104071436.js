import styled from 'styled-components'
import { View } from 'react-native'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  border,
  borderRadius
} from 'styled-system'

const Box = styled(View)(
  compose(color, size, space, flexbox, borderRadius, border)
)

export default Box
