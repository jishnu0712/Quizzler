import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import Title from '../components/Title';

const Result = ({ route, navigation }) => {
  const { score } = route.params
  const imageUri = (score > 40) ? "https://cdni.iconscout.com/illustration/premium/thumb/winner-brain-6776757-5604865.png?f=webp"
    : "https://cdni.iconscout.com/illustration/premium/thumb/failure-at-work-8086848-6525233.png?f=webp"

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title titleText="Result" />
        <Title titleText={score} />
        <View style={[styles.bannerContainer, { flex: 1 }]}>
          <Image
            // source={require("./hi.png")}
            source={{ uri: imageUri }}
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
