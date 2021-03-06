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
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



let ParentLogin = ({ navigation }) => {


    return (
        <View style={{
            flex:1,
            alignContent: "center",
            justifyContent: "center"
        }}>

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
                        }}>AS GUARDIAN</Text>
                    </View>

            </View>

            {/* Second Component */}
            <View style={{
                flex:2,
                alignContent: "center" ,
                justifyContent: 'flex-start',
                // backgroundColor: "pink",
                }}>
                    

                <TextInput
                    placeholder = "Enter Mobile Number"
                    keyboardType = "numeric"
                    style={{   
                    marginLeft: '15%',
                    padding: '5%',
                    textAlign: 'center',
                    height: 60,
                    width: 275,
                    borderWidth: 2,
                    borderColor: '#FFB684',
                    borderRadius: 20,}}/>
            </View>

            {/* Third Component */}


                <View style={{
                    flex: 2,
                    justifyContent: "flex-start",
                    // backgroundColor: "orange"

                }}>

                    <View style={{
                        flex:1,
                        justifyContent: "flex-start",
                        marginTop: "8%",
                        marginLeft: "25%",
                        
                    }}>
                        <Text style = {{                             
                            fontSize: 15,
                            padding: "1%",
                            fontFamily: "Avenir Next",
                            fontSize: 10,
                            fontWeight: "100",
                            color: "grey",}}>ONE TIME PASSWORD</Text>
                    
                    </View>


                </View>




            <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    // backgroundColor: "pink",
                }}>
                    <View style={{
                        flex: 2,
                        marginLeft: "15%",
                        // paddingLeft: "10%",
                        // marginTop: "2%",
                        // marginBottom: "5%",
                        // backgroundColor: "orange",
                        
                    }}>
                        <TextInput
                        keyboardType = "numeric"
                            style={{ 
                                flexDirection: "row",
                                borderBottomWidth: 1.5
                                // borderColor: "blue" 
                            }}

                            placeholder="Enter OTP"

                        />
                    </View>

                    <View style={{
                        flex:1,
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

                            <View style ={{
                                flex:1,
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


            <View style={{        
                flex: 5,
                justifyContent: 'center',
                alignContent: 'center'
                }}>



                    <View
                    style = {{
                        marginTop: 150

                    }}
                    >
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')}
                    style={{    
                        marginRight:120,
                        marginLeft:120,
                        marginTop:10,
                        paddingTop: 10,
                        paddingBottom:10,
                        backgroundColor:'#68a0cf',
                        borderRadius:10,
                        borderWidth: 1,
                        borderColor: '#fff'
                        }}>
                        <Text style={{ color: "white",textAlign:'center', justifyContent: 'center'}}>Management Sign-In</Text>
                    </TouchableOpacity>
                    </View>

                    

            </View>
        
        
        </View>

    );

}

const styles = StyleSheet.create({

    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: "column",
    },
    SignInViewStyle: {
        flex: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },
    SignInTextStyle: {
        fontFamily: "Avenir Next",
        fontSize: 35,
        fontWeight: "700",
    },
    GuardText: {
        margin: 10,
        fontFamily: "Avenir Next",
        fontSize: 12,
        fontWeight: "100",
        color: "grey",

    },
    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
    TextView: {
        flex: 1,
        //justifyContent: 'flex-start',
        // alignItems: 'center',
        
    },
    TextInputStyleClass: {
        textAlign: 'center',
        height: 50,
        width: 275,
        borderWidth: 2,
        borderColor: '#FFB684',
        borderRadius: 20,
        // backgroundColor : "#FFFFFF"
    },
    OtpView: {
        flex: 3,
        // justifyContent: 'center',
        // alignContent: 'center',
        // layoutDirection: "LTR"
        // flexDirection: "row",
       
        flexDirection: "column"
    },
    OtpTextContainer: {
        flexDirection: "row",
        backgroundColor: "pink"
    },

    OtpTextView: {
        margin: 10,
        flex: 2,
        justifyContent: "center"


    },
    CountdownView: {
        flex: 1,
        justifyContent: "flex-start"
    },
    BoottomViewStyle: {

        
    },

});

module.exports = ParentLogin