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

    return (
        <TouchableOpacity
            onPress={() => {

                navigation.navigate('ResultExpanded', { topic: title.title })
            }}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#FFFFFF', '#FFFBF9', '#FFF8F3']}
                style={{

                    marginVertical: "1%",
                    shadowColor: "grey",
                    borderColor: "#FBE2CC",
                    borderWidth: 2,
                    borderRadius: 15,
                    flex: 1,
                    flexDirection: 'row',
                   

                }}>

                {/* Subject */}
                <View style={{
                    flex: 2,
                }}>
                    {/* Subject */}
                    <View style={{
                        flex: 1,
                        backgroundColor: "green",
                        justifyContent: "center",
                        alignContent: "center"
                    }}>
                        <Text ellipsizeMode='tail' numberOfLines={1} style={{
                            fontWeight: "700",
                            color: "#545454",
                            textAlign: "center"
                        }}> {title.title}
                        </Text>

                    </View>

                </View>

                {/*  Mark */}
                <View style={{
                    flex: 1,
                    backgroundColor: "red",
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

            </LinearGradient>
        </TouchableOpacity>
    )
}

module.exports = TaskElement