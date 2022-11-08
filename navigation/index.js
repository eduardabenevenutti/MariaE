import { Home } from "../src/screens/Home";
import * as React from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Contato } from "../src/screens/Contato";
import { Sobre } from "../src/screens/Sobre";
import { Produtos } from "../src/screens/Produtos";
import { Noticias } from "../src/screens/Noticias";

// const Stack = createNativeStackNavigator();
const MENav = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <MENav.Navigator 

    tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: 'lightgray',
      activeBackgroundColor: '#c4461c',
      inactiveBackgroundColor: '#b55031',
          style: {
                backgroundColor: '#CE4418',
                paddingBottom: 3
          }
   }}

    >
      <MENav.Screen
        component={Contato}
        name="Contato"
    />
    <MENav.Screen
      component={Sobre}
      name="Sobre"
    />
    <MENav.Screen
    component={Produtos}
    name="Produtos"
    />
    <MENav.Screen
    component={Noticias}
    name="Noticias"
    />
    </MENav.Navigator>
  );
}

export default RootNavigation; /* <== PRESTA ATENCAO */
