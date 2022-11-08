import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./lib/styles";

export const Contato = ({  RootNavigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <View style={styles.container}>
            <TextInput 
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={(emailDigitado)=> setEmail(emailDigitado)}
        />
        <TextInput
        label="Senha"
        mode="outlined"
        value={password}
        onChangeText={(valor) => setPassword(valor)}
        secureTextEntry={true}
        />
        <Button
        style={styles.button}
        mode="outlined"
        label="Entrar"
        onPress={()=> navigation.navigate("Home")}
        >
        </Button>
        </View>
    );
};
  