import { StyleSheet, Image, Text, View } from "react-native";

import React from "react";
import { style } from "./styles";
import color from "./color";

const icon_size = 18;

const DetailPage = (props: any) => {
  return (
    <View style={style.container}>
      <Text>
        {props.name}
      </Text>
      <Image source={props.source} />
    </View>
  );
};

export default DetailPage;

const ts = StyleSheet.create({
  title: {
    fontSize: 16,
    color: color.primary,
    fontWeight: "bold",
    // paddingLeft: 8,
    // textAlign:'right'
  },
  scientific: {
    fontSize: 8,
    color: color.gray3,
    fontStyle: "italic",
  },
  body: {
    fontSize: 14,
    color: color.gray5,
    textAlign: "left",
    justifyContent: "flex-start",
    height: 16,
  },
  icon: {
    alignItems: "center",

    marginRight: 4,
  },
  rc: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 280,
    // height: 8,
    marginTop: 4,
    paddingHorizontal: 8,
    // borderWidth: 1,
  },
  statusIcon: {
    width: icon_size,
    height: icon_size,
    // borderRadius: statusSize / 2,
  },
});
