import QRCode from "react-qr-code";
import React, {useState} from 'react';
import { View, Text, TextInput,Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native';




function CreateQR() {


//codigazo QR,  value = dato a encriptar, tqm
  return (
    <div className="CreateQR">
      <header className="App-header"> 
        <QRCode value="Hola Mundo" size={256} bgColor="#282c34" fgColor="#fff" level="H" />
      </header>
    </div>
  );
}

export default CreateQR;
