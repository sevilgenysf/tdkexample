import styled from 'styled-components'
import { TextInput } from 'react-native'
import { compose, color, size, space, typography } from 'styled-system'

const Text = styled(TextInput)(compose(color, size, space, typography))

export default Text
