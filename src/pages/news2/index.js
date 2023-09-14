import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function News2() {
  return (
   <View>
   <Text style={styles.title}>
   Os laços sociais entre os chimpanzés duram a vida inteira
   </Text>
   <Text style={styles.articleText}>
   Como outros mamíferos, as fêmeas desempenham o papel mais importante na criação de seus filhotes, de acordo com o banco de dados ADW. No caso dos adultos machos, o cuidado com os filhotes é indireto: patrulhando à noite, protegendo a família de perigos na selva e fornecendo alimentos.
   Os laços entre os chimpanzés jovens e a mãe duram a vida toda, mesmo após a "independência" (situações na qual o animal deixa a família para viver com uma nova comunidade de chimpanzés).
   Os chimpanzés são animais que conseguem distinguir rostos mesmo depois de anos sem encontrá-los. 
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