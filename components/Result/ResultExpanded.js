
import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    Button
} from 'react-native';

let ResultExpanded = ({ route, navigation }) => {

    /* Parse Route for Data */
    let routeData = route.params

    return (
        <View style={{
            backgroundColor: "white",
            flex: 1
        }}>
            <Text>Result Expanded - {routeData.topic}</Text>
            <Button
                title="Back"
                onPress={() => {
                    navigation.navigate("ResultHome")
                }}></Button>
        </View>)
}

module.exports = ResultExpanded