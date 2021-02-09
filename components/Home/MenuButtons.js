/**
 * Menu Button Component
 */

/* Global React Imports */
import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGlobeAsia, faEnvelopeOpen, faComments, faBell, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const factor = windowHeight / windowWidth

let NavigationMenuButtom = (props) => {

    let style = null
    let navigationDestination = props.destination
    let updateContent = props.updateContent
    let updateContentState = props.updateContentState
    let primaryText = props.primaryText
    let secondaryText = props.secondaryText
    let customeStyle = props.customStyle

    return (
        <TouchableOpacity style={{
            fontFamily: "Avenir Next",
            fontWeight: "500",
            width: factor * 70,
            borderRadius: 10,
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: customeStyle.backgroundColor,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5

        }}
            onPress={() => { updateContent(navigationDestination, updateContentState) }}>

            <View style={{
                flex: 2,
                justifyContent: "flex-end",
                alignContent: "flex-end"
            }}>
                <Text adjustsFontSizeToFit style={{
                    fontFamily: "Avenir Next",
                    fontSize: factor* 8,
                    fontWeight: "500",
                    color: "white",
                }}>
                    <FontAwesomeIcon icon={customeStyle.icon} style={{ color: "white" }} />  {primaryText}
              </Text>
            </View>

            <View adjustsFontSizeToFit style={{
                flex: 1.5,
                justifyContent: "flex-start",
                alignContent: "flex-start",
                padding: 5
            }}>
                <Text style={{
                    fontFamily: "Avenir Next",
                    fontSize: factor*4.5,
                    fontWeight: "500",
                    color: "white",
                    textAlign: "center"

                }}>{secondaryText}</Text>
            </View>


        </TouchableOpacity>
    )
}

module.exports = NavigationMenuButtom