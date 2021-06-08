import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


let TaskElement = ({ resultData, navigation }) => {

    /**
     * Calculate Result Border color 
     * 1. If marks is less than the Pass mark -> #FF9D59
     * 2. If marks is greater than the Pass mark -> #4DC661
     */

    /* Passing Color */
    let borderColorCode = "#4DC661"

    /* Calculate Pass Mark */
    let calcualtePassMark = (resultData.fullMark * (resultData.passPercentage / 100))

    /* Failing Color */
    if (resultData.marks < calcualtePassMark) { borderColorCode = "#FF9D59" }


    /* Return JSX */
    return (
        <View
            onPress={() => {
                navigation.navigate('ResultExpanded', { topic: resultData.title })
            }}>

            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#FFFFFF', '#FFFBF9', '#FFF8F3']}
                style={{
                    paddingVertical: "2%",
                    marginVertical: "1%",
                    shadowColor: "grey",
                    borderColor: borderColorCode,
                    borderWidth: 1.2,
                    borderRadius: 15,
                    flex: 1,
                    flexDirection: 'row',
                }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: "4%"
                }}>
                    {/* Subject */}
                    <View style={{
                        flex: 2,
                    }}>
                        {/* Subject */}
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignContent: "flex-end",
                            paddingStart: "20%",
                        }}>
                            <Text ellipsizeMode='tail' numberOfLines={1} style={{
                                fontSize: 18,
                                fontWeight: "700",
                                color: "#545454",
                            }}> {resultData.subjectName}
                            </Text>
                            
                        </View>
                    </View>

                    {/*  Mark */}
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignContent: "center"
                    }} >
                        <Text style={{
                            textAlign: "center",
                            flex: 3,
                            fontSize: 30,
                            fontWeight: "700",
                            color: "#545454"
                        }}> {resultData.marks}
                        </Text>

                        <Text style={{
                            textAlign: "center",
                            flex: 1,
                            fontSize: 10,
                            fontWeight: "700",
                            color: "#545454"
                        }}>Out of {resultData.fullMark}
                        </Text>
                    </View>
                </View>

            </LinearGradient>
        </View>
    )
}

module.exports = TaskElement