import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Menu(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 19.5h8.75M2 4.5h20H2zM2 12h20H2z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Menu;
