import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#1f2240",
        justifyContent: 'center'
    },

    card: {
        backgroundColor: '#1b1c30',
        borderWidth: 0,
        width: '90%',
        maxWidth: 500,
    },

    cardTitle:{
        color: '#ccd0cf', 
        textAlign: 'left',
        fontSize: 24
    },
})

export default loginStyles