import {StyleSheet} from 'react-native'

//Toca cambiar los porcentajes por "vh" porque pone rara por momentos la ubicación de los elementos

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
    },
    inputcontainer: {
        marginTop: "5%",
        width: "80%",
        
    },

    superior: {
        width: "100%",
        height: "23vh",
 },
  
  
    inputs: {
        height: 30,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#2CDCCC",
        marginTop: "0.4%",
        
    },
    button: {
        backgroundColor: "#3FA9F5",
        marginTop: "5%",
        height: 55,
        width: "40%",
        borderRadius: 20,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#4DFFCC",
        
    },
    textbutton: {
        textAlign: "center",
        fontSize: 20,
        color: "#FFFFFF", 
    },
    accept: {
        width:"80%",
        textAlign: 'center',
        marginTop: 10,
        color: "#A6A6A6",
    },
    gotit: {
        marginTop: "1.5%",
    },
    already: {
        textDecorationLine: "none",
        color: "#A6A6A6", 
    },
    inferior: {
        width: "100%",
        height: "17vh",
        justifyContent: "flex-end",
    }
})

export default styles