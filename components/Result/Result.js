/**
 * Result Screen Component
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
let ResultElement = require('./ResultDefault/ResultDefaultElement')

let Result = (globalNavigator) => {

    /* @TODO Insert User Login Verification logic */
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Half-Yearly',
            date: "03-01-2021",
            subject: "Click to view"
        },
        {
            id: '3ac68afc-c624t05-48d3-a4f8-fbd31aa97f63',
            title: 'Quarter-Yearly',
            date: "01-01-2021",
            subject: "Click to view"
        },
        {
            id: '58694a0f-3da1-471f-bd96-wet145571e29d72',
            title: 'Unit Test - II',
            date: "14-12-2020",
            subject: "Click to view"
        },
        {
            id: '58694a0f-3u354da1-471f-bd96-145571e21d72',
            title: 'Mid-Term',
            date: "07-12-2020",
            subject: "Click to view"
        },
        {
            id: '58694a0fhteth-3dqga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },
        {
            id: '5869sdfaqew4a0f-3dqga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },
        {
            id: '5869sdf4a0f-3dqga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },
        {
            id: '586sdf94a0f-3dqga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },
        {
            id: '58694a0fs-3dqga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },{
            id: '58694a0f-3dqsfga1-471f-bd96-145571e29d22',
            title: 'Unit Tsdest - I',
            date: "15-11-2020",
            subject: "Click to view"
        },{
            id: '586sdf94a0f-sd3dqga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },{
            id: '58694sdfsdfa0f-3dqga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        }


    ];

    const renderLeave = (props) => {
      return (
        <ResultElement data={props.item} globalNavigator={globalNavigator} />
    )};

    /* Render JSX */
    return (
       
        <View style={{
            backgroundColor: "white",
            flex: 1
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
                        color: "#5F5CE6"
                    }}>Result</Text> shows academic results posted by Staff members of repective schools. Recent results are displayed first.</Text>

                <FlatList
                    data={DATA}
                    renderItem={renderLeave}
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

module.exports = Result