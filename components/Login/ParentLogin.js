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
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input'


let ParentLogin = ({ navigation }) => {

    /* Calculate Screen Size */
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    return (

        /* Deprecated */
        // <ScrollView
        //     // keyboardVerticalOffset={-60}
        //     // behavior={'height'}
        //     style={{
        //         flex: 1,
        //         backgroundColor: "white"
        //     }}>
        <View style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "white",

        }}>
            {/* First Component */}
            <View style={{
                flex: 4,
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>

                <View style={{
                    flex: 10,
                    justifyContent: "flex-end",
                    alignItems: 'center',
                }}>

                    <Text style={{
                        textAlign: "center",
                        fontFamily: "Avenir Next",
                        fontSize: 35,
                        fontWeight: "600"
                    }}>SIGN IN</Text>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: 'center',
                }}>
                    <Text style={{
                        textAlign: "center",
                        letterSpacing: 1.3,
                        fontSize: 12,
                        fontFamily: "Avenir Next",
                        fontWeight: "200",
                        color: "#4A4A4A",
                    }}>AS GUARDIAN</Text>
                </View>

            </View>

            {/* Second Component */}
            <View style={{
                flex: 3,
                alignContent: "center",
                justifyContent: 'center',
            }}>

                <TextInput
                    placeholder="Phone Number"
                    keyboardType="numeric"
                    style={{
                        margin: "10%",
                        paddingVertical: "5%",
                        paddingHorizontal: "5%",
                        textAlign: 'left',
                        borderWidth: 2,
                        borderColor: '#FFB684',
                        borderRadius: 20,
                    }} />
            </View>

            {/*  Third Component - Enter OTP Row  Component */}
            <View style={{
                flex: 2,
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                }}>
                    <Text style={{
                        padding: "15%",
                        fontFamily: "Avenir Next",
                        fontSize: 10,
                        fontWeight: "300",
                        color: "#3F3F3F",
                    }}>ONE TIME PASSWORD</Text>
                </View>

                <View style={{
                    flex: 2,
                    flexDirection: "row"
                }}>

                    <View style={{
                        flex: 2,
                        justifyContent: "center",
                        paddingHorizontal: "15%"

                    }}>

                        <OTPInputView
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={{
                                fontWeight: "600",
                                borderWidth: 0,
                                borderBottomWidth: 1,
                                borderColor: "#FCD5BB",
                                color: "#FF9D59"
                            }}
                            codeInputHighlightStyle={{
                                borderColor: "#FF9D59",
                                color: "#FF9D59"
                            }}

                            style={{
                                color: "#FF9D59",
                                paddingVertical: "5%",
                                borderColor: "#FFB684"
                            }}
                        />

                    </View>

                    <View style={{
                        flex: 2,
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignContent: "center",
                    }}>

                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                        }}>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "400",
                                textAlign: "center",
                                color: '#FFB684',
                                fontFamily: "Avenir Next"
                            }}>1:59</Text>
                            
                        </View>

                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-start',
                            padding: "5%"
                        }}>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 10,
                                    fontWeight: '300',
                                    color: '#3F3F3F',
                                    textAlign: "center",
                                    fontFamily: "Avenir Next",
                                    // color: '#FFA9B0'
                                }}>RE-SEND OTP</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </View>

            {/* Management Login Navigation Button Component */}
            <View style={{
                flex: 5,
            }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F8B891', '#F7B7C0', '#F89BC2']} style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    paddingBottom: "9%",
                    marginTop: "40%",
                    paddingTop: "5%",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ManagementLogin')}
                        style={{
                            marginHorizontal: "30%",
                            backgroundColor: '#FFF7F2',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#FFE6CF',
                            justifyContent: "center",
                            alignContent: "center"
                        }}>
                        <Text style={{ fontSize: 12, color: "#FF9D59", textAlign: 'center', justifyContent: 'center', alignContent: "center", padding: "5%", }}>Management Sign-In</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

        </View >

    );

}

module.exports = ParentLogin