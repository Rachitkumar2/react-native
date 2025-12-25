import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* category card */}

      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
