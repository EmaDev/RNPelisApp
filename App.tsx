import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, Text, View } from 'react-native';
import { Navigation } from './src/navigators/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return(
    
    <NavigationContainer>
       <Navigation/>
    </NavigationContainer>

  )
}

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!"
]);
export default App;
