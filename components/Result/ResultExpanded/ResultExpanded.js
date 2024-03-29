
/**
 * @name ResultExpanded
 * @author tharunp
 */

/* React Imports */
import React, {useEffect} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    Button,
    FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'


/* Custom Imports */
let ResultExpandedElement = require('./ResultExpandedElement')
let ResultExpandedFooter = require('./ResultExpandedFooter')

/* Initilisation */
import { useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



let ResultExpanded = ({ route, navigation }) => {

    useEffect( () => {
        
    });

    /* Calculate Screen Size */
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    /* Parse Route for Data */
    let routeData = route.params
    
    /* Handle Data */
    // let resultData = routeData.resultData.result
    let resultData = routeData.resultData

    const renderResultExpanded = ({ item }) => (
        <ResultExpandedElement resultData={item} navigation={navigation} />
    );

    /* Render JSX */
    return (
        <View style={{
            backgroundColor: "white",
            flex: 1
        }}>
            {/* Top Clique Gradient Design */}
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F89BC2', '#F7B7C0', '#F8B891']} style={{
                flex: 2,

            }}>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                }}>
                    {/* Back Button */}
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignContent: "center",
                            marginTop: "5%",
                            paddingLeft: "2%"
                        }}>

                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Home")
                        }} style={{
                
                        }}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} style={{ color: "white", alignSelf: "center" }} size={20} />
                            <Text style={{ textAlign: "center", color: "white", fontSize: 10, paddingTop: "15%", fontWeight: "300"}}>BACK</Text>

                        </TouchableOpacity>
                    </View>

                    {/* Result Name */}
                    <View style={{
                        flex: 4,
                        justifyContent: "center",
                        alignContent: "center"
                    }}>
                        <View style={{
                            marginTop: "10%",
                            paddingLeft: "15%"

                        }}>
                            <Text
                                ellipsizeMode='tail'
                                numberOfLines={2}
                                style={{
                                    letterSpacing: 1,
                                    textAlign: "left",
                                    fontSize: 20,
                                    fontWeight: "500",
                                    color: "#FFFFFF"
                                }}>Half-Yearly Result
                            </Text>

                        </View>
                    </View>

                    {/* Date */}
                    <View
                        onPress={() => {
                            
                        }}
                        style={{
                            flex: 3,
                            justifyContent: "center",
                            alignContent: "center"
                        }}>
                        <View style={{
                            marginTop: "10%",
                            paddingLeft: "15%"
                        }}>
                            <Text style={{

                                textAlign: "center",
                                letterSpacing: 1,
                                fontSize: 17,
                                fontWeight: "400",
                                color: "#FFFFFF"
                            }}>{resultData.postedDate}</Text>
                        </View>
                    </View>

                </View>
            </LinearGradient>

            {/* Result List */}
            <View
                style={{
                    width: "100%",
                    flex: 8,
                    padding: "4%"

                }}>
                <FlatList
                    data={resultData.result}
                    renderItem={renderResultExpanded}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    navigation={navigation}
                    ListFooterComponent={<ResultExpandedFooter navigation={navigation} ></ResultExpandedFooter>}

                />
            </View>
        </View>
    )
}

module.exports = ResultExpanded