/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import {Home} from './src/Screens';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Home />
    </>
  );
}

export default App;
