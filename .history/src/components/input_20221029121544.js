import styled, { ThemeConsumer } from 'styled-components'
import { TextInput } from 'react-native'
import { compose, color, size, space, typography } from 'styled-system'

import theme from '../utils/theme'

const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: ThemeConsumer.colors[props.placeholderText]
}))(compose(color, size, space, typography))

export default Input
