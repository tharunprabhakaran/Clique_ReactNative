/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* Module Import */
let SplashScreen = require('./components/Splash/Splash')
let Home = require('./components/Home/Home')
let ResultExpanded = require('./components/Result/ResultExpanded')
const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer style={{
      backgroundColor: "white"
    }}>
    <Stack.Navigator style={{backgroundColor: "white"}}>
          {/* Direct Components */}
          <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false, animationEnabled: false }} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false, animationEnabled: false }} />

          {/* InDirect Components */}
          <Stack.Screen name="ResultExpanded" component={ResultExpanded} options={{headerShown: false, animationEnabled: false }} />

    </Stack.Navigator>
  </NavigationContainer>
  
  );
};

export default App;
