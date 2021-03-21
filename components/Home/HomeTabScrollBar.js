
import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';


let HomeStyle = require("./homeStyle")
let NavigationMenuButtom = require('./MenuButtons')
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGlobeAsia, faEnvelopeOpen, faComments, faBell, faChartBar } from '@fortawesome/free-solid-svg-icons'

let HomeTabScrollBar = ( props ) => {

    return (
        <View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={false}
                style={HomeStyle.GlobalStyle.horizontalScrollView} >

                {/* HOME */}
                <NavigationMenuButtom
                    destination="TimeTable"
                    primaryText="Home"
                    secondaryText="Display stats about the student"
                    customStyle={{ "backgroundColor": "#FF9242", "icon": faGlobeAsia }}
                    navigation={props.navigation} >

                </NavigationMenuButtom>

                {/* TASK */}
                <NavigationMenuButtom
                    destination="Task"
                    primaryText="TASK"
                    secondaryText="Display the Task's for the student"
                    customStyle={{ "backgroundColor": "#E91E62", "icon": faEnvelopeOpen }}
                    navigation={props.navigation} >
                </NavigationMenuButtom>

                {/* ATTENDANCE */}
                <NavigationMenuButtom
                    destination="Attendance"
                    primaryText="LEAVES"
                    secondaryText="Display leave details of the student"
                    customStyle={{ "backgroundColor": "#145DBF", "icon": faBell }}
                    navigation={props.navigation} >
                </NavigationMenuButtom>

                {/* RESULT */}
                <NavigationMenuButtom
                    destination="Result"
                    primaryText="RESULT"
                    secondaryText="Shows results posted by school"
                    customStyle={{ "backgroundColor": "#5677FC", "icon": faChartBar }}
                    navigation={props.navigation}>
                </NavigationMenuButtom>
            </ScrollView>
        </View>
    )
}


module.exports = HomeTabScrollBar