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

import {styles} from './../styles'
import Saludo2 from './Saludo2'
export default class Saludo extends Component{

	state = {
		'username' : '',
		'password' : '',
		'muestro' : false
	};

	constructor(props){
		super(props);
	}

 	validarDatos = () => {
 		if (this.state.username == '' || this.state.password ==''){
 			ToastAndroid.show("usuario o contraseña vacios", ToastAndroid.SHORT);  		
 			Vibration.vibrate([5,700]);
 		}else{
 			this.setState({muestro: true});
 			//keyboardType={'phone-pad'} poner teclado para numeros
 		}
      
     	
    }



	render(){ // se ejecuta cada que cambia el valor de un state
//		let mensaje = 'Pruebas';
	if (this.state.muestro){
		return(
			<View>
				<Saludo2/>
			</View>
			)
	}
		return(			
		<View>	

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
              ref="1"
              placeholder="Username" 
              onChangeText={(username) => this.setState({username})}
              returKeyType="{next}" 
              keyboardType={'phone-pad'}
              onSubmitEditing = {()=> this.refs[2].focus()}
            />
          </View>

         <View style={styles.inputWrap}>
            <TextInput 
              ref="2"
              placeholder="Password" 
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
              returKeyType="done"
              onSubmitEditing = {this.validarDatos}
            />
          </View>    

          
            <Button
              onPress={this.validarDatos}
              style ={styles.instructions}
              title={"Iniciar sesion"}  
              color ='#FF0000'          
            />
          
		</View>
			)
	}

}
