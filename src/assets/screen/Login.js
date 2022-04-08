import { View, Text, SafeAreaView,TextInput, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
const Login = () => {
    
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View>
                    <TouchableOpacity>
                        <Image style={styles.arrow} source={require('../image/arrow.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={styles.photo} source={require('../image/photographer.png')}
                    />
                </View>
                <View style={styles.header_name}>
                    <Text style={styles.header_text}>Full Name</Text>
                </View>
                <View style={styles.textinput}>
                    <TextInput
                        placeholder="Mohd Umair Siddique | "
                        placeholderTextColor={'grey'}
                        keyboardType="default"
                    />
                </View>

                <View style={styles.header_name}>
                    <Text style={styles.header_text}>Email ID</Text>
                </View>
                <View style={styles.textinput}>
                    <TextInput
                        placeholder="de-umaie@mobiloitte.com |"
                        placeholderTextColor={'grey'}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.header_name}>
                    <Text style={styles.header_text}>Phone Number</Text>
                </View>
                <View style={styles.contain}>
                    <View style={styles.img}>
                        <Image
                        style={{height:40,width:35}}
                        source={require('../image/flag.png')}
                        />
                     <Text style={styles.num}>+91</Text>
                    </View>
                    <View style={styles.txtinput}>
                     <TextInput
                     style={{fontSize:15}}
                      placeholder='Mobile Number'
                      placeholderTextColor={'grey'}
                      keyboardType="numeric"
                     />
                    </View>
                 
                </View>
                <View style={styles.savebtn}>
                    <TouchableOpacity>
                      <Text style={styles.save_design}>Save</Text>
                    </TouchableOpacity>
                    </View>
            </SafeAreaView>
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1,
        //backgroundColor: 'yellow'
    },
    arrow: {
        //backgroundColor: 'green',
        marginHorizontal: 20,
        marginTop: 30,
    },
    photo: {
       // backgroundColor: 'red',
        marginTop: 40,
        alignSelf: 'center'
    },
    header_name: {
        //backgroundColor: 'red',
        marginTop: 30,
        marginHorizontal: height * 0.03
    },
    header_text: {
        fontWeight: 'bold',
        fontSize: 17
    },
    textinput: {
        backgroundColor: 'lightgrey',
        marginTop: 10,
        borderRadius: 9,
        height: height * 0.065,
        width: "88%",
        padding: 22,
        marginHorizontal: height * 0.03

    },
    contain: {
        height:height*0.065,
        width:width*0.87,
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop:10,
        borderRadius:9,
    
    },
    img: {
        width:width*0.20,
        borderRightWidth: 1,
        borderColor: 'white',
        flexDirection:'row',
        alignItems:'center',
        padding:5
    },
    num:{
     marginHorizontal:8,
     fontSize:17
    },
    txtinput: {
        width:width*0.68,
        padding:22,
    },
    save_design:{
        fontSize:21,
        fontWeight:'bold',
        color:'white'
    },
    savebtn:{
        backgroundColor:"#71DECF",
        marginTop:60,
        alignItems:'center',
        height:height*0.065,
        padding:17,
        width:'87%',
        marginHorizontal:28,
        borderRadius:25
    }
   
});