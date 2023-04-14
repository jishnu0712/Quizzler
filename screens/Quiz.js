import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import externalStyles from './styles'

const Quiz = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. Imagine this is a cool Question.</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.option}>Cool option 1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.option}>Cool option 2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.option}>Cool option 3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.option}>Cool option 4</Text></TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={{ ...externalStyles.button, width: "25%" }} onPress={() => navigation.navigate('Result')}><Text style={externalStyles.buttonText}>SKIP</Text></TouchableOpacity>
      </View>
    </View>

  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  top: { marginVertical: 16 },
  question: {
    fontSize: 28,
    fontWeight: "bold"
  },
  option: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
  },
  options: { marginVertical: 16, flex: 1 },
  optionButton: {
    marginVertical: 12,
    backgroundColor: "#283d3b",
    color: "white",
    padding: 16,
    borderRadius: 12,
  },
  bottom: { marginBottom: 12, paddingVertical: 16, justifyContent: "space-between", flexDirection: 'row' },
  button: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 16
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
})