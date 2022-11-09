import { Image, StyleSheet, Text, View } from "react-native";
import { styles } from "./lib/styles";

export const Sobre = ({  RootNavigation }) => (
    <View
    style={styles.container}>
        <Text style={styles.texto_sobre}>O tema escolhido foi a Livrarias Curitibas, ela foi fundada de um sonho do comerciante Valentim Pedri que era um ex-funcionário de uma editora nos anos 50.
        A primeira loja aberta foi em 23/11/1963 na capital paranaense, no início seu comercio era voltado para a venda de livros didáticos para as redes escolares públicas e privadas de sua cidade.
        E somente em 65, Valentim conseguiu abrir sua primeira filial "localizada na grande Florianópolis", com o tempo foi alcançando o reconhecimento que procurará, e atualmente, possui mais de 700 colaboradores fixos e diversas parcerias.</Text>
    </View>
    
);
    