import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { style } from "../screens/styles";
import color from "../screens/color";
import { Clock, Location } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { status } from "../screens/status";

const icon_size = 18;

const Card = (props: any) => {
  const navigation = useNavigation<any>();
  // const status = (abbr: any) => {
  //   switch (abbr) {
  //     case "LC":
  //       return require("../assets/status/LC.png");

  //     case "NT":
  //       return require("../assets/status/NT.png");

  //     case "VU":
  //       return require("../assets/status/VU.png");

  //     case "EN":
  //       return require("../assets/status/EN.png");

  //     case "CR":
  //       return require("../assets/status/CR.png");

  //     case "EW":
  //       return require("../assets/status/EW.png");

  //     case "EX":
  //       return require("../assets/status/EX.png");

  //     default:
  //       break;
  //   }
  // };

  return (
    <View>
      <TouchableOpacity
        style={[
          style.rowContainer,
          { backgroundColor: color.gray, height: 80, margin: 10 },
        ]}
        // TODO: do the navigate thing from here to Details screen and were quite done

        // time for the nav babeee how did i fall asleep before this
        onPress={() =>
          navigation.navigate("Details", {
            ...props,
          })
        }
      >
        <Image
          style={{
            height: 60,
            width: 60,
            borderRadius: 8,
            alignContent: "center",
            marginRight: 8,
            marginLeft: 55,
          }}
          source={props.source}
        />

        <View>
          <View
            style={[
              style.rowDirection,
              {
                width: 250,
                paddingHorizontal: 8,
                // borderWidth: 1,
              },
            ]}
          >
            <Text style={ts.title}>{props.name}</Text>

            <Image
              style={[
                ts.statusIcon,
                {
                  // alignItems: "flex-end",
                  // justifyContent: "space-between",
                  // alignContent: "flex-end",
                  // marginHorizontal:8,
                  alignSelf: "center",
                  // borderWidth: 1,
                },
              ]}
              // source={require(`../assets/status/${props.status}}.png`)}
              source={status(props.status)}
            />
          </View>

          <View style={[style.rowContainer, ts.rc]}>
            <Location size={icon_size} style={ts.icon} color={color.gray8} />
            <Text style={ts.body}>{props.origin}</Text>
          </View>

          <View style={[style.rowContainer, ts.rc]}>
            <Clock size={icon_size} style={ts.icon} color={color.gray8} />
            <Text style={ts.body}>
              {props.avg_age}
              {props.age_unit}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

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
