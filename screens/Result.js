import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import Title from '../components/Title';

const Result = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title titleText="Result"/>
        <View style={[styles.bannerContainer, { flex: 1 }]}>
          <Image
            // source={require("./hi.png")}
            source={{ uri: "https://img.freepik.com/free-vector/curiosity-people-concept-illustration_114360-11034.jpg?size=626&ext=jpg" }}
            style={styles.banner}
            resizeMode='contain'
          />
        </View>
      </View>

      <View style={[styles.bottom, { flex: 0 }]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}><Text style={styles.buttonText}>Go To Home</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Result
