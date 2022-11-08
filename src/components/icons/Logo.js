import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const SvgLogo = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 86 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}
  >
    <Path
      d="M8.212 7.815H0V0h25.695v7.815h-8.212v20H8.212v-20ZM27.815 0H38.41c11.125 0 16.556 5.43 16.556 13.642v.133c0 8.212-5.695 14.04-16.954 14.04H27.815V0Zm9.271 8.08v11.655h1.59c4.238 0 7.02-1.722 7.02-5.828v-.132c0-3.974-2.782-5.828-7.02-5.828h-1.59v.132ZM57.616 0h9.271v10.464L74.835 0h10.86l-9.668 12.053 9.8 15.762H74.703l-5.43-8.875-2.385 2.914v5.96h-9.271V0Z"
      fill="currentColor"
    />
  </Svg>
)
const Memo = memo(SvgLogo)
export default Memo
