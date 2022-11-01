import { Button, Text, View } from "react-native";

export const Home = ({ navigation }) => (
  <View>
    <Button
      title="vamos para o contato?"
      onPress={() => navigation.navigate("Contato")}
    ></Button>
    <Button
      title="vamos para a página de produto?"
      onPress={() => navigation.navigate("Produtos")}
    ></Button>
  </View>
);
