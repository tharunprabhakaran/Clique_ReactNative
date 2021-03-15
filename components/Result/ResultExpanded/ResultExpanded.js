
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
        console.log("Worked")
    });

    /* Calculate Screen Size */
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

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
            id: '58694a0f-3dqdfgbqaga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },
        {
            id: '58694a0f-3dqadfbdhga1-471f-bd96-145571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },
        {
            id: '58694a0f-3dqga1-471f-bd96-145571easdf29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },
        {
            id: '58694aa0f-3dqga1-471f-bas96-145adf571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        },
        {
            id: '5869d4a0f-3dqga1-471f-bd96-14adf5571e29d22',
            title: 'Unit Test - I',
            date: "15-11-2020",
            subject: "Click to view"
        }
    ];

    const renderResultExpanded = ({ item }) => (
        <ResultExpandedElement resultData={item} navigation={navigation} />
    );


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
                                fontSize: 15,
                                fontWeight: "200",
                                color: "#FFFFFF"
                            }}>20-APR-2020</Text>
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
                    data={DATA}
                    renderItem={renderResultExpanded}
                    keyExtractor={item => item.id}
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