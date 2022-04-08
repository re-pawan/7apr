import { StyleSheet, Image, TextInput, SafeAreaView, Dimensions, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window')
const Register = () => {
    return (

        <View style={styles.container}>
            <SafeAreaView>

                <View>
                    <Text style={styles.content}>Register & Play</Text>
                </View>
                <View>
                    <Image style={styles.logo} source={require('../image/octagon.png')} />
                </View>
                <View>
                    <Text style={styles.text}>We will send you confirmation code</Text>
                </View>
                <View style={styles.contain}>
                    <View style={styles.img}>
                        <Image
                            style={{ height: 40, width: 35 }}
                            source={require('../image/flag1.png')}
                        />
                    </View>
                    <View style={styles.txtinput}>
                        <TextInput
                            style={{ fontSize: 15 }}
                            placeholder='9346573823'
                            placeholderTextColor={'black'}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.btn_design}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.tc_text}>By Registering | Agree To T & C</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1,
        backgroundColor: '#14143C',
    },
    content: {
        // backgroundColor: "white",
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FD6A43',
        marginHorizontal: 21,
        marginTop: 41
    },
    logo: {
        alignSelf: 'center',
        marginTop: 95
    },
    text: {
        color: 'white',
        fontSize: 17,
        marginHorizontal: 21,
        // backgroundColor: 'green',
        marginTop: 85
    },
    contain: {
        height: height * 0.065,
        width: width * 0.90,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 21,
        borderRadius: 9,

    },
    img: {
        width: width * 0.20,
        borderRightWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    txtinput: {
        width: width * 0.80,
        padding: 22,
    },
    button: {
        backgroundColor: '#FD6A43',
        width: "35%",
        marginTop: 250,
        marginHorizontal: height * 0.16
    },
    btn_design: {
        color: "white",
        fontSize: 23,
        alignSelf: 'center'
    },
    tc_text: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
        marginTop: 30
    }
});