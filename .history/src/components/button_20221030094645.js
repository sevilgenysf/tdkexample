import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import position,
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(color, size, space, flexbox, layout, borderRadius),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
