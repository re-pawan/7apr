
import { StyleSheet, SafeAreaView,ScrollView, TouchableOpacity, Dimensions, Image, Text, View } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window');
const Invest = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity>
                        <Image
                            style={{marginHorizontal:height*0.025}}
                            source={require('../image/arrow.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.heading}>
                        <Text style={{fontSize:25,fontWeight:'bold'}}>My Investments</Text>
                    </View>
                </View>
                <ScrollView>
                <View style={styles.wrap}>
                    <View>
                        <Image style={styles.image}
                         source={require('../image/insurance.png')}
                        />
                    </View>
                    <View style={styles.txt}>
                        <Text style={{fontSize: 18, marginHorizontal:12,fontWeight: 'bold',}}>Life Insurance Policy</Text>
                        <Text style={styles.txt_design}>Units: 4 Unit / USD 3000</Text>
                        <Text style={styles.txt_style}>Date: 24-April-2021</Text>
                    </View>
                </View>
                <View style={styles.wrap}>
                    <View>
                        <Image style={styles.image}
                         source={require('../image/insurance.png')}
                        />
                    </View>
                    <View style={styles.txt}>
                        <Text style={{fontSize: 18, marginHorizontal:12,fontWeight: 'bold',}}>Life Insurance Policy</Text>
                        <Text style={styles.txt_design}>Units: 4 Unit / USD 3000</Text>
                        <Text style={styles.txt_style}>Date: 24-April-2021</Text>
                    </View>
                </View>
                <View style={styles.wrap}>
                    <View>
                        <Image style={styles.image}
                         source={require('../image/insurance.png')}
                        />
                    </View>
                    <View style={styles.txt}>
                        <Text style={{fontSize: 18, marginHorizontal:12,fontWeight: 'bold',}}>Life Insurance Policy</Text>
                        <Text style={styles.txt_design}>Units: 4 Unit / USD 3000</Text>
                        <Text style={styles.txt_style}>Date: 24-April-2021</Text>
                    </View>
                </View>
                <View style={styles.wrap}>
                    <View>
                        <Image style={styles.image}
                         source={require('../image/insurance.png')}
                        />
                    </View>
                    <View style={styles.txt}>
                        <Text style={{fontSize: 18, marginHorizontal:12,fontWeight: 'bold',}}>Life Insurance Policy</Text>
                        <Text style={styles.txt_design}>Units: 4 Unit / USD 3000</Text>
                        <Text style={styles.txt_style}>Date: 24-April-2021</Text>
                    </View>
                </View>
                <View style={styles.wrap}>
                    <View>
                        <Image style={styles.image}
                         source={require('../image/insurance.png')}
                        />
                    </View>
                    <View style={styles.txt}>
                        <Text style={{fontSize: 18, marginHorizontal:12,fontWeight: 'bold',}}>Life Insurance Policy</Text>
                        <Text style={styles.txt_design}>Units: 4 Unit / USD 3000</Text>
                        <Text style={styles.txt_style}>Date: 24-April-2021</Text>
                    </View>
                </View>
                <View style={styles.wrap}>
                    <View>
                        <Image style={styles.image}
                         source={require('../image/insurance.png')}
                        />
                    </View>
                    <View style={styles.txt}>
                        <Text style={{fontSize: 18, marginHorizontal:12,fontWeight: 'bold',}}>Life Insurance Policy</Text>
                        <Text style={styles.txt_design}>Units: 4 Unit / USD 3000</Text>
                        <Text style={styles.txt_style}>Date: 24-April-2021</Text>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Invest;

const styles = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1,
         backgroundColor: 'white'
    },
    content:{
        // backgroundColor:'grey',
        flexDirection:'row',
        marginTop:19
    },
    heading:{
        justifyContent:'center',
        marginHorizontal:17
    },
    wrap:{
        width:width*0.88,
        alignSelf:'center',
        backgroundColor:'#f2f2f0',
        flexDirection:'row',
        marginTop:25,
        borderRadius: 16  
    },
    image:{
        height:140,
        width:140, 
        borderTopLeftRadius:12,
        borderBottomLeftRadius:12,
    },
    txt: {
        width:width*0.55,
        // backgroundColor: 'red'
    },
    txt_design:{
        fontSize:14, 
        color:'grey',
        marginHorizontal:12,
        marginTop:21
    },
    txt_style:{
      fontSize: 14,
      color:'grey',
      marginHorizontal:12,
      marginTop:50 
    }
});