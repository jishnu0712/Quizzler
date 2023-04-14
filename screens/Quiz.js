import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { React, useEffect, useState } from 'react'
import externalStyles from './styles'

const Quiz = ({ navigation }) => {
  const url = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
  const [question, setQuestion] = useState("")
  const [qno, setQno] = useState(0)
  const [answers, setAnswers] = useState([])

  const getQuiz = async () => {
    const res = await fetch(url)
    const data = await res.json()
    console.log((data['results'][qno]["incorrect_answers"]))
    setAnswers([...data['results'][qno]["incorrect_answers"], data['results'][qno]["correct_answer"]])
    setQuestion(decodeURIComponent(data['results'][qno]['question']))
  }

  useEffect(() => {
    getQuiz()
  }, [])

  const handleNextClick = () => {
    if (qno !== 9) {
      setQno(prev => prev + 1)
      getQuiz()
    }
  }
  return (
    <View style={styles.container}>
      {question && <View style={{ height: "100%" }}>
        <View style={styles.top}>
          <Text style={styles.question}>{question}</Text>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.optionButton}><Text style={styles.option}>{decodeURIComponent(answers[0])}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}><Text style={styles.option}>{decodeURIComponent(answers[1])}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}><Text style={styles.option}>{decodeURIComponent(answers[2])}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}><Text style={styles.option}>{decodeURIComponent(answers[3])}</Text></TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          {(qno === 9) ? <TouchableOpacity style={{ ...externalStyles.button, width: "25%" }} onPress={() => navigation.navigate('Result')}><Text style={externalStyles.buttonText}>END</Text></TouchableOpacity> : <TouchableOpacity style={{ ...externalStyles.button, width: "25%" }} onPress={() => handleNextClick()}><Text style={externalStyles.buttonText}>SKIP</Text></TouchableOpacity>}

          {/* <TouchableOpacity style={{ ...externalStyles.button, width: "25%" }} onPress={() => navigation.navigate('Result')}><Text style={externalStyles.buttonText}>SKIP</Text></TouchableOpacity> */}
        </View>
      </View>}
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