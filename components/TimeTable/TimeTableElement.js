import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';


let TimeTableElement = ({ timeTableObject }) => {

    /* Color Mixer Logic */
    let colorsOptions = {
        "night": {
            primary: "#E9EAF4",
            secondary: "#BABDDA",
            text: "#3A4597"
        },
        "evening": {
            primary: "#FEEEEA",
            secondary: "#FFCABC",
            text: "#FD8060"
        },
        "morningv2": {
            primary: "#CDF2E0",
            secondary: "#AAE2C6",
            text: "#5FBD8E"
        },
        "morning": {
            primary: "#FFF9EB",
            secondary: "#FFE8B1",
            text: "#FFC542"
        },
        "extra": {
            primary: "#EBFAFD",
            secondary: "#C0EFFB",
            text: "#7CDBF5"
        },
        "noon": {
            primary: "#FEEEEA",
            secondary: "#FFCABC",
            text: "#FD8060"
        }
    }


    /* Day-Time Color Matcher */
    let currentDate = new Date();
    let currentHour = currentDate.getHours()
    let timeOfTheDay = null

    
    /* Color Matcher */
    if (20 <= currentHour && currentHour < 5) {
        timeOfTheDay = "night"
    }
    else if (5 <= currentHour && currentHour < 9) {
        timeOfTheDay = "morning"
    }
    else if (9 <= currentHour && currentHour < 12) {
        timeOfTheDay = "morningv2"
    }
    else if (12 <= currentHour && currentHour < 15) {
        timeOfTheDay = "noon"
    }
    else if (15 <= currentHour && currentHour < 19) {
        timeOfTheDay = "evening"
    }
    else {
        timeOfTheDay = "noon"
    }

    /* Picking Color */
    var color = colorsOptions[timeOfTheDay]

    /* Picking Period Status */
    let periodStatus = color.secondary

    if(timeTableObject.title == "Fourth Item"){
        periodStatus = "green"
        timeTableObject.title = "In Progress"
    }

    /* Return Element */
    return (
        <>
            <View style={{
                margin: 10,
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: color.primary,
                height: 60,
                borderRadius: 10,
                padding: 10,
            }}>
                <View style={{
                    color: color.text,
                    flex: 1,
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    
                }}>
                    <Text
                        style={{
                            color: color.text,
                            flex: 2

                        }}>
                        {timeTableObject.title}
                    </Text>
                    <Text
                        style={{
                            color: color.text,
                            fontSize: 8,
                            flex: 1,
                            color: periodStatus
                        }}>
                        Completed
                    </Text>
                </View>

                <View style={{
                    color: color.text,
                    flex: 1,
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    padding: 10
                }}>
                    <Text style={{
                        color: color.text,

                    }}>

                        {timeTableObject.id}
                    </Text>
                </View>

            </View>
        </>
    )
};

module.exports = TimeTableElement