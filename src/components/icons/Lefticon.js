import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const SvgLefticon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 12 18"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}
  >
    <Path d="M9 0 0 9l9 9 2.23-2.23L4.46 9l6.77-6.77L9 0Z" fill="#000" />
  </Svg>
)
const Memo = memo(SvgLefticon)
export default Memo
