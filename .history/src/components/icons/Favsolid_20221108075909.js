import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const SvgFavsolid = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 28"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}
  >
    <Path
      d="M19.333 11.51V3.508A2.67 2.67 0 0 0 16.667.843H3.333A2.67 2.67 0 0 0 .667 3.509V27.333L10 21.112l9.333 6.221V11.51Z"
      fill="red"
    />
  </Svg>
)
const Memo = memo(SvgFavsolid)
export default Memo
