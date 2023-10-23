import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { style } from "./styles";
import InputField from "../components/InputField";

const data = [
  {
    title: "name",
    placeholder: "name",
    defaultValue: "this is a name",
  },
  {
    title: "age",
    placeholder: "age",
    defaultValue: "3",
  },
  {
    title: "phone number",
    placeholder: "number",
    defaultValue: "0123456789",
  },
];

const Info = () => {
  return (
    <View style={[style.container]}>
      <Image style={style.imageIcon} source={require("../assets/icon.png")} />
      <Text style={{ fontSize: 24, fontWeight:'700' }}>
        {data[0].defaultValue}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <InputField {...item} />}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
