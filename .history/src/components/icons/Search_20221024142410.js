import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SvgSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="'className='"
    height="'className='"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="search_svg__feather search_svg__feather-search"
    accessibilityRole="image"
    {...props}>
    <Circle cx={11} cy={11} r={8} />
    <Path d="m21 21-4.35-4.35" />
  </Svg>
);
export default SvgSearch;
