import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

/* Import Component */
let ResultHome = require('./ResultHome')
let ResultExpanded = require('./ResultExpanded')

const Stack = createStackNavigator();

const Result = () => {
  return (

   
    <NavigationContainer independent={true} >
      <Stack.Navigator>
        <Stack.Screen
          name="ResultHome"
          component={ResultHome}
          options={{headerShown: false, animationEnabled: false }}
        
        />
        <Stack.Screen 
          name="ResultExpanded"
          component = {ResultExpanded}
          options={{headerShown: false, animationEnabled: false }}
        ></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

module.exports = Result