import React from 'react';
import { useWindowDimensions } from 'react-native';

import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const factor = windowHeight / windowWidth
const GlobalStyle = StyleSheet.create({

    horizontalScrollView: {
        flex: 1,
        padding: 10
    },
    TouchableOpacity: {
        fontFamily: "Avenir Next",
        fontSize: factor * 35,
        fontWeight: "500",
        width: factor * 70,
        // height: factor * 45,
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 5
    },
    Home: {
        backgroundColor: "#FF9242",
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Task: {
        backgroundColor: "#E91E62",
        flex: 2
    },
    Attendance: {
        backgroundColor: "#145DBF",
        flex: 2
    },
    Assit: {
        backgroundColor: "#673AB6",
        flex: 2
    },
    Result: {
        backgroundColor: "#5677FC",
        flex: 2
    },

    HomePrimaryText: {
        fontFamily: "Avenir Next",
        fontSize: 15,
        fontWeight: "500",
        color: "white",
      //  backgroundColor: "black",
        
        //paddingBottom: 5
    },

    HomeSecondaryText: {
        fontFamily: "Avenir Next",
        fontSize: 8,
        fontWeight: "500",
        color: "white",
    
       // backgroundColor: "black"
    },


    TaskPrimaryText: {
        fontFamily: "Avenir Next",
        fontSize: 15,
        fontWeight: "500",
        color: "white",
        // paddingBottom: 5
    },

    TaskSecondaryText: {
        fontFamily: "Avenir Next",
        fontSize: 8,
        fontWeight: "500",
        color: "white"
    },

    AttendancePrimaryText: {
        fontFamily: "Avenir Next",
        fontSize: 13,
        fontWeight: "500",
        color: "white",
        paddingBottom: 5
    },

    AttendanceSecondaryText: {
        fontFamily: "Avenir Next",
        fontSize: 8,
        fontWeight: "500",
        color: "white"
    },

    AssistPrimaryText: {
        fontFamily: "Avenir Next",
        fontSize: 15,
        fontWeight: "500",
        color: "white",
        paddingBottom: 5
    },

    AssistSecondaryText: {
        fontFamily: "Avenir Next",
        fontSize: 8,
        fontWeight: "500",
        color: "white"
    },
    ResultPrimaryText: {
        fontFamily: "Avenir Next",
        fontSize: 15,
        fontWeight: "500",
        color: "white",
        paddingBottom: 5
    },
    ResultSecondaryText: {
        fontFamily: "Avenir Next",
        fontSize: 8,
        fontWeight: "500",
        color: "white"
    },

});

let HomeStyle = StyleSheet.flatten([
    GlobalStyle.TouchableOpacity,
    GlobalStyle.Home
])

let TaskStyle = StyleSheet.flatten([
    GlobalStyle.TouchableOpacity,
    GlobalStyle.Task
])
let AttendanceStyle = StyleSheet.flatten([
    GlobalStyle.TouchableOpacity,
    GlobalStyle.Attendance
])
let AssistStyle = StyleSheet.flatten([
    GlobalStyle.TouchableOpacity,
    GlobalStyle.Assit
])
let ResultStyle = StyleSheet.flatten([
    GlobalStyle.TouchableOpacity,
    GlobalStyle.Result
])

module.exports = { GlobalStyle, HomeStyle, TaskStyle, AttendanceStyle, AssistStyle, ResultStyle }