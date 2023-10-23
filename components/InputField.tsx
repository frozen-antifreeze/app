import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import { style } from "../screens/styles";
interface PropsData extends TextInputProps {
  title: string;
}

const InputField = (props: PropsData) => {
  return (
    <View
      style={{
        alignItems: "flex-start",
        width: 343,
        // borderWidth: 1,
        borderColor: "#000",
        margin:8
      }}
    >
      <Text style={{fontSize: 12, marginBottom:4, color:'#aaa', fontWeight:'600'
      }}>{props.title}</Text>
      <TextInput style={props.title ? style.inputBox : style.inputBox2} {...props} />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
