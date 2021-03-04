import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';


let TaskElement = ({ title, navigation }) => {
    let borderColorCode = "#4DC661"
    let colorSelector = Math.floor(Math.random() * Math.floor(2))
    if(colorSelector == 1){ borderColorCode="#FF9D59" }

    
    return (
        <View
            onPress={() => {
                navigation.navigate('ResultExpanded', { topic: title.title })
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
                    flex:1,
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
                            //paddingEnd: "20%"
                        }}>
                            <Text ellipsizeMode='tail' numberOfLines={1} style={{
                                fontSize: 18,
                                fontWeight: "700",
                                color: "#545454",
                            }}> {title.title}
                            </Text>

                        </View>

                    </View>

                    {/*  Mark */}
                    <View style={{
                        flex: 1,
                        //backgroundColor: "red",
                        justifyContent: "center",
                        alignContent: "center"
                    }} >
                        <Text style={{
                            textAlign: "center",
                            flex: 3,
                            fontSize: 30,
                            fontWeight: "700",
                            color: "#545454"
                        }}>95</Text>
                        <Text style={{
                            textAlign: "center",
                            flex: 1,
                            fontSize: 10,
                            fontWeight: "700",
                            color: "#545454"
                        }}>Out of 100</Text>
                    </View>
                </View>

            </LinearGradient>
        </View>
    )
}

module.exports = TaskElement