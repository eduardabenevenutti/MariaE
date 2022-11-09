import { Button, Image, StyleSheet, Text, View } from "react-native";
import img from "./lib/img/imagem";
import { styles } from "./lib/styles";
export const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.cima}>
      <Image
        source={{
          uri: img, //"https://o.remove.bg/downloads/eee50055-e089-4275-8d5d-3fea18cdcbc2/download__1_-removebg-preview.png",
        }}
        style={styles.imagem}
        resizeMode="contain"
      ></Image>
    </View>
    <Text style={styles.texto}>
      Boas-vindas ao site da Livrarias Curitibas!
    </Text>
  </View>
);
