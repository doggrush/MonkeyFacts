import React from 'react'
import {
    View,
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity,
    StatusBar
   } from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome(){
  const navigation = useNavigation()
  return(
    <View style={styles.container} >
      <View style={styles.containerLogo}>
        <Animatable.Image 
          animation='flipInY'
          source={require('../../assets/monkey.gif')}
          style= {{ width: '100%' }}
          resizeMode='contain'
        />
      </View>
      <StatusBar translucent backgroundColor="transparent" />  
      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>FatosMacacos</Text>
        <Text style={styles.text}>Faça Login</Text>

        <TouchableOpacity 
          style={ styles.button}
          onPress={ () => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42aaf5'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#42aaf5',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#42aaf5',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})