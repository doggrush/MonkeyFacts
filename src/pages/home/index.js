import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <TouchableOpacity style={styles.news}>
      <Text style={styles.newstittle}>O menor e o maior macaco do mundo!</Text>
        <Text style={styles.newstopic}>
        O menor macaco do mundo vive aqui na Amazônia. O sagui-pigmeu ou sagui-leãozinho, como também é chamado, mede, em média, 15 centímetros, já contando a sua cauda, e pesa apenas 130 gramas. 
        O maior macaco do mundo vive nas florestas africanas. O gorila pode atingir até 2 metros de altura e pesar 230 quilos. Vale ressaltar que os gorilas não possuem cauda.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.news}>
      <Text style={styles.newstittle}>Os laços sociais entre os chimpanzés duram a vida inteira</Text>
        <Text style={styles.newstopic}>
        Como outros mamíferos, as fêmeas desempenham o papel mais importante na criação de seus filhotes, de acordo com o banco de dados ADW. No caso dos adultos machos, o cuidado com os filhotes é indireto: patrulhando à noite, protegendo a família de perigos na selva e fornecendo alimentos.
        </Text>
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
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '25%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  news:{
    marginTop: 20,
    marginBottom: 20,
  },
  newstittle: {
    fontSize: 19,
  },
  newstopic: {
    color: '#a1a1a1',
    marginTop: 5,
    textAlign: 'justify'
  }
})