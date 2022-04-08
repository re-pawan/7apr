import { StyleSheet, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window')
const Withdraw = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.arrow}>
                        <TouchableOpacity>
                        <Image
                            source={require('../image/arrowleft.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.heading}>
                        <Text
                            style={{ color: 'white', fontSize: 21, }}>Withdraw Money</Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={{ height: 280, width: 415, resizeMode: 'cover' }}
                        source={require('../image/image1.png')}
                    />
                </View>
                <View style={styles.content_two}>
                    <View style={styles.text1}>
                        <Text>Withdrawable Balance:</Text>
                    </View>
                    <View style={styles.text2}>
                        <Text>500.00 $</Text>
                    </View>
                    <View style={styles.circled_img}>
                        <Image style={{ height: 25, width: 25, }}
                            source={require('../image/circled-i.png')}
                        />
                    </View>
                </View>
                <View style={styles.textinput}>
                    <TextInput
                        style={{ height: 60 }}
                        keyboardType="default"
                    />
                </View>
                <View style={styles.text3}>
                    <Text>Choose Your Wallet</Text>
                </View>
                <View style={styles.textinput}>
                    <TextInput
                        style={{ height: 60 }}
                        keyboardType="default"
                    />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.btn_design}>Withdraw</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Withdraw;

const styles = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1,
        backgroundColor: 'lightgrey'
    },
    content: {
        backgroundColor: '#041C98',
        flexDirection: 'row',
        height:height*0.1
    },
    arrow: {
        justifyContent: 'center',
        marginHorizontal: 25
    },
    heading: {
        alignSelf: 'center'
    },
    content_two: {
        flexDirection: 'row',
    },
    text1: {
        //  backgroundColor:'red',
        marginTop: 35,
        marginHorizontal: 29
    },
    text2: {
        marginTop: 35
    },
    circled_img: {
        marginTop: 30,
        marginHorizontal:85
    },
    textinput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 13,
        width: '90%',
        marginHorizontal: height * 0.033,
        marginTop: 10
    },
    text3: {
        marginTop: 20,
        marginHorizontal: 35
    },
    button: {
        backgroundColor: "#041C98",
        marginTop: 95,
        alignItems: 'center',
        height: height * 0.07,
        padding: 20,
        width: '67%',
        marginHorizontal: height * 0.09,
        borderRadius: 25
    },
    btn_design: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    }
});