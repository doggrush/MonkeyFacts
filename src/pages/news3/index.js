import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function News3() {
  return (
   <View>
    <Text style={styles.title}>
    O chimpanzé está listado como um animal em extinção
    </Text>
    <Text style={styles.articleText}>
    O primata está listado como "em perigo", de acordo com as diretrizes da Lista Vermelha de Espécies Ameaçadas da União Internacional para a Conservação da Natureza (IUCN, na sigla em inglês). 

Apesar de ser um dos macacos mais abundantes na África, tem sido registrada uma taxa constante de declínio da sua população nas últimas duas décadas. 

As principais ameaças são a exploração madeireira nas áreas tropicais onde os macacos vivem, a caça ilegal para obtenção de carne e a disseminação de doenças infecciosas, como o ebola. Os chimpanzés são tão parecidos com os humanos que sucumbem a muitas doenças que afligem o homo sapiens, explica a IUCN. 
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