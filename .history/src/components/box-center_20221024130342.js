import styled from 'styled-components';
import {View} from 'react-native';

import Box from './box';

const Box = styled(View)(compose(color, size, space, flexbox));

export default Box;
