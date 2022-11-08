import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const SvgMoreicon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 6"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}
  >
    <Path
      d="M12 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Zm9 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3ZM3 0C1.35 0 0 1.35 0 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Z"
      fill="#000"
    />
  </Svg>
)
const Memo = memo(SvgMoreicon)
export default Memo
