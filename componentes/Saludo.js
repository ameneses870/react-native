import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ToastAndroid,
  TextInput  ,
  Vibration 
} from 'react-native';
const  mensaje = 'Bienvenido'
export default class Saludo extends Component{
	

 	validarDatos = () => {
    //var a = {this.state.username};
      ToastAndroid.show("la puta   te pario", ToastAndroid.SHORT);  
     Vibration.vibrate();
    }

	constructor(props){
		super(props); 		
		let mensaje = 'Hola Mundo';			
	}

	render(){
//		let mensaje = 'Pruebas';
		return(			
		<View>
			<Text style={styles.instructions}>
          		{mensaje}
        	</Text>

        	    <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

         <View style={styles.inputWrap}>
            <TextInput 
              placeholder="Username" 
              onChangeText={(username) => this.setState({username})}
            />
          </View>

         <View style={styles.inputWrap}>
            <TextInput 
              placeholder="Password" 
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
            />
          </View>    

          <TouchableOpacity activeOpacity={.5} onPress={this.validarDatos}>
            <Button
              onPress={this.validarDatos}
              style ={styles.instructions}
              title={"Iniciar sesion"}  
              color ='#FF0000'          
            />
          </TouchableOpacity>  
		</View>
			)
	}

}
const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: "center",
      justifyContent: "center",
    },  
    input: {
      flex: 1,
      paddingHorizontal: 10,
      color: "#FFFFFF"
    },
    signupLinkText: {
      color: "#FFF",
      marginLeft: 5,
    }

});