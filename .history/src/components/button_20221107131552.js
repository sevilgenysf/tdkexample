import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
  position
} from 'styled-system'

const Button = styled(TouchableOpacity)(
  compose(color, size, space, flexbox, layout, borderRadius, position)
)

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black'
}

export default Button
