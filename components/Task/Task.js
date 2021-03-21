/**
 * Task Screen Component
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
let TaskElement = require('./TaskElement')

let Task = (globalNavigator) => {

    /* @TODO Insert User Login Verification logic */
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Seminar-Thermodynamics',
            date: "03-01-2021",
            subject: "Physics"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd31aa97f63',
            title: 'Sports Day - Costume Measurement',
            date: "01-01-2021",
            subject: "Extra-Curricular"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Unit Test - II',
            date: "14-12-2020",
            subject: "Assessment"
        },
        {
            id: '58694a0f-3uda1-471f-bd96-145571e21d72',
            title: 'Educational Trip -  Brila Planetarium',
            date: "07-12-2020",
            subject: "Extra-Curricular"
        },
        {
            id: '58694a0f-3dqga1-471f-bd96-145571e29d22',
            title: 'Matlab',
            date: "15-11-2020",
            subject: "Maths"
        },
        {
            id: '58694a0f-3dwa1-471f-bd96-145571e29d32',
            title: 'Chemistry DIY',
            date: "01-10-2020",
            subject: "Chemistry"
        },
        {
            id: '58694a0f-3dfa1-471f-bd96-145571e29d32',
            title: 'Basketball Training',
            date: "01-09-2020",
            subject: "Extra-Curricular"
        },
        {
            id: '586w94a0f-3da1-471f-bd96-1w5571e29d32',
            title: 'Western Dance Class Debut',
            date: "02-09-2020",
            subject: "Extra-Curricular"
        },
        {
            id: '58694a0f-3dda1-471f-bd96-145r71e29d32',
            title: 'Action Required - Survey on Clique',
            date: "21-05-2020",
            subject: "Others"
        },
        {
            id: '58694asf-3da1-471f-bd96-g45571e29d32',
            title: 'Agriculture Hands on',
            date: "12-04-2020",
            subject: "Extra-Curricular"
        },
    ];

    const renderTaskList = ({ item }) => (
        <TaskElement taskData={item} navigation={globalNavigator} />
    );

    /* Render JSX */
    return (
        <View style={{
            backgroundColor: "white"
        }}>
            <View style={{
                margin: 15,

            }}>
                <Text style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 10,
                    margin: "3%"
                }}>
                    <Text style={{
                        color: "#E91E62"
                    }}>Task</Text> shows all the Leaves takes by the student, starting from leaves taken recently.
          </Text>

                <FlatList
                    data={DATA}
                    renderItem={renderTaskList}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        width: "100%",

                    }}
                />

            </View>

        </View>
    );
};

module.exports = Task