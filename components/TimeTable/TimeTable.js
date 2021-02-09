/**
 * Timetable Component
 */

/* Global React Imports */
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/* Custom Imports */
let TimeTableElement = require('./TimeTableElement')


let TimeTable = () => {

    const renderItem = ({ item }) => (
        <TimeTableElement timeTableObject={item} />
    );

    /* Time Table Data Generation */
    const DATA = [
        {
            id: '9:00 - 8:00',
            title: 'First Item',
        },
        {
            id: '10:00 - 11:00',
            title: 'Second Item',
        },
        {
            id: '11:00 - 11:10',
            title: 'Snacks Break',
        },
        {
            id: '11:10 - 12:00',
            title: 'Fourth Item',
        },
        {
            id: '12:00 - 1:00',
            title: 'Lunch Break',
        },
        {
            id: '1:00 - 2:00',
            title: 'Sixth Item',
        },
        {
            id: '2:00 - 3:00',
            title: 'Seventh Item',
        }
    ];


    /* Timeline Generation */


    return (
        <>
            <View style={{
                justifyContent: "center",
                alignContent: "center",
                flex: 1,
                flexDirection: "column"
            }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F775AD', "#F67EAC", '#F6859E', "#F68A88", '#F68E61']}
                    style={{
                        backgroundColor: "orange",
                        flex: 1,
                        flexDirection: "row",
                        margin: 10,
                        borderRadius: 10,
                    }}>

                </LinearGradient>

                <View style={{
                    backgroundColor: "#FFFFFF",
                    flex: 8,
                    flexDirection: "column",
                    marginTop: 20,
                    marginLeft: 40,
                    marginRight: 40,
                    marginBottom: 20,
                    borderRadius: 20,
                    shadowColor: "#ededed",
                    shadowOffset: { width: 1, height: 8 },
                    shadowRadius: 5,
                    shadowOpacity: 5,
                    padding: 0,
                    paddingTop: 20,
                    paddingBottom: 10

                }}>


                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
            </View>
        </>
    )
}

module.exports = TimeTable