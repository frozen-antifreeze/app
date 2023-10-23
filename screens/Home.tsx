import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { SearchBar } from 'react-native-screens'
import { style } from "./styles";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { data } from "./data";

const dataa = [
  {
    name: "",
    icon: "",
    location: "",
    avglifespan: "",
    status: "",
    desc: "",
  },
];

const Home = () => {
  return (
    <View style={[style.container, { justifyContent: "flex-start" }]}>
      <SafeAreaView>
        <SearchBar />
      </SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={(item) => item.name}
        style={{ marginTop: 12 }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
