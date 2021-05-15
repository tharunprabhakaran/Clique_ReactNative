/**
 * Task Screen Component
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
let TaskElement = require('./TaskElement')
let TaskFooter = require('./TaskFooter')
let APIUtility = require('../APIUtility/APIUtility')
let TaskAPI = require('./Api/TaskAPI')


let Task = (props) => {

    /* Get State */
    let [taskData, updateTaskData] = useState([])

    /* Component Start Init */
    useEffect(() => {

        TaskAPI.getTaskDataAPI(updateTaskData)
            .catch((error) => {
                updateTaskData([])
            })
    }, [])


    /* Render Task Element */
    const renderTaskList = ({ item }) => (
        <TaskElement taskData={item} navigation={props.globalNavigator} />
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
                    data={taskData}
                    renderItem={renderTaskList}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={<TaskFooter></TaskFooter>}
                    style={{
                        width: "100%",
                        marginBottom: "5%",

                    }}
                />

            </View>
        </View>
    );
};

module.exports = Task