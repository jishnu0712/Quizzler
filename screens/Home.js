import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Title from '../components/Title';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Title />
                <View style={styles.bannerContainer}>
                    <Image source={require("./hi.png")}
                        style={styles.banner}
                        resizeMode='contain'
                    />
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate("Quiz")}><Text>Start</Text></TouchableOpacity>
            </View>
        </View>
    )
}

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

export default Home;