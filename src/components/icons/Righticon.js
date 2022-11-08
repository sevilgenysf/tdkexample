import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const SvgRighticon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 12 18"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}
  >
    <Path d="m3 0 9 9-9 9-2.23-2.23L7.54 9 .77 2.23 3 0Z" fill="#000" />
  </Svg>
)
const Memo = memo(SvgRighticon)
export default Memo
