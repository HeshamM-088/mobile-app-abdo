import { View, Text, Button, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";

const Home = () => {
  const navigate = useNavigation();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);

  return (
    <View className="bg-black dark:bg-white">
      <Text className="text-left text-3xl text-orange-600 dark:text-blue-700">
        Home
      </Text>

      <Button
        title="go to about"
        onPress={() => navigate.navigate("Welcome About")}
      />
      <Button
        title="go to products"
        onPress={() => navigate.navigate("Products")}
      />

      <Button
        title={colorScheme == "dark" ? "dark" : "light"}
        onPress={() => toggleColorScheme()}
      ></Button>
    </View>
  );
};

export default Home;
