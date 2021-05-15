/**
 * Attendance Screen Component
 */

import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList
} from 'react-native';

/* Custom Imports */
let Leave = require('./LeaveElement')
let APIUtility = require('../APIUtility/APIUtility')
let AttendaceAPI = require('./Api/AttendanceAPI')
let AttendanceFooter = require('./AttendanceFooter')

let Attendance = (globalNavigator) => {

    /* Get State */
    let [attendanceData, updateAttendanceData] = useState([])

    /* Component Init */
    useEffect(() => {

        AttendaceAPI.getAttendanceDataAPI(updateAttendanceData)
            .catch((error) => {
                updateAttendanceData([])
            })

    }, [])


    /* Render Leave Element */
    const renderLeave = (item) => (
        <Leave extraData={item} />
    );

    /* Render JSX */
    return (
        <View style={{
            backgroundColor: "white"
        }}>
            <View style={{
                margin: "3%",
            }}>
                <Text style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 10,
                    margin: "3%"
                }}>
                    <Text style={{
                        color: "#145DBF"
                    }}>Attendance</Text> shows all the Leaves takes by the student, starting from leaves taken recently.
          </Text>

                <FlatList
                    data={attendanceData}
                    renderItem={renderLeave}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}

                    style={{
                        width: "100%",
                        marginBottom: "10%"
                    }}
                />

            </View>

            <AttendanceFooter></AttendanceFooter>

        </View>
    );
};

module.exports = Attendance