import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
    },
    inputcontainer: {
        marginTop: "20%",
        width: "80%",
    },
    titlecontainer: {
        height: "20%",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    inputs: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#B8D9DE",
        
    },
    button: {
        backgroundColor: "lightblue",
        marginTop: "5%",
        height: 40,
        width: "50%",
        borderRadius: 20,
        justifyContent: "center",
        borderWidth: 5,
        borderColor: "#D0E9FA",
        
    },
    textbutton: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: "#333D39"
    },
    gotit: {
        marginTop: "5%",
    },
    already: {
        textDecorationLine: "underline"
    }
})

export default styles