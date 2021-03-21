/**
 * Home Screen Component
 */

/* Global React Imports */
import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

/* Custom Imports */
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGlobeAsia, faEnvelopeOpen, faComments, faBell, faChartBar } from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


/* Component Imports */
let TimeTable = require('../TimeTable/TimeTable')
let Attendance = require('../Attendance/Attendance')
let Task = require('../Task/Task')
let Result = require('../Result/Result')
let HomeTabScrollBar = require('./HomeTabScrollBar')

/* Navigation Menu Import */
let NavigationMenuButtom = require('./MenuButtons')

/* Styling Imports */
let HomeStyle = require("./homeStyle")

/* API Import */
let APIAdapter = require('../APIUtility/APIAdapter')

/* Primary Component */
const Home = ({ navigation }) => {

  /* Calculate Screen Size */
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  /* Init Nagivator */
  const Tab = createMaterialTopTabNavigator();

  /* Render JSX */
  return (
    <View style={{
      backgroundColor: "white",
      flex: 1
    }}>
      {/* Top Clique Gradient Design */}
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F8B891', '#F7B7C0', '#F89BC2']} style={{
        width: windowWidth,
        height: windowHeight * 0.15,
        flex: 1
      }}></LinearGradient>

      {/* Starting Working area design */}
      <SafeAreaView style={{
        backgroundColor: "white",
        flex: 6,
        justifyContent: "center",
        alignContent: "center"
      }}>

        {/* Starting Component Area */}
        <View style={{
          flex: 6,
          backgroundColor: "white"
        }}>
          <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: "white" }}
            lazy={true}
            swipeEnabled={false}
            swipeVelocityImpact={0}
            timingConfig={{
              duration: 100
            }}
            tabBar={(props) => <HomeTabScrollBar {...props}></HomeTabScrollBar>}
          >
            <Tab.Screen name="TimeTable" component={TimeTable} />
            <Tab.Screen name="Task" component={Task} />
            <Tab.Screen name="Attendance" component={Attendance} />
            <Tab.Screen name="Result" component={Result} />
          </Tab.Navigator>
        </View>

      </SafeAreaView>
    </View>
  );
};




module.exports = Home