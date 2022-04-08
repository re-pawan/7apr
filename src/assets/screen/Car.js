
import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, Flatlist, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');


const Car = () => {
  return (
    
      <View style={styles.maincontainer}>
        <SafeAreaView>
        <View style={styles.content}>
          <TouchableOpacity>
            <Image style={{marginHorizontal:12}}
              source={require('../image/arrow.png')}
            />
          </TouchableOpacity>
          <View style={styles.designcar}>
            <Text style={styles.txtcar}>Car Insurance</Text>
          </View>

        </View>
        <View style={styles.image}>
          <Image 
            style={{height:height*0.29,width:width*0.95}}
            source={require('../image/logo1.png')}
          />
        </View>
        <View style={styles.content2}>
          <View>
            <Text style={styles.policytext}>Policy details</Text>
            <Text style={{ color: 'grey' }}>Units: 4 Unit / USD 3000</Text>
          </View>
          <View>
            <Text style={styles.date}>Date: 24-April-2021</Text>
          </View>
        </View>
        <View style={styles.content3}>
          <View>
            <View>
              <TouchableOpacity>
              <Text style={styles.wrap}>Price</Text>
              </TouchableOpacity>
            </View>
            
            <View>
            <TouchableOpacity>
              <Text style={styles.wrap}>Minimum Purchase</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
              <Text style={styles.wrap}>Payout frequency</Text>
              </TouchableOpacity>
            </View>
            
            <View>
            <TouchableOpacity>
              <Text style={styles.wrap}>Current Type</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.txtaside}>
            <View>
            <TouchableOpacity>
              <Text style={styles.wrap}>$ 427</Text>
              </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity>
              <Text style={styles.wrap}>2- Units</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
              <Text style={styles.wrap}>Monthly</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
              <Text style={styles.wrap}>USD</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btn}>Buy Now</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      </View>
    
  );
};
export default Car;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
    //backgroundColor: 'yellow',
  },
  content: {
    flexDirection: 'row',
    marginTop: 30
  },
  arrow: {
    marginHorizontal: 20,
    backgroundColor: 'pink'

  },
  txtcar: {
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 50,
    //backgroundColor: 'pink'

  },
  designcar: {
    flex: 1,
    marginTop: 10
  },
  image: {
    //backgroundColor: 'green',
    marginHorizontal: 25,
    marginTop: 30,
    alignSelf: 'center',
  },
  content2: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 17

  },
  policytext: {
    fontWeight: 'bold',
    fontSize: 25,
    //backgroundColor: 'green'
  },
  date:{
    color:'grey',
    marginTop: 8,
    marginHorizontal: 75
  },
  content3: {
    flexDirection: 'row',
    //backgroundColor: 'grey',
    marginTop: 15,
    marginHorizontal: 15
  },
  txtaside: {
    marginHorizontal: 145,
  },
  wrap: {
    fontSize: 17,
    marginTop: 10,
  },
  btn: {
    fontWeight: 'bold',
    fontSize: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#71DECF",
    padding: 15,
    borderRadius: 30,
    width: '93%',
    marginHorizontal: height * 0.015,
    marginTop: 140,
  },

});