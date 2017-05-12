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
export default class Saludo2 extends Component{

	state = {
		'username' : '',
		'password' : '',
		'muestro' : false
	};

	constructor(props){
		super(props);
	}




	render(){ // se ejecuta cada que cambia el valor de un state
//		let mensaje = 'Pruebas';

		return(			
		<View>			

        <Text style={styles.instructions}>
          BIENVENIDO
        </Text>

        
          
		</View>
			)
	}

}
