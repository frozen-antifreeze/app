import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import DetailPage from "../components/DetailPage";
import { style } from "./styles";

const Details = ({ route, navigation }: any) => {
  // console.log(route.params);
  const plant = route.params;
  console.log(plant.name);
  useLayoutEffect(() => {
    navigation.setOptions({title: plant.name});
  
    // return () => {
      
    // };
  }, [])
  

  return (
    <View style={{flex:1}}>
      <DetailPage {...plant} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
