import { StyleSheet, Text, View } from "react-native";
import { styles } from "./lib/styles";

export const Produtos = ({ RootNavigation }) => (
  <View  style={styles.container}>
    <Text style={styles.texto_prod}>
      Os produtos ofertados na livraria vão desde livros a eletrônicos!!
    </Text>
    <Text style={styles.text_tipo}>
      Sendo eles: 
      <br />- Livros de todos os estilos;
      <br />- Filmes;
      <br />- Brinquedos;
      <br />- Games/Jogos lúdicos;
      <br />- Papelaria; 
      <br />- Tecnologia e presentes.
    </Text>
    <Text style={styles.text_site}>No site, também é mostrado aos clientes os livros que estão em lançamentos, os mais vendidos e comentados nas redes sociais, os produtos que possuem descontos e entre outros.</Text>
  </View>
);

