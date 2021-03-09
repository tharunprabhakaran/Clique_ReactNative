/**
 * Attendance Screen Component
 */

import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/* Custom Imports */
let TeacherLeave = require('./TeacherLeaveElement')

let TeacherAttendance = () => {

    /* @TODO Insert User Login Verification logic */
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Casual Leave',
            date: "03-01-2021"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd31aa97f63',
            title: 'Sick Leave',
            date: "01-01-2021"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Casual Leave',
            date: "14-12-2020"
        },
        {
            id: '58694a0f-3uda1-471f-bd96-145571e21d72',
            title: 'On Duty',
            date: "07-12-2020"
        },
        {
            id: '58694a0f-3dqga1-471f-bd96-145571e29d22',
            title: 'Casual Leave',
            date: "15-11-2020"
        },
        {
            id: '58694a0f-3dwa1-471f-bd96-145571e29d32',
            title: 'Sick Leave',
            date: "01-10-2020"
        },
        {
            id: '58694a0f-3dfa1-471f-bd96-145571e29d32',
            title: 'Sick Leave',
        },
        {
            id: '586w94a0f-3da1-471f-bd96-1w5571e29d32',
            title: 'Sick Leave',
            date: "02-09-2020"
        },
        {
            id: '58694a0f-3dda1-471f-bd96-145r71e29d32',
            title: 'Sick Leave',
            date: "21-05-2020"
        },
        {
            id: '58694asf-3da1-471f-bd96-g45571e29d32',
            title: 'Sick Leave',
            date: "12-04-2020"
        },
    ];

    const renderLeave = ({ item }) => (
        <TeacherLeave title={item.title} />
    );

    /* Render JSX */
    return (
        <>
        <View style={{
         flex: 1
        }}>
            <Text style={{
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 10,
                margin: "3%"
            }}>
                <Text style={{
                    color: "#145DBF"
                }}>Attendance</Text> allows the school faculty to create attendance entry for the student.
          </Text>
            
            {/* Search Text Row Component */}
            <View
            style ={{
                flex:2,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                // backgroundColor: "pink"

            }}
            >
                <View
                    style={{
                        flex:2,
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: 'flex-end',
                        marginLeft: '10%',
                        marginTop: '10%',
                    }}
                    >
                    <TextInput
                    placeholder="Enter Student Name or ID"
                    keyboardType="numeric"
                    style={{
                        marginLeft: '15%',
                        padding: '5%',
                        textAlign: 'center',
                        // height: 40,
                        width: 200,
                        borderWidth: 2,
                        borderColor: '#FFB684',
                        borderRadius: 20,
                    }} />

                    </View>

                <View
                    style={{
                        flex:1,
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: 'flex-end',
                    }}
                    >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("TeacherHome")
                        }}
                    >
                        <View style={{
                            shadowOffset: { width: 10, height: 1 },
                            shadowOpacity: 0.1,
                            shadowRadius: 1.5
                        }}>

                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={(['#FFDBBD', '#FFE8D6', '#FFEDDE'])}
                                style={{
                                    borderRadius: 5,
                                    padding: 2
                                }}>
                                <Text style={{
                                    fontSize: 12,
                                    marginVertical: "5%",
                                    marginHorizontal: "15%",
                                    textAlign: "center",
                                    color: "#FF9D59"
                                }}>Done</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            {/* Flat List Component */}
            <View style={{
                    backgroundColor: "#FFFFFF",
                    flex: 8,
                    flexDirection: "column",
                    marginTop: 30,
                    // marginLeft: 40,
                    // marginRight: 40,
                    marginBottom: 20,
                    borderRadius: 20,
                    shadowColor: "#ededed",
                    shadowOffset: { width: 1, height: 8 },
                    shadowRadius: 5,
                    shadowOpacity: 5,
                    padding: 0,
                    paddingTop: 10,
                    paddingBottom: 10

                }}>

                <FlatList
                    data={DATA}
                    renderItem={renderLeave}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator ={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ 
                        width: "100%",
                    }}
                />
            </View>
        
        </View>
       
    </>
    );
};

module.exports = TeacherAttendance