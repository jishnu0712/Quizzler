import { View, Text, TouchableOpacity, Image } from 'react-native'
import Title from '../components/Title';
import styles from './styles';


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Title titleText="Quizzler"/>
                <View style={[styles.bannerContainer, {flex: 1}]}>
                    <Image 
                        // source={require("./hi.png")}
                        source={{uri: "https://img.freepik.com/free-vector/curiosity-people-concept-illustration_114360-11034.jpg?size=626&ext=jpg"}}
                        style={styles.banner}
                        resizeMode='contain'
                    />
                </View>
            </View>

            <View style={[styles.bottom, {flex: 0}]}>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate("Quiz")}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;