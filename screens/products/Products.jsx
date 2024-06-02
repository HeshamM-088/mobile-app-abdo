import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "@react-navigation/native";

const Products = () => {
  const navigate = useNavigation();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const users = await res.json();
    setProducts(users);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View>
      <Text className="text-center ">Products</Text>
      {products.map(({ id, name }) => (
        <View key={id} className="flex justify-center items-center">
          <Text>{name}</Text>
          {/* <Link
            className="text-[40px] text-blue-600"
            to={{ screen: "Single Product", params: { id } }}
          >
            {id}
          </Link> */}
          <Button
            title={name}
            onPress={() =>
              navigate.navigate("Single Product", {
                id,
              })
            }
          />
        </View>
      ))}
      <Button title="go to Home" onPress={() => navigate.navigate("Home")} />
    </View>
  );
};

export default Products;
