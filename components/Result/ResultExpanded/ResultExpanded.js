
import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    Button,
    FlatList
} from 'react-native';

let ResultExpandedElement = require('./ResultExpandedElement')

let ResultExpanded = ({ route, navigation }) => {

    /* Parse Route for Data */
    let routeData = route.params

    /* Handle Data */
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Half-Yearly',
            date: "03-01-2021",
            subject: "Click to view"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd31aa97f63',
            title: 'Quarter-Yearly',
            date: "01-01-2021",
            subject: "Click to view"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Unit Test - II',
            date: "14-12-2020",
            subject: "Click to view"
        },
        {
            id: '58694a0f-3uda1-471f-bd96-145571e21d72',
            title: 'Mid-Term',
            date: "07-12-2020",
            subject: "Click to view"
        },
        {
            id: '58694a0f-3dqga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        }
    ];

    const renderResultExpanded = ({ item }) => (
        <ResultExpandedElement title={item} navigation={navigation} />
    );


    return (
        <View style={{
            backgroundColor: "white",
            flex: 1
        }}>
            <Text>Result Expanded - {routeData.topic}</Text>
            <FlatList
                data={DATA}
                renderItem={renderResultExpanded}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                navigation={navigation}
                style={{
                    width: "100%",
                }}
            />

            <Button
                title="Back"
                onPress={() => {
                    navigation.navigate("Home")
                }}></Button>
        </View>
    )
}

module.exports = ResultExpanded