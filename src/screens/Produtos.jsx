import { StyleSheet, Text, View } from "react-native";

export const Produtos = ({ RootNavigation }) => (
  <View>
    <Text style={styles.texto}>
      Os produtos ofertados na livraria vão desde livros a eletrônicos!!
    </Text>
    <Text style={styles.text1}>
      Sendo eles: 
      <br />- Livros de todos os estilos;
      <br />- Filmes;
      <br />- Brinquedos;
      <br />- Games/Jogos lúdicos;
      <br />- Papelaria; 
      <br />- Tecnologia e presentes.
    </Text>
    <Text style={styles.text2}>No site, também é mostrado aos clientes os livros que estão em lançamentos, os mais vendidos e comentados nas redes sociais, os produtos que possuem descontos e entre outros.</Text>
  </View>
);
const styles = StyleSheet.create({
  texto: {
    textAlign: "center",
    margin: 24,
    fontSize: "30px",
    fontWeight: "bold",
  },
  text1: {
    textAlign: "left",
    margin: 30,
    fontSize: "25px",
  },
  text2: {
    textAlign: "center",
    margin: 30,
    fontSize: "20px",
  }
});
