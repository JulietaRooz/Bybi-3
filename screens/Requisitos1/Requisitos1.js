import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import styles from "./styles";

function Requisitos1(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onPressLogin = () => {};

  return (
    <View style={styles.container}>
      <Image
        style={styles.superior}
        source={require("../../assets/cabeza.png")}
      />

      <TouchableOpacity style={styles.gotit}>
        <Text style={styles.already}>Requisitos de seguridad </Text>
      </TouchableOpacity>


      <Image
          style={styles.casco}
          source={require("../../assets/casco.png")}
        />

      <View style={styles.buttoncontainer}>
      

        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.navigation.navigate("Requisitos1")}
        >
          <Text style={styles.textbutton}>Continuar</Text>
        </TouchableOpacity>
      </View>

      <Image
        style={styles.inferior}
        source={require("../../assets/BannerInferior.png")}
      />
    </View>
  );
}

export default Requisitos1;
