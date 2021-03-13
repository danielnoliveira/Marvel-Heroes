import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import * as Colors from './../../assets/colors';
function Marvel(props) {
  return (
    <Svg
      width={95}
      height={35}
      viewBox="0 0 95 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M82.55 6.38V.006H65.196l-2.854 21.3-2.824-21.3H53.26l.701 5.684C53.238 4.233 50.676.005 45.037.005c-.037-.003-6.266 0-6.266 0l-.024 31.047L34.185.005 25.99 0 21.27 32.17 21.273.004h-7.844L10.6 18.075 7.847.004H0v34.973h6.18V18.121l2.81 16.857h3.285l2.771-16.857v16.857h11.912l.723-5.382h4.796l.72 5.382 11.695.007h.01v-.007h.014V23.625l1.434-.213 2.968 11.573H55.367l-.002-.007H55.383l-3.895-13.565c1.974-1.492 4.203-5.283 3.61-8.91v-.002c.006.05 3.676 22.499 3.676 22.499l7.194-.022 4.916-31.7v31.7H82.55v-6.29h-5.537v-8.021h5.537V14.28h-5.537v-7.9h5.537zM28.409 24.05L30.105 9.1l1.762 14.951h-3.458zm17.961-6.904a3.276 3.276 0 01-1.454.354V6.25l.03-.002c.484-.002 4.092.15 4.092 5.566 0 2.833-1.227 4.618-2.668 5.332zM95 28.683v6.29H83.62V0h6.127v28.683H95z"
        fill={Colors.primary_red}
      />
    </Svg>
  );
}

export default Marvel;
