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

/* Component Imports */
let TimeTable = require('../TimeTable/TimeTable')
let Attendance = require('../Attendance/Attendance')
let Task = require('../Task/Task')
let Result = require('../Result/Result')

/* Navigation Menu Import */
let NavigationMenuButtom = require('./MenuButtons')

/* Styling Imports */
let HomeStyle = require("./homeStyle")

/* API Import */
let APIAdapter = require('../APIUtility/APIAdapter')

let updateContent = (pathName, callingFunction) => {
  callingFunction(pathName)
  return
}

let componentSwitcher = (pathname, globalNavigator, cliquePrimitiveState, setCliquePrimitiveState) => {

  switch (pathname) {
    case "Home":
      return TimeTable(globalNavigator, cliquePrimitiveState, setCliquePrimitiveState)
    case "Task":
      return Task(globalNavigator, cliquePrimitiveState, setCliquePrimitiveState)
    case "Attendance":
      return Attendance(globalNavigator, cliquePrimitiveState, setCliquePrimitiveState)
    case "Result":
      return Result(globalNavigator, cliquePrimitiveState, setCliquePrimitiveState)
  }

}

/* Primary Component */
const Home = ({ navigation }) => {

 
  /* State Management */
  let [timeTableData, setTimeTableData] = useState({})
  let [attendanceData, setAttendanceData] = useState({});
  let [taskData, setTaskData] = useState({});
  let [resultData, setResultData] = useState({ "resultList": {}, "resultExpanded": {} })

  let cliquePrimitiveState = {
    "timeTableData": timeTableData,
    "attendanceData": attendanceData,
    "taskData": taskData,
    "resultData": resultData
  }

  let setCliquePrimitiveState = {
    "setTimeTableData": setTimeTableData,
    "setAttendanceData": setAttendanceData,
    "setTaskData": setTaskData,
    "setResultData": setResultData
  }


  /* Calculate Screen Size */
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  /* Perform Screen State Management */
  let [contentState, updateContentState] = useState("Home")

  /* Update State */
  useEffect( () => {

    async function updateState() {
      let data = await APIAdapter(contentState, attendanceData, setAttendanceData)
      setAttendanceData(data)
      
    }  
    updateState()

  },[contentState]);

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
            cliquePrimitiveState={cliquePrimitiveState}
            setCliquePrimitiveState={setCliquePrimitiveState}
            primaryText="Home"
            secondaryText="Display stats about the student"
            customStyle={{ "backgroundColor": "#FF9242", "icon": faGlobeAsia }}>


          </NavigationMenuButtom>

          {/* TASK */}
          <NavigationMenuButtom
            destination="Task"
            updateContent={updateContent}
            updateContentState={updateContentState}
            cliquePrimitiveState={cliquePrimitiveState}
            setCliquePrimitiveState={setCliquePrimitiveState}
            primaryText="TASK"
            secondaryText="Display the Task's for the student"
            customStyle={{ "backgroundColor": "#E91E62", "icon": faEnvelopeOpen }}>
          </NavigationMenuButtom>

          {/* ATTENDANCE */}
          <NavigationMenuButtom
            destination="Attendance"
            updateContent={updateContent}
            updateContentState={updateContentState}
            cliquePrimitiveState={cliquePrimitiveState}
            setCliquePrimitiveState={setCliquePrimitiveState}
            primaryText="LEAVES"
            secondaryText="Display leave details of the student"
            customStyle={{ "backgroundColor": "#145DBF", "icon": faBell }}>
          </NavigationMenuButtom>

          {/* ASSIST */}
          {/* <NavigationMenuButtom
            destination="Assist"
            updateContent={updateContent}
            updateContentState={updateContentState}
            primaryText="ASSIST"
            secondaryText="Post a Query to teacher"
            customStyle={{ "backgroundColor": "#673AB6", "icon": faComments }}>
          </NavigationMenuButtom> */}

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

          {componentSwitcher(contentState, navigation, cliquePrimitiveState, setCliquePrimitiveState)}

        </View>

      </SafeAreaView>
    </View>
  );
};




module.exports = Home