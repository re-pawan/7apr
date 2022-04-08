import { View,SafeAreaView, StyleSheet,Image,Dimensions,TouchableOpacity,Text } from 'react-native';
import React from 'react';
const {height,width} = Dimensions.get('window')
const Payment = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
          <View>
              <TouchableOpacity>
                 <Image
                  style={{marginTop:17,marginHorizontal:21}}
                  source={require('../image/Arrow4.png')}
                 />
              </TouchableOpacity>
          </View>
          <View>
              <Text style={styles.heading}>Payment Option</Text>
          </View>
          <View style={styles.header}>
              <Text style={{color:'white',fontSize:17}}>Pay with crypto</Text>
          </View>
          <View style={styles.wrap}>
              <View style={styles.bitcoin_img}>
                  <Image 
                   style={{height:height*0.05,width:width*0.1,}}
                   source={require('../image/bitcoin.png')}
                  />
              </View>
              <View style={styles.text_style}>
                  <Text style={{color:'white',fontSize:17}}>Pay with crypto</Text>
              </View>
          </View>
          <View style={styles.header}>
              <Text style={{color:'white',fontSize:17}}>Debit/Credit Card</Text>
          </View>
          <View style={styles.wrap}>
              <View style={styles.bitcoin_img}>
                  <Image 
                   style={{height:height*0.05,width:width*0.1,}}
                   source={require('../image/card.png')}
                  />
              </View>
              <View style={styles.text_style}>
                  <Text style={{color:'white',fontSize:17}}>Add new card</Text>
              </View>
          </View>
      </SafeAreaView>
    </View>
  );
};

export default Payment;
const styles = StyleSheet.create({
    container:{
        height:height*1,
        width:width*1,
        backgroundColor:'#14143C'
    },
    heading:{
        fontSize:21,
        fontWeight:'bold',
        // fontFamily:,
        color:'#FD6A43',
        marginHorizontal:21,
        marginTop:25
    },
    header:{
        marginTop:21,
        marginHorizontal:17,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        padding:7
    },
    wrap:{
        flexDirection:'row'
       
    },
    bitcoin_img:{
        marginTop:21 ,
        marginHorizontal:17,
        backgroundColor:'white',
        width:'12%%',
        height:height*0.06,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
        borderBottomLeftRadius:7,
        borderBottomRightRadius:7
    },
    text_style:{
        justifyContent:'center',
        marginTop:19,
    }
});