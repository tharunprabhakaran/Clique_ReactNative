/**
 * Home Screen Component
 */

/* Global React Imports */
import React, { useState } from 'react';
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

/* Component Imports */
let TimeTable = require('../TimeTable/TimeTable')
let Attendance = require('../Attendance/Attendance')
let Task = require('../Task/Task')

/* Navigation Menu Import */
let NavigationMenuButtom = require('./MenuButtons')

/* Styling Imports */
let HomeStyle = require("./homeStyle")


let updateContent = (val, callingFunction) => {
  callingFunction(val)
  return
}

/* Testing Components */
let sampleTest1 = () => {

  return (<Text style={{
    top: 300,
    left: 150,
    backgroundColor: "white"
  }}>
    "Sample Test 1"
  </Text>)

}

let componentSwitcher = (componentName) => {

  switch (componentName) {
    case "Home":
      return TimeTable()
    case "Task":
      return Task()
    case "Attendance":
      return Attendance()
    case "Assist":
      return "Assist"
    case "Result":
      return "Result"
  }

}

/* Primary Component */
const Home: () => React$Node = () => {

  /* Calculate Screen Size */
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  /* Perform State Management */
  let [contentState, updateContentState] = useState("Home")

  /* Render JSX */
  return (
    <>
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

        {/* Horizonal Scroll Feature list */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
          style={HomeStyle.GlobalStyle.horizontalScrollView} >

          {/* HOME */}

          <NavigationMenuButtom
            destination="Home"
            updateContent={updateContent}
            updateContentState={updateContentState}
            primaryText="Home"
            secondaryText="Display stats about the student"
            customStyle={{ "backgroundColor": "#FF9242", "icon": faGlobeAsia }}>
          </NavigationMenuButtom>

          {/* TASK */}
          <NavigationMenuButtom
            destination="Task"
            updateContent={updateContent}
            updateContentState={updateContentState}
            primaryText="TASK"
            secondaryText="Display the Task's for the student"
            customStyle={{ "backgroundColor": "#E91E62", "icon": faEnvelopeOpen }}>
          </NavigationMenuButtom>

          {/* ATTENDANCE */}
          <NavigationMenuButtom
            destination="Attendance"
            updateContent={updateContent}
            updateContentState={updateContentState}
            primaryText="LEAVES"
            secondaryText="Display leave details of the student"
            customStyle={{ "backgroundColor": "#145DBF", "icon": faBell }}>
          </NavigationMenuButtom>

          {/* ASSIST */}
          <NavigationMenuButtom
            destination="Assist"
            updateContent={updateContent}
            updateContentState={updateContentState}
            primaryText="ASSIST"
            secondaryText="Post a Query to teacher"
            customStyle={{ "backgroundColor": "#673AB6", "icon": faComments }}>
          </NavigationMenuButtom>

          {/* RESULT */}
          <NavigationMenuButtom
            destination="Result"
            updateContent={updateContent}
            updateContentState={updateContentState}
            primaryText="RESULT"
            secondaryText="Shows results posted by school"
            customStyle={{ "backgroundColor": "#5677FC", "icon": faChartBar }}>
          </NavigationMenuButtom>


        </ScrollView>

        {/* Starting Component Area */}
        <View style={{
          flex: 6,
        }}>

          {componentSwitcher(contentState)}

        </View>

      </SafeAreaView>
    </>
  );
};




module.exports = Home