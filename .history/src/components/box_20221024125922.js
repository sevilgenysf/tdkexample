import styled from 'styled-components';
import {View} from 'react-native';
import {compose, color, size, space} from 'styled-system';

const Box = styled(View)(compose(color, size, space));

export default Box;
