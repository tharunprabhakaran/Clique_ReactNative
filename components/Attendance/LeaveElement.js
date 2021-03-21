import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


let Leave = ({ extraData }) => {
    
    return (
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
                flexDirection: 'row',
                justifyContent: 'space-between',
              
            }}>
                <View>
                        <Text style={{
                            padding: "5%",
                            fontWeight: "700",
                            color: "#545454",
                        }}>{extraData.item.type}</Text>
                </View>

                <View 
                    style={{ 
                        padding: "5%", 
                        
                    }} >
                        <Text style ={{
                            fontWeight: "700",
                            color: "#FFB684"
                        }}>{extraData.item.date}</Text>
                </View>
                
        </LinearGradient>
    )
}

module.exports = Leave