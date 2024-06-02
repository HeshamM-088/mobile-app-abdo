import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

const SingleProduct = ({
  route: {
    params: { id },
  },
}) => {
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const users = await res.json();
    setProduct(users);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      <Text>SingleProduct</Text>

      <Text>{product?.name}</Text>
    </View>
  );
};

export default SingleProduct;
