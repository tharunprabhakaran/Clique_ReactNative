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

let TeacherAttendance = require('../Teacher-Attendance/TeacherAttendance')
let TimeTable = require('../../TimeTable/TimeTable')
let Result = require('../../Result/Result')

/* Navigation Menu Import */
let NavigationMenuButtom = require('./TeacherMenuButtons')

/* Styling Imports */
let HomeStyle = require("./TeacherhomeStyle")


let updateContent = (pathName, callingFunction) => {
  callingFunction(pathName)
  return
}

let componentSwitcher = (pathname, globalNavigator) => {

  switch (pathname) {
    case "TeacherHome":
      return TimeTable(globalNavigator)
    case "TeacherAttendance":
      return TeacherAttendance(globalNavigator)
    case "Result":
      return Result(globalNavigator)
  }

}

/* Primary Component */
const TeacherHome = ({ navigation }) => {

  /* Calculate Screen Size */
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  /* Perform State Management */
  let [contentState, updateContentState] = useState("TeacherHome")

  /* Render JSX */
  return (
    <View style={{
      backgroundColor: "white",
      flex:1
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

        {/* Horizonal Scroll Feature list */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
          style={HomeStyle.GlobalStyle.horizontalScrollView} >

          {/* HOME */}

           {/* Teacher HOME */}

           <NavigationMenuButtom
            destination="TeacherHome"
            updateContent={updateContent}
            updateContentState={updateContentState}
            primaryText="Home"
            secondaryText="Display stats about the student"
            customStyle={{ "backgroundColor": "#FF9242", "icon": faGlobeAsia }}>
          </NavigationMenuButtom>         

          {/* Teacher Attendance */}
          <NavigationMenuButtom
            destination="TeacherAttendance"
            updateContent={updateContent}
            updateContentState={updateContentState}
            primaryText="ATTENDANCE"
            secondaryText="Attendance for the Students"
            customStyle={{ "backgroundColor": "#145DBF", "icon": faBell }}>
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

          {componentSwitcher(contentState, navigation)}

        </View>

      </SafeAreaView>
    </View>
  );
};




module.exports = TeacherHome