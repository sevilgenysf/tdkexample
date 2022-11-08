import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const SvgFav = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 22 28"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.333 3.333A1.333 1.333 0 0 0 3 4.667v18.742l7.225-5.16a1.333 1.333 0 0 1 1.55 0L19 23.408V4.667a1.334 1.334 0 0 0-1.333-1.334H4.333ZM1.505 1.838A4 4 0 0 1 4.333.667h13.334a4 4 0 0 1 4 4V26a1.333 1.333 0 0 1-2.109 1.085L11 20.972l-8.558 6.113A1.333 1.333 0 0 1 .333 26V4.667a4 4 0 0 1 1.172-2.829Z"
      fill="#000"
    />
  </Svg>
)
const Memo = memo(SvgFav)
export default Memo
