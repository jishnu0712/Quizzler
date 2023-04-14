import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    top: {
        flex: 1,
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
        flex: 1,
    },
    button: {
        width: "100%",
        backgroundColor: "#283d3b",
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 16
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "600",
        color: "#edddd4",
    },
});

export default styles
