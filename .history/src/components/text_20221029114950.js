import styled from 'styled-components'
import { Text as T } from 'react-native'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  typography,
  borderRadius
} from 'styled-system'

const Text = styled(T)(compose(color, size, space, typography, borderRadius))

export default Text
