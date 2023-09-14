import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
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
      <TouchableOpacity style={styles.news} onPress={()=> navigation.navigate('News1')}>
      <Text style={styles.newstittle}>Eles podem se comunicar em linguagem de sinais</Text>
        <Text style={styles.newstopic}>
        Os chimpanzés são animais que conseguem armazenar memórias por um longo período, por isso são capazes de aprender a linguagem de sinais e se comunicar. Esses primatas têm tanta memória que, de acordo com o ADW, eles se lembram do sinal de identificação de cada indivíduo mesmo depois de um longo período sem se verem...
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.news} onPress={()=> navigation.navigate('News2')}>
      <Text style={styles.newstittle}>Os laços sociais entre os chimpanzés duram a vida inteira</Text>
        <Text style={styles.newstopic}>
        Como outros mamíferos, as fêmeas desempenham o papel mais importante na criação de seus filhotes, de acordo com o banco de dados ADW. No caso dos adultos machos, o cuidado com os filhotes é indireto: patrulhando à noite, protegendo a família de perigos na selva e fornecendo alimentos.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.news} onPress={()=> navigation.navigate('News3')}>
      <Text style={styles.newstittle}>O chimpanzé está listado como um animal em extinção</Text>
        <Text style={styles.newstopic}>
        O primata está listado como "em perigo", de acordo com as diretrizes da Lista Vermelha de Espécies Ameaçadas da União Internacional para a Conservação da Natureza (IUCN, na sigla em inglês). 
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
    paddingStart: '30%'
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
    marginTop: 0,
    marginBottom: 5,
    textAlign: 'justify'
  }
})