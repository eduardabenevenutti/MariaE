import { Home } from "../src/screens/Home";
import * as React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Contato, Login } from "../src/screens/Contato";
import { Sobre } from "../src/screens/Sobre";
import { Produtos } from "../src/screens/Produtos";
import { Noticias } from "../src/screens/Noticias";

// const Stack = createNativeStackNavigator();
const MENav = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <MENav.Navigator>
      <MENav.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon:({color}) =>(
            <MaterialCommunityIcons name="home" color={color} size={26}/>
          )
        }}
      />
      <MENav.Screen
        component={Login}
        name="Contato"
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon:({color}) =>(
            <MaterialCommunityIcons name="phone" color={color} size={26}/>
          )
        }}
      />
      <MENav.Screen
        component={Sobre}
        name="Sobre"
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon:({color}) =>(
            <MaterialCommunityIcons name="bell" color={color} size={26}/>
          )
        }}
      />
      <MENav.Screen
        component={Produtos}
        name="Produtos"
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon:({color}) =>(
            <MaterialCommunityIcons name="book" color={color} size={26}/>
          )
        }}
      />
      <MENav.Screen
        component={Noticias}
        name="Notícias"
        options={{
          tabBarLabel: 'Notícias',
          tabBarIcon:({color}) =>(
            <MaterialCommunityIcons name="account" color={color} size={26}/>
          )
        }}
      />
    </MENav.Navigator>
  );
};

export default RootNavigation; /* <== PRESTA ATENCAO */
