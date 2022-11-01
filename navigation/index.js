import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../src/screens/Home";

// const Stack = createNativeStackNavigator();
const MENav = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <MENav.Navigator activecolor="purple">
      <MENav.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <MENav.Screen
        component={Contato}
        name="Contato"
        options={{
          tabBarLabel: "Contato",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contato" color={color} size={26} />
          ),
        }}
      /> */}
    </MENav.Navigator>
  );
};

export default RootNavigation; /* <== PRESTA ATENCAO */
