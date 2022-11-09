import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexBasis: "50px",
    width: "200px",
    height: "100px",
    backgroundColor: "white",
  },
  texto_sobre: {
    textAlign: "center",
    margin: 24,
    fontSize: "20px",
  },
  texto: {
    textAlign: "center",
    margin: 5,
    fontSize: "25px",
    fontWeight: "bold",
  },
  cima: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    // widht: '400',
    // height: '300',
    maxWidth: "100%",
    height: "auto",
    minWidth: "200px",
    minHeight: "200px",
  },
  texto_prod: {
    textAlign: "center",
    margin: 24,
    fontSize: "30px",
    fontWeight: "bold",
  },
  text_tipo: {
    textAlign: "left",
    margin: 30,
    fontSize: "25px",
  },
  text_site: {
    textAlign: "center",
    margin: 30,
    fontSize: "20px",
  },
  texto_not: {
    textAlign: "center",
    fontSize: 30,
    margin: "40px",
  },
});
