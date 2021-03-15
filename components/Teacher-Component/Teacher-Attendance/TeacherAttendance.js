/**
 * Teacher Attendance Screen Component
 */

import React, { useState ,useEffect} from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/* Custom Imports */
let TeacherLeave = require('./TeacherLeaveElement')
let APIUtility = require('../../APIUtility/APIUtility')


let TeacherAttendance = (globalNavigator, cliquePrimitiveState, setCliquePrimitiveState) => {

    /* Get State */
    let attendanceData = cliquePrimitiveState.attendanceData
    
    /* @TODO Insert User Login Verification logic */
    var DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Tharun',
            date: "03-01-2021"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd31aa97f63',
            title: 'Janar Priyanka',
            date: "01-01-2021"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Kavi Arasu',
            date: "14-12-2020"
        },
        {
            id: '58694a0f-3uda1-471f-bd96-145571e21d72',
            title: 'Aishwarya',
            date: "07-12-2020"
        },
        {
            id: '58694a0f-3dqga1-471f-bd96-145571e29d22',
            title: 'Kowsalya',
            date: "15-11-2020"
        },
        {
            id: '58694a0f-3dwa1-471f-bd96-145571e29d32',
            title: 'Preethika',
            date: "01-10-2020"
        },
        {
            id: '58694a0f-3dfa1-471f-bd96-145571e29d32',
            title: 'Simba',
        },
        {
            id: '586w94a0f-3da1-471f-bd96-1w5571e29d32',
            title: 'Itachi Ucchicha',
            date: "02-09-2020"
        },
        {
            id: '58694a0f-3dda1-471f-bd96-145r71e29d32',
            title: 'Naruto Uzumakki',
            date: "21-05-2020"
        },
        {
            id: '58694asf-3da1-471f-bd96-g45571e29d32',
            title: 'Hinata',
            date: "12-04-2020"
        },
    ];

    /* Perform State Management */

    const renderLeave = ({ item }) => (
        <TeacherLeave title={item.title} />
    );

    searchStudent =(value) =>{
        console.log("Entered value", value);
        const filteredStudent = DATA.filter(
            student =>{
                let studentLowercase = (student.title).toLowerCase();
                let valueLowerCase = (value).toLowerCase();
            
                return studentLowercase.indexOf(valueLowerCase)> -1
            }
        )
        // DATA = filteredStudent;
        console.log("filters", filteredStudent)
        // updateStudentList(filteredStudent)
    }

    /* Render JSX */
    return (
        <KeyboardAvoidingView 
            keyboardVerticalOffset={-60}
            behavior={'height'}
            style={{
                flex:1,
                alignContent: "center",
                justifyContent: "center",
                backgroundColor: "white"
        }}>
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
                        style={{
                            marginLeft: '15%',
                            paddingVertical: "2%",
                            paddingHorizontal: "2%",
                            textAlign: 'left',
                            borderWidth: 2,
                            borderColor: '#FFB684',
                            borderRadius: 20,
                            // padding: '5%',
                            // textAlign: 'center',
                            // width: 200,
                            // borderWidth: 2,
                            // borderColor: '#FFB684',
                            // borderRadius: 20,
                            }} 
                        onChangeText ={value=>this.searchStudent(value)}
                        />

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
    </KeyboardAvoidingView>
    );
};

module.exports = TeacherAttendance