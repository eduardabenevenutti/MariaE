import { Image, StyleSheet, Text, View } from "react-native"
import { Card, Paragraph, Title } from "react-native-paper";
import { styles } from "./lib/styles";

export const Noticias = ({navigation }) => (
    <View  style={styles.container}>
        <Text style={styles.texto_not}>Em seu site existe o calendário de eventos que serão realizados pela a empresa, conhecido também como a agenda cultural; as revistas que são da editora curitiba; os projetos da empresa; o contato com a imprensa e a aba para inscrições nos projetos.</Text>
    </View>
)

    