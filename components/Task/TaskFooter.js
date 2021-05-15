
/* React Imports */
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

let TaskFooter = () => {
    
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
    </View>
    )

}

module.exports = TaskFooter