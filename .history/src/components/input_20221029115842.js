import styled from 'styled-components'
import { TextInput } from 'react-native'
import { compose, color, size, space, typography } from 'styled-system'

const Input = styled(TextInput)(compose(color, size, space, typography))

export default Input
