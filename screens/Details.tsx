import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import DetailPage from "./DetailPage";

const Details = ({ route, navigation }: any) => {
  // console.log(route.params);
  const plant = route.params;
  // console.log(plant);

  return (
    <View>
      <DetailPage {...plant} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
