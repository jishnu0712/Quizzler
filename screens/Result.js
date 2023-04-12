import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={require("./hi.png")}
          style={styles.banner}
          resizeMode='contain'
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}><Text>Home</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container: { 
      height: '100%',
      padding: 12,
  },
  bottom: {
      paddingBottom: 12,
  },
  banner: {
      height: 300,
      width: 300,
  },
  bannerContainer: {
      justifyContent: "center",
      alignItems: "center",
  }
});