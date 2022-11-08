import { Image, StyleSheet, Text, View } from "react-native"
import { Card, Paragraph, Title } from "react-native-paper";

export const Noticias = ({navigation }) => (
    <View>
        <Text style={styles.texto}>Em seu site existe o calendário de eventos que serão realizados pela a empresa, conhecido também como a agenda cultural; as revistas que são da editora curitiba; os projetos da empresa; o contato com a imprensa e a aba para inscrições nos projetos.</Text>
    </View>
)
const styles = StyleSheet.create({
    texto: {
        textAlign: 'center',
        fontSize: 30,
        margin: "40px",
    },
    imagem: {

    }
});
    