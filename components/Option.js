import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Option = ({ text }) => {
  return (
    <View>
      <Text style={styles.option}>{decodeURIComponent(text)}</Text>
    </View>
  )
}

export default Option

const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
  },
})