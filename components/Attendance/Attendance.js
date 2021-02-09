/**
 * Attendance Screen Component
 */

import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList
} from 'react-native';

/* Custom Imports */
let Leave = require('./LeaveElement')

let Attendance = () => {

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
        <Leave title={item.title} />
    );

    /* Render JSX */
    return (
        <>
        <View style={{
            margin:10
        }}>
            <Text style={{
                justifyContent: 'center',
                alignItems: 'center',
                //margin: 15,
                fontSize: 10
            }}>
                <Text style={{
                    color: "#145DBF"
                }}>Attendance</Text> shows all the Leaves takes by the student, starting from leaves taken recently.
          </Text>

            <FlatList
                data={DATA}
                renderItem={renderLeave}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator ={false}
                showsHorizontalScrollIndicator={false}
                style={{ 
                    width: "100%",
                    //marginTop: 20
                   
                }}
            />
             
        </View>
       
    </>
    );
};

module.exports = Attendance