/**
 * @name TaskExpanded
 * @description Task Expanded view for the Task screen
 * @author tharunp
 */
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

let sunIcon = faCloudSun

let TaskExpanded = ({ route, navigation }) => {

    /* Handle Dark Mode */
    let [darkMode, toggleDarkMode] = useState(false)


    /* Parse Route Params */
    let taskData = route.params


    /* Task Body Data */
    let taskBodyData = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. \n\nNo one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. \n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. \n\n To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? \n\n On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. \n\n These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that \n\n"
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: darkMode ? ("black") : ("white")
        }}>
            <View style={{
                flex: 1,
                flexDirection: "row"
            }}>
                {/* Back Button */}
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center"
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Home")
                        }}
                        style={{
                            paddingRight: "50%",
                        }}>
                        <View style={{
                            shadowOffset: { width: 2, height: 1 },
                            shadowOpacity: 0.1,
                            shadowRadius: 1.5
                        }}>

                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={darkMode ? (['#1B0C00', '#391900', '#1B0C00']) : (['#FFDBBD', '#FFE8D6', '#FFEDDE'])}
                                style={{
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    marginVertical: "10%",
                                    textAlign: "center",
                                    color: "#FF9D59"
                                }}>Back</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Side Action Buttons */}
                <View style={{
                    flex: 2,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignContent: "flex-end",

                }}>
                    <TouchableOpacity
                        onPress={() => {
                            toggleDarkMode(!darkMode)
                        }} style={{
                            flex: 1,
                            justifyContent: "center",
                            alignContent: "center",
                            paddingHorizontal: "10%"
                        }}>
                        <FontAwesomeIcon icon={sunIcon} style={{ color: "#FF9D59", alignSelf: "center" }} size={20} />
                        <Text style={{ textAlign: "center", color: "#FF9D59", fontSize: 10, margin: "3%" }}>DARK MODE</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                flex: 10,

            }}>
                <ScrollView style={{
                    flex: 10,
                    padding: "6%",
                    marginTop: "5%"
                }}>

                    {/* Task Heading */}
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "700",
                        fontFamily: "AvenirNext-Medium",
                        color: darkMode ? ("white") : ("#545454"),
                        paddingVertical: "3%"

                    }}>
                        Seminar-Thermodynamics
                    </Text>

                    {/* Task Time Stamp */}
                    <Text style={{
                        
                        fontSize: 10,
                        fontWeight: "300",
                        fontFamily: "AvenirNext-Medium",
                        color: darkMode ? ("white") : ("#545454")

                    }}>
                        Posted on
                    </Text>
                    <Text style={{
                        letterSpacing: 1.5,
                        fontSize: 10,
                        fontWeight: "300",
                        fontFamily: "AvenirNext-Medium",
                        color: darkMode ? ("white") : ("#545454")

                    }}>
                        21-06-2020
                    </Text>

                    {/* Task Body */}
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "400",
                        fontFamily: "AvenirNext-Medium",
                        color: darkMode ? ("white") : ("#545454"),
                        paddingVertical: "10%"
                    }}> {taskBodyData} </Text>

                    <View style={{marginTop: "2%", marginBottom: "20%", marginHorizontal: "30%" }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Home")
                            }}
                        >
                            <View style={{
                                shadowOffset: { width: 2, height: 1 },
                                shadowOpacity: 0.1,
                                shadowRadius: 1.5
                            }}>

                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={darkMode ? (['#1B0C00', '#391900', '#1B0C00']) : (['#FFDBBD', '#FFE8D6', '#FFEDDE'])} style={{
                                        borderRadius: 20,
                                    }}>
                                    <Text style={{
                                        fontSize: 15,
                                        marginVertical: "5%",
                                        textAlign: "center",
                                        color: "#FF9D59"
                                    }}>Back</Text>
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


            </View>

        </SafeAreaView>
    )
}

module.exports = TaskExpanded