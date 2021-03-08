/**
 * ParentLogin Screen Component
 */

import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';



let ManagementLogin = ({ navigation }) => {


    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={-60}
            behavior={'height'}
            style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
                backgroundColor: "white"
            }}
        >

            {/* First Component */}
            <View style={{
                flex: 4,
                justifyContent: 'flex-end',
                alignItems: 'center',
                // backgroundColor: "lime"
            }}>


                <View style={{
                    flex: 1,
                    marginTop: '30%',
                    justifyContent: "flex-end",
                    // backgroundColor: "pink"
                }}>
                    {/* <Text style={styles.SignInTextStyle}> SIGN IN </Text> */}
                    <Text style={{
                        fontSize: 40,
                        padding: "4%",
                        fontFamily: "Avenir Next",
                        fontSize: 35,
                        fontWeight: "700"
                    }}>SIGN IN</Text>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: "flex-start"
                }}>
                    <Text style={{
                        fontSize: 15,
                        padding: "1%",
                        fontFamily: "Avenir Next",
                        fontSize: 12,
                        fontWeight: "100",
                        color: "grey",
                    }}>AS MANAGEMENT</Text>
                </View>

            </View>

            {/* Enter Phone Number Component */}
            <View style={{
                flex: 2,
                alignContent: "center",
                justifyContent: 'flex-start',
                // backgroundColor: "pink",
            }}>


                <TextInput
                    placeholder="Enter Mobile Number"
                    keyboardType="numeric"
                    style={{
                        marginLeft: '15%',
                        padding: '5%',
                        textAlign: 'center',
                        height: 60,
                        width: 275,
                        borderWidth: 2,
                        borderColor: '#FFB684',
                        borderRadius: 20,
                    }} />
            </View>

            {/* Teacher/Management Button Row Component */}
            <View
                style={{
                    flex: 2,
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <View style={{
                    marginTop: "5%",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Home")
                        }}
                    >
                        <View style={{
                            shadowOffset: { width: 10, height: 1 },
                            shadowOpacity: 0.1,
                            shadowRadius: 1.5
                        }}>

                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={(['#FFDBBD', '#FFE8D6', '#FFEDDE'])}
                                style={{
                                    borderRadius: 5,
                                    padding: 2
                                }}>
                                <Text style={{
                                    fontSize: 12,
                                    marginVertical: "5%",
                                    marginHorizontal: "15%",
                                    textAlign: "center",
                                    color: "#FF9D59"
                                }}>Teacher</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flex: 1,
                        marginTop: "5%",
                        marginLeft: "5%",
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Home")
                        }}
                    >
                        <View style={{
                            shadowOffset: { width: 10, height: 1 },
                            shadowOpacity: 0.1,
                            shadowRadius: 1.5
                        }}>

                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={(['#FFDBBD', '#FFE8D6', '#FFEDDE'])}
                                style={{
                                    borderRadius: 5,
                                    padding: 1,

                                }}>
                                <Text style={{
                                    fontSize: 12,
                                    marginVertical: "5%",
                                    marginHorizontal: "15%",
                                    textAlign: "center",
                                    color: "#FF9D59"
                                }}>Admin</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            {/* OTP Label Component */}
            <View style={{
                flex: 1,
                justifyContent: "flex-start",
                // backgroundColor: "orange"
            }}>

                <View style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    marginLeft: "15%",

                }}>
                    <Text style={{
                        fontSize: 15,
                        padding: "1%",
                        fontFamily: "Avenir Next",
                        fontSize: 10,
                        fontWeight: "100",
                        color: "grey",
                    }}>ONE TIME PASSWORD</Text>

                </View>


            </View>



            {/* Enter OTP Row Component */}
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
            }}>
                <View style={{
                    flex: 2,
                    marginLeft: "15%",
                }}>
                    
                        <TextInput
                            keyboardType="numeric"
                            style={{
                                flexDirection: "row",
                                borderBottomWidth: 1.5,
                                 borderColor: "#414141" 
                            }}

                            placeholder="Enter OTP"

                        />
                    
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // backgroundColor: "pink",
                }}>

                    <View style={{
                        flex: 1,
                        // marginBottom: "7%",
                        justifyContent: 'center',
                        padding: '5%'
                    }}>
                        <Text style={{
                            fontSize: 35,
                            fontWeight: "300",
                            textAlign: "center",
                            color: '#FFA9B0',
                            fontFamily: "Avenir Next"
                        }}>1:59</Text>
                    </View>

                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        marginLeft: '25%',
                        padding: '1%'

                    }}>
                        <Text style={{
                            fontSize: 10,
                            fontWeight: '300',
                            color: '#7A7A7A',
                            fontFamily: "Avenir Next",
                            // color: '#FFA9B0'
                        }}>RE-SEND OTP</Text>
                    </View>

                </View>
            </View>

            {/* Navigate Back to Guardian  Component */}
            <View style={{
                flex: 5,
                justifyContent: 'center',
                alignContent: 'center'
            }}>



                <View
                    style={{
                        marginTop: 150

                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ParentLogin')}
                        style={{
                            marginRight: 120,
                            marginLeft: 120,
                            marginTop: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            backgroundColor: '#68a0cf',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#fff'
                        }}>
                        <Text style={{ color: "white", textAlign: 'center', justifyContent: 'center' }}>Guardian Sign-In</Text>
                    </TouchableOpacity>
                </View>



            </View>


        </KeyboardAvoidingView>

    );

}



module.exports = ManagementLogin