import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';


let TaskElement = ({ taskData, navigation }) => {

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("TaskExpanded", {taskData: "Expanded Task View"})
            }}
        >
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
                    flexDirection: 'column',
                    justifyContent: 'space-between'

                }}>

                {/* Topic and Date */}
                <View style={{
                    flex: 3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: "5%",
                    paddingHorizontal: "5%"

                }}>
                    {/* Topic */}
                    <View style={{
                        width: "60%",
                    }}>
                        <Text ellipsizeMode='tail' numberOfLines={1} style={{
                            fontWeight: "700",
                            color: "#545454",
                        }}>{taskData.title}</Text>
                    </View>

                    {/*  Date */}
                    <View style={{
                        //height: "30%"
                    }} >
                        <Text style={{
                            fontWeight: "700",
                            color: "#FFB684"
                        }}>{taskData.date}</Text>
                    </View>
                </View>

                {/* Extra Data */}
                <View style={{
                    flex: 1,
                    marginBottom: "4%",
                    paddingHorizontal: "5%"

                }}>
                    <Text style={{
                        fontWeight: "400",
                        fontSize: 10,
                        color: "#545454",
                    }}>{taskData.subject}</Text>

                </View>

            </LinearGradient>
        </TouchableOpacity>
    )
}

module.exports = TaskElement