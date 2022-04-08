import { StyleSheet, Text, Dimensions, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react';
const { height, width } = Dimensions.get('window');
const Notify = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <View>
            <TouchableOpacity>
              <Image
                style={{ marginHorizontal: height * 0.015 }}
                source={require('../image/arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.heading}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Notifications</Text>
          </View>
        </View>
        <View style={styles.wrap}>
          <Text style={{ fontSize: 17 }}>Lorem ipsum is simply dummy text of the printing and typesetting industry </Text>
          <Text style={styles.text_design}>13/06/2020, 11:25 pm</Text>
        </View>
        <View style={styles.wrap}>
          <Text style={{ fontSize: 17 }}>Lorem ipsum is simply dummy text of the printing and typesetting industry </Text>
          <Text style={styles.text_design}>13/06/2020, 11:25 pm</Text>
        </View>
        <View style={styles.wrap}>
          <Text style={{ fontSize: 17 }}>Lorem ipsum is simply dummy text of the printing and typesetting industry </Text>
          <Text style={styles.text_design}>13/06/2020, 11:25 pm</Text>
        </View>
        <View style={styles.wrap}>
          <Text style={{ fontSize: 17 }}>Lorem ipsum is simply dummy text of the printing and typesetting industry </Text>
          <Text style={styles.text_design}>13/06/2020, 11:25 pm</Text>
        </View>
        <View style={styles.wrap}>
          <Text style={{ fontSize: 17 }}>Lorem ipsum is simply dummy text of the printing and typesetting industry </Text>
          <Text style={styles.text_design}>13/06/2020, 11:25 pm</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.logout}>
            <Text style={{ fontSize: 29, fontWeight: 'bold', }}>Logout</Text>
          </View>
          <View style={styles.sure}>
            <Text style={{ fontSize: 17, }}>Are you sure you want to log out </Text>
            <Text style={{ fontSize: 17, marginHorizontal: 65}}>from the app ?</Text>
          </View>
          <View style={styles.pop}>

            <TouchableOpacity>
              <View style={styles.btn}>
                <Text style={{ color: 'white', fontSize: 21 }}>No</Text>
              </View>
            </TouchableOpacity>
             

            <TouchableOpacity>
            <View style={styles.btn}>
              
                <Text style={{ color: 'white', fontSize: 21 }}>Yes</Text>
              
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Notify

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    backgroundColor: '#9c9b98'
  },
  content: {
    //backgroundColor: 'grey',
    flexDirection: 'row',
    marginTop: 19
  },
  heading: {
    justifyContent: 'center',
    marginHorizontal: 45
  },
  wrap: {
    width: width * 0.95,
    marginHorizontal: height * 0.015,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  text_design: {
    color: 'grey',
    marginTop: 7,
    marginLeft: height * 0.25,
    padding: 6
  },
  footer: {
    backgroundColor: 'white',
    height: height * 0.29,
    width: width * 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  logout: {
    alignSelf: 'center',
    marginTop: 20,
   // backgroundColor: 'red'
  },
  sure: {
    marginTop: 21,
    marginHorizontal: 70,
    // backgroundColor: 'green'
  },
  pop: {
    height:height*0.05,
    width:width*0.74,
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  btn: {
    width:width*0.35,
    // marginHorizontal: 35,
    alignItems: 'center',
    backgroundColor: '#71DECF',
    height:height*0.05,
    borderRadius:20,
    // backgroundColor: 'red',

    justifyContent: 'center',
    // alignItems: 'center'

  },
  
});