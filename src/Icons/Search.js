import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Search(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22 22l-6.667-6.667L22 22zM17.556 9.778a7.777 7.777 0 11-15.554 0 7.777 7.777 0 0115.554 0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Search;
