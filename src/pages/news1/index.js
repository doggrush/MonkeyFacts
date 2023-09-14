import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function News1() {
  return (
   <View>
    <Text style={styles.title}>
            Eles podem se comunicar em linguagem de sinais
    </Text>
    <Text style={styles.articleText}>
    Os chimpanzés são animais que conseguem armazenar memórias por um longo período, por isso são capazes de aprender a linguagem de sinais e se comunicar. 
    Esses primatas têm tanta memória que, de acordo com o ADW, eles se lembram do sinal de identificação de cada indivíduo mesmo depois de um longo período sem se verem. Isso desempenha um papel crucial na formação das sociedades de chimpanzés, pois eles são animais muito sentimentais. 
    O primata é capaz de aprender uma série de sinais para responder a perguntas de forma confiável e repetitiva, e até mesmo para tomar decisões e demonstrar afeto. Assim, o chimpanzé pode distinguir uma chave inglesa de uma banana, entender o que pode ou não comer ou definir a aparência de um vegetal. 
    </Text>
    </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingTop: 100,
        paddingHorizontal: 35,
        textAlign: "center",
        fontWeight: "bold",
    },
    articleText: {
        fontSize: 14,
        paddingTop: 15,
        paddingHorizontal: 20,
        textAlign: "justify",
        color: '#7d7d7d'
    }
})