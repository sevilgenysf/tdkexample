import styled from 'styled-components'
import { Text as T } from 'react-native'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  borderRadius
} from 'styled-system'

const Text = styled(T)(compose(color, size, space, flexbox, borderRadius))

export default Text
