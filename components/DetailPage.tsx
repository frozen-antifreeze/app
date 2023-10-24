import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  ImageBackground,
  // StatusBar,
} from "react-native";

import React from "react";
import { style } from "../screens/styles";
import color from "../screens/color";
import { SafeAreaView } from "react-native-safe-area-context";
// import {} from "native-base";

const icon_size = 18;
const height_frame = 233;
const width_frame = 169;

const DetailPage = (props: any) => {
  return (
    <SafeAreaView>
      {/* <Image source={props.source} style={ts.banner} /> */}
      <ImageBackground
        source={props.source}
        style={ts.banner}
        imageStyle={ts.banner_offset}
      >
        <ScrollView style={{ height: "100%" }}>
          <View style={ts.page}>
            <Text style={ts.title}>{props.name} {props.id=='35'&&'(Muồng Kim Phượng)'}{props.id=='27'&&'(Sưa Đỏ)'}</Text>

            <Text style={ts.scientific}>{props.scientific_name}</Text>

            <Text style={ts.body}>Xuất xứ: {props.origin}</Text>

            <Text style={ts.body}>
              Tuổi thọ trung bình: {props.avg_age}{" "}
              {props.age_unit == "y" ? "năm" : "tháng"}
            </Text>

            <Text style={ts.body}>Chi tiết: {props.info}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default DetailPage;

const ts = StyleSheet.create({
  title: {
    fontSize: 32,
    color: color.primary,
    fontWeight: "bold",
    // marginBottom: 4,
    // paddingLeft: 8,
    // textAlign:'right'
  },
  scientific: {
    fontSize: 16,
    color: color.gray3,
    fontStyle: "italic",
    marginBottom: 24,
  },
  body: {
    fontSize: 18,
    color: color.gray5,
    textAlign: "left",
    justifyContent: "flex-start",
    marginBottom: 14,
    lineHeight:24
    // height: 16,
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
  image: {
    width: width_frame,
    height: height_frame,
    borderRadius: 8,

    alignSelf: "flex-end",
  },
  banner: {
    width: "110%",
    height: "110%",
    // paddingTop:20
    // marginTop:20
  },
  banner_offset: {
    top: -300,
    // bottom: 12,
    right: 0,
    left: -80,
    // top:undefined
  },
  page: {
    width: "100%",
    height: "100%",
    marginTop: 400,
    paddingLeft: 40,
    paddingRight: 70,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
});
