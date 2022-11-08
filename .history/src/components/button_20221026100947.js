import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {compose, color, size, space, flexbox} from 'styled-system';

const Button = styled(TouchableOpacity)(compose(color, size, space, flexbox));

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
};

export default Button;
