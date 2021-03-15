/**
 * Splash Screen Component
 */

import React from 'react';
import { useWindowDimensions } from 'react-native';

import {
  SafeAreaView,
  View,
  Text,
  Image
} from 'react-native';


const SplashScreen = ({ navigation }) => {

  /* @TODO Insert User Login Verification logic */
  setTimeout(()=>{
    navigation.navigate('ParentLogin')
    //navigation.navigate('ParentLogin')
  }, 1000)

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;


  return (

    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: "column",
    }}>

    {/* FIRST COMPONENT */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
        <Text
          style={{
            fontFamily: "Avenir Next",
            fontSize: 35,
            fontWeight: "500",

          }}>CLIQUE</Text>
      </View>

      {/* SECOND COMPONENT */}
      <View style={{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        
        
      }}>
        <Image
          resizeMode='cover'
          source={{
            uri: 'https://cliqueassets.s3.ap-south-1.amazonaws.com/Logo.png',
          }}
          style={{
            width: windowWidth * 0.5,
            height: windowHeight * 0.25,
          }}
        ></Image>
      </View>

      {/* THIRD COMPONENT */}
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        

      }}>
        <Text style={{
          letterSpacing: 1,
          fontFamily: "Avenir Next",
          fontWeight: "300",
          fontSize: 15,
        }}>GUARDIAN'S ALLY</Text>
      </View>

    </View>

  );
};

module.exports = SplashScreen