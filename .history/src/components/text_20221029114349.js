import styled from 'styled-components'
import { View } from 'react-native'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  borderRadius
} from 'styled-system'

const Text = styled(View)(compose(color, size, space, flexbox, borderRadius))

export default Text
