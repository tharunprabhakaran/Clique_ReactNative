
/* React Imports */
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    Button,
    FlatList
} from 'react-native';

let ResultExpandedFooter = (props) => {
    
    let navigation = props.navigation

    return(
    <View style={{
        flex: 1,
    }}>
        <Text style={{
            flex:1,
            textAlign: "center",
            padding: "5%",
            color: "grey"
        }}> - End -</Text>
        <Button
            title="Back"
            onPress={() => {
                navigation.navigate("Home")
            }}
            style={{
                flex:3,
                paddingBotom: "30%"
            }}
        ></Button>
    </View>
    )

}

module.exports = ResultExpandedFooter