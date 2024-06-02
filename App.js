// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import Products from "./screens/products/Products";
import SingleProduct from "./screens/products/SingleProduct";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTintColor: "black",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome About" component={About} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Single Product" component={SingleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
